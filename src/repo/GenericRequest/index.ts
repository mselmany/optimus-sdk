import { Methods } from 'src/methods'
import requester from 'src/requester'
import store from 'src/store'

export class GenericRequest {
  private store: typeof store = store
  private requester: typeof requester = requester

  constructor() {}

  async api<T extends Methods>(methodName: Methods, body: OptimusSDK.GetParams<T>): Promise<OptimusSDK.GetResponse<T>> {
    return await this.requester.apicall(methodName, body)
  }

  // async enum() {
  //   const rses = await this.requester.apicall<INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>(
  //     OptimusSDK.Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI2,
  //   )
  //   return rses
  // }

  // async anonymous() {
  //   const rses = await this.requester.apicall<INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>(
  //     OptimusSDK.Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI2,
  //   )
  //   return rses
  // }

  // async ping() {
  //   const rses = await this.requester.apicall<INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>(
  //     OptimusSDK.Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI2,
  //   )
  //   return rses
  // }
}
