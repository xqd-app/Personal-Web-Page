import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      className="group block bg-white border border-gray-100 hover:border-purple-200 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <span className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">
          {project.category}
        </span>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center text-sm text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="uppercase tracking-wider">VIEW</span>
          <ArrowUpRight size={16} className="ml-2" />
        </div>
      </div>
    </a>
  );
}