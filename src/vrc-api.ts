import axios, {AxiosInstance} from 'axios'
import User from './modules/user'
import Avatar from './modules/avatar'
import Favorite from './modules/favorite'
import World from './modules/world'
import Moderation from './modules/moderation'
import Notification from './modules/notification'
import {UserId} from './types/common'

const cookie = require('cookie')


export default class VrcApi {
  private readonly url: string
  private vrc: AxiosInstance
  private _userId: UserId
  public readonly user: User
  public readonly avatar: Avatar
  public readonly favorite: Favorite
  public readonly world: World
  public readonly moderation: Moderation
  public readonly notification: Notification

  constructor(type: 'release' | 'beta' | 'dev' = 'release') {
    this.url = 'https://api.vrchat.cloud/api/1'
    if (type === 'dev') {
      this.url = 'https://dev-api.vrchat.cloud/api/1/'
    } else if (type === 'beta') {
      this.url = 'https://beta-api.vrchat.cloud/api/1/'
    }

    this.vrc = axios.create({
      baseURL: this.url,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      responseType: 'json',
    })

    this.user = new User(this)
    this.avatar = new Avatar(this)
    this.favorite = new Favorite(this)
    this.world = new World(this)
    this.moderation = new Moderation(this)
    this.notification = new Notification(this)
  }

  async login(username: string, password: string) {
    const apiKey = (await axios.get(`${this.url}/config`)).data.apiKey
    const userRes = await axios.get(`${this.url}/auth/user`, {
      params: {apiKey: apiKey},
      auth: {username: username, password: password},
    })
    const token = cookie.parse(userRes.headers['set-cookie'][1]).auth
    this._userId = userRes.data.id
    this.vrc = axios.create({
      baseURL: this.url,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Cookie': `auth=${token}; apiKey=${apiKey}`,
      },
      responseType: 'json',
    })
  }

  get api() {
    return this.vrc
  }

  get userId() {
    return this._userId
  }
}