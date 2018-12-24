import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import {expect} from 'chai'
import {NotificationId, UserId, WorldId} from '../src/types/common'
import {Details, NotificationType} from '../src/types/notification'

describe.skip('Moderation API', () => {
  let api: VrcApi
  let friend: UserId
  let world: WorldId

  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
    // await api.user.unfriend(api.userId)
    friend = 'usr_eee0b2de-8776-4803-b126-408b4741b66d'
    const ret = await api.user.getById(api.userId)
    console.log(ret)

  })

  describe('Send', () => {
    it.skip('Friend request', async () => {
      // なんか動かなくなってた
      const result = await api.notification.send.friendRequest(friend)
      expect(result).to.have.all.keys('id', 'type', 'senderUserId', 'receiverUserId', 'message', 'details', 'jobName', 'jobColor')
      console.log(result)
    })

    it('Invite', async () => {
      // const result = await api.notification.send.invite(friend, )
    })

    it.skip('Halp', async () => {

    })

    it.skip('Vote to kick', async () => {

    })

    it.skip('All', async () => {

    })

    it.skip('Hidden', async () => {

    })

    it.skip('Message', async () => {

    })
  })

  it('Mark as read', async () => {

  })

  it('Delete', async () => {

  })

  it('Get all', async () => {

  })
})