import ApiModule from './api-module'
import {AvatarId} from '../types/common'
import {AvatarInfo} from '../types/avatar'
import {UserInfoResponse} from '../types/user'

export default class Avatar extends ApiModule {
  async getById(avatarId: AvatarId): Promise<AvatarInfo> {
    return await this.getReq(`avatars/${avatarId}`)
  }

  async choose(avatarId: AvatarId): Promise<UserInfoResponse> {
    return await this.putReq(`avatars/${avatarId}/select`)
  }

}