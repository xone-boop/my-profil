import { Section } from '@/components/ui/Section';
import { services } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Clock, Banknote } from 'lucide-react';

export const metadata = {
    title: 'Services | DevPortfolio',
    description: 'Layanan web development profesional untuk bisnis Anda.',
};

export default function ServicesPage() {
    return (
        <>
            <Section className="bg-gray-50 pt-32 pb-16">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h1>
                    <p className="text-gray-600">
                        Solusi komprehensif untuk mendigitalkan bisnis Anda dengan teknologi terkini.
                    </p>
                </div>
            </Section>

            <div className="space-y-0">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    const isEven = index % 2 === 0;

                    return (
                        <Section key={service.id} className={isEven ? "bg-white" : "bg-gray-50"}>
                            <div className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                                <div className="flex-1">
                                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                                        <Icon size={32} />
                                    </div>

                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                        <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                            <div className="flex items-center gap-2 text-teal-600 mb-2 font-medium">
                                                <Clock size={18} /> Timeline
                                            </div>
                                            <div className="text-gray-900 font-semibold">{service.timeline}</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                            <div className="flex items-center gap-2 text-teal-600 mb-2 font-medium">
                                                <Banknote size={18} /> Starting From
                                            </div>
                                            <div className="text-gray-900 font-semibold">{service.startingPrice}</div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-900 text-white p-6 rounded-xl mb-8">
                                        <h3 className="font-semibold mb-4 text-teal-400">What's Included:</h3>
                                        <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
                                            {service.deliverables.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm">
                                                    <CheckCircle2 size={16} className="text-teal-400 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Button size="lg" href={`/contact?service=${service.slug}`}>
                                        Konsultasi {service.title}
                                    </Button>
                                </div>

                                <div className="flex-1 w-full">
                                    {/* Process Timeline */}
                                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                                        <h3 className="font-bold text-xl mb-6">Proses Pengerjaan</h3>
                                        <div className="space-y-6">
                                            {service.process.map((step, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
                                                            {step.step}
                                                        </div>
                                                        {i !== service.process.length - 1 && (
                                                            <div className="w-0.5 h-full bg-gray-100 my-2"></div>
                                                        )}
                                                    </div>
                                                    <div className="pb-2">
                                                        <h4 className="font-semibold text-gray-900">{step.title}</h4>
                                                        <p className="text-sm text-gray-500 mb-1">{step.description}</p>
                                                        <span className="text-xs text-teal-600 font-medium bg-teal-50 px-2 py-0.5 rounded">
                                                            {step.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    );
                })}
            </div>

            <Section className="bg-teal-900 text-white text-center">
                <h2 className="text-3xl font-bold mb-6">Punya Kebutuhan Khusus?</h2>
                <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                    Kami juga melayani pembuatan aplikasi web custom yang disesuaikan dengan proses bisnis unik Anda.
                </p>
                <Button variant="secondary" size="lg" href="/contact?service=custom">
                    Hubungi Kami
                </Button>
            </Section>
        </>
    );
}
