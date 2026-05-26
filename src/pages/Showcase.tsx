import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export function Showcase() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">Showcase</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">3+ years of handcrafted design</h1>
            <p className="text-gray-600 text-lg">
              Previous clients include: Kunming Baiweizhen Food Co., Ltd. Works - Dian Tongxue Smart Systems, Qianfeng Education - Data Analysis for Ke Holdings (Beike) Kunming Rental Housing, Kunming Xuteng Group - Hospital Network Construction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}