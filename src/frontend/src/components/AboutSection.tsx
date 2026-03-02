import { Award, CheckCircle2, Factory, Globe, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "10+", label: "Years of NDT Excellence", icon: Award },
  { value: "500+", label: "Projects Completed", icon: Factory },
  { value: "200+", label: "Qualified Professionals", icon: Users },
  { value: "18", label: "States Covered", icon: Globe },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ASNT Level II & III Certified Personnel",
  "NABL Accredited Laboratory",
  "BARC Approved Radiographers",
  "BIS / Bureau of Indian Standards Compliant",
  "PCN / CSWIP Certified Technicians",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.15 0.06 260) 0%, oklch(0.12 0.05 258) 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, oklch(0.5 0.04 255) 0, oklch(0.5 0.04 255) 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, oklch(0.5 0.04 255) 0, oklch(0.5 0.04 255) 1px, transparent 0, transparent 50%)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border"
              style={{
                background: "oklch(0.72 0.18 55 / 0.15)",
                borderColor: "oklch(0.72 0.18 55 / 0.35)",
                color: "oklch(0.82 0.16 75)",
              }}
            >
              About Flaw Free
            </div>

            <h2
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight"
              style={{ color: "oklch(0.95 0.01 255)" }}
            >
              Protecting Steel India's
              <span
                className="block"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.78 0.19 55), oklch(0.88 0.14 75))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Structural Integrity
              </span>
            </h2>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "oklch(0.72 0.04 255)" }}
            >
              Founded with a singular mission — to bring world-class
              Non-Destructive Testing capabilities to India's booming steel
              sector. Over a decade, Flaw Free has grown into the country's most
              trusted NDT partner for steel plants, blast furnaces, refineries,
              and heavy engineering industries.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "oklch(0.72 0.04 255)" }}
            >
              Our engineers and technicians are certified to international
              standards, equipped with state-of-the-art instrumentation, and
              committed to zero-compromise safety — because in steel
              manufacturing, a missed flaw can be catastrophic.
            </p>

            {/* Certifications */}
            <div className="space-y-2">
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "oklch(0.72 0.18 55)" }}
              >
                Certifications & Standards
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "oklch(0.62 0.16 148)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.78 0.03 255)" }}
                    >
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl p-6 flex flex-col gap-3 border"
                  style={{
                    background: "oklch(0.20 0.06 260 / 0.7)",
                    borderColor: "oklch(0.30 0.05 258 / 0.5)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "oklch(0.72 0.18 55 / 0.2)" }}
                  >
                    <Icon size={20} style={{ color: "oklch(0.78 0.18 55)" }} />
                  </div>
                  <div>
                    <p
                      className="font-display font-extrabold text-4xl"
                      style={{ color: "oklch(0.78 0.18 55)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-sm mt-1"
                      style={{ color: "oklch(0.68 0.04 255)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Mission statement card spanning full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="col-span-2 rounded-xl p-6 border relative overflow-hidden"
              style={{
                background: "oklch(0.72 0.18 55 / 0.12)",
                borderColor: "oklch(0.72 0.18 55 / 0.35)",
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: "oklch(0.72 0.18 55)" }}
              />
              <p
                className="font-display font-semibold text-lg leading-snug"
                style={{ color: "oklch(0.90 0.02 255)" }}
              >
                "Where steel is made, integrity must be uncompromising. Flaw
                Free ensures every joint, weld, and plate meets the highest
                safety standards."
              </p>
              <p
                className="text-sm mt-3 font-medium"
                style={{ color: "oklch(0.72 0.18 55)" }}
              >
                — Founder & Chief NDT Engineer
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
