import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import {expect} from 'chai'

describe('Moderation API', () => {
  let api: VrcApi

  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
  })

  describe('Send', () => {
    it('Friend request', async () => {

    })

    it('Invite', async () => {

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