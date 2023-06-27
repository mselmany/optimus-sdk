import requester from 'src/requester'
import store from 'src/store'
import { INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI } from './types'

export default class GenericRequest {
  private store: typeof store = store
  private requester: typeof requester = requester

  constructor() {}

  async api() {
    const rses = await this.requester.apicall<INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>(
      OptimusSDK.Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI2,
    )
    return rses
  }

  async enum() {
    const rses = await this.requester.apicall<INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>(
      OptimusSDK.Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI2,
    )
    return rses
  }

  async anonymous() {
    const rses = await this.requester.apicall<INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>(
      OptimusSDK.Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI2,
    )
    return rses
  }

  async ping() {
    const rses = await this.requester.apicall<INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>(
      OptimusSDK.Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI2,
    )
    return rses
  }
}
