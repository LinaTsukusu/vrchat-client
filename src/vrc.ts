import VrcApi from './vrc-api'


export default {
  async login(username: string, password: string, apiType: 'release' | 'beta' | 'dev' = 'release'): Promise<VrcApi> {
    let api = new VrcApi(apiType)
    await api.login(username, password)
    return api
  },
}
