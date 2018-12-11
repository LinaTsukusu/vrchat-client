import VrcApi from './vrc-api'


let vrc = {
  async login(username: string, password: string, apiType: 'release' | 'beta' | 'dev' = 'release'): Promise<VrcApi> {
    let api = new VrcApi(apiType)
    await api.login(username, password)
    return api
  },
}

export default vrc