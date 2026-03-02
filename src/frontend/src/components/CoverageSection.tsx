import { MapPin } from "lucide-react";
import { motion } from "motion/react";

const steelStates = [
  { name: "Jharkhand", city: "Jamshedpur, Bokaro, Dhanbad", major: true },
  { name: "Odisha", city: "Rourkela, Angul, Bhubaneswar", major: true },
  { name: "Chhattisgarh", city: "Raipur, Bhilai, Durg", major: true },
  { name: "West Bengal", city: "Durgapur, Burnpur, Asansol", major: true },
  { name: "Maharashtra", city: "Pune, Nagpur, Mumbai", major: true },
  { name: "Karnataka", city: "Hospet, Bengaluru, Bellary", major: true },
  { name: "Andhra Pradesh", city: "Visakhapatnam, Vijayawada", major: true },
  { name: "Gujarat", city: "Surat, Ahmedabad, Vadodara", major: true },
  { name: "Madhya Pradesh", city: "Ratlam, Pipariya", major: false },
  { name: "Rajasthan", city: "Bhiwadi, Jaipur", major: false },
  { name: "Tamil Nadu", city: "Chennai, Salem, Coimbatore", major: false },
  { name: "Uttar Pradesh", city: "Meerut, Lucknow, Agra", major: false },
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
            style={{
              background: "oklch(0.18 0.07 258 / 0.07)",
              borderColor: "oklch(0.72 0.18 55 / 0.3)",
              color: "oklch(0.72 0.18 55)",
            }}
          >
            <MapPin size={12} />
            Nationwide Reach
          </div>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.15 0.05 258)" }}
          >
            Pan India Coverage
          </h2>
          <p
            className="text-lg font-medium max-w-2xl mx-auto"
            style={{ color: "oklch(0.45 0.06 258)" }}
          >
            Wherever Steel is Made, We are There.
          </p>
          <p
            className="text-sm mt-2 max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.52 0.03 255)" }}
          >
            From Jharkhand's blast furnaces to Karnataka's integrated steel
            plants — Flaw Free operates across all major steel-producing regions
            in India with mobile NDT units.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div
              className="h-px w-12"
              style={{ background: "oklch(0.72 0.18 55)" }}
            />
            <div
              className="w-2 h-2 rotate-45"
              style={{ background: "oklch(0.72 0.18 55)" }}
            />
            <div
              className="h-px w-12"
              style={{ background: "oklch(0.72 0.18 55)" }}
            />
          </div>
        </motion.div>

        {/* States Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {steelStates.map((state, i) => (
            <motion.div
              key={state.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="rounded-xl p-4 border cursor-default transition-all duration-200 relative group"
              style={{
                background: state.major
                  ? "linear-gradient(135deg, oklch(0.18 0.07 258 / 0.08), oklch(0.72 0.18 55 / 0.06))"
                  : "oklch(0.96 0.004 250)",
                borderColor: state.major
                  ? "oklch(0.72 0.18 55 / 0.35)"
                  : "oklch(0.88 0.01 255)",
                boxShadow: state.major
                  ? "0 2px 12px oklch(0.72 0.18 55 / 0.08)"
                  : "none",
              }}
            >
              {state.major && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                  style={{ background: "oklch(0.72 0.18 55)" }}
                />
              )}
              <div className="flex items-start gap-2">
                <MapPin
                  size={14}
                  className="mt-0.5 flex-shrink-0"
                  style={{
                    color: state.major
                      ? "oklch(0.72 0.18 55)"
                      : "oklch(0.55 0.08 258)",
                  }}
                />
                <div>
                  <p
                    className="font-display font-bold text-sm"
                    style={{
                      color: state.major
                        ? "oklch(0.18 0.07 258)"
                        : "oklch(0.28 0.05 258)",
                    }}
                  >
                    {state.name}
                  </p>
                  <p
                    className="text-xs mt-0.5 leading-snug"
                    style={{ color: "oklch(0.55 0.03 255)" }}
                  >
                    {state.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-block rounded-xl px-8 py-5 border"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.15 0.06 260 / 0.08), oklch(0.18 0.07 258 / 0.05))",
              borderColor: "oklch(0.72 0.18 55 / 0.25)",
            }}
          >
            <p
              className="font-display font-bold text-lg md:text-2xl"
              style={{ color: "oklch(0.18 0.06 258)" }}
            >
              📍 Mobile NDT Units Deployable Pan India
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(0.5 0.04 255)" }}
            >
              On-site inspection within 48 hours of confirmation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
