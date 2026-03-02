import { Button } from "@/components/ui/button";
import { ArrowDown, Award, MapPin, Shield } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Steel Plants Served" },
  { value: "18", label: "States Covered" },
];

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x600.jpg"
          alt="Steel plant industrial background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.10 0.07 260 / 0.88) 0%, oklch(0.12 0.05 258 / 0.78) 50%, oklch(0.08 0.04 255 / 0.92) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.97 0.004 250))",
          }}
        />
      </div>

      {/* Decorative diagonal stripe */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5 z-0"
        style={{
          background:
            "repeating-linear-gradient(-45deg, oklch(0.72 0.18 55) 0, oklch(0.72 0.18 55) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 border"
            style={{
              background: "oklch(0.72 0.18 55 / 0.15)",
              borderColor: "oklch(0.72 0.18 55 / 0.4)",
              color: "oklch(0.88 0.16 75)",
            }}
          >
            <Shield size={14} />
            ISO Certified NDT Services — Pan India
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            style={{ color: "oklch(0.96 0.008 255)" }}
          >
            Precision NDT{" "}
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.78 0.19 55), oklch(0.88 0.16 75))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Across India
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
            style={{ color: "oklch(0.78 0.03 255)" }}
          >
            India's trusted partner for Non-Destructive Testing in the steel
            sector. Serving steel plants, refineries, and heavy industries with
            advanced inspection techniques — from Jharkhand to Karnataka.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Button
              size="lg"
              className="font-bold text-base px-8 py-6 rounded-md shadow-amber hover:scale-105 transition-transform"
              style={{
                background: "oklch(0.72 0.18 55)",
                color: "oklch(0.12 0.04 30)",
              }}
              onClick={() => scrollTo("#services")}
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-bold text-base px-8 py-6 rounded-md hover:scale-105 transition-transform"
              style={{
                borderColor: "oklch(0.6 0.04 255)",
                color: "oklch(0.9 0.02 255)",
                background: "transparent",
              }}
              onClick={() => scrollTo("#contact")}
            >
              Get a Quote
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {[
              { icon: Shield, text: "ISO 9001:2015 Certified" },
              { icon: Award, text: "NABL Accredited" },
              { icon: MapPin, text: "Pan India Coverage" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-3 py-2 rounded-md"
                style={{
                  background: "oklch(0.20 0.05 260 / 0.6)",
                  border: "1px solid oklch(0.35 0.05 258 / 0.5)",
                  color: "oklch(0.82 0.03 255)",
                }}
              >
                <Icon size={14} style={{ color: "oklch(0.72 0.18 55)" }} />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden max-w-3xl"
          style={{ background: "oklch(0.28 0.05 258 / 0.4)" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-5 px-4"
              style={{ background: "oklch(0.15 0.06 260 / 0.7)" }}
            >
              <span
                className="font-display font-extrabold text-3xl md:text-4xl"
                style={{ color: "oklch(0.78 0.18 55)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs font-medium mt-1 text-center"
                style={{ color: "oklch(0.72 0.03 255)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("#services")}
        style={{ color: "oklch(0.72 0.18 55)" }}
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-70">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
