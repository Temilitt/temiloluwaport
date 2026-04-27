import { skills } from "../data/skills"

const categories = ["Frontend", "Backend", "Database", "Tools"]

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-20 border-b-4 border-red-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-red-600"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
            What I work with
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white mb-12 leading-tight">
          Tech Stack
        </h2>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {categories.map((category) => (
            <div key={category}>
              {/* Category title */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-red-600">
                  {category}
                </h3>
                <div className="flex-1 h-[1px] bg-gray-800"></div>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4 hover:border-red-600 hover:bg-white/10 transition-all duration-200"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.target.style.display = "none"
                        }}
                      />
                      <p className="text-white text-xs font-medium text-center leading-tight">
                        {skill.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}