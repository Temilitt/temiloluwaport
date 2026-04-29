const testimonials = [
  {
    name: "Miss Aisha",
    role: "Tutor, SQI College of ICT",
    initial: "T",
    text: "Temiloluwa stands out because of his eagerness to learn and his curiosity. He never waits to be pushed — he digs deeper on his own. That kind of drive is rare and it shows in everything he builds.",
  },
  {
    name: "Mrs Omowumi",
    role: "Business Owner, Beauty & Makeup",
    initial: "O",
    text: "Since Temi built my website, my business has been getting consistent customers through Google. The site is clean, fast and easy to manage. It has genuinely changed how people find my business online.",
  },
  {
    name: "Mr John",
    role: "Founder, Doornet — Frontend Internship",
    initial: "J",
    text: "Temi is straightforward and hardworking. He collaborates seamlessly with backend developers and product designers without friction. He understands the full picture, not just his own lane.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white border-b-4 border-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-red-600"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
            What people say
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-black mb-12 leading-tight">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border-2 border-black p-6 flex flex-col gap-6 hover:bg-black hover:text-white transition-colors duration-300 group"
            >
              {/* Quote mark */}
              <span className="text-5xl font-black text-red-600 leading-none">"</span>

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto border-t border-gray-200 group-hover:border-gray-700 pt-4 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-black group-hover:text-white transition-colors duration-300">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}