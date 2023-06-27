export type StoreConfig = { token: string; appName: string }

class Store {
  private token?: string
  private appName?: string

  constructor() {}

  setConfig(config: StoreConfig) {
    this.token = config.token
    this.appName = config.appName
  }

  setToken(token: string) {
    this.token = token
  }

  getToken() {
    return this.token
  }
}

export default new Store()
