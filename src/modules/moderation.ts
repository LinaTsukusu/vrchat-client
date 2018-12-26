import ApiModule from './api-module'
import {ModerationId, StatusResponse, UserId} from '../types/common'
import {ModerationInfo, PlayerModerationType, SendModerationResponse} from '../types/moderation'

export default class Moderation extends ApiModule {
  /**
   * @deprecated
   */
  async send(userId: UserId): Promise<SendModerationResponse> {
    return await this.postReq(`user/${userId}/moderations`)
  }

  async block(userId: UserId): Promise<ModerationInfo> {
    // const result = await this.postReq('auth/user/blocks', {blocked: userId})
    // return result.data
    return await this.sendPlayer(userId, 'block')
  }

  async unblock(userId: UserId) {
    return await this.putReq('auth/user/unblocks', {blocked: userId})
    // return await this.sendPlayer(userId, 'unblock')
  }

  private async sendPlayer(userId: UserId, type: PlayerModerationType): Promise<ModerationInfo> {
    return await this.postReq('auth/user/playermoderations', {type: type, moderated: userId})
  }

  async mute(userId: UserId): Promise<ModerationInfo> {
    return await this.sendPlayer(userId, 'mute')
  }

  async unmute(userId: UserId): Promise<ModerationInfo> {
    return await this.sendPlayer(userId, 'unmute')
  }

  async delete(userId: UserId, moderationId: ModerationId): Promise<StatusResponse> {
    return await this.deleteReq(`user/${userId}/moderations/${moderationId}`)
  }

  async clear(userId: UserId): Promise<StatusResponse> {
    return await this.deleteReq(`user/${userId}/moderations`)
  }

  async getAgainstSelf(): Promise<ModerationInfo[]> {
    return await this.getReq(`auth/user/playermoderated`)
  }

  async getSentlist(): Promise<ModerationInfo[]> {
    return await this.getReq(`auth/user/playermoderations`)
  }


}
