import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z
      .string()
      .email("invalid_email_address")
      .min(1, "email_is_required")
      .max(255, "email_must_be_less_than_255_characters"),

    password: z
      .string()
      .min(8, "password_must_be_at_least_8_characters_long")
      .max(255, "password_must_be_less_than_255_characters")
      .regex(/[a-zA-Z]/, "password_must_contain_at_least_one_letter")
      .regex(/[0-9]/, "password_must_contain_at_least_one_number")
      .regex(
        /[@$!%*?&]/,
        "password_must_contain_at_least_one_special_character"
      ),

    confirm_password: z
      .string()
      .min(8, "confirm_password_must_be_at_least_8_characters_long")
      .max(255, "confirm_password_must_be_less_than_255_characters"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "passwords_do_not_match",
    path: ["confirm_password"],
  });

export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z
    .string()
    .email("invalid_email_address")
    .min(1, "email_is_required")
    .max(255, "email_must_be_less_than_255_characters"),
  password: z
    .string()
    .min(1, "password_is_required")
    .max(255, "password_must_be_less_than_255_characters"),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
