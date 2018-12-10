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
    const result = await this.getReq('/auth/user')
    return result.data
  }

  async updateUserInfo(params: Partial<UpdateUserOptions>): Promise<UserInfoResponse> {
    const result = await this.putReq(`/users/${this.userId}`, params)
    return result.data
  }

  async getFriends(options: Partial<FriendsOptions> = {}): Promise<FriendsResponse[]> {
    const result = await this.getReq('/auth/user/friends', options)
    return result.data
  }

  async getFriendStatus(userId: UserId): Promise<FriendStatusResponse> {
    const result = await this.getReq(`/user/${userId}/friendStatus`)
    return result.data
  }

  async sendFriendRequest(userId: UserId): Promise<FriendRequestResponse> {
    const result = await this.postReq(`/user/${userId}/friendRequest`)
    return result.data
  }

  async unfriend(userId: UserId): Promise<StatusResponse> {
    const result = await this.deleteReq(`/auth/user/friends/${userId}`)
    return result.data
  }

  async acceptFriend(notificationId: NotificationId): Promise<StatusResponse> {
    const result = await this.putReq(`/auth/user/notifications/${notificationId}/accept`)
    return result.data
  }

  async getById(userId: UserId): Promise<UserResponse> {
    const result = await this.getReq(`/users/${userId}`)
    return result.data
  }

  async getByName(username: string): Promise<UserResponse> {
    const result = await this.getReq(`/users/${username}/name`)
    return result.data
  }

  get search() {
    return {
      async all(options: Partial<UserSearchOptions> = {}): Promise<UserSearchResponse> {
        const result = await this.getReq(`/users`, options)
        return result.data
      },

      async active(options: Partial<UserSearchOptions> = {}): Promise<UserSearchResponse> {
        const result = await this.getReq(`/users/active`, options)
        return result.data
      },
    }
  }
}
