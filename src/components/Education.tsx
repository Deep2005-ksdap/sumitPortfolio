

const Education = () => {
  return (
    <section id="education" className="container py-5 md:py-15 m-1 scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Education
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-5">
          <h3 className="font-semibold">B.Sc. Computer Science</h3>
          <div className="text-sm text-muted-foreground">
            Pt. Jwahar Lal Nehru Government College (2020–2023)
          </div>
        </div>
        <div className="rounded-xl border bg-card p-5">
          <h3 className="font-semibold">12th – HBSC Board</h3>
          <div className="text-sm text-muted-foreground">
            Jai Durge Public Sr. Sec. School (2019–2020)
          </div>
        </div>
        <div className="rounded-xl border bg-card p-5 md:col-span-2">
          <h3 className="font-semibold">10th – HBSC Board</h3>
          <div className="text-sm text-muted-foreground">
            Govt. Model Sanskriti Sr. Sec. School (2015–2019)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
