import VrcApi from './vrc-api'


let vrc = {
  async login(username: string, password: string): Promise<VrcApi> {
    let api = new VrcApi()
    await api.login(username, password)
    return api
  }
}

export default vrc