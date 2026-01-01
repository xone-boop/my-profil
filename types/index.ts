export interface Project {
    id: string;
    slug: string;
    title: string;
    category: 'landing-page' | 'ecommerce' | 'custom';
    client: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    techStack: {
        frontend: string[];
        backend: string[];
        other: string[];
    };
    images: {
        thumbnail: string;
        hero: string;
        screenshots: string[];
    };
    metrics?: {
        label: string;
        value: string;
    }[];
    learnings: string[];
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: any; // We'll handle Lucide icons dynamically or passing components
    slug: string;
    process: {
        step: number;
        title: string;
        description?: string;
        duration?: string;
    }[];
    timeline: string;
    startingPrice: string;
    deliverables: string[];
}
