import {AvatarId, FavoriteId, UserId, WorldId} from './common'

export type ObjectId = UserId | AvatarId | WorldId

export type TypeOptions = 'friend' | 'world' | 'avatar'

export interface FavoriteResponse {
  id: FavoriteId
  type: TypeOptions
  favoriteId: ObjectId
  tags: Array<string>
}

