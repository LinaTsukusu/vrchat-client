export type UserId = string
export type AvatarId = string
export type WorldId = string
export type FavoriteId = string
export type InstanceId = string
export type NotificationId = string

export type DateTimeString = string

export type SortOption = 'popularity' | 'created' | 'updated' | 'order' | '_created_at' | '_updated_at'
export type OrderOption = 'ascending' | 'descending'

export interface SearchRequest {
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

export interface UnityPackage {
  id: string
  assetUrl: string
  pluginUrl: string
  unityVersion: string
  unitySortNumber: number
  assetVersion: number
  platform: string
  created_at: DateTimeString
}