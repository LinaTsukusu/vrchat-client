import {DateTimeString, NotificationId, UserId, WorldId} from './common'

export type NotificationType = 'all' | 'message' | 'friendrequest' | 'invite' | 'votetokick' | 'halp' | 'hidden'

export interface Details {
  invite: WorldId,
  votetokick: 'userToKickId' | 'initiatorUserId'
  halp: 'halpId' | 'worldId'
}

export interface NotificationInfo {
  id: NotificationId
  type: NotificationType
  senderUserId: UserId
  receiverUserId: UserId
  message: string
  details: Details
  jobName: string
  jobColor: string
}

export interface SendNotificationOptions {
  message: string
  details: Details
}

export interface NotificationDetail {
  id: NotificationId
  type: NotificationType
  senderUserId: UserId
  receiverUserId: UserId
  message: string
  details: Details
  seen: boolean
  created_at: DateTimeString
}