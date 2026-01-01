import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string()
        .min(3, { message: 'Nama minimal 3 karakter' })
        .max(100, { message: 'Nama maksimal 100 karakter' }),
    email: z.string()
        .email({ message: 'Format email tidak valid' }),
    phone: z.string()
        .min(10, { message: 'Nomor telepon minimal 10 digit' })
        .regex(/^(\+62|62|0)\d{9,12}$/, { message: 'Gunakan format Indonesia (+62/62/08...)' }),
    company: z.string()
        .max(100, { message: 'Nama perusahaan maksimal 100 karakter' })
        .optional()
        .or(z.literal('')),
    projectType: z.enum(['landing-page', 'ecommerce', 'custom', 'other'], {
        message: 'Pilih tipe project',
    }),
    budget: z.enum(['1-3', '3-5', '5-10', '10+', 'tbd'], {
        message: 'Pilih range budget',
    }),
    description: z.string()
        .min(20, { message: 'Deskripsi minimal 20 karakter' })
        .max(2000, { message: 'Deskripsi maksimal 2000 karakter' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
