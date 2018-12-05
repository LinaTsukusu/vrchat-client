import VrcApi from '../vrc-api'


export default class ApiModule {
  private vrc: VrcApi

  constructor(vrc) {
    this.vrc = vrc
  }

  protected get userId() {
    return this.vrc.userId
  }

  protected async get(url: string, params: object = {}) {
    let p = Object.assign({
      apiKey: this.vrc.apiKey,
      authToken: this.vrc.token,
    }, params)
    return await this.vrc.api.get(url, {
      params: p,
    })
  }

  protected async delete(url: string) {
    return await this.vrc.api.delete(url, {
      params: {
        apiKey: this.vrc.apiKey,
        authToken: this.vrc.token,
      },
    })
  }

  private async request(method: ('post' | 'put'), url: string, body: object = null) {
    return await this.vrc.api[method](url, body, {
      params: {
        apiKey: this.vrc.apiKey,
        authToken: this.vrc.token,
      },
    })
  }

  protected async post(url: string, body: object = null) {
    return await this.request('post', url, body)
  }

  protected async put(url: string, body: object = null) {
    return await this.request('put', url, body)
  }
}