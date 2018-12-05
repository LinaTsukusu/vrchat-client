import ApiModule from './api-module'
import {FriendsRequest, FriendsResponse, UpdateUserRequest, UserInfoResponse} from '../types/user'


export default class User extends ApiModule {

  async getUserInfo(): Promise<UserInfoResponse> {
    let result = await this.get('/auth/user')
    return result.data
  }

  async updateUserInfo(params: Partial<UpdateUserRequest>): Promise<UserInfoResponse> {
    let result = await this.put(`/users/${this.userId}`, params)
    return result.data
  }

  async getFriends(options: Partial<FriendsRequest> = {}): Promise<FriendsResponse> {
    let result = await this.get(`/auth/user/friends`, options)
    return result.data
  }
}