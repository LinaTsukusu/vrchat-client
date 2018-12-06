import {AvatarId, DateTimeString, InstanceId, ListRequest, UserId, WorldId} from './common'
import {SendNotificationResponse} from './notification'


export type Status = 'active' | 'join me' | 'busy' | 'offline'
export type DeveloperType = 'none' | 'trusted' | 'internal' | 'moderator'

export type Tags =
  'admin_scripting_access' |
  'system_scripting_access' |
  'system_avatar_access' |
  'system_world_access' |
  'admin_avatar_access' |
  'admin_world_access' |
  'admin_avatar_restricted' |
  'admin_world_restricted' |
  'admin_moderator' |
  'system_feedback_access' |
  'system_trust_intermediate' |
  'system_legend' |
  'system_probable_troll' |
  'system_troll' |
  'admin_lock_level' |
  'admin_lock_tags' |
  'admin_official_thumbnail' |
  'system_trust_basic' |
  'system_trust_known' |
  'system_trust_trusted' |
  'system_trust_veteran' |
  'system_trust_legend'


export interface UserInfoResponse {
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

export interface UpdateUserOptions {
  email: string
  birthday: string
  acceptedTOSVersion: string
  tags: Tags | Tags[]
  networkSessionId: string
  status: Status
  statusDescription: string
}

export interface FriendsOptions extends ListRequest {
  offline: boolean
}

export interface UserSearchOptions extends ListRequest {
  search: string
  developerType: DeveloperType
}

export interface FriendsResponse {
  id: UserId
  username: string
  displayName: string
  currentAvatarImageUrl: string
  currentAvatarThumbnailImageUrl: string
  tags: Tags[]
  developerType: DeveloperType
  location: WorldId
}

export interface FriendStatusResponse {
  isFriend: boolean
  outgoingRequest: boolean
  incomingRequest: boolean
}

export interface FriendRequestResponse extends SendNotificationResponse {
  type: 'friendrequest'
}

export interface UserResponse {
  id: UserId
  username: string
  displayName: string
  currentAvatarImageUrl: string
  currentAvatarThumbnailImageUrl: string
  status: Status
  statusDescription: string
  tags: Tags[]
  developerType: DeveloperType
  last_login: DateTimeString
  isFriend: boolean
  friendKey: string
  location: WorldId & InstanceId
  worldId: WorldId
  instanceId: InstanceId
}

export interface UserSearchResponse {
  id: UserId
  username: string
  displayName: string
  currentAvatarImageUrl: string
  currentAvatarThumbnailImageUrl: string
  tags: Tags[]
  developerType: DeveloperType
}