import ApiModule from './api-module'


export default class User extends ApiModule {
  async getFriends(options: Partial<{n: number, offset: number, offline: boolean}> = {}): Promise<Array<object>> {
    let result = await this.get(`/auth/user/friends`, options)
    return result.data
  }
}