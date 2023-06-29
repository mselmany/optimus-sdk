import { Methods } from 'src/methods'

declare global {
  namespace OptimusSDK {
    interface Types {
      [Methods.INT_RUCHAN_KULLANIM_LISTE]: {
        Params: {
          TARIH: OptimusSDK.Utils.Format['Date']
        }
        Response: {
          BRUT_TAKAS_UYGULAMASI: number
          TEMSILCI_CIKIS_BAKIYE: number
          TEMSILCI_CIKIS_TUTAR: number
        }[]
      }
      [Methods.INT_RUCHAN_KULLANIM_ISLEM]: {
        Params: {
          ARTIRIM_NO: OptimusSDK.Utils.StringOrNumber
          SYS_NO: OptimusSDK.Utils.StringOrNumber
          RUCHAN_USER_INPUT: number
        }
        Response: boolean
      }
    }
  }
}
