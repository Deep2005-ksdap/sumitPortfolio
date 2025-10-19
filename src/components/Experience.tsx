const Experience = () => {
  return (
    <section
      id="experience"
      className="container mx-auto px-6 sm:px-10 py-12 lg:py-20 scroll-mt-24"
    >
      {/* Title */}
      <h2 className="text-center lg:text-left text-3xl font-bold tracking-tight text-[#143367] mb-12">
        Experience
      </h2>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto pl-8">
        {/* Vertical line */}
        <div className="absolute left-2 top-0 bottom-0 w-[3px] bg-[#143367]/20 rounded-full"></div>

        {/* Item 1 */}
        <div className="relative mb-12">
          {/* Dot */}
          <div className="absolute -left-[10px] top-6 w-5 h-5 bg-[#143367] rounded-full border-4 border-white shadow-lg"></div>

          {/* Card */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900">
              Social Media Strategist & Content Writer —{" "}
              <span className="text-[#143367]">Social Three Sixty</span>
            </h3>
            <p className="text-sm text-gray-500 mt-1">Nov 2023 – Present</p>

            <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
              <li>Managed Instagram accounts for USA & UK-based clients.</li>
              <li>
                Designed Canva creatives, wrote reel scripts, optimized
                profiles.
              </li>
              <li>
                Generated qualified leads and implemented SEO-friendly
                strategies.
              </li>
            </ul>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative mb-12">
          <div className="absolute -left-[10px] top-6 w-5 h-5 bg-[#143367] rounded-full border-4 border-white shadow-lg"></div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900">
              Digital Signature Certificates & Backend Support —{" "}
              <span className="text-[#143367]">
                DSC Business, Ares Global Solution
              </span>
            </h3>
            <p className="text-sm text-gray-500 mt-1">Mar 2023 – Oct 2023</p>

            <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
              <li>Handled DSC issuance, compliance, and customer verification.</li>
              <li>Managed bookkeeping, invoicing, and Tally entries.</li>
            </ul>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative">
          <div className="absolute -left-[10px] top-6 w-5 h-5 bg-[#143367] rounded-full border-4 border-white shadow-lg"></div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900">
              Accountant Intern —{" "}
              <span className="text-[#143367]">
                Under a Chartered Accountant
              </span>
            </h3>
            <p className="text-sm text-gray-500 mt-1">Jan 2023 – Mar 2023</p>

            <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
              <li>
                Filed GST returns, managed sales/purchase records, and assisted
                in documentation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
