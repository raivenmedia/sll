import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  subject: z.string().min(4),
  message: z.string().min(20),
});

export const quoteSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  service: z.string().min(2),
  budget: z.string().min(2),
  description: z.string().min(30),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type QuoteInput = z.infer<typeof quoteSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
