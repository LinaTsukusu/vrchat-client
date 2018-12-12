import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import {expect} from 'chai'

describe('Favorite API', () => {
  let api: VrcApi
  before(async () => {
    api = await vrc.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
  })

  it('Add favorite', async () => {
    const req = await api.user.sendFriendRequest(api.userId)
    await api.user.acceptFriend(req.id)

    const result = await api.favorite.add.friend(api.userId)
    expect(result.favoriteId).is.eql(api.userId)
    expect(result.type).is.eql('friend')

    await api.favorite.delete(result.id)
    await api.user.unfriend(api.userId)
  })

  it('Get favorite', async () => {
    const fav = await api.favorite.list('world')
    const result = await api.favorite.getInfo(fav[0].id)
    expect(result).is.eql(fav[0])
  })

  it('Get favorite list', async () => {
    const result = await api.favorite.list()
    expect(result).to.be.a('array')

    const worlds = await api.favorite.list('world')
    expect(worlds).to.satisfy(w => {
      return w.length == w.filter(v => v.type == 'world').length
    })
  })

  it('Delete favorite', async () => {
    const worlds = await api.favorite.list('world')
    const result = await api.favorite.delete(worlds[0].id)
    expect(result).to.have.key('success')

    await api.favorite.add.world(worlds[0].favoriteId)
  })
})