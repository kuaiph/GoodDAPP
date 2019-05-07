import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import mdd from 'mobile-device-detect'

import { getWebRouterComponentWithMocks } from './__util__'

describe('ShareButton', () => {
  afterEach(() => {
    mdd.isMobile = false
  })

  it('renders without errors for a mobile device', () => {
    // Given
    mdd.isMobile = true
    const ShareButton = getWebRouterComponentWithMocks('../ShareButton')
    const component = renderer.create(<ShareButton />)

    // When
    const tree = component.toJSON()

    // Then
    expect(tree).toBeTruthy()
  })

  it('renders null for a non mobile device', () => {
    // Given
    const ShareButton = getWebRouterComponentWithMocks('../ShareButton')
    const component = renderer.create(<ShareButton />)

    // When
    const tree = component.toJSON()

    // Then
    expect(tree).toBeNull()
  })

  it('matches snapshot for a link without destination', () => {
    // Given
    mdd.isMobile = true
    const ShareButton = getWebRouterComponentWithMocks('../ShareButton')
    const props = { screenProps: { screenState: { sendLink: 'https://example.com/shareMyLink', to: '' } } }
    const component = renderer.create(<ShareButton {...props} />)

    // When
    const tree = component.toJSON()

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('matches snapshot for a link with destination', () => {
    // Given
    mdd.isMobile = true
    const ShareButton = getWebRouterComponentWithMocks('../ShareButton')
    const props = { screenProps: { screenState: { sendLink: 'https://example.com/shareMyLink', to: 'me@example.co' } } }
    const component = renderer.create(<ShareButton {...props} />)

    // When
    const tree = component.toJSON()

    // Then
    expect(tree).toMatchSnapshot()
  })
})
