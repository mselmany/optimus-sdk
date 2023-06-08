import WebApiSdk from './'

describe('WebApiSdk methods testing...', () => {
  let client: WebApiSdk

  beforeAll(() => {
    client = new WebApiSdk({ token: 'qwdas' })
  })

  test('login success', () => {
    return client.login({ username: 'mamm', password: '123' }).then((data) => {
      expect(data).toBe('mamm--')
    })
  })
})
