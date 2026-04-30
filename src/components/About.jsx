export default function About() {
  return (
    <section id="about" className="bg-white border-b-4 border-black py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-red-600"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
            Who I am
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-black mb-12 leading-tight">
          About Me
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Image */}
          <div className="relative w-full max-w-sm mx-auto lg:mx-0">
            <div className="absolute -top-3 -left-3 w-full h-full border-4 border-black z-0"></div>
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-red-600 z-0"></div>
            <img
              src="https://res.cloudinary.com/doqniwpta/image/upload/v1777287634/Screenshot_2026-04-27_113904_kvkbtc.png"
              alt="Temiloluwa"
              className="relative z-10 w-full h-80 sm:h-96 object-cover object-top"
            />
          </div>

          {/* Right — Text */}
          <div className="flex flex-col gap-6">

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I am <span className="font-bold text-black">Aderounmu Temiloluwa</span>, a Computer Science graduate from the Federal University of Agriculture, Abeokuta (FUNAAB) and a certified GMCPN professional.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              In 2022, I enrolled at <span className="font-bold text-black">SQI College of ICT</span> where I trained intensively in fullstack development — sharpening my skills across frontend and backend technologies that now power real products used by real people.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I currently work as a <span className="font-bold text-black">Frontend Developer Intern at Doornet</span>, where I build and maintain modern web interfaces. I am passionate about solving African problems with clean, scalable technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4 border-t-2 border-black pt-8">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-black">15+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects Built</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-black">3+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-black">1</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Active Internship</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/Aderounmu_Temiloluwa_CV.docx"
              download
              className="inline-block w-fit bg-black text-white text-sm font-semibold px-7 py-3 rounded-full hover:bg-red-600 transition-colors duration-200 mt-2"
            >
              Download CV
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}