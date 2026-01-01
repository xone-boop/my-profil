import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export function Hero() {
    return (
        <Section className="pt-20 pb-32 md:pt-32 md:pb-40">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance animate-fade-in">
                    Fullstack Web Development untuk <span className="text-teal-500">UMKM Indonesia</span>
                </h1>

                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    Kami membantu Anda membangun website e-commerce dan landing page yang tidak hanya indah, tapi juga efektif meningkatkan penjualan.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <Button size="lg" href="/portfolio">
                        Lihat Portfolio
                    </Button>
                    <Button variant="secondary" size="lg" href="https://wa.me/6281234567890" isExternal>
                        Chat WhatsApp
                    </Button>
                </div>
            </div>
        </Section>
    );
}
