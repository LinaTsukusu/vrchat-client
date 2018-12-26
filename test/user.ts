import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import {expect} from 'chai'

describe('User API', () => {
  let api: VrcApi
  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
  })

  beforeEach(async () => {
    try {
      await api.user.unfriend(api.userId)
    } catch (e) {
    }
  })

  it('Get user info', async () => {
    const result = await api.user.getUserInfo()
    expect(result.id).is.eql(api.userId)
    expect(result.username).is.eql(process.env.VRC_USERNAME)
  })

  it('Update user info', async () => {
    const prev = await api.user.getUserInfo()
    const result = await api.user.updateUserInfo({
      statusDescription: '( ˘ω˘)ｽﾔｧ',
    })
    expect(result.statusDescription).is.eql('( ˘ω˘)ｽﾔｧ')
    await api.user.updateUserInfo({
      statusDescription: prev.statusDescription,
    })
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
    // 自分にフレリク送れるので使う
    const result = await api.user.sendFriendRequest(api.userId)
    expect(result).to.have.keys([
      'id', 'senderUserId', 'receiverUserId', 'type', 'jobName', 'jobColor',
    ])
    expect(result.type).is.eql('friendRequest')
    // Delete test request
    await api.notification.delete(result.id)
  })

  it('Accept friend', async () => {
    const req = await api.user.sendFriendRequest(api.userId)
    const result = await api.user.acceptFriend(req.id)
    expect(result).to.have.key('success')
  })

  it('Unfriend', async () => {
    const req = await api.user.sendFriendRequest(api.userId)
    await api.user.acceptFriend(req.id)

    const result = await api.user.unfriend(api.userId)
    expect(result).to.have.key('success')
    expect(result.success).to.have.keys(['status_code', 'message'])
  })

  it('Get by ID', async () => {
    const result = await api.user.getById(api.userId)
    expect(result.username).is.eql(process.env.VRC_USERNAME)
    expect(result.id).is.eql(api.userId)
  })

  it('Get by name', async () => {
    const result = await api.user.getByName(process.env.VRC_USERNAME)
    expect(result.username).is.eql(process.env.VRC_USERNAME)
    expect(result.id).is.eql(api.userId)
  })

  it('Search all', async () => {
    const result = await api.user.search.all({
      n: 1,
      search: process.env.VRC_USERNAME
    })
    expect(result).to.be.lengthOf(1)
  })
})