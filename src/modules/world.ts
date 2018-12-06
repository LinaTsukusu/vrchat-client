import ApiModule from './api-module'
import {WorldId} from '../types/common'
import {WorldResponse} from '../types/world'


export default class World extends ApiModule {
  async getById(worldId: WorldId): Promise<WorldResponse> {
    const result = await this.get(`worlds/${worldId}`)
    return result.data
  }

  get list() {
    return {
      async all(options: Partial<{}> = {}): Promise<[]> {
        const result = await this.get('worlds', options)
        return result.data
      }
    }
  }

}