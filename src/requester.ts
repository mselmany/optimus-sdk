import axios, { AxiosInstance } from 'axios'
import packageJson from 'package.json'
import store from './store'
import { Methods } from './methods'

export type RequesterConfig = {
  baseURL: string
}

enum BaseURLMapping {
  '[webapi]' = '/webapi',
  '[apicall]' = '/webapi/ApiCall',
  '[enum]' = '/webapi/Enum',
  '[anonymous]' = '/webapi/ApiCall/anonymous',
  '[ping]' = '/webapi/Ping',
}

class Requester {
  private store: typeof store = store
  private client!: AxiosInstance
  private baseURLMappingsTupple = Object.entries(BaseURLMapping)

  constructor() {}

  initialize(config: RequesterConfig) {
    this.client = axios.create({
      baseURL: config.baseURL,
      headers: { 'x-sdkversion': packageJson.version, token: this.store.getToken() },
    })

    this.client.interceptors.request.use(
      (config) => {
        config.headers.token = this.store.getToken()

        if (config.url?.includes('[anonymous]')) {
          delete config.headers.token
        }

        for (const [key, value] of this.baseURLMappingsTupple) {
          if (config.url?.includes(key)) {
            config.url = value
            break
          }
        }

        return config
      },
      (error) => {
        throw error
      },
    )

    return this
  }

  // webapi<ReqBody, ResBody>(apiMethod: OptimusSDK.Methods, body?: ReqBody): Promise<ResBody> {
  //   return this.client.post(`[webapi]/${apiMethod}`, body)
  // }

  apicall(apiMethod: Methods, body?: any): Promise<any> {
    return this.client.post(`[apicall]/${apiMethod}`, body)
  }

  // apicall222<T extends { Params: T['Params']; Response: T['Response'] }>(
  //   apiMethod: OptimusSDK.Methods,
  //   body?: T['Params'],
  // ): Promise<T['Response']> {
  //   return this.client.post(`[apicall]/${apiMethod}`, body)
  // }

  // enum<ReqBody, ResBody>(apiMethod: OptimusSDK.Methods, body?: ReqBody): Promise<ResBody> {
  //   return this.client.post(`[enum]/${apiMethod}`, body)
  // }

  // anonymous<ReqBody, ResBody>(apiMethod: OptimusSDK.Methods, body?: ReqBody): Promise<ResBody> {
  //   return this.client.post(`[anonymous]/${apiMethod}`, body)
  // }

  // ping<ReqBody, ResBody>(apiMethod: OptimusSDK.Methods, body?: ReqBody): Promise<ResBody> {
  //   return this.client.post(`[ping]/${apiMethod}`, body)
  // }
}

export default new Requester()
