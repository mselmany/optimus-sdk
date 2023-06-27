import requester, { RequesterConfig } from 'src/requester'
import store, { StoreConfig } from 'src/store'

// import GenericRequest from './repo/GenericRequest'
import Virman from './repo/Virman'

type InitParams = StoreConfig & RequesterConfig

export default class OptimusSDK {
  private store: typeof store = store
  private requester: typeof requester = requester

  // request: GenericRequest
  virman: Virman

  constructor(config: InitParams) {
    this.store.setConfig({ token: config.token, appName: config.appName })
    this.requester.initialize({ baseURL: config.baseURL })

    // this.request = new GenericRequest()
    this.virman = new Virman()
  }

  async sert() {
    const as = await this.virman.getStocks({ DDDDD: 12 })
  }
}
