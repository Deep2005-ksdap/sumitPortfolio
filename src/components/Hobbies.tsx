import { Target } from "lucide-react";

const Hobbies = () => {
  return (
    <section id="hobbies" className="container py-5 md:py-15 m-1 scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Hobbies & Interests
      </h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {[
          "Reading Books",
          "Creating Creative Ideas",
          "Writing on Social Issues",
        ].map((h) => (
          <span
            key={h}
            className="inline-flex items-center rounded-full border bg-background px-4 py-2 text-sm"
          >
            <Target className="mr-2 size-4 text-accent" /> {h}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
