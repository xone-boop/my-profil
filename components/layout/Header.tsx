"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/components/LanguageContext';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: t('nav_home'), href: '/' },
        { name: t('nav_portfolio'), href: '/portfolio' },
        { name: t('nav_services'), href: '/services' },
        { name: t('nav_contact'), href: '/contact' },
    ];

    const toggleLanguage = () => {
        setLanguage(language === 'id' ? 'en' : 'id');
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
                    Dev<span className="text-teal-500">Portfolio</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-teal-600",
                                pathname === item.href ? "text-teal-600" : "text-gray-600"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="h-6 w-px bg-gray-200" />

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
                    >
                        <Globe size={16} />
                        <span className="uppercase">{language}</span>
                    </button>

                    <Button size="sm" href="https://wa.me/6281234567890" isExternal>
                        Chat WhatsApp
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 text-sm font-medium text-gray-600"
                    >
                        <span className="uppercase">{language}</span>
                    </button>

                    <button
                        className="p-2 text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-5 md:hidden shadow-lg animate-fade-in flex flex-col gap-4">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-teal-600",
                                    pathname === item.href ? "text-teal-600" : "text-gray-600"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button size="sm" href="https://wa.me/6281234567890" isExternal className="w-full">
                            Chat WhatsApp
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
