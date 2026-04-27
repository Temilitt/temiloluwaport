import { useState } from "react"
import { FiGithub, FiExternalLink, FiX, FiChevronRight } from "react-icons/fi"
import { projects } from "../data/projects"

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="bg-black py-20 border-b-4 border-red-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-red-600"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
            What I have built
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white mb-12 leading-tight">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 hover:border-red-600 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelected(project)}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-black text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-red-400 border border-red-600/40 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>

                {/* View detail */}
                <button className="flex items-center gap-1 text-xs text-red-600 font-semibold uppercase tracking-widest hover:gap-2 transition-all duration-200">
                  View Details <FiChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image */}
            <div className="relative">
              <img
                src={selected.image2}
                alt={selected.title}
                className="w-full h-56 sm:h-72 object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-black text-white p-2 hover:bg-red-600 transition-colors duration-200"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Modal content */}
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-2">
                {selected.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {selected.description}
              </p>

              {/* Features */}
              <h4 className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-3">
                Key Features
              </h4>
              <ul className="flex flex-col gap-2 mb-6">
                {selected.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Full stack */}
              <h4 className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {selected.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-black text-white px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 border-t-2 border-black pt-6">
                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-200"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                )}
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border-2 border-black text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-200"
                >
                  <FiGithub size={16} /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}