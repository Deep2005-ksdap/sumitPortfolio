import { Download, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const handleHireMe = () => {
  const email = "ssumitjaiswal9313@gmail.com";
  const subject = encodeURIComponent("Hiring Inquiry — Portfolio Website");
  const body = encodeURIComponent(
    "Hello Sumit,%0D%0A%0D%0AI'd like to discuss an opportunity. Please let me know a suitable time to connect.%0D%0A%0D%0ARegards,%0D%0A[Your Name]"
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-12 lg:py-20 bg-gradient-to-b from-white to-[#f7f9fc]"
    >
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start text-center lg:text-left mt-8 lg:mt-0 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-dashed bg-[#143367]/10 px-3 py-1 text-[#143367]">
          <Sparkles className="size-4" />
          <span className="text-xs sm:text-sm font-medium">
            Social Media Marketer • Content Writer
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          <span className="text-[#143367]">Sumit</span> Chaudhary
        </h1>

        <p className="max-w-xl text-gray-700 text-base sm:text-lg">
          Social Media Marketer | Content Strategist | Growth Enthusiast
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
          <button
            onClick={handleHireMe}
            className="flex items-center gap-2 bg-[#143367] hover:bg-[#143367E6] text-white font-medium rounded-2xl px-6 py-2.5 transition-all duration-200"
          >
            <Mail className="size-4" /> Hire Me
          </button>

          <a
            href="./resume/sumit chaudhary.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex items-center gap-2 text-[#143367] border border-[#143367] hover:bg-[#143367]/10 font-medium rounded-2xl px-6 py-2.5 transition-all duration-200">
              <Download className="size-4" /> View Resume
            </button>
          </a>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 text-sm text-gray-600">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <MapPin className="size-4 text-[#143367]" /> Faridabad, Haryana
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <Mail className="size-4 text-[#143367]" /> sumitjaiswal9313@gmail.com
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <Phone className="size-4 text-[#143367]" /> +91 9654063675
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative isolate">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-[#143367]/40 to-blue-300/30 blur-3xl"
          />
          <img
            src="/photo.png"
            alt="Sumit Chaudhary portrait"
            className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-3xl object-cover ring-2 ring-[#143367] shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
