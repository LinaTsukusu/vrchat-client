import ApiModule from './api-module'
import {InstanceId, StatusResponse, WorldId} from '../types/common'
import {InstanceInfo, MetadataResponse, WorldDetail, WorldInfo, WorldSearchRequest} from '../types/world'


export default class World extends ApiModule {
  async getById(worldId: WorldId): Promise<WorldDetail> {
    const result = await this.getReq(`worlds/${worldId}`)
    return result.data
  }

  get search() {
    return {
      all: async (options: Partial<WorldSearchRequest> = {}): Promise<WorldInfo[]> => {
        const result = await this.getReq('worlds', options)
        return result.data
      },

      active: async (options: Partial<WorldSearchRequest> = {}): Promise<WorldInfo[]> => {
        const result = await this.getReq('worlds/active', options)
        return result.data
      },

      recent: async (options: Partial<WorldSearchRequest> = {}): Promise<WorldInfo[]> => {
        const result = await this.getReq('worlds/recent', options)
        return result.data
      },

      favorites: async (options: Partial<WorldSearchRequest> = {}): Promise<WorldInfo[]> => {
        const result = await this.getReq('worlds/favorites', options)
        return result.data
      },
    }
  }

  /**
   * @deprecated
   */
  async delete(worldId: WorldId): Promise<StatusResponse> {
    const result = await this.deleteReq(`worlds/${worldId}`)
    return result.data
  }

  async getMetadata(worldId: WorldId): Promise<MetadataResponse> {
    const result = await this.getReq(`worlds/${worldId}/metadata`)
    return result.data
  }

  async getInstanceWithTags(worldId: WorldId, instanceId: InstanceId): Promise<InstanceInfo> {
    const result = await this.getReq(`worlds/${worldId}/${instanceId}`)
    return result.data
  }

}