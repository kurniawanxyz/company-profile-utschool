import { z } from "zod";

export type DirectorType = {
  id: string;
  photo_profile: string;
  name: string;
  message: string;
  description: string;
  position: string;
  image1: string;
  image2: string;
  image3: string;
  video: string;
};

export const DirectorSchema = z.object({
  id: z.string().optional(), // ID bersifat opsional
  photo_profile: z.string().min(5).max(255), // Validasi panjang URL atau string
  name: z.string().min(3).max(500), // Nama dengan panjang minimal 3 dan maksimal 500 karakter
  message: z.string().min(5).max(2000), // Pesan dengan panjang 5-2000 karakter
  description: z.string().min(5).max(1000), // Deskripsi panjang 5-1000 karakter
  position: z.string().min(5).max(255), // Posisi panjang 5-255 karakter
  image1: z.string().url("Image1 must be a valid URL"), // URL valid untuk image1
  image2: z.string().url("Image2 must be a valid URL"), // URL valid untuk image2
  image3: z.string().url("Image3 must be a valid URL"), // URL valid untuk image3
  video: z
    .string()
    .url("Video must be a valid URL") // Validasi video sebagai URL
    .optional(), // Bersifat opsional
});
