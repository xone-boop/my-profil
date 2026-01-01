import { Section } from '@/components/ui/Section';

export function Stats() {
    const stats = [
        { label: 'Projects Completed', value: '5+' },
        { label: 'Happy Clients', value: '3+' },
        { label: 'Average Delivery', value: '2 Weeks' },
    ];

    return (
        <Section className="border-y border-gray-100 py-12 md:py-16">
            <div className="grid grid-cols-3 gap-8 text-center divide-x divide-gray-100">
                {stats.map((stat, i) => (
                    <div key={i} className="px-4">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
