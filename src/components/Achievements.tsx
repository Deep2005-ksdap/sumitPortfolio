import { TrendingUp } from "lucide-react";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="container py-5 md:py-15 m-1 scroll-mt-24"
    >
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Achievements
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "5M+ Instagram views in a single month.",
          "Collaborated with 16+ writers for book promotions.",
          "Managed multiple author accounts.",
          "Generated high-quality leads for small foreign brands.",
        ].map((a) => (
          <div key={a} className="rounded-xl border bg-card p-5">
            <div className="flex items-start gap-3">
              <TrendingUp className="mt-1 size-5 text-accent" />
              <p className="font-medium leading-relaxed">{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
