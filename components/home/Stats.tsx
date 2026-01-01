import { Section } from '@/components/ui/Section';
import { DotPattern } from "@/components/ui/Backgrounds";
import { useLanguage } from '@/components/LanguageContext';

export function Stats() {
    const { t } = useLanguage();

    const stats = [
        { label: t('stats_projects'), value: '5+' },
        { label: t('stats_clients'), value: '3+' },
        { label: t('stats_exp'), value: t('2 Weeks') || '2 Weeks' }, // "2 Weeks" not in dict yet
    ];

    return (
        <section className="py-10 border-y border-gray-100 bg-gray-50/50 relative overflow-hidden">
            <DotPattern />
            <div className="container-custom">
                <div className="grid grid-cols-3 gap-8 text-center divide-x divide-gray-100 relative z-10">
                    {stats.map((stat, i) => (
                        <div key={i} className="px-4">
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
