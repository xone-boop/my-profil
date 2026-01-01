"use client"

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { projects } from '@/data/portfolio-projects';
import { PortfolioCard } from '@/components/portfolio/PortfolioCard';

export default function PortfolioListing() {
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'landing-page', label: 'Landing Pages' },
        { id: 'ecommerce', label: 'E-Commerce' },
        { id: 'custom', label: 'Custom Apps' },
    ];

    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true;
        return project.category === filter;
    });

    return (
        <>
            <Section className="bg-gray-50 pt-32 pb-16">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio & Case Studies</h1>
                    <p className="text-gray-600">
                        Lihat hasil karya terbaik kami dalam membantu bisnis bertumbuh di era digital.
                    </p>
                </div>
            </Section>

            <Section>
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 sticky top-24 z-30 pointer-events-none">
                    <div className="bg-white/80 backdrop-blur-md p-2 rounded-full border border-gray-100 shadow-sm pointer-events-auto flex gap-1">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === category.id
                                        ? 'bg-teal-500 text-white shadow-sm'
                                        : 'bg-transparent text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No projects found in this category.
                    </div>
                )}
            </Section>
        </>
    );
}
