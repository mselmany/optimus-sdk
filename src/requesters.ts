import axios from 'axios'
import { MethodNames } from 'src/MethodNames'
import packageJson from 'package.json' assert { type: 'json' }

const client = axios.create({
  baseURL: 'http://alnus.esube.optimusyazilim.com.tr/',
  headers: { 'x-sdkversion': packageJson.version },
})

export async function transaction<ReqBody, ResBody>(apiMethod: MethodNames, body?: ReqBody): Promise<ResBody> {
  return client.post(`/webapi/ApiCall/${apiMethod}`, body)
}
