import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

let getWebRouterComponentWithMocks
describe('Receive', () => {
  beforeAll(async () => {
    localStorage.setItem(
      'GD_USER_MNEMONIC',
      'burger must derive wrong dry unaware reopen laptop acoustic report slender scene'
    )
    getWebRouterComponentWithMocks = require('./__util__').getWebRouterComponentWithMocks
  })
  it('renders without errors', () => {
    const Receive = getWebRouterComponentWithMocks('../Receive')
    const tree = renderer.create(<Receive />)
    expect(tree.toJSON()).toBeTruthy()
  })

  it('matches snapshot', () => {
    const Receive = getWebRouterComponentWithMocks('../Receive')
    const component = renderer.create(<Receive />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
