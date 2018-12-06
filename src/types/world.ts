import {DateTimeString, InstanceId, UserId, WorldId} from './common'

export type ReleaseStatus = 'public' | 'private' | 'all' | 'hidden'

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

export interface Instance {
  0: InstanceId
  1: number
}

export interface WorldResponse {
  id: WorldId
  name: string
  description: string
  featured: boolean
  authorId: UserId
  authorName: string
  totalLikes: number
  totalVisits: number
  capacity: number
  tags: string[]
  releaseStatus: ReleaseStatus
  imageUrl: string
  thumbnailImageURL: string
  assetUrl: string
  pluginUrl: string
  unityPackageUrl: string
  namespace: string
  unityPackageUpdated: boolean
  unityPackages: UnityPackage
  isSecure: boolean
  isLockdown: boolean
  version: number
  organization: string
  instances: Instance[]
  occupants: number
}