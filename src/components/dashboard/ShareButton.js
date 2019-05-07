// @flow
import React from 'react'
import { Share, StyleSheet } from 'react-native'
import { generateShareObject } from '../../lib/share'

import GDStore from '../../lib/undux/GDStore'
import { useScreenState } from '../appNavigation/stackNavigation'
import { CustomButton } from '../common'

type Props = {
  screenProps: any
}

const ShareButton = ({ screenProps }: Props) => {
  const [screenState] = useScreenState(screenProps)
  const store = GDStore.useStore()

  const { sendLink } = screenState

  const share = async () => {
    const { title, text: message, url } = generateShareObject(sendLink)
    try {
      await Share.share({ title, message, url })
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

  return (
    <CustomButton style={styles.buttonStyle} onPress={share} mode="contained">
      Share Link
    </CustomButton>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: '1em'
  }
})

export default ShareButton
