import { services } from '@/data/services';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ServicesPreview() {
    return (
        <Section className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Solusi digital lengkap untuk kebutuhan bisnis Anda, dari landing page hingga sistem e-commerce kompleks.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <div key={service.id} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-6">
                                <Icon size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex justify-between text-sm text-gray-500 border-b border-gray-50 pb-2">
                                    <span>Timeline</span>
                                    <span className="font-medium text-gray-900">{service.timeline}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500 border-b border-gray-50 pb-2">
                                    <span>Mulai dari</span>
                                    <span className="font-medium text-teal-600">{service.startingPrice}</span>
                                </div>
                            </div>

                            <Link href="/services" className="inline-flex items-center text-teal-600 font-medium hover:underline">
                                Pelajari Detail <ArrowRight size={16} className="ml-1" />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
