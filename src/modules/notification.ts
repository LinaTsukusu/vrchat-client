import ApiModule from './api-module'
import {UserId} from '../types/common'
import {NotificationType} from '../types/notification'

export default class Notification extends ApiModule {
  async send(userId: UserId, type: NotificationType) {

  }
}