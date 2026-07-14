import { z } from "zod";

export const pinterestUrlSchema = z
  .string()
  .trim()
  .min(1, "Please paste a Pinterest image URL.")
  .url("Please enter a valid URL.")
  .refine((url) => url.startsWith("https://i.pinimg.com/"), {
    message: "Please enter a valid Pinterest image URL.",
  });
