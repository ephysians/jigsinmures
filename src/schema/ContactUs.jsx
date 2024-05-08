import { z } from "zod";

export const RegisterFormZodSchema = () => {
  return z.object({
    firstName: z
      .string({ required_error: "First name is required" })
      .regex(/^[a-zA-Z][a-zA-Z' ]*$/, {
        message: "Invalid character entered",
      })
      .min(1, { message: "First name is required" })
      .max(50, { message: "Maximum of 50 characters" }),
    lastName: z
      .string({ required_error: "Last name is required" })
      .regex(/^[a-zA-Z][a-zA-Z' ]*$/, {
        message: "Invalid character entered",
      })
      .min(1, { message: "Last name is required" })
      .max(50, { message: "Maximum of 50 characters" }),
    mobileNumber: z
      .string({ required_error: "Phone number is required" })
      .regex(/^[0-9]+$/, { message: "Input field must be a number" })
      // .length(10, { message: "Phone number must be 10 characters" }),
      .min(10, { message: "Minimum of 10 characters" })
      .max(11, { message: "Maximum of 11 characters" })
      .refine(
        (string) =>
          !(
            (val.length === 11 && val.charAt(0) !== "0") ||
            (val.length === 10 && val.charAt(0) === "0")
          ),
        {
          message: "Invalid phone number",
        }
      ),
    // promoCode: z
    //   .string()
    //   .regex(/^[A-Za-z0-9]+$/, {
    //     message: "Special characters and blank spaces are not allowed.",
    //   })
    //   .optional()
    //   .or(z.literal("")),
    emailAddress: z
      .string({ required_error: "Email is required" })
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" }),
    // password: z
    //   .string({ required_error: "Password is required" })
    //   .min(1, { message: "Password is required" }),
    // //   .min(8, { message: "Minimum of 8 characters" })
    // //   .regex(/(?=.*[A-Z])/, { message: "At least one uppercase letter" })
    // //   .regex(/(?=.*\d)/, { message: "At least one number" })
    // //   .regex(/[!@#$%^&*(){}[\]<>?/|.:;_-]/, {
    // //     message: "At least one special character",
    // //   }),
    // referral: z.string().optional(),
  });
};
