import { z } from "astro/zod";

const GtmIdSchema = z
  .string()
  .regex(/^GTM-[0-9A-Z]{4,8}$/, {
    message:
      "Invalid GTM ID format. Must be like 'GTM-XXXXXXX' (4-8 uppercase letters/numbers).",
  });

export const StarlightGTMConfigSchema = z.object({
  gtmId: GtmIdSchema,
});

export type StarlightGTMUserConfig = z.infer<typeof StarlightGTMConfigSchema>;
export type StarlightGTMConfig = z.infer<typeof StarlightGTMConfigSchema>;
