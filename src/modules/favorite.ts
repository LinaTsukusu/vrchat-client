import ApiModule from './api-module'
import {FavoriteResponse, TypeOptions} from '../types/favorite'
import {AvatarId, FavoriteId, StatusResponse, UserId, WorldId} from '../types/common'


export default class Favorite extends ApiModule {
  get add() {
    return {
      async friend(friendId: UserId): Promise<FavoriteResponse> {
        const result = await this.postReq('favorites', {type: 'friend', favoriteId: friendId})
        return result.data
      },

      async world(worldId: WorldId): Promise<FavoriteResponse> {
        const result = await this.postReq('favorites', {type: 'world', favoriteId: worldId})
        return result.data
      },

      async avatar(avatarId: AvatarId): Promise<FavoriteResponse> {
        const result = await this.postReq('favorites', {type: 'avatar', favoriteId: avatarId})
        return result.data
      },
    }
  }

  async getInfo(favoriteId: FavoriteId): Promise<FavoriteResponse> {
    const result = await this.getReq(`favorites/${favoriteId}`)
    return result.data
  }

  async list(type: TypeOptions = null): Promise<FavoriteResponse[]> {
    const result = await this.getReq(`favorites`, {type: type})
    return result.data
  }

  async delete(favoriteId: FavoriteId): Promise<StatusResponse> {
    const result = await this.deleteReq(`favorites/${favoriteId}`)
    return result.data
  }
}