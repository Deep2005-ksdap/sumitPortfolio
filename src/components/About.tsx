
const About = () => {
  return (
    <section id="about" className="container py-16 md:py-24 scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          I am a Social Media Marketer actively building a career in digital marketing. I create content strategies, identify niche audiences, and help brands grow online. Alongside my job, I write SEO-optimized blog posts and consistently rank them on Google. I’m passionate about data-driven growth and long-term impact.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border bg-card p-4"><div className="text-sm text-muted-foreground">Location</div><div className="mt-1 font-medium">Faridabad, Haryana</div></div>
          <div className="rounded-xl border bg-card p-4"><div className="text-sm text-muted-foreground">Email</div><div className="mt-1 font-medium">sumit.fake@example.com{/* sample email */}</div></div>
          <div className="rounded-xl border bg-card p-4"><div className="text-sm text-muted-foreground">Phone</div><div className="mt-1 font-medium">+91 90000 00000{/* sample phone */}</div></div>
        </div>
      </section>
  )
}

export default About
