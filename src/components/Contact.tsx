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
  )}&body=${encodeURIComponent(String(message) + "\n\nFrom: " + email)}`;
  window.location.href = mailto;

  form.reset();
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto px-6 sm:px-10 py-10 lg:py-16 scroll-mt-24"
    >
      <h2 className="text-center lg:text-left text-3xl font-bold tracking-tight text-[#143367]">
        Let’s Work Together
      </h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* LEFT INFO */}
        <div>
          <p className="text-gray-800 leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to get in
            touch — I’d love to hear your ideas!
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-[#143367]" />
              <a
                href="mailto:sumitjaiswal9313@gmail.com"
                className="text-gray-800 hover:text-[#143367] hover:underline transition-colors"
              >
                sumitjaiswal9313@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="size-5 text-[#143367]" />
              <a
                href="tel:+919654063675"
                className="text-gray-800 hover:text-[#143367] hover:underline transition-colors"
              >
                +91 9654063675
              </a>
            </div>

            <div className="flex items-center gap-3">
              <BadgeCheck className="size-5 text-[#143367]" />
              <a
                href="https://www.instagram.com/_sumit_chaudhary_29?igsh=YXY0ZXNwMGYxcHZh"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-[#143367] hover:underline transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form onSubmit={handleSubmitContact} className="space-y-5">
          <div>
            <label htmlFor="name" className="text-sm text-gray-600">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-md border border-gray-300 bg-background px-3 py-2 outline-none focus:border-[#143367] transition-colors"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="text-sm text-gray-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-gray-300 bg-background px-3 py-2 outline-none focus:border-[#143367] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm text-gray-600">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                className="mt-1 w-full rounded-md border border-gray-300 bg-background px-3 py-2 outline-none focus:border-[#143367] transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-gray-300 bg-background px-3 py-2 outline-none focus:border-[#143367] transition-colors"
            />
          </div>

          <div className="flex justify-center lg:justify-start">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#143367] px-8 py-2 text-white font-medium shadow-sm transition-all hover:bg-[#143367]/90 hover:scale-[1.02]"
            >
              <Mail className="size-4" /> Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
