import ApiModule from './api-module'
import {WorldId} from '../types/common'
import {WorldDetail, WorldInfo} from '../types/world'


export default class World extends ApiModule {
  async getById(worldId: WorldId): Promise<WorldDetail> {
    const result = await this.get(`worlds/${worldId}`)
    return result.data
  }

  get list() {
    return {
      async all(options: Partial<{}> = {}): Promise<WorldInfo[]> {
        const result = await this.get('worlds', options)
        return result.data
      }
    }
  }

}