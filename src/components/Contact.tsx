import { BadgeCheck, Mail, Phone } from "lucide-react";

const handleSubmitContact = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  const mailto = `mailto:sumit.fake@example.com?subject=${encodeURIComponent(
    "Portfolio Contact from " + name
  )}&body=${encodeURIComponent(String(message) + "\n\nFrom: " + email)}`; // Email is sample data and should be replaced with the real address
  window.location.href = mailto;
  // toast.success("Opening your email app to send the message");
  form.reset();
};

const Contact = () => {
  return (
    <section id="contact" className="container py-5 md:py-15 m-1 scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let’s work together
          </h2>
          <p className="mt-2 md:mt-4 text-gray-800">
            Have a project in mind or want to collaborate? Reach out.
          </p>
          <div className="mt-6 px-2 sm:p-0 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="size-4 text-[#143367] " />{" "}
              <a
                className="hover:underline"
                href="mailto:sumitjaiswal9313@gmail.com"
              >
                sumitjaiswal9313@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-4 text-[#143367] " />{" "}
              <a className="hover:underline" href="tel:+919654063675">
                +91 9654063675
              </a>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-[#143367] " />{" "}
              <a
                className="hover:underline"
                href="https://www.instagram.com/_sumit_chaudhary_29?igsh=YXY0ZXNwMGYxcHZh"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmitContact}
          className="rounded-2xl border m-2 sm:m-0 bg-card p-6 shadow-sm"
        >
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none ring-0 focus:border-[#143367] "
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="text-sm text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none ring-0 focus:border-[#143367] "
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm text-muted-foreground"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none ring-0 focus:border-[#143367] "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none ring-0 focus:border-[#143367] "
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center items-center  gap-3">
            <button
              type="submit"
              className="bg-[#143367] px-10 py-2 text-white  rounded-2xl hover:bg-[#143367]/90"
            >
              <Mail className="mr-2" /> Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
