import {DateTimeString, InstanceId, ModerationId, UserId, WorldId} from './common'

export type WorldModerationType = 'none' | 'warn' | 'kick' | 'ban' | 'banpubliconly'
export type PlayerModerationType = 'mute' | 'unmute' | 'block'

export interface SendModerationResponse {
  type: WorldModerationType
  reason: string
  created: DateTimeString
  worldId: WorldId
  instanceId: InstanceId
}

export interface ModerationInfo {
  id: ModerationId
  type: PlayerModerationType
  sourceUserId: UserId
  sourceDisplayName: string
  targetUserId: UserId
  targetDisplayName: string
  created: DateTimeString
}