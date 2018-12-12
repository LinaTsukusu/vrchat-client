import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import {expect} from 'chai'

describe('World API', () => {
  let api: VrcApi
  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
  })

  it('Get by ID', async () => {

  })

  it('Get world list', async () => {

  })

  it('Get metadata by ID', async () => {

  })

  it('Get instance with tags', async () => {

  })
})