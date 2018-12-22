import ApiModule from './api-module'
import {ModerationId, StatusResponse, UserId} from '../types/common'
import {ModerationInfo, PlayerModerationType, SendModerationResponse} from '../types/moderation'

export default class Moderation extends ApiModule {
  /**
   * @deprecated
   */
  async send(userId: UserId): Promise<SendModerationResponse> {
    const result = await this.postReq(`user/${userId}/moderations`)
    return result.data
  }

  async block(userId: UserId): Promise<ModerationInfo> {
    // TODO playermoderationsにする
    const result = await this.postReq('auth/user/blocks', {blocked: userId})
    return result.data
  }

  async unblock(userId: UserId): Promise<StatusResponse> {
    // TODO unplayermoderationsにする
    const result = await this.putReq('auth/user/unblocks', {blocked: userId})
    return result.data
  }

  async sendPlayer(userId: UserId, type: PlayerModerationType): Promise<ModerationInfo> {
    const result = await this.postReq('auth/user/playermoderations', {type: type, moderated: userId})
    return result.data
  }

  async mute(userId: UserId): Promise<ModerationInfo> {
    return await this.sendPlayer(userId, 'mute')
  }

  async unmute(userId: UserId): Promise<ModerationInfo> {
    return await this.sendPlayer(userId, 'unmute')
  }

  async delete(userId: UserId, moderationId: ModerationId): Promise<StatusResponse> {
    const result = await this.deleteReq(`user/${userId}/moderations/${moderationId}`)
    return result.data
  }

  async clear(userId: UserId): Promise<StatusResponse> {
    const result = await this.deleteReq(`user/${userId}/moderations`)
    return result.data
  }

  async getAgainstSelf(): Promise<ModerationInfo[]> {
    const result = await this.getReq(`auth/user/playermoderated`)
    return result.data
  }

  async getSentlist(): Promise<ModerationInfo[]> {
    const result = await this.getReq(`auth/user/playermoderations`)
    return result.data
  }


}
