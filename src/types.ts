declare global {
  namespace OptimusSDK {
    namespace Utils {
      type StringOrNumber = string | number
      type Format = {
        Date: `${DIGIT_4}-${DIGIT_2}-${DIGIT_2}`
      }
      type N = number
      type DIGIT_4 = `${N}${N}${N}${N}`
      type DIGIT_2 = `${N}${N}`
    }
    type GetParams<T extends keyof OptimusSDK.Types> = T extends keyof OptimusSDK.Types
      ? OptimusSDK.Types[T]['Params']
      : unknown
    type GetResponse<T extends keyof OptimusSDK.Types> = T extends keyof OptimusSDK.Types
      ? OptimusSDK.Types[T]['Response']
      : unknown
  }
}

export {}

// type params = OptimusSDK.GetParams<Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>
// type response = OptimusSDK.GetResponse<Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI>

// declare abstract class Class {
//   constructor(..._: any[]);
// }
// declare const instanceOfType: <T extends typeof Class>(cls: T, params?: CustomParams) => ZodType<InstanceType<T>, ZodTypeDef, InstanceType<T>>;

// export type ExractParams<ClassName extends typeof Class, MethodName> = Parameters<InstanceType<ClassName>[`${MethodName}`]>[0]
// export type ExractResponse = Awaited<ReturnType<InstanceType<typeof ClassName>[`${MethodName}`]>>
