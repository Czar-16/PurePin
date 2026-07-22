import { z } from "zod";

export const pinterestUrlSchema = z
  .string()
  .trim()
  .min(1, "Please paste a Pinterest image address.")
  .url("Please enter a valid image address.")
  .refine((url) => url.startsWith("https://i.pinimg.com/"), {
    message: "Please enter a valid Pinterest image URL.",
  });
