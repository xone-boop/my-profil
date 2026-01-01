"use client"

import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/components/LanguageContext';
import { GridPattern } from '@/components/ui/Backgrounds';

export function Hero() {
    const { t } = useLanguage();

    return (
        <Section className="pt-20 pb-32 md:pt-32 md:pb-40 relative overflow-hidden">
            <GridPattern />
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance animate-fade-in">
                    {t('hero_title')}
                </h1>

                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    {t('hero_desc')}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <Button size="lg" href="/portfolio">
                        {t('hero_cta_primary')}
                    </Button>
                    <Button variant="secondary" size="lg" href="https://wa.me/6281234567890" isExternal>
                        Chat WhatsApp
                    </Button>
                </div>
            </div>
        </Section>
    );
}
