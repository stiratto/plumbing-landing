import { z } from "astro/zod";
import { isValidPhoneNumber, parsePhoneNumberWithError } from "libphonenumber-js"

function phone(schema: z.ZodString) {
   return schema
      .refine(isValidPhoneNumber)
      .transform((v) => parsePhoneNumberWithError(v).number.toString())
}

export const QuoteSchema = z.object({
   name: z.string().min(1),
   phone: phone(z.string()),
   email: z.string().email(),
   service_needed: z.string().min(1),
   message: z.optional(z.string())
})


export type TQuoteSchema = z.infer<typeof QuoteSchema>


