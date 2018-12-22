import ApiModule from './api-module'
import {NotificationId, UserId, WorldId} from '../types/common'
import {
  NotificationDetail,
  NotificationInfo,
  NotificationType,
  SendNotificationOptions,
} from '../types/notification'

export default class Notification extends ApiModule {
  private async _send(userId: UserId, type: NotificationType, options: Partial<SendNotificationOptions> = {}): Promise<NotificationInfo> {
    const result = await this.postReq(`user/${userId}/notification`, {
      type: type,
      message: options.message,
      details: options.details,
    })
    return result.data
  }

  get send() {
    return {
      friendRequest: async (targetUser: UserId): Promise<NotificationInfo> => {
        const result = await this.postReq(`user/${targetUser}/notification`, {
          type: 'friendrequest',
        })
        return result.data
      },

      invite: async (targetUser: UserId, worldId: WorldId, message=''): Promise<NotificationInfo> => {
        const result = await this.postReq(`user/${targetUser}/notification`,{
          type: 'invite',
          message: message,
          details: JSON.stringify({
            worldId: worldId
          })
        })
        return result.data
      },

      /**
       * @deprecated
       */
      halp: async (targetUser: UserId, worldId: WorldId, message=''): Promise<NotificationInfo> => {
        // TODO わからん
        const result = await this.postReq(`user/${targetUser}/notification`,{
          type: 'halp',
          message: message,
          details: JSON.stringify({
            // ?
          })
        })
        return result.data
      },

      /**
       * @deprecated
       */
      voteToKick: async (targetUser: UserId): Promise<NotificationInfo> => {
        // TODO わからん
        const result = await this.postReq(`user/${targetUser}/notification`, {
          type: 'votetokick',
          details: JSON.stringify({
            // ?
          })
        })
        return result.data
      },

      /**
       * @deprecated
       */
      all: async (targetUser: UserId): Promise<NotificationInfo> => {
        // TODO わからん
        const result = await this.postReq(`user/${targetUser}/notification`, {
          type: 'all',
          details: JSON.stringify({
            // ?
          })
        })
        return result.data
      },

      /**
       * @deprecated
       */
      hidden: async (targetUser: UserId): Promise<NotificationInfo> => {
        // TODO わからん
        const result = await this.postReq(`user/${targetUser}/notification`, {
          type: 'hidden',
          details: JSON.stringify({
            // ?
          })
        })
        return result.data
      },

      /**
       * @deprecated It seems that it can not be used yet.
       */
      async message() {

      },
    }
  }

  async markAsRead(notificationId: NotificationId): Promise<NotificationDetail> {
    const result = await this.putReq(`auth/user/notifications/${notificationId}/see`)
    return result.data
  }

  async delete(notificationId: NotificationId): Promise<NotificationDetail> {
    const result = await this.putReq(`auth/user/notifications/${notificationId}/hide`)
    return result.data
  }

  async getAll(): Promise<NotificationDetail[]> {
    const result = await this.getReq(`auth/user/notifications`)
    return result.data
  }
}