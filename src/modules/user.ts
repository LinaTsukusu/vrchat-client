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
    return await this.getReq('/auth/user')
  }

  async updateUserInfo(params: Partial<UpdateUserOptions>): Promise<UserInfoResponse> {
    return await this.putReq(`/users/${this.userId}`, params)
  }

  async getFriends(options: Partial<FriendsOptions> = {}): Promise<FriendsResponse[]> {
    return await this.getReq('/auth/user/friends', options)
  }

  async getFriendStatus(userId: UserId): Promise<FriendStatusResponse> {
    return await this.getReq(`/user/${userId}/friendStatus`)
  }

  async sendFriendRequest(userId: UserId): Promise<FriendRequestResponse> {
    return await this.postReq(`/user/${userId}/friendRequest`)
  }

  async unfriend(userId: UserId): Promise<StatusResponse> {
    return await this.deleteReq(`/auth/user/friends/${userId}`)
  }

  async acceptFriend(notificationId: NotificationId): Promise<StatusResponse> {
    return await this.putReq(`/auth/user/notifications/${notificationId}/accept`)
  }

  async getById(userId: UserId): Promise<UserResponse> {
    return await this.getReq(`/users/${userId}`)
  }

  async getByName(username: string): Promise<UserResponse> {
    return await this.getReq(`/users/${username}/name`)
  }

  get search() {
    return {
      all: async (options: Partial<UserSearchOptions> = {}): Promise<UserSearchResponse> => {
        return await this.getReq(`/users`, options)
      },

      /**
       * @deprecated 403 Error
       */
      active: async (options: Partial<UserSearchOptions> = {}): Promise<UserSearchResponse> => {
        return await this.getReq(`/users/active`, options)
      },
    }
  }
}
