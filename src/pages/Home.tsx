import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export function Home() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section id="work" className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">Selected Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A curated selection of recent work spanning brand design, web design, and product design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a
              href="/showcase"
              className="inline-flex items-center px-8 py-4 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm uppercase tracking-widest"
            >
              View All Work
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic text-gray-800 mb-8">
              "I design at the intersection of art and technology for artists who value craft."
            </blockquote>
            <div className="w-16 h-px bg-gray-300 mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="text-4xl md:text-5xl font-bold text-purple-600">13+</span>
              <p className="text-sm uppercase tracking-widest text-gray-500 mt-2">Years</p>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-bold text-purple-600">200+</span>
              <p className="text-sm uppercase tracking-widest text-gray-500 mt-2">Projects</p>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-bold text-purple-600">50+</span>
              <p className="text-sm uppercase tracking-widest text-gray-500 mt-2">Clients</p>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-bold text-purple-600">500+</span>
              <p className="text-sm uppercase tracking-widest text-gray-500 mt-2">Design Assets</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}