import ApiModule from './api-module'
import {NotificationId, UserId, WorldId} from '../types/common'
import {
  NotificationDetail,
  NotificationInfo,
  NotificationType,
} from '../types/notification'

export default class Notification extends ApiModule {
  private async sendNotification(type: NotificationType, targetUser: UserId, message: string = '', details: object = {}): Promise<NotificationInfo> {
    const result = await this.postReq(`user/${targetUser}/notification`,{
      type: type,
      message: message,
      details: JSON.stringify(details)
    })
    return result.data
  }

  get send() {
    return {
      friendRequest: async (targetUser: UserId): Promise<NotificationInfo> => {
        return await this.sendNotification('friendrequest', targetUser)
      },

      invite: async (targetUser: UserId, worldId: WorldId, message=''): Promise<NotificationInfo> => {
        return await this.sendNotification('invite', targetUser, message, {
          worldId: worldId
        })
      },

      /**
       * @deprecated
       */
      halp: async (targetUser: UserId, worldId: WorldId, message=''): Promise<NotificationInfo> => {
        // TODO わからん
        return await this.sendNotification('halp', targetUser, message, {

        })
      },

      /**
       * @deprecated
       */
      voteToKick: async (targetUser: UserId): Promise<NotificationInfo> => {
        // TODO わからん
        return await this.sendNotification('votetokick', targetUser, "", {})
      },

      /**
       * @deprecated
       */
      all: async (targetUser: UserId): Promise<NotificationInfo> => {
        // TODO わからん
        return await this.sendNotification('all', targetUser, "", {})
      },

      /**
       * @deprecated
       */
      hidden: async (targetUser: UserId): Promise<NotificationInfo> => {
        // TODO わからん
        return await this.sendNotification('hidden', targetUser, "", {})
      },

      /**
       * @deprecated It seems that it can not be used yet.
       */
      async message(targetUser: UserId, message: string) {
        return await this.sendNotification('message', targetUser, message)
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