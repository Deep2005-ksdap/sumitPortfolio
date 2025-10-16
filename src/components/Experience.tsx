
const Experience = () => {
  return (
    <section id="experience" className="container py-16 md:py-15  scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Experience
      </h2>
      <ol className="mt-8 w-[95%] relative  border-s-2 border-border pl-6">
        <li className="mb-10 ms-6">
          <span className="absolute -start-3 mt-1 size-5 rounded-full border bg-background ring-4 ring-background" />
          <h3 className="font-semibold">
            Social Media Strategist & Content Writer – Social Three Sixty
          </h3>
          <div className="text-sm text-muted-foreground">
            Nov 2023 – Present
          </div>
          <ul className="mt-3 text-gray-800 list-disc pl-5 text-muted-foreground">
            <li>Managed Instagram accounts for USA & UK-based clients.</li>
            <li>
              Designed Canva creatives, wrote reel scripts, optimized profiles.
            </li>
            <li>
              Generated qualified leads and provided SEO-friendly strategies.
            </li>
          </ul>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute -start-3 mt-1 size-5 rounded-full border bg-background ring-4 ring-background" />
          <h3 className="font-semibold">
            Digital Signature Certificates & Backend Support – DSC Business,
            Ares Global Solution
          </h3>
          <div className="text-sm text-muted-foreground">
            Mar 2023 – Oct 2023
          </div>
          <ul className="mt-3 text-gray-800 list-disc pl-5 text-muted-foreground">
            <li>Handled DSC issuance, compliance, customer verification.</li>
            <li>Managed bookkeeping, invoicing, and Tally entries.</li>
          </ul>
        </li>
        <li className="ms-6">
          <span className="absolute -start-3 mt-1 size-5 rounded-full border bg-background ring-4 ring-background" />
          <h3 className="font-semibold">Accountant Intern under a CA</h3>
          <div className="text-sm text-muted-foreground">
            Jan 2023 – Mar 2023
          </div>
          <ul className="mt-3 text-gray-800 list-disc pl-5 text-muted-foreground">
            <li>
              Filed GST returns, managed sales/purchase records, and assisted in
              documentation.
            </li>
          </ul>
        </li>
      </ol>
    </section>
  );
};

export default Experience;
