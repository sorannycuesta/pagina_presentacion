// src/components/Projects.tsx
import GlassCard from "./GlassCard";
import projects from "../data/projects";
import { Github, ExternalLink, Star } from "lucide-react";

const Projects = () => {
  return (
    <section id="proyectos" className="py-32">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Proyectos{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
        </div>

        {/* FIX: ALTURAS FIJAS + TRANSFORM INDEPENDIENTE */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <GlassCard
              key={project.id}
              className="overflow-hidden transition-transform duration-500 hover:scale-[1.03]"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                    <Star size={14} /> Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400 mt-2 mb-4">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 bg-white/10 rounded-lg flex items-center gap-2"
                  >
                    <Github size={18} /> Código
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-4 py-2 bg-purple-600 rounded-lg flex items-center gap-2"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
