import requester, { RequesterConfig } from 'src/requester'
import store, { StoreConfig } from 'src/store'

// import GenericRequest from './repo/GenericRequest'
import CapitalIncrease from './repo/CapitalIncrease'

type InitParams = StoreConfig & RequesterConfig

export default class OptimusSDK {
  private store: typeof store = store
  private requester: typeof requester = requester

  // request: GenericRequest
  capitalIncrease: CapitalIncrease

  constructor(config: InitParams) {
    this.store.setConfig({ token: config.token, appName: config.appName })
    this.requester.initialize({ baseURL: config.baseURL })

    // this.request = new GenericRequest()
    this.capitalIncrease = new CapitalIncrease()
  }

  async example() {
    const data = await this.capitalIncrease.getAcquireList({ TARIH: '2023-06-28' })
    console.log(data[0].BEDELLI_NOMINAL)

    const isOk = await this.capitalIncrease.sendAcquireRequest({
      ARTIRIM_NO: 'sds',
      RUCHAN_USER_INPUT: 123,
      SYS_NO: 'qwe',
    })
    console.log(isOk)
  }
}
