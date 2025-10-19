import { BadgeCheck } from "lucide-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="container mx-auto px-6 sm:px-10 py-10 lg:py-16 scroll-mt-24"
    >
      {/* Section Title */}
      <h2 className="text-center lg:text-left text-3xl font-bold tracking-tight text-[#143367]">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Social Media Strategy & Management",
          "Lead Generation",
          "UGC Creation & Influencer Research",
          "Content Writing & Keyword Research",
          "Canva Design & Creative Direction",
          "SEO Basics & Keyword Targeting",
          "Campaign Performance Tracking (Google Sheets, Excel)",
          "Tools: Power BI, Python, SQL, MIS Reports",
        ].map((skill) => (
          <div
            key={skill}
            className="group flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#143367]/50 hover:scale-[1.02]"
          >
            <BadgeCheck className="mt-1 size-5 text-[#143367] transition-colors duration-200 group-hover:text-[#0f255a]" />
            <p className="font-medium text-gray-800 leading-relaxed">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
