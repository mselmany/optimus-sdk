declare global {
  namespace OptimusSDK {
    enum Methods {
      INT_RUCHAN_KULLANIM_LISTE = 'INT_RUCHAN_KULLANIM_LISTE',
      INT_RUCHAN_KULLANIM_ISLEM = 'INT_RUCHAN_KULLANIM_ISLEM',
    }
    type Utils = {
      Date: `${number}${number}${number}${number}-${number}${number}-${number}${number}`
      StringOrNumber: string | number
    }
  }
}

export type INT_RUCHAN_KULLANIM_LISTE = {
  Params: {
    TARIH: OptimusSDK.Utils['Date']
  }
  Response: {
    SYS_NO: number
    MUSTERI_NO: number
    IMKB_KODU: string
    GRUP_KODU: 'R'
    KASA: number
    ELDEKI_NOMINAL: number
    BEDELLI_NOMINAL: number
    RUCHAN_STOGU: number
    ARTIRIM_NO: number
    BEDELLI_KULLANIM_TALEBI: number
    BEDELLI_ORAN: number
    BIRIM_FIYAT: number
    ODENECEK_TL: number
    GELECEK_HISSE: number
    RUCHAN_MENKUL_NO: number
  }[]
}

export type INT_RUCHAN_KULLANIM_ISLEM = {
  Params: {
    ARTIRIM_NO: OptimusSDK.Utils['StringOrNumber']
    SYS_NO: OptimusSDK.Utils['StringOrNumber']
    RUCHAN_USER_INPUT: number
  }
  Response: boolean
}
