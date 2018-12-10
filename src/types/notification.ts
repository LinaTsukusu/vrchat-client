import {NotificationId, UserId} from './common'

export type NotificationType = 'all' | 'message' | 'friendrequest' | 'invite' | 'votetokick' | 'halp' | 'hidden'

export interface Details {
  
}

export interface NotificationInfo {
  id: NotificationId
  type: NotificationType
  senderUserId: UserId
  receiverUserId: UserId
  message: string
  details: object
  jobName: string
  jobColor: string
}

export interface SendNotificationRequest {
  type: NotificationType
  message: string
  details: Details
}