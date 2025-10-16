import { BadgeCheck } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="container py-5 md:py-15 m-1 scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Skills</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
            <div key={skill} className="group w-[95%] rounded-xl border bg-card p-5 transition-colors hover:border-[#143367]/40">
              <div className="flex items-start gap-3">
                <BadgeCheck className="mt-1 size-5 text-accent" />
                <p className="font-medium leading-relaxed">{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Skills
