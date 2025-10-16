import React from 'react'

const Testimonials = () => {
  return (
    <section className="container py-16 md:py-24">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Testimonials</h2>
        <p className="mt-3 text-muted-foreground">Client feedback will be showcased here.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border bg-card p-5">
              <p className="italic text-muted-foreground">“Great to work with — proactive and professional.”{/* sample copy */}</p>
              <div className="mt-3 text-sm font-medium">Anonymous Client{/* sample name */}</div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Testimonials
