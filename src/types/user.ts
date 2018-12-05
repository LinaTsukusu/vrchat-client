import {AvatarId, DateTimeString, DeveloperType, ListRequest, Status, Tags, UserId, WorldId} from './common'

export type UserInfoResponse = {
  id: UserId
  username: string
  displayName: string
  pastDisplayNames: {displayName: string, updated_at: DateTimeString}[]
  hasEmail: boolean
  hasPendingEmail: boolean
  obfuscatedEmail: string
  obfuscatedPendingEmail: string
  emailVerified: boolean
  hasBirthday: boolean
  unsubscribe: boolean
  friends: UserId[]
  friendGroupNames: string[]
  currentAvatarImageUrl: string
  currentAvatarThumbnailImageUrl: string
  currentAvatar: AvatarId
  currentAvatarAssetUrl: string
  acceptedTOSVersion: number
  steamDetails: object
  hasLoggedInFromClient: boolean
  homeLocation: WorldId
  status: Status
  statusDescription: string
  tags: Tags[]
  developerType: DeveloperType
  last_login: DateTimeString
  isFriend: boolean
  friendKey: string
}

export type UpdateUserRequest = {
  email: string
  birthday: string
  acceptedTOSVersion: string
  tags: Tags | Tags[]
  networkSessionId: string
  status: Status
  statusDescription: string
}

export type FriendsRequest = ListRequest & {offline: boolean}

export type FriendsResponse = {
  id: UserId
  username: string
  displayName: string
  currentAvatarImageUrl: string
  currentAvatarThumbnailImageUrl: string
  tags: Tags[]
  developerType: DeveloperType
  location: WorldId
}