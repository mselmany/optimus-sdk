import requester, { RequesterConfig } from 'src/requester'
import store, { StoreConfig } from 'src/store'

import { GenericRequest } from './repo/GenericRequest'
import { CapitalIncrease } from './repo/CapitalIncrease'
import { Methods } from './methods'

export type InitParams = StoreConfig & RequesterConfig

export class OptimusSDK {
  private store: typeof store = store
  private requester: typeof requester = requester

  /**
   * All available api methods
   */
  static methods = Methods

  generic: InstanceType<typeof GenericRequest>
  capitalIncrease: CapitalIncrease

  /**
   * @param config - configuration for OptimusSDK
   * @param options.token - token from login steps
   * @param options.appName - your appname
   * @param options.baseURL - your damain url (like: example.esube.com)
   */
  constructor(config: InitParams) {
    this.store.setConfig({ token: config.token, appName: config.appName })
    this.requester.initialize({ baseURL: config.baseURL })

    this.generic = new GenericRequest()
    this.capitalIncrease = new CapitalIncrease()
  }

  async exampleByFeature() {
    const data = await this.capitalIncrease.getAcquireList({ TARIH: '2023-06-28' })
    console.log(data[0].TEMSILCI_CIKIS_BAKIYE)

    const isOk = await this.capitalIncrease.sendAcquireRequest({
      ARTIRIM_NO: 'sds',
      RUCHAN_USER_INPUT: 123,
      SYS_NO: 'qwe',
    })
    console.log(isOk)
  }

  async exampleByGeneric(params: OptimusSDK.GetParams<Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>) {
    const data = await this.generic.api<Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>(
      Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI,
      params,
    )
    console.log(data.map((i) => i.BRUT_TAKAS_UYGULAMASI))

    return data
  }
}
