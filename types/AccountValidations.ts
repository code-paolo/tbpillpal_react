import z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "The email address field is required")
    .email("Please enter a valid email address"),
  password: z.string().min(1, "The password field is required"),
});
