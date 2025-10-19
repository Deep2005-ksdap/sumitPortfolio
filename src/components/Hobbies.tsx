import { Target } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    "Reading Books",
    "Creating Creative Ideas",
    "Writing on Social Issues",
  ];

  return (
    <section
      id="hobbies"
      className="container mx-auto px-6 sm:px-10 py-10 lg:py-16 scroll-mt-24"
    >
      <h2 className="text-center lg:text-left text-3xl font-bold tracking-tight text-[#143367]">
        Hobbies & Interests
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((item) => (
          <div
            key={item}
            className="group rounded-full border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#143367]/40 hover:shadow-md hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3">
              <Target className="mt-1 size-5 text-[#143367]" />
              <p className="font-medium text-gray-800 group-hover:text-[#143367] leading-relaxed">
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
