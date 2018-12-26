import ApiModule from './api-module'
import {InstanceId, WorldId} from '../types/common'
import {InstanceInfo, MetadataResponse, WorldDetail, WorldInfo, WorldSearchRequest} from '../types/world'


export default class World extends ApiModule {
  async getById(worldId: WorldId): Promise<WorldDetail> {
    return await this.getReq(`worlds/${worldId}`)
  }

  get search() {
    return {
      all: async (options: Partial<WorldSearchRequest> = {}): Promise<WorldInfo[]> => {
        return await this.getReq('worlds', options)
      },

      active: async (options: Partial<WorldSearchRequest> = {}): Promise<WorldInfo[]> => {
        return await this.getReq('worlds/active', options)
      },

      recent: async (options: Partial<WorldSearchRequest> = {}): Promise<WorldInfo[]> => {
        return await this.getReq('worlds/recent', options)
      },

      favorites: async (options: Partial<WorldSearchRequest> = {}): Promise<WorldInfo[]> => {
        return await this.getReq('worlds/favorites', options)
      },
    }
  }

  async getMetadata(worldId: WorldId): Promise<MetadataResponse> {
    return await this.getReq(`worlds/${worldId}/metadata`)
  }

  async getInstanceWithTags(worldId: WorldId, instanceId: InstanceId): Promise<InstanceInfo> {
    return await this.getReq(`worlds/${worldId}/${instanceId}`)
  }

}