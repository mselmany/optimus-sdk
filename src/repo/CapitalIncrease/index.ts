import requester from 'src/requester'
import store from 'src/store'
import { Methods } from 'src/methods'

export class CapitalIncrease {
  private store: typeof store = store
  private requester: typeof requester = requester

  constructor() {}

  async getAcquireList(
    body: OptimusSDK.GetParams<Methods.INT_RUCHAN_KULLANIM_LISTE>,
  ): Promise<OptimusSDK.GetResponse<Methods.INT_RUCHAN_KULLANIM_LISTE>> {
    return await this.requester.apicall(Methods.INT_RUCHAN_KULLANIM_LISTE, body)
  }

  async sendAcquireRequest(
    body: OptimusSDK.GetParams<Methods.INT_RUCHAN_KULLANIM_ISLEM>,
  ): Promise<OptimusSDK.GetResponse<Methods.INT_RUCHAN_KULLANIM_ISLEM>> {
    return await this.requester.apicall(Methods.INT_RUCHAN_KULLANIM_ISLEM, body)
  }
}
