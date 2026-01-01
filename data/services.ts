import { Service } from "@/types";
import { Laptop, ShoppingBag, Code } from "lucide-react";

export const services: Service[] = [
    {
        id: "landing-page",
        title: "Landing Page",
        slug: "landing-page",
        description: "Stunning landing pages yang dirancang khusus untuk meningkatkan konversi penjualan produk atau jasa Anda.",
        icon: Laptop,
        process: [
            { step: 1, title: "Discovery & Strategy", description: "Analisis target market dan tujuan bisnis", duration: "3-5 hari" },
            { step: 2, title: "Design & Wireframing", description: "Mockup visual dan prototyping", duration: "3-5 hari" },
            { step: 3, title: "Development", description: "Implementasi kode responsive", duration: "5-7 hari" },
            { step: 4, title: "Testing & Launch", description: "Optimasi performa dan SEO", duration: "2-3 hari" }
        ],
        timeline: "1-2 Minggu",
        startingPrice: "Rp 1.500.000",
        deliverables: ["Responsive Design", "SEO Basic", "Form Integration", "Analytics Setup"]
    },
    {
        id: "ecommerce",
        title: "E-Commerce",
        slug: "ecommerce",
        description: "Toko online fungsional lengkap dengan sistem manajemen produk, keranjang belanja, dan pembayaran otomatis.",
        icon: ShoppingBag,
        process: [
            { step: 1, title: "Planning", description: "Struktur katalog dan alur belanja", duration: "5-7 hari" },
            { step: 2, title: "Design & UX", description: "Interface toko yang user-friendly", duration: "5-7 hari" },
            { step: 3, title: "Development", description: "Integrasi database dan payment gateway", duration: "7-10 hari" },
            { step: 4, title: "Testing", description: "Uji coba transaksi dan keamanan", duration: "3-5 hari" }
        ],
        timeline: "3-4 Minggu",
        startingPrice: "Rp 5.000.000",
        deliverables: ["Product Management", "Shopping Cart", "Payment Gateway (Midtrans)", "Admin Dashboard"]
    },
    {
        id: "custom-app",
        title: "Custom Web App",
        slug: "custom-app",
        description: "Aplikasi web berbasis kebutuhan spesifik bisnis Anda, mulai dari sistem booking hingga dashboard internal.",
        icon: Code,
        process: [
            { step: 1, title: "Consultation", description: "Deep dive kebutuhan sistem", duration: "Ongoing" },
            { step: 2, title: "Architecture", description: "Perancangan database dan sistem", duration: "Custom" },
            { step: 3, title: "Development", description: "Pengerjaan frontend dan backend", duration: "Custom" },
            { step: 4, title: "Deployment", description: "Setup server dan domains", duration: "1-2 hari" }
        ],
        timeline: "4+ Minggu",
        startingPrice: "Custom Quote",
        deliverables: ["Tailor-made Features", "Scalable Database", "API Integration", "Full Source Code"]
    }
];
