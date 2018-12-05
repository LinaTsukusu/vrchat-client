import axios, {AxiosInstance} from 'axios'
import User from './modules/user'
import Avatar from './modules/avatar'
import Favorite from './modules/favorite'
import World from './modules/world'
import Moderation from './modules/moderation'
import Notification from './modules/notification'
const cookie = require('cookie')


export default class VrcApi {
  private readonly vrc: AxiosInstance
  private _apiKey: string
  private _token: string
  public readonly user: User
  public readonly avatar: Avatar
  public readonly favorite: Favorite
  public readonly world: World
  public readonly moderation: Moderation
  public readonly notification: Notification

  constructor() {
    this.vrc = axios.create({
      baseURL: "https://api.vrchat.cloud/api/1",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      },
      responseType: "json"
    })

    this.user = new User(this)
    this.avatar = new Avatar(this)
    this.favorite = new Favorite(this)
    this.world = new World(this)
    this.moderation = new Moderation(this)
    this.notification = new Notification(this)
  }

  async login(username: string, password: string) {
    this._apiKey = (await this.vrc.get('/config')).data.apiKey

    console.log(this._apiKey)

    const userRes = await this.vrc.get("/auth/user", {
      params: {apiKey: this._apiKey},
      auth: {username: username, password: password}
    })
    this._token = cookie.parse(userRes.headers['set-cookie'][1]).auth
  }

  get api() {
    return this.vrc
  }

  get apiKey() {
    return this._apiKey
  }

  get token() {
    return this._token
  }
}