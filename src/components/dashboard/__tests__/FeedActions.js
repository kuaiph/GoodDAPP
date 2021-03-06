import React from 'react'
import FeedActions from '../FeedActions'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('FeedActions', () => {
  it('renders without errors', () => {
    const tree = renderer.create(<FeedActions />)
    expect(tree.toJSON()).toBeTruthy()
  })

  it('matches snapshot', () => {
    const component = renderer.create(<FeedActions />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
