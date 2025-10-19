const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-6 sm:px-10 py-10 lg:py-16 scroll-mt-24"
    >
      <h2 className="text-center lg:text-left text-3xl font-bold tracking-tight text-[#143367]">
        About
      </h2>

      <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
        I am a Social Media Marketer actively building a career in digital
        marketing. I create content strategies, identify niche audiences, and
        help brands grow online. Alongside my job, I write SEO-optimized blog
        posts and consistently rank them on Google. I’m passionate about
        data-driven growth and creating long-term impact through meaningful
        content and analytics.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#143367]/40 hover:shadow-md hover:scale-[1.02]">
          <div className="text-sm text-gray-500">Experience</div>
          <div className="mt-1 font-medium text-gray-800">2+ Years</div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#143367]/40 hover:shadow-md hover:scale-[1.02]">
          <div className="text-sm text-gray-500">Specialization</div>
          <div className="mt-1 font-medium text-gray-800">
            Digital Marketing & Strategy
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#143367]/40 hover:shadow-md hover:scale-[1.02]">
          <div className="text-sm text-gray-500">Focus Area</div>
          <div className="mt-1 font-medium text-gray-800">
            Social Media Growth & SEO
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
