import { z } from "zod";

export const titleValidationSchema = z.object({
  title: z
    .string()
    .min(12, { message: "title is too short" })
    .max(132, { message: "title is too long" })
    .trim(),
  question: z.string().min(62, { message: "question is too short" }).trim(),
  tags: z.string().optional(),
});
export type TitleValidationSchema = z.infer<typeof titleValidationSchema>;
