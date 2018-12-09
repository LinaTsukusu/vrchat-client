import {AvatarId, UnityPackage, UserId} from './common'


export type ReleaseStatus = 'public' | 'private' | 'hidden'


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