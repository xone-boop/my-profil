import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, MessageSquare, MapPin, Clock } from 'lucide-react';

export const metadata = {
    title: 'Contact | DevPortfolio',
    description: 'Hubungi kami untuk konsultasi gratis mengenai kebutuhan website Anda.',
};

export default function ContactPage() {
    return (
        <>
            <Section className="bg-gray-50 pt-32 pb-16">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
                    <p className="text-gray-600">
                        Siap mendigitalkan bisnis Anda? Isi formulir di bawah atau hubungi kami melalui WhatsApp.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-lg mb-6">Contact Info</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                                        <a href="https://wa.me/6281234567890" target="_blank" className="text-gray-900 font-semibold hover:text-teal-600">+62 812-3456-7890</a>
                                        <p className="text-xs text-gray-400 mt-1">Fast Response</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Email</p>
                                        <a href="mailto:hello@example.com" className="text-gray-900 font-semibold hover:text-teal-600">hello@example.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Location</p>
                                        <p className="text-gray-900 font-semibold">Jakarta, Indonesia</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Working Hours</p>
                                        <p className="text-gray-900 font-semibold">Mon - Fri: 09:00 - 17:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Start a Project</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
