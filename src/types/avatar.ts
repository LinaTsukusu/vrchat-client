import {AvatarId, OrderOption, SearchRequest, SortOption, UnityPackage, UserId} from './common'


export type ReleaseStatus = 'public' | 'private' | 'hidden'
export type UserOptions = 'me' | 'friends'

export interface AvatarInfo {
  id: AvatarId
  name: string
  description: string
  authorId: UserId
  authorName: string
  tags: string
  assetUrl: string
  imageUrl: string
  thumbnailImageUrl: string
  releaseStatus: ReleaseStatus
  version: number
  featured: boolean
  unityPackages: UnityPackage[]
  unityPackageUpdated: boolean
  unityPackageURL: string
}

export interface AvatarSearchRequest extends SearchRequest {
  user: UserOptions
  featured: boolean
  tag: string
  search: string
  order: OrderOption
  releaseStatus: ReleaseStatus
  sort: SortOption
  maxUnityVersion: string
  minUnityVersion: string
  maxAssetVersion: string
  minAssetVersion: string
  platform: string
}

