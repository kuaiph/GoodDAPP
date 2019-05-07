// @flow
import { isMobile } from 'mobile-device-detect'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import { generateHrefLinks, generateShareObject } from '../../lib/share'
import GDStore from '../../lib/undux/GDStore'
import { useScreenState } from '../appNavigation/stackNavigation'
import { CustomButton } from '../common'
import './AButton.css'

type Props = {
  screenProps: any
}

const ShareButton = ({ screenProps }: Props) => {
  const [hrefLinks, setHrefLinks] = useState([])
  const [screenState] = useScreenState(screenProps)
  const store = GDStore.useStore()

  const { sendLink, to } = screenState

  useEffect(() => {
    if (isMobile && to) setHrefLinks(generateHrefLinks(sendLink, to))
  }, [])

  const share = async () => {
    const share = generateShareObject(sendLink)
    try {
      await navigator.share(share)
    } catch (e) {
      store.set('currentScreen')({
        dialogData: {
          visible: true,
          title: 'Error',
          message:
            'There was a problem triggering share action. You can still copy the link in tapping on "Copy link to clipboard"',
          dismissText: 'Ok'
        }
      })
    }
  }

  const AnchorButton = () => (
    <a href={hrefLinks[0].link} className="a-button" title="Share Link">
      Share Link
    </a>
  )

  const ShareCustomButton = () => (
    <CustomButton style={styles.buttonStyle} onPress={share} mode="contained">
      Share Link
    </CustomButton>
  )

  return !isMobile ? null : hrefLinks.length === 1 ? <AnchorButton /> : <ShareCustomButton />
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: '1em'
  }
})

export default ShareButton
