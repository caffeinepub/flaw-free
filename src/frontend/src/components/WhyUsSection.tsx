import {
  Clock,
  Cpu,
  FileCheck,
  HardHat,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: ShieldCheck,
    title: "Certified Professionals",
    description:
      "Every technician holds ASNT Level II/III, PCN, or CSWIP certification. Our team has been trained to international NDT standards ensuring reliable, repeatable results.",
  },
  {
    icon: Cpu,
    title: "Advanced Equipment",
    description:
      "We deploy state-of-the-art instrumentation including Phased Array UT, Digital Radiography, Multi-frequency Eddy Current, and TOFD systems.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Our mobile NDT units can be deployed on-site within 48 hours. Urgent inspection reports delivered within 24 hours of testing completion.",
  },
  {
    icon: HardHat,
    title: "Safety First",
    description:
      "Zero-compromise approach to radiation safety, PPE compliance, and permit-to-work procedures. OHSAS 18001 aligned safety management systems.",
  },
  {
    icon: FileCheck,
    title: "Detailed Reporting",
    description:
      "Comprehensive inspection reports with annotated findings, severity classifications, repair recommendations, and trending data for plant maintenance planning.",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support for shutdown inspections and emergency callouts. Dedicated project managers for long-term steel plant contracts.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.13 0.06 260) 0%, oklch(0.16 0.06 258) 100%)",
      }}
    >
      {/* Decorative corner element */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "oklch(0.72 0.18 55)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: "oklch(0.35 0.12 258)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
            style={{
              background: "oklch(0.72 0.18 55 / 0.15)",
              borderColor: "oklch(0.72 0.18 55 / 0.35)",
              color: "oklch(0.82 0.16 75)",
            }}
          >
            Why Choose Us
          </div>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.95 0.01 255)" }}
          >
            The Flaw Free Advantage
          </h2>
          <p
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.68 0.04 255)" }}
          >
            Six reasons why India's top steel producers trust Flaw Free for
            their critical inspection needs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group rounded-xl p-6 border relative overflow-hidden transition-all duration-300 hover:shadow-steel-lg"
                style={{
                  background: "oklch(0.20 0.06 260 / 0.6)",
                  borderColor: "oklch(0.30 0.05 258 / 0.5)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at top left, oklch(0.72 0.18 55 / 0.08), transparent 70%)",
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 relative"
                  style={{ background: "oklch(0.72 0.18 55 / 0.18)" }}
                >
                  <Icon size={22} style={{ color: "oklch(0.78 0.18 55)" }} />
                  {/* Subtle corner accent */}
                  <div
                    className="absolute top-0 right-0 w-3 h-3 rounded-bl-lg"
                    style={{ background: "oklch(0.72 0.18 55 / 0.4)" }}
                  />
                </div>

                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: "oklch(0.94 0.01 255)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.68 0.04 255)" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
