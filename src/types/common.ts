export type UserId = string
export type AvatarId = string
export type WorldId = string
export type FavoriteId = string
export type InstanceId = string
export type NotificationId = string

export type DateTimeString = string


export interface ListRequest {
  n: number
  offset: number
}

interface StatusMessage {
  message: string
  status_code: number
}

export interface StatusResponse {
  success?: StatusMessage
  error?: StatusMessage
}