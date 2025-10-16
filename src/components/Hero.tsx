import { Download, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const handleHireMe = () => {
  // This email is sample data and should be replaced with the real address
  const email = "sumit.fake@example.com";
  const subject = encodeURIComponent("Hiring Inquiry — Portfolio Website");
  const body = encodeURIComponent(
    "Hello Sumit,%0D%0A%0D%0AI'd like to discuss an opportunity. Please let me know a suitable time to connect.%0D%0A%0D%0ARegards,%0D%0A[Your Name]"
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

const hero = () => {
  return (
    <section className="container  grid gap-6 py-10 md:py-20 lg:grid-cols-2 lg:gap-16" id="home">
        <div className="order-2 lg:order-1 m-1">
          <div className="inline-flex items-center gap-2 rounded-full border-dashed border bg-[#143367] /5 px-3 py-1 text-white ">
            <Sparkles className="size-4" />
            <span className="text-xs font-medium">Social Media Marketer • Content Writer</span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-[#143367] ">Sumit</span> Chaudhary
          </h1>
          <p className="mt-2 md:mt-4 max-w-xl text-gray-800 text-lg">
            Social Media Marketer | Content Strategist | Growth Enthusiast
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <button className="bg-[#143367] text-white hover:bg-[#143367E6] rounded-2xl px-8 py-2" onClick={handleHireMe}>
              <Mail className="mr-2 " /> Hire Me
            </button>
            <a href="./resume/sumit chaudhary.pdf" target="_blank" rel="noreferrer">
              <button className="hover:text-[#143367]">
                <Download className="mr-2 " /> View Resume
              </button>
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="flex items-center gap-2"><MapPin className="size-4 text-[#143367] " /> Faridabad, Haryana</div>
            <div className="flex items-center gap-2"><Mail className="size-4 text-[#143367] " /> sumitjaiswal9313@gmail.com</div>
            <div className="flex items-center gap-2"><Phone className="size-4 text-[#143367] " /> +91 9654063675</div>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <div className="relative isolate">
            <div aria-hidden className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-[#143367]/40 to-accent/40 blur-3xl" />
            <img
              src="/photo.png"
              alt="Sumit Chaudhary portrait"
              className="relative h-56 w-56 rounded-3xl object-cover ring-1 ring-border ring-[#143367]  shadow-xl sm:h-72 sm:w-72 md:h-80 md:w-80"
            />
          </div>
        </div>
      </section>

  );
};

export default hero;
