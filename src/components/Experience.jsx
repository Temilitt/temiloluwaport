const experiences = [
  {
    year: "2021 — 2025",
    title: "B.Sc Computer Science",
    place: "Federal University of Agriculture, Abeokuta (FUNAAB)",
    description:
      "Graduated with a degree in Computer Science. Built a strong foundation in algorithms, data structures, software engineering and system design.",
    type: "Education",
  },
  {
    year: "2022 — 2026",
    title: "Fullstack Development Training",
    place: "SQI College of ICT",
    description:
      "Intensive hands-on training in fullstack web development covering frontend, backend, databases and deployment. This is where I went from knowing code to building real products.",
    type: "Education",
  },
  {
    year: "2025",
    title: "GMCPN Certification",
    place: "Global Microsoft Certified Professionals Network",
    description:
      "Achieved GMCPN certification, validating professional competency in modern software development practices.",
    type: "Certification",
  },
  {
    year: "2026 — Present",
    title: "Frontend Developer Intern",
    place: "Doornet",
    description:
      "Building and maintaining modern web interfaces in a professional team environment. Collaborating seamlessly with backend developers and product designers to ship real features.",
    type: "Work",
  },
]

const typeColors = {
  Education: "bg-black text-white",
  Certification: "bg-red-600 text-white",
  Work: "bg-white text-black border border-black",
}

export default function Experience() {
  return (
    <section id="experience" className="bg-white border-b-4 border-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-red-600"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
            My journey
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-black mb-12 leading-tight">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 group"
            >
              {/* Year */}
              <div className="sm:text-right pt-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  {exp.year}
                </p>
              </div>

              {/* Content */}
              <div className="relative border-l-2 border-black pl-8 pb-12 group-last:pb-0">
                {/* Dot */}
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-red-600 border-2 border-white ring-2 ring-red-600"></div>

                {/* Badge */}
                <div className="mb-3 mt-4">
                  <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${typeColors[exp.type]}`}>
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-black mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm font-semibold text-red-600 mb-3">
                  {exp.place}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}