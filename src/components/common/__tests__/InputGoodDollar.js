import React from 'react'
import InputGoodDollar from '../InputGoodDollar'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('InputGoodDollar', () => {
  it('renders without errors', () => {
    const tree = renderer.create(<InputGoodDollar wei={12002} />)
    expect(tree.toJSON()).toBeTruthy()
  })

  it('matches snapshot', () => {
    const component = renderer.create(<InputGoodDollar wei={12002} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
