import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import {expect} from 'chai'

describe('Moderation API', () => {
  let api: VrcApi

  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
  })

  it('Send', async () => {

  })

  it('Block', async () => {

  })

  it('Unblock', async () => {

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