import {NotificationId, UserId} from './common'

export type NotificationType = 'all' | 'message' | 'friendrequest' | 'invite' | 'votetokick' | 'halp' | 'hidden'

export interface SendNotificationResponse {
  id: NotificationId
  type: NotificationType
  senderUserId: UserId
  receiverUserId: UserId
  message: string
  details: object
  jobName: string
  jobColor: string
}