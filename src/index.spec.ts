import axios from 'axios'
import nock from 'nock'
import { OptimusSDK } from './'

axios.defaults.adapter = 'http'
axios.defaults.baseURL = 'http://alnus.esube.optimusyazilim.com.tr/'

describe('OptimusSDK methods testing...', () => {
  let client: OptimusSDK

  beforeAll(() => {
    client = new OptimusSDK({ token: 'asdasd', appName: 'sssdwe', baseURL: 'urllll' })
  })

  test('Method: INT_HESAP_OZETI_MAIL_GONDER', async () => {
    const body = { EMAIL: 'asd', BASLANGIC: 'ads' }
    const res = { SUCCESS: true, MESSAGE: 'asdad' }
    // axios.post.mockResolvedValue(res)
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    // const scope = await axios.post(`/webapi/ApiCall/INT_HESAP_OZETI_MAIL_GONDER`).reply(200, 'test response')

    // const scope = nock('http://alnus.esube.optimusyazilim.com.tr/')
    //   .post(`/webapi/ApiCall/INT_HESAP_OZETI_MAIL_GONDER`)
    //   .reply(200, res)

    // // const data = await client.login(body)
    // // expect(data).toBe(res)

    // // client.request.api()

    // // Assert that the expected request was made.
    // scope.done()
  })
})
