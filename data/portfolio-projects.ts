import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: '1',
        slug: 'online-boutique-store',
        title: 'GlowUp Beauty Store',
        category: 'ecommerce',
        client: 'GlowUp Indonesia',
        description: 'E-commerce skincare dan kosmetik dengan fitur virtual try-on dan integrasi pembayaran otomatis.',
        challenge: 'Klien membutuhkan platform yang dapat menangani flash sale dengan traffic tinggi dan sinkronisasi stok realtime.',
        solution: 'Membangun arsitektur scalable menggunakan Next.js dan Supabase, dengan caching strategy agresif untuk halaman produk.',
        results: [
            'Penjualan meningkat 200% dalam bulan pertama',
            'Load time stabil di bawah 1.5s saat flash sale',
            'Integrasi dengan 5 ekspedisi pengiriman nasional'
        ],
        techStack: {
            frontend: ['Next.js 14', 'React', 'Tailwind CSS', 'Framer Motion'],
            backend: ['Supabase', 'Node.js', 'Redis'],
            other: ['Midtrans', 'Vercel Analytics']
        },
        images: {
            thumbnail: 'https://placehold.co/600x800/14b8a6/ffffff?text=Skincare+Store',
            hero: 'https://placehold.co/1200x630/14b8a6/ffffff?text=Beauty+Store+Hero',
            screenshots: [
                'https://placehold.co/800x600/f3f4f6/1f2937?text=Product+Page',
                'https://placehold.co/800x600/f3f4f6/1f2937?text=Checkout+Flow'
            ]
        },
        metrics: [
            { label: 'Conversion Rate', value: '4.5%' },
            { label: 'Monthly Users', value: '50k+' },
            { label: 'PageSpeed', value: '98' }
        ],
        learnings: [
            'Optimasi gambar sangat krusial untuk e-commerce fashion/beauty',
            'User experience checkout harus sesimpel mungkin'
        ]
    },
    {
        id: '2',
        slug: 'coffee-shop-chain',
        title: 'KopiSenja Loyalty App',
        category: 'custom',
        client: 'KopiSenja Chain',
        description: 'Web app untuk membership dan pre-order kopi di 20+ cabang.',
        challenge: 'Menggantikan sistem kartu member fisik yang sering hilang dan tidak memberikan data customer insight.',
        solution: 'Progressive Web App (PWA) yang memungkinkan scan QR code untuk poin dan order tracking real-time.',
        results: [
            '10,000+ member terdaftar dalam 3 bulan',
            'Waktu antrian berkurang 40% berkat pre-order',
            'Repeat order meningkat signifikan'
        ],
        techStack: {
            frontend: ['Next.js', 'PWA', 'Tailwind'],
            backend: ['Firebase', 'Cloud Functions'],
            other: ['Google Maps API', 'WhatsApp API']
        },
        images: {
            thumbnail: 'https://placehold.co/600x800/1a1a1a/ffffff?text=Coffee+App',
            hero: 'https://placehold.co/1200x630/1a1a1a/ffffff?text=KopiSenja+Hero',
            screenshots: [
                'https://placehold.co/800x600/ffffff/000000?text=Order+Screen',
                'https://placehold.co/800x600/ffffff/000000?text=Loyalty+Card'
            ]
        },
        metrics: [
            { label: 'Active Users', value: '8k' },
            { label: 'Stores', value: '25' }
        ],
        learnings: [
            'PWA bisa menjadi alternatif cost-effective dibanding Native App',
            'QR Code scanner di web membutuhkan handling kamera yang robust'
        ]
    },
    {
        id: '3',
        slug: 'tech-startup-landing',
        title: 'SaaS Analytics Landing',
        category: 'landing-page',
        client: 'DataFlow Systems',
        description: 'High-converting landing page untuk startup SaaS analitik data B2B.',
        challenge: 'Menjelaskan produk teknis yang kompleks menjadi visual yang mudah dipahami oleh decision maker.',
        solution: 'Menggunakan visualisasi data interaktif dan storytelling scrolling experience.',
        results: [
            'Bounce rate turun dari 65% ke 35%',
            'Lead generation meningkat 3x lipat',
            'Featured di desain blog lokal'
        ],
        techStack: {
            frontend: ['React', 'Three.js', 'GSAP'],
            backend: [],
            other: ['HubSpot Integration']
        },
        images: {
            thumbnail: 'https://placehold.co/600x800/3b82f6/ffffff?text=SaaS+Landing',
            hero: 'https://placehold.co/1200x630/3b82f6/ffffff?text=SaaS+Hero',
            screenshots: [
                'https://placehold.co/800x600/f0f9ff/000000?text=Hero+Animation',
                'https://placehold.co/800x600/f0f9ff/000000?text=Pricing+Table'
            ]
        },
        metrics: [
            { label: 'Load Time', value: '0.8s' },
            { label: 'Leads/Mo', value: '150+' }
        ],
        learnings: [
            'Micro-interactions meningkatkan engagement audiens B2B',
            'Copywriting yang jelas lebih penting daripada jargon teknis'
        ]
    }
];
