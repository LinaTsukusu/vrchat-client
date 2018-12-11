import VrcApi from '../src/vrc-api'
import vrc from '../src/vrc'
import { expect } from 'chai'
import User from '../src/modules/user'
import Avatar from '../src/modules/avatar'
import World from '../src/modules/world'
import Favorite from '../src/modules/favorite'
import Moderation from '../src/modules/moderation'
import Notification from '../src/modules/notification'


describe('login', () => {
  let username, password
  before(() => {
    username = process.env.VRC_USERNAME
    password = process.env.VRC_PASSWORD
  })

  it('success', async () => {
    const api = await vrc.login(username, password)
    expect(api).to.be.a.instanceOf(VrcApi)
    expect(api.userId).to.be.a('string')
    expect(api.apiKey).is.eql('JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26')
    expect(api.user).to.be.a.instanceOf(User)
    expect(api.avatar).to.be.a.instanceOf(Avatar)
    expect(api.world).to.be.a.instanceOf(World)
    expect(api.favorite).to.be.a.instanceOf(Favorite)
    expect(api.moderation).to.be.a.instanceOf(Moderation)
    expect(api.notification).to.be.a.instanceOf(Notification)
  })

  it('auth error', async () => {
    try {
      const api = await vrc.login('jfieaojroiakjdaier', 'aieeeeeeee')
    } catch (e) {
      expect(e).to.be.a.instanceOf(Error)
      expect(e.response.status).is.eql(401)
    }
  })

})