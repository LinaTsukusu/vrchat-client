import ApiModule from './api-module'
import {NotificationId, UserId} from '../types/common'
import {
  NotificationDetail,
  NotificationInfo,
  NotificationType,
  SendNotificationOptions,
} from '../types/notification'

export default class Notification extends ApiModule {
  async send(userId: UserId, type: NotificationType, options: Partial<SendNotificationOptions> = {}): Promise<NotificationInfo> {
    const result = await this.postReq(`user/${userId}/notification`, {
      type: type,
      message: options.message,
      details: options.details,
    })
    return result.data
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