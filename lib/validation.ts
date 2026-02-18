import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  businessName: z.string().min(1, "Business name is required").max(200),
  phone: z.string().min(6, "Valid phone number required").max(20),
  email: z.string().email("Valid email required"),
  tradeType: z.enum([
    "Plumber",
    "Electrician",
    "Roofer",
    "Builder",
    "Landscaper",
    "Other",
  ]),
  interest: z.enum([
    "AI agent for inbound calls",
    "Wider AI automation for my business",
    "Both / not sure yet",
  ]),
  message: z.string().max(2000).optional().default(""),
});

export type ContactFormData = z.infer<typeof contactSchema>;
