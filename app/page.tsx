import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Stats } from "@/components/home/Stats";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CTA } from "@/components/home/CTA";
import { projects } from "@/data/portfolio-projects";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Stats />
      <FeaturedProjects projects={projects} />
      <CTA />
    </>
  );
}
