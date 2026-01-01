import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import { Button } from '@/components/ui/Button';

interface PortfolioCardProps {
    project: Project;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
    return (
        <div className="group rounded-xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {/* In a real scenario, use next/image. For now using placeholder or if project has image */}
                <Image
                    src={project.images.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-1 rounded">
                        {project.category.replace('-', ' ')}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.results.slice(0, 2).map((result, i) => (
                        <span key={i} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                            {result}
                        </span>
                    ))}
                </div>

                <Button variant="outline" size="sm" href={`/portfolio/${project.slug}`} className="w-full">
                    View Case Study
                </Button>
            </div>
        </div>
    );
}
