import Link from 'next/link';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 mb-4 block">
                            Dev<span className="text-teal-500">Portfolio</span>
                        </Link>
                        <p className="text-gray-600 max-w-sm">
                            Membangun solusi digital professional untuk UMKM dan bisnis di Indonesia. Fokus pada performa, desain, dan konversi.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/portfolio" className="text-gray-600 hover:text-teal-600">Portfolio</Link></li>
                            <li><Link href="/services" className="text-gray-600 hover:text-teal-600">Services</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-teal-600">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-500 hover:text-teal-600"><Github size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-teal-600"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-teal-600"><Instagram size={20} /></a>
                            <a href="mailto:hello@example.com" className="text-gray-500 hover:text-teal-600"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
                    <p>Made in Indonesia 🇮🇩</p>
                </div>
            </div>
        </footer>
    );
}
