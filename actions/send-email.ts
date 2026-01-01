"use server";

import { contactFormSchema, ContactFormData } from "@/lib/schema";
import nodemailer from "nodemailer";

type ActionResult = {
    success: boolean;
    message: string;
    errors?: Record<string, string[] | undefined>;
    inquiryId?: string;
};

export async function sendContactEmail(formData: ContactFormData): Promise<ActionResult> {
    // 1. Validate with Zod
    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
        return {
            success: false,
            message: "Validation error",
            errors: validationResult.error.flatten().fieldErrors,
        };
    }

    const data = validationResult.data;
    const inquiryId = `inq_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // 2. Configure Nodemailer Transporter
    // For development, we log instead of sending. In production, configure real SMTP.
    const isDev = process.env.NODE_ENV === "development";

    if (isDev) {
        console.log("--- DEV MODE: Email Not Sent ---");
        console.log("Inquiry ID:", inquiryId);
        console.log("Form Data:", data);
        console.log("--- END DEV LOG ---");

        return {
            success: true,
            message: "Terima kasih! Kami akan menghubungi Anda dalam 24 jam.",
            inquiryId,
        };
    }

    // Production Email Sending
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || "587"),
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const ownerEmail = process.env.OWNER_EMAIL || process.env.EMAIL_USER;

        // Send to Owner
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: ownerEmail,
            subject: `New Inquiry: ${data.projectType} - ${data.name}`,
            html: generateOwnerEmailHTML(data, inquiryId),
        });

        // Send Auto-Reply to Client
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: data.email,
            subject: "Terima Kasih! Kami Terima Inquiry Anda",
            html: generateClientEmailHTML(data, inquiryId),
        });

        return {
            success: true,
            message: "Terima kasih! Kami akan menghubungi Anda dalam 24 jam.",
            inquiryId,
        };
    } catch (error) {
        console.error("Email Error:", error);
        return {
            success: false,
            message: "Gagal mengirim email. Silakan coba lagi atau hubungi kami via WhatsApp.",
        };
    }
}

// --- Email HTML Templates ---

function generateOwnerEmailHTML(data: ContactFormData, inquiryId: string): string {
    return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a1a1a; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Inquiry Baru!</h1>
      </div>
      <div style="padding: 20px;">
        <h2>Client Details</h2>
        <p><strong>Nama:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telepon:</strong> ${data.phone}</p>
        <p><strong>Perusahaan:</strong> ${data.company || "-"}</p>

        <h2>Project Details</h2>
        <p><strong>Tipe:</strong> ${data.projectType}</p>
        <p><strong>Budget:</strong> Rp ${data.budget} Juta</p>
        <p><strong>Deskripsi:</strong></p>
        <p style="background: #f5f5f5; padding: 10px; border-radius: 4px;">${data.description.replace(/\n/g, "<br>")}</p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #888;">Inquiry ID: ${inquiryId} | ${new Date().toLocaleString("id-ID")}</p>
      </div>
    </body>
    </html>
  `;
}

function generateClientEmailHTML(data: ContactFormData, inquiryId: string): string {
    const whatsappLink = process.env.WHATSAPP_LINK || "https://wa.me/6281234567890";
    return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
      <div style="background: #14b8a6; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Terima Kasih!</h1>
      </div>
      <div style="padding: 20px;">
        <p>Halo ${data.name},</p>
        <p>Kami sudah menerima inquiry Anda untuk project <strong>${data.projectType}</strong>.</p>
        <p>Inquiry ID: <strong>${inquiryId}</strong></p>
        <p>Tim kami akan menghubungi Anda dalam <strong>24 jam</strong>.</p>

        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Detail yang Kami Terima:</h3>
          <p><strong>Tipe Project:</strong> ${data.projectType}</p>
          <p><strong>Budget:</strong> Rp ${data.budget} Juta</p>
        </div>

        <p>Butuh respons cepat? Chat kami langsung:</p>
        <p style="text-align: center;">
          <a href="${whatsappLink}" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
            Chat di WhatsApp
          </a>
        </p>

        <p>Terima kasih,<br><strong>DevPortfolio Team</strong></p>
      </div>
    </body>
    </html>
  `;
}
