import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import { expect } from 'chai'
import {FriendsResponse} from '../src/types/user'

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
    const result = await api.user.getFriends({n: 1})
    expect(result).to.have.lengthOf(1)
  })

  it('Get friend status', async () => {
    const friendId = (await api.user.getFriends({n: 1}))[0].id
    const result = await api.user.getFriendStatus(friendId)
    expect(result.isFriend).is.true
    expect(result.outgoingRequest).is.false
    expect(result.incomingRequest).is.false
  })

  it('Send friend request', async () => {
    const result = await api.user.sendFriendRequest(api.userId)
    expect(result).to.have.keys([
      'id', 'senderUserId', 'receiverUserId', 'type', 'jobName', 'jobColor',
    ])
    expect(result.type).is.eql('friendRequest')
    // Delete test request
    await api.notification.delete(result.id)
  })

  it('Unfriend', async () => {

  })

})