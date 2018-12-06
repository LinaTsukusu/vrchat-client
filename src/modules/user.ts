import ApiModule from './api-module'
import {
  FriendRequestResponse,
  FriendsOptions,
  FriendsResponse,
  FriendStatusResponse,
  UpdateUserOptions,
  UserInfoResponse, UserResponse, UserSearchOptions, UserSearchResponse,
} from '../types/user'
import {NotificationId, StatusResponse, UserId} from '../types/common'


export default class User extends ApiModule {

  async getUserInfo(): Promise<UserInfoResponse> {
    const result = await this.get('/auth/user')
    return result.data
  }

  async updateUserInfo(params: Partial<UpdateUserOptions>): Promise<UserInfoResponse> {
    const result = await this.put(`/users/${this.userId}`, params)
    return result.data
  }

  async getFriends(options: Partial<FriendsOptions> = {}): Promise<FriendsResponse[]> {
    const result = await this.get('/auth/user/friends', options)
    return result.data
  }

  async getFriendStatus(userId: UserId): Promise<FriendStatusResponse> {
    const result = await this.get(`/user/${userId}/friendStatus`)
    return result.data
  }

  async sendFriendRequest(userId: UserId): Promise<FriendRequestResponse> {
    const result = await this.post(`/user/${userId}/friendRequest`)
    return result.data
  }

  async unfriend(userId: UserId): Promise<StatusResponse> {
    const result = await this.delete(`/auth/user/friends/${userId}`)
    return result.data
  }

  async acceptFriend(notificationId: NotificationId): Promise<StatusResponse> {
    const result = await this.put(`/auth/user/notifications/${notificationId}/accept`)
    return result.data
  }

  async getById(userId: UserId): Promise<UserResponse> {
    const result = await this.get(`/users/${userId}`)
    return result.data
  }

  async getByName(username: string): Promise<UserResponse> {
    const result = await this.get(`/users/${username}/name`)
    return result.data
  }

  async searchAll(options: Partial<UserSearchOptions> = {}): Promise<UserSearchResponse> {
    const result = await this.get(`/users`, options)
    return result.data
  }

  async searchActive(options: Partial<UserSearchOptions> = {}): Promise<UserSearchResponse> {
    const result = await this.get(`/users/active`, options)
    return result.data
  }
}
