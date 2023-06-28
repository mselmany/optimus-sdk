declare global {
  namespace OptimusSDK {
    enum Methods {
      INT_RUCHAN_KULLANIM_LISTE = 'INT_RUCHAN_KULLANIM_LISTE',
      INT_RUCHAN_KULLANIM_ISLEM = 'INT_RUCHAN_KULLANIM_ISLEM',
    }
    namespace Utils {
      type StringOrNumber = string | number
      type Format = {
        Date: `${DIGIT_4}-${DIGIT_2}-${DIGIT_2}`
      }
      type N = number
      type DIGIT_4 = `${N}${N}${N}${N}`
      type DIGIT_2 = `${N}${N}`
    }
  }
}

export type INT_RUCHAN_KULLANIM_LISTE = {
  Params: {
    TARIH: OptimusSDK.Utils.Format['Date']
  }
  Response: {
    SYS_NO: number
    MUSTERI_NO: number
    IMKB_KODU: string
    GRUP_KODU: string
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
    ARTIRIM_NO: OptimusSDK.Utils.StringOrNumber
    SYS_NO: OptimusSDK.Utils.StringOrNumber
    RUCHAN_USER_INPUT: number
  }
  Response: boolean
}

import { z } from 'zod'

export const INT_RUCHAN_KULLANIM_LISTE_SCHEME = {
  Params: z.object({
    TARIH: z.string({ description: 'YYYY-MM-DD' }),
  }),
  Response: z
    .object({
      TARIH: z.string().datetime(),
      SYS_NO: z.number(),
      MUSTERI_NO: z.number(),
      IMKB_KODU: z.string(),
      GRUP_KODU: z.string(),
      KASA: z.number(),
      ELDEKI_NOMINAL: z.number(),
      BEDELLI_NOMINAL: z.number(),
      RUCHAN_STOGU: z.number(),
      ARTIRIM_NO: z.number(),
      BEDELLI_KULLANIM_TALEBI: z.number(),
      BEDELLI_ORAN: z.number(),
      BIRIM_FIYAT: z.number(),
      ODENECEK_TL: z.number(),
      GELECEK_HISSE: z.number(),
      RUCHAN_MENKUL_NO: z.number(),
    })
    .array(),
}

export type INT_RUCHAN_KULLANIM_LISTE_ZOD = {
  Params: z.infer<typeof INT_RUCHAN_KULLANIM_LISTE_SCHEME.Params>
  Response: z.infer<typeof INT_RUCHAN_KULLANIM_LISTE_SCHEME.Response>
}
