import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export function CTA() {
    return (
        <Section className="bg-teal-900 text-white">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Siap Memulai Project Anda?</h2>
                <p className="text-teal-100 mb-10 text-lg">
                    Konsultasikan kebutuhan digital bisnis Anda sekarang. Gratis konsultasi awal 30 menit.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="bg-white text-teal-900 hover:bg-gray-100">
                        Mulai Project
                    </Button>
                    <Button variant="outline" size="lg" className="border-teal-700 text-white hover:bg-teal-800 hover:text-white" href="https://wa.me/6281234567890" isExternal>
                        Konsultasi via WhatsApp
                    </Button>
                </div>
            </div>
        </Section>
    );
}
