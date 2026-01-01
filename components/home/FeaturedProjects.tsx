import { Project } from '@/types';
import { Section } from '@/components/ui/Section';
import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import { Button } from '@/components/ui/Button';

interface FeaturedProjectsProps {
    projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    return (
        <Section>
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h2>
                    <p className="text-gray-600">Beberapa hasil karya terbaik kami.</p>
                </div>
                <Button variant="outline" href="/portfolio" className="hidden md:inline-flex">
                    Lihat Semua
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {projects.slice(0, 3).map((project) => (
                    <PortfolioCard key={project.id} project={project} />
                ))}
            </div>

            <div className="text-center md:hidden">
                <Button variant="outline" href="/portfolio">
                    Lihat Semua Project
                </Button>
            </div>
        </Section>
    );
}
