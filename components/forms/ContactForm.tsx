"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';
import { useState, useTransition } from 'react';
import { contactFormSchema, ContactFormData } from '@/lib/schema';
import { sendContactEmail } from '@/actions/send-email';

export function ContactForm() {
    const [isPending, startTransition] = useTransition();
    const [serverError, setServerError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            projectType: 'landing-page',
            budget: '1-3',
        },
    });

    const inputClasses = "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
    const errorClasses = "text-xs text-red-500 mt-1";

    const onSubmit = (data: ContactFormData) => {
        setServerError(null);
        startTransition(async () => {
            const result = await sendContactEmail(data);

            if (result.success) {
                setIsSuccess(true);
                reset();
            } else {
                if (result.errors) {
                    // Map server errors back to form fields
                    Object.entries(result.errors).forEach(([field, messages]) => {
                        if (messages && messages.length > 0) {
                            setError(field as keyof ContactFormData, { message: messages[0] });
                        }
                    });
                }
                setServerError(result.message);
            }
        });
    };

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
                <h3 className="text-2xl font-bold text-green-800 mb-2">Pesan Terkirim!</h3>
                <p className="text-green-700 mb-6">Terima kasih telah menghubungi kami. Tim kami akan membalas pesan Anda dalam waktu 24 jam.</p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
                    Kirim Pesan Lain
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {serverError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                    {serverError}
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className={labelClasses}>Nama Lengkap *</label>
                    <input {...register('name')} className={inputClasses} placeholder="John Doe" />
                    {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                </div>
                <div>
                    <label className={labelClasses}>Email *</label>
                    <input {...register('email')} className={inputClasses} placeholder="john@example.com" />
                    {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className={labelClasses}>Nomor WhatsApp *</label>
                    <input {...register('phone')} className={inputClasses} placeholder="081234567890" />
                    {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
                </div>
                <div>
                    <label className={labelClasses}>Nama Perusahaan / Bisnis</label>
                    <input {...register('company')} className={inputClasses} placeholder="PT Sukses Makmur" />
                    {errors.company && <p className={errorClasses}>{errors.company.message}</p>}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className={labelClasses}>Jenis Project *</label>
                    <select {...register('projectType')} className={inputClasses}>
                        <option value="landing-page">Landing Page</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="custom">Custom Web App</option>
                        <option value="other">Lainnya</option>
                    </select>
                    {errors.projectType && <p className={errorClasses}>{errors.projectType.message}</p>}
                </div>
                <div>
                    <label className={labelClasses}>Estimasi Budget *</label>
                    <select {...register('budget')} className={inputClasses}>
                        <option value="1-3">Rp 1 - 3 Juta</option>
                        <option value="3-5">Rp 3 - 5 Juta</option>
                        <option value="5-10">Rp 5 - 10 Juta</option>
                        <option value="10+">Di atas Rp 10 Juta</option>
                        <option value="tbd">Belum ditentukan</option>
                    </select>
                    {errors.budget && <p className={errorClasses}>{errors.budget.message}</p>}
                </div>
            </div>

            <div>
                <label className={labelClasses}>Ceritakan Project Anda *</label>
                <textarea {...register('description')} className={`${inputClasses} min-h-[120px]`} placeholder="Saya ingin membuat website untuk bisnis fashion online saya..." />
                {errors.description && <p className={errorClasses}>{errors.description.message}</p>}
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                {isPending ? 'Mengirim...' : 'Kirim Pesan'}
            </Button>
        </form>
    );
}
