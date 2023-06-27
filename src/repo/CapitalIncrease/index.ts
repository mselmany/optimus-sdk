import requester from 'src/requester'
import store from 'src/store'
import { INT_RUCHAN_KULLANIM_ISLEM, INT_RUCHAN_KULLANIM_LISTE } from './types'

export default class CapitalIncrease {
  private store: typeof store = store
  private requester: typeof requester = requester

  constructor() {}

  async getAcquireList(body: INT_RUCHAN_KULLANIM_LISTE['Params']): Promise<INT_RUCHAN_KULLANIM_LISTE['Response']> {
    return await this.requester.apicall(OptimusSDK.Methods.INT_RUCHAN_KULLANIM_LISTE, body)
  }

  async sendAcquireRequest(body: INT_RUCHAN_KULLANIM_ISLEM['Params']): Promise<INT_RUCHAN_KULLANIM_ISLEM['Response']> {
    return await this.requester.apicall(OptimusSDK.Methods.INT_RUCHAN_KULLANIM_ISLEM, body)
  }
}
