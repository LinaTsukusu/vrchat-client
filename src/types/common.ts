export type UserId = string
export type AvatarId = string
export type WorldId = string

export type DateTimeString = string

export type Status = ('active' | 'join me' | 'busy' | 'offline')
export type DeveloperType = ('none' | 'trusted' | 'internal' | 'moderator')

export type Tags = (
  'admin_scripting_access'
  | 'system_scripting_access'
  | 'system_avatar_access'
  | 'system_world_access'
  | 'admin_avatar_access'
  | 'admin_world_access'
  | 'admin_avatar_restricted'
  | 'admin_world_restricted'
  | 'admin_moderator'
  | 'system_feedback_access'
  | 'system_trust_intermediate'
  | 'system_legend'
  | 'system_probable_troll'
  | 'system_troll'
  | 'admin_lock_level'
  | 'admin_lock_tags'
  | 'admin_official_thumbnail'
  | 'system_trust_basic'
  | 'system_trust_known'
  | 'system_trust_trusted'
  | 'system_trust_veteran'
  | 'system_trust_legend')

export type ListRequest = {n: number, offset: number}