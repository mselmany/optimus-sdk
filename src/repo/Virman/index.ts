import requester from 'src/requester'
import store from 'src/store'
import { INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI } from './types'
// import { INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI } from './types'

// export interface IVirman {
//   getStocks(body: INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI.Params): Promise<INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI.Response>
//   // getStocks<T extends INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>(body: T["params"]): Promise<T["response"]>
// }

export default class Virman {
  private store: typeof store = store
  private requester: typeof requester = requester

  constructor() {}

  async getStocks(body: { DDDDD: number }): Promise<{
    ANA: number
    SUBE: number
    MUSTERI_NO: number
    MENKUL_NO: number
    SKL_YERI: number
    MENKUL_KODU: string
    BAKIYE: number
    MALIYET: number
    UNVANI: string
    T1BAKIYE: number
    T2BAKIYE: number
    CIKIS_TALEBI: number
    BRUT_TAKAS_UYGULAMASI: number
    TEMSILCI_CIKIS_BAKIYE: number
    TEMSILCI_CIKIS_TUTAR: number
  }> {
    return await this.requester.apicall2(OptimusSDK.Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI)
  }

  async getStocks2() {
    //   return await this.requester.apicall<INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>(
    //     OptimusSDK.Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI,
    //   )
  }

  // async transferStocks(body: RequestParams['INT_MUSTERI_HISSE_EMANET_CIKIS']) {
  //   const rses = await this.requester.apicall<
  //     RequestParams['INT_MUSTERI_HISSE_EMANET_CIKIS'],
  //     ResponseModels['INT_MUSTERI_HISSE_EMANET_CIKIS']
  //   >(MethodNames.INT_MUSTERI_HISSE_EMANET_CIKIS, body)
  //   return rses
  // }
}

// type Aqwe = Pick<InstanceType<typeof Virman>, "getStocks">
// type Aqwe33= Parameters<InstanceType<typeof Virman>["getStocks"]>
