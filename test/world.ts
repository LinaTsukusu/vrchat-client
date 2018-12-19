import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import {expect} from 'chai'
import {WorldId} from '../src/types/common'


describe('World API', () => {
  let api: VrcApi
  let worldId: WorldId
  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
    const info = await api.user.getUserInfo()
    worldId = info.homeLocation
  })

  it('Get by ID', async () => {
    const result = await api.world.getById(worldId)
    expect(result.id).is.eql(worldId)
  })

  it('Get world list', async () => {
    const result = await Promise.all([
      api.world.search.all({}),
      api.world.search.favorites({}),
      api.world.search.active({}),
      api.world.search.recent({}),
    ])
    result.forEach(ret => {
      expect(ret).to.be.a('array')
    })
  })

  it('Get metadata by ID', async () => {
    const result = await api.world.getMetadata(worldId)
    expect(result).to.have.keys(['id', 'metadata'])
  })

  it('Get instance with tags', async () => {
    const info = await api.world.getById(worldId)
    const result = await api.world.getInstanceWithTags(worldId, info.instances[0][0])
    expect(result).to.have.keys(['id', 'private', 'friends', 'hidden', 'users', 'name'])
  })
})