import { GraduationCap } from "lucide-react";

const Education = () => {
  const educations = [
    {
      degree: "B.Sc. Computer Science",
      school: "Pt. Jwahar Lal Nehru Government College",
      year: "2020 – 2023",
      desc: "Built a strong foundation in programming, algorithms, and computer systems.",
    },
    {
      degree: "12th – HBSC Board",
      school: "Jai Durge Public Sr. Sec. School",
      year: "2019 – 2020",
      desc: "Focused on Science stream with Computer Fundamentals and Mathematics.",
    },
    {
      degree: "10th – HBSC Board",
      school: "Govt. Model Sanskriti Sr. Sec. School",
      year: "2015 – 2019",
      desc: "Developed discipline, curiosity, and early technical interest.",
    },
  ];

  return (
    <section
      id="education"
      className="container mx-auto px-6 sm:px-10 py-10 lg:py-16 scroll-mt-24"
    >
      <h2 className="text-center lg:text-left text-3xl font-bold tracking-tight text-[#143367]">
        Education
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {educations.map((edu) => (
          <article
            key={edu.degree}
            className="group flex flex-col items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3 w-full">
              <GraduationCap className="size-5 text-[#143367]" />
              <h3 className="font-semibold text-gray-900 group-hover:text-[#143367]">
                {edu.degree}
              </h3>
            </div>

            <p className="text-sm text-gray-500 w-full">
              {edu.school} <span className="text-gray-400">({edu.year})</span>
            </p>

            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
              {edu.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
