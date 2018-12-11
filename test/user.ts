import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import { expect } from 'chai'
import {UserInfoResponse} from '../src/types/user'

describe('user api', () => {
  let api: VrcApi
  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
  })

  it('Get user info', async () => {
    const result = await api.user.getUserInfo()
    expect(result.id).is.eql(api.userId)
    expect(result.username).is.eql(process.env.VRC_USERNAME)
  })

  it('Update user info', async () => {
    const result = await api.user.updateUserInfo({
      statusDescription: "( ˘ω˘)ｽﾔｧ"
    })
    expect(result.statusDescription).is.eql("( ˘ω˘)ｽﾔｧ")
  })

  it('Get friends', async () => {

  })
})