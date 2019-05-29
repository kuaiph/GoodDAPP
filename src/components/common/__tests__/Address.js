import React from 'react'
import renderer from 'react-test-renderer'
import Address from '../Address'

describe('Address', () => {
  it('renders without errors', () => {
    const tree = renderer.create(<Address />)
    expect(tree.toJSON()).toBeTruthy()
  })

  it('matches snapshot', () => {
    const component = renderer.create(<Address />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
