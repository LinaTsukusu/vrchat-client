import {DateTimeString, InstanceId, SearchRequest, UserId, WorldId} from './common'

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


export interface WorldInfo {
  id: WorldId
  name: string
  authorName: string
  totalLikes: number
  totalVisits: number
  capacity: number
  imageUrl: string
  thumbnailImageURL: string
  isSecure: boolean
  releaseStatus: ReleaseStatus
  organization: string
  occupants: number
}

export interface WorldDetail extends WorldInfo {
  description: string
  featured: boolean
  authorId: UserId
  tags: string[]
  assetUrl: string
  pluginUrl: string
  unityPackageUrl: string
  namespace: string
  unityPackageUpdated: boolean
  unityPackages: UnityPackage
  isLockdown: boolean
  version: number
  instances: Instance[]
}

export type SortOption = 'popularity' | 'created' | 'updated' | 'order' | '_created_at' | '_updated_at'
export type OrderOption = 'ascending' | 'descending'

export interface WorldSearchRequest extends SearchRequest {
  featured: boolean
  sort: SortOption
  user: 'me' | string
  userId: 'me' | UserId
  order: OrderOption
  search: string
  tag: string
  notag: string
  releaseStatus: ReleaseStatus
  maxUnityVersion: string
  minUnityVersion: string
  maxAssetVersion: string
  minAssetVersion: string
  platform: string
}