import ApiModule from './api-module'
import {FavoriteResponse, TypeOptions} from '../types/favorite'
import {AvatarId, FavoriteId, StatusResponse, UserId, WorldId} from '../types/common'


export default class Favorite extends ApiModule {
  get add() {
    return {
      friend: async (friendId: UserId): Promise<FavoriteResponse> => {
        return await this.postReq('favorites', {type: 'friend', favoriteId: friendId})
      },

      world: async (worldId: WorldId): Promise<FavoriteResponse> => {
        return await this.postReq('favorites', {type: 'world', favoriteId: worldId})
      },

      avatar: async (avatarId: AvatarId): Promise<FavoriteResponse> => {
        return await this.postReq('favorites', {type: 'avatar', favoriteId: avatarId})
      },
    }
  }

  async getInfo(favoriteId: FavoriteId): Promise<FavoriteResponse> {
    return await this.getReq(`favorites/${favoriteId}`)
  }

  async list(type: TypeOptions = null): Promise<FavoriteResponse[]> {
    return await this.getReq(`favorites`, {type: type})
  }

  async delete(favoriteId: FavoriteId): Promise<StatusResponse> {
    return await this.deleteReq(`favorites/${favoriteId}`)
  }
}