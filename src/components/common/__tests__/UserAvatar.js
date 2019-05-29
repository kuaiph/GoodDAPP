import React from 'react'
import renderer from 'react-test-renderer'
import UserAvatar from '../UserAvatar'

describe('UserAvatar', () => {
  const profile = {
    fullName: 'John Doe',
    email: 'a****a@aaa.com',
    mobile: '*********444'
  }

  it('renders without errors', () => {
    const tree = renderer.create(<UserAvatar profile={profile} />)
    expect(tree.toJSON()).toBeTruthy()
  })

  it('matches snapshot', () => {
    const component = renderer.create(<UserAvatar profile={profile} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
