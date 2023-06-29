import { Methods } from 'src/methods'

declare global {
  namespace OptimusSDK {
    interface Types {
      [Methods.INT_MUSTERI_HISSE_EMANET_CIKIS_STOK_LISTESI]: {
        Params: {
          FROM_DATE: string
        }
        Response: {
          ANA: number
          SUBE: number
          MUSTERI_NO: number
          MENKUL_NO: number
          SKL_YERI: number
          MENKUL_KODU: string
          BAKIYE: number
          MALIYET: number
          UNVANI: string
          T1BAKIYE: number
          T2BAKIYE: number
          CIKIS_TALEBI: number
          BRUT_TAKAS_UYGULAMASI: number
          TEMSILCI_CIKIS_BAKIYE: number
          TEMSILCI_CIKIS_TUTAR: number
        }[]
      }
    }
  }
}
