import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const dictionary = {
    id: {
        nav_home: 'Beranda',
        nav_portfolio: 'Portofolio',
        nav_services: 'Layanan',
        nav_contact: 'Kontak',
        hero_title: 'Fullstack Web Development untuk UMKM Indonesia',
        hero_desc: 'Membantu bisnis Anda Go Digital dengan website modern, cepat, dan terjangkau. Spesialisasi dalam Landing Page, E-Commerce, dan Custom Web Apps.',
        hero_cta_primary: 'Lihat Portofolio',
        hero_cta_secondary: 'Konsultasi Gratis',
        services_title: 'Layanan Kami',
        services_view_all: 'Lihat Semua Layanan',
        stats_projects: 'Project Selesai',
        stats_clients: 'Klien Puas',
        stats_exp: 'Tahun Pengalaman',
        featured_title: 'Project Unggulan',
        featured_subtitle: 'Beberapa hasil karya terbaik kami untuk klien.',
        featured_cta: 'Lihat Semua Project',
        cta_title: 'Siap untuk Go Digital?',
        cta_desc: 'Konsultasikan kebutuhan website Anda secara gratis hari ini.',
        cta_button: 'Hubungi Kami',
        footer_rights: 'Hak Cipta Dilindungi.',
        contact_title: 'Hubungi Kami',
        contact_desc: 'Punya ide project? Yuk diskusikan bersama!',
        contact_form_name: 'Nama Lengkap',
        contact_form_email: 'Email',
        contact_form_phone: 'Nomor WhatsApp',
        contact_form_company: 'Nama Perusahaan',
        contact_form_submit: 'Kirim Pesan',
        contact_form_sending: 'Mengirim...',
    },
    en: {
        nav_home: 'Home',
        nav_portfolio: 'Portfolio',
        nav_services: 'Services',
        nav_contact: 'Contact',
        hero_title: 'Fullstack Web Development for Global Business',
        hero_desc: 'Helping your business Go Digital with modern, fast, and affordable websites. Specializing in Landing Pages, E-Commerce, and Custom Web Apps.',
        hero_cta_primary: 'View Portfolio',
        hero_cta_secondary: 'Free Consultation',
        services_title: 'Our Services',
        services_view_all: 'View All Services',
        stats_projects: 'Projects Completed',
        stats_clients: 'Happy Clients',
        stats_exp: 'Years Experience',
        featured_title: 'Featured Projects',
        featured_subtitle: 'Some of our best work for clients.',
        featured_cta: 'View All Projects',
        cta_title: 'Ready to Go Digital?',
        cta_desc: 'Consult your website needs for free today.',
        cta_button: 'Contact Us',
        footer_rights: 'All Rights Reserved.',
        contact_title: 'Contact Us',
        contact_desc: 'Have a project idea? Let\'s discuss!',
        contact_form_name: 'Full Name',
        contact_form_email: 'Email',
        contact_form_phone: 'WhatsApp Number',
        contact_form_company: 'Company Name',
        contact_form_submit: 'Send Message',
        contact_form_sending: 'Sending...',
    },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('id');

    // Load from localStorage if available
    useEffect(() => {
        const saved = localStorage.getItem('language') as Language;
        if (saved) setLanguage(saved);
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string) => {
        const k = key as keyof typeof dictionary.id;
        return dictionary[language][k] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
