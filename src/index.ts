import { MethodNames } from './MethodNames'
import { RequestTypes } from './RequestTypes'
import { ResponseTypes } from './ResponseTypes'
import { transaction } from './requesters'

type InitParams = { token: string }

export default class WebApiSdk {
  token

  /**
   * WebApiSdk config.
   *
   * @param config - gerekli bilgiler
   * @param config.token - apiden veri alabilmek için gerekli token
   * @returns WebApiSdk instance.
   */
  constructor(config: InitParams) {
    this.token = config.token
  }

  async login({ username, password }: { username: string; password: string }) {
    console.log({ username, password })
    // const res = await transaction<RequestTypes["INT_HESAP_OZETI_MAIL_GONDER"], ResponseTypes["INT_HESAP_OZETI_MAIL_GONDER"]>(MethodNames.AL_SAT, { BASLANGIC: "asd", EMAIL: "adsdsad@asd.com" })
    return 'mamm--'
  }
}
