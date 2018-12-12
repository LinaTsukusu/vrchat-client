import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import {expect} from 'chai'
import {AvatarId} from '../src/types/common'

describe('Avatar API', () => {
  let api: VrcApi
  let current: AvatarId

  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
    const info = await api.user.getUserInfo()
    current = info.currentAvatar

  })

  it('Get by ID', async () => {
    const result = await api.avatar.getById(current)
    expect(result.id).is.eql(current)
    expect(result.authorId).is.eql(api.userId)
  })

  it('Choose avatar', async () => {
    const result = await api.avatar.choose(current)
    expect(result.id).is.eql(api.userId)
    expect(result.currentAvatar).is.eql(current)
  })

  it('Search avatar', async () => {
    const result = await api.avatar.search({search: 'Lina'})
    console.log(result)
  })

})