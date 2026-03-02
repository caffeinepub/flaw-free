import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const services = [
  "Eddy Current Testing",
  "Magna Flux Testing",
  "Radiological Testing",
  "Ultrasonic Testing",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Coverage", href: "#coverage" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, oklch(0.10 0.06 260) 0%, oklch(0.08 0.04 258) 100%)",
        borderTop: "1px solid oklch(0.22 0.05 258 / 0.5)",
      }}
    >
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              type="button"
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-11 h-11 rounded overflow-hidden flex-shrink-0">
                <img
                  src="/assets/generated/flaw-free-logo-transparent.dim_300x300.png"
                  alt="Flaw Free Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p
                  className="font-display font-bold text-lg"
                  style={{ color: "oklch(0.93 0.01 255)" }}
                >
                  Flaw Free
                </p>
                <p
                  className="text-xs tracking-wider"
                  style={{ color: "oklch(0.72 0.18 55)" }}
                >
                  NDT SERVICES
                </p>
              </div>
            </button>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "oklch(0.55 0.04 255)" }}
            >
              India's trusted Non-Destructive Testing partner for the steel
              sector. Precision inspection, nationwide deployment.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {["ISO 9001", "NABL", "ASNT"].map((cert) => (
                <span
                  key={cert}
                  className="text-xs font-semibold px-2.5 py-1 rounded-md border"
                  style={{
                    borderColor: "oklch(0.35 0.05 258 / 0.5)",
                    color: "oklch(0.68 0.04 255)",
                    background: "oklch(0.15 0.05 260 / 0.5)",
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-display font-bold text-sm uppercase tracking-wider mb-5"
              style={{ color: "oklch(0.72 0.18 55)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-150 hover:text-amber-brand"
                    style={{ color: "oklch(0.60 0.04 255)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-display font-bold text-sm uppercase tracking-wider mb-5"
              style={{ color: "oklch(0.72 0.18 55)" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#services")}
                    className="text-sm transition-colors duration-150 text-left hover:text-amber-brand"
                    style={{ color: "oklch(0.60 0.04 255)" }}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-display font-bold text-sm uppercase tracking-wider mb-5"
              style={{ color: "oklch(0.72 0.18 55)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.72 0.18 55)" }}
                />
                <div>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.72 0.03 255)" }}
                  >
                    +91-7977072178
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.48 0.03 255)" }}
                  >
                    Mon–Sat, 9AM–7PM IST
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.72 0.18 55)" }}
                />
                <div>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.72 0.03 255)" }}
                  >
                    info@flawfree.in
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.48 0.03 255)" }}
                  >
                    24-hour response
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.72 0.18 55)" }}
                />
                <div>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.72 0.03 255)" }}
                  >
                    Jamshedpur, Jharkhand
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.48 0.03 255)" }}
                  >
                    Pan India Operations
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "oklch(0.18 0.04 258 / 0.6)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "oklch(0.42 0.03 255)" }}>
            © {year} Flaw Free NDT Services. All rights reserved.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center gap-1 transition-colors hover:text-amber-brand"
            style={{ color: "oklch(0.42 0.03 255)" }}
          >
            Built with ❤️ using caffeine.ai
            <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </footer>
  );
}
