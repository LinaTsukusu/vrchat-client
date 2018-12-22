import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import {expect} from 'chai'
import {DateTimeString, ModerationId, UserId} from '../src/types/common'
import {ModerationInfo, PlayerModerationType} from '../src/types/moderation'

describe('Moderation API', () => {
  let api: VrcApi
  let friend: UserId

  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
    const tmp = await api.user.getUserInfo()
    friend = tmp.friends[0]
  })

  after(async () => {
    try {
      await api.moderation.unblock(friend)
    } catch (e) {}
  })

  it.skip('Send', async () => {
    const result = await api.moderation.send(friend)
  })

  it('Block', async () => {
    const result = await api.moderation.block(friend)
    expect(result).to.have.all.keys(
      'id', 'type', 'sourceUserId', 'sourceDisplayName', 'targetUserId', 'targetDisplayName', 'created'
    )
  })

  it('Unblock', async () => {
    await api.moderation.block(friend)
    const result = await api.moderation.unblock(friend)
    expect(result).to.have.key('success')
    expect(result.success).to.have.all.keys('message', 'status_code')
  })

  it('Send player', async () => {

  })

  it('Mute', async () => {

  })

  it('Delete', async () => {

  })

  it('Clear', async () => {

  })

  it('Get against self', async () => {

  })

  it('Get sent list', async () => {

  })
})