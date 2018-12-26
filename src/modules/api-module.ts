import VrcApi from '../vrc-api'


export default class ApiModule {
  private vrc: VrcApi

  constructor(vrc) {
    this.vrc = vrc
  }

  protected get userId() {
    return this.vrc.userId
  }

  protected async getReq(url: string, params: object = {}) {
    const result = await this.vrc.api.get(url, {
      params: params,
    })
    return result.data
  }

  protected async deleteReq(url: string) {
    const result = await this.vrc.api.delete(url)
    return result.data
  }

  private async request(method: ('post' | 'put'), url: string, body: object = null) {
    const result = await this.vrc.api[method](url, body)
    return result.data
  }

  protected async postReq(url: string, body: object = null) {
    return await this.request('post', url, body)
  }

  protected async putReq(url: string, body: object = null) {
    return await this.request('put', url, body)
  }
}