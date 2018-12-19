import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import {expect} from 'chai'

describe('Moderation API', () => {
  let api: VrcApi

  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
  })
})