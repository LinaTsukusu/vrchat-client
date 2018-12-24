import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import {expect} from 'chai'
import {DateTimeString, ModerationId, UserId} from '../src/types/common'
import {ModerationInfo, PlayerModerationType} from '../src/types/moderation'


// TODO なんかAPI自体が動かないのでスキップ
describe.skip('Moderation API', () => {
  let api: VrcApi
  let friend: UserId

  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
    const tmp = await api.user.getUserInfo()
    friend = tmp.friends[0]
    friend = 'usr_3db7c94a-8ad3-4594-970e-360811d6ff02'
  })

  after(async () => {
    try {
      await api.moderation.unblock(friend)
    } catch (e) {}
    try {
      await api.moderation.unmute(friend)
    } catch (e) {}
  })

  it.skip('Send', async () => {
    const result = await api.moderation.send(friend)
  })

  it.skip('Block', async () => {
    const result = await api.moderation.block(friend)
    expect(result).to.have.all.keys('id', 'type', 'sourceUserId', 'sourceDisplayName', 'targetUserId', 'targetDisplayName', 'created')
  })

  it.skip('Unblock', async () => {
    await api.moderation.block(friend)
    try {
      const result = await api.moderation.unblock(friend)
      console.log(result)
      expect(result).to.have.key('success')
    } catch (e) {
      console.log(e)
    }
    // expect(result.success).to.have.all.keys('message', 'status_code')
  })

  it.skip('Mute', async () => {
    const result = await api.moderation.mute(friend)
    expect(result).to.have.all.keys('id', 'type', 'sourceUserId', 'sourceDisplayName', 'targetUserId', 'targetDisplayName', 'created')
    console.log(result)
  })

  it('Unmute', async () => {
    await api.moderation.mute(friend)
    const result = await api.moderation.unmute(friend)
    expect(result).to.have.all.keys('id', 'type', 'sourceUserId', 'sourceDisplayName', 'targetUserId', 'targetDisplayName', 'created')
    console.log(result)
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