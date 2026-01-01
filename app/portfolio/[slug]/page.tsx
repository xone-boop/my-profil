import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/portfolio-projects';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
    params: { slug: string };
};

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export function generateMetadata({ params }: Props): Metadata {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return { title: 'Project Not Found' };
    return {
        title: `${project.title} | Case Study`,
        description: project.description,
    };
}

export default function ProjectDetail({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Section className="bg-gray-50 pt-32 pb-16">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" href="/portfolio" className="mb-8 -ml-4">
                        <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
                    </Button>

                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide">
                            {project.category.replace('-', ' ')}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600 text-sm font-medium">{project.client}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        {project.description}
                    </p>
                </div>
            </Section>

            <div className="w-full h-[40vh] md:h-[60vh] relative bg-gray-200">
                <Image
                    src={project.images.hero}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <Section>
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {project.challenge}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                {project.solution}
                            </p>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">Key Results</h3>
                                <ul className="grid gap-3">
                                    {project.results.map((result, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-teal-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Screenshots */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                            <div className="grid gap-6">
                                {project.images.screenshots.map((shot, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden border border-gray-100 shadow-lg">
                                        <Image
                                            src={shot}
                                            alt={`Screenshot ${i + 1}`}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Tech Stack */}
                        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm sticky top-24">
                            <h3 className="font-bold text-lg text-gray-900 mb-6">Technologies</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Frontend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.frontend.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Backend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.backend.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {project.metrics && (
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Impact</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {project.metrics.map((metric, i) => (
                                            <div key={i}>
                                                <div className="text-2xl font-bold text-teal-600">{metric.value}</div>
                                                <div className="text-xs text-gray-500">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-8">
                                <Button className="w-full" size="lg" href="/contact">
                                    Start Your Project
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-teal-50 border-t border-teal-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">Want similar results?</h3>
                        <p className="text-gray-600">Let's discuss how we can help your business.</p>
                    </div>
                    <Button size="lg" href="/contact">
                        Get a Free Consultation
                    </Button>
                </div>
            </Section>
        </>
    );
}
