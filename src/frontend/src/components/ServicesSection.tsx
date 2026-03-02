import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import type { Service } from "../backend.d.ts";
import { useGetAllServices } from "../hooks/useQueries";

const serviceImages: Record<string, string> = {
  "Eddy Current Testing":
    "/assets/generated/service-eddy-current.dim_600x400.jpg",
  "Magna Flux Testing": "/assets/generated/service-magna-flux.dim_600x400.jpg",
  "Radiological Testing":
    "/assets/generated/service-radiological.dim_600x400.jpg",
  "Ultrasonic Testing": "/assets/generated/service-ultrasonic.dim_600x400.jpg",
};

const fallbackServices: Service[] = [
  {
    id: BigInt(1),
    name: "Eddy Current Testing",
    shortDescription:
      "Electromagnetic inspection for detecting surface and near-surface defects in conductive materials.",
    detailedDescription:
      "Eddy current testing uses electromagnetic induction to detect flaws, measure thickness, and characterize materials without direct contact.",
    useCases: [
      "Heat exchanger tube inspection",
      "Weld inspection in steel structures",
      "Surface crack detection",
      "Corrosion under insulation",
    ],
    benefits: [
      "High sensitivity to surface defects",
      "No contact with component required",
      "Fast scanning speed",
      "Works on coated surfaces",
    ],
  },
  {
    id: BigInt(2),
    name: "Magna Flux Testing",
    shortDescription:
      "Magnetic particle inspection revealing surface and slightly subsurface discontinuities in ferromagnetic materials.",
    detailedDescription:
      "Magnetic particle testing magnetizes the component and applies iron particles to reveal any surface-breaking or near-surface defects.",
    useCases: [
      "Weld joint inspection",
      "Casting and forging QC",
      "Shaft and gear inspection",
      "Pressure vessel testing",
    ],
    benefits: [
      "Excellent for ferromagnetic materials",
      "High probability of flaw detection",
      "Fast and cost-effective",
      "Portable equipment available",
    ],
  },
  {
    id: BigInt(3),
    name: "Radiological Testing",
    shortDescription:
      "X-ray and gamma-ray inspection providing through-thickness imaging of internal weld and casting defects.",
    detailedDescription:
      "Radiographic testing uses penetrating radiation to produce images of internal features, revealing volumetric flaws such as porosity and inclusions.",
    useCases: [
      "Weld quality verification",
      "Pipeline girth welds",
      "Steel casting inspection",
      "Pressure piping systems",
    ],
    benefits: [
      "Permanent visual record",
      "Detects internal defects",
      "Applicable to most materials",
      "ASME/AWS code compliant",
    ],
  },
  {
    id: BigInt(4),
    name: "Ultrasonic Testing",
    shortDescription:
      "High-frequency sound waves to detect internal flaws, measure thickness, and characterize material properties.",
    detailedDescription:
      "UT sends ultrasonic pulses into a material and analyzes reflections to locate and size internal discontinuities with high precision.",
    useCases: [
      "Thickness measurement",
      "Weld flaw sizing",
      "Lamination detection in plates",
      "Automated phased array scanning",
    ],
    benefits: [
      "Precise depth measurement",
      "Safe — no radiation hazard",
      "Real-time results",
      "TOFD and phased array available",
    ],
  },
];

function ServiceCardSkeleton() {
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ borderColor: "oklch(0.88 0.01 255)" }}
    >
      <Skeleton className="h-52 w-full" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="pt-2 space-y-2">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-3 w-36" />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const imgSrc =
    serviceImages[service.name] ||
    "/assets/generated/service-eddy-current.dim_600x400.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group rounded-xl overflow-hidden border card-hover-glow bg-card"
      style={{ borderColor: "oklch(0.88 0.01 255)" }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={imgSrc}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.12 0.06 260 / 0.7) 0%, transparent 60%)",
          }}
        />
        {/* Service number */}
        <div
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm"
          style={{
            background: "oklch(0.72 0.18 55)",
            color: "oklch(0.12 0.04 30)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="font-display font-bold text-xl mb-3"
          style={{ color: "oklch(0.15 0.05 258)" }}
        >
          {service.name}
        </h3>
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "oklch(0.42 0.03 255)" }}
        >
          {service.shortDescription}
        </p>

        {/* Use Cases */}
        {service.useCases.length > 0 && (
          <div className="mb-4">
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "oklch(0.72 0.18 55)" }}
            >
              Steel Sector Use Cases
            </p>
            <div className="space-y-1">
              {service.useCases.slice(0, 3).map((uc) => (
                <div key={uc} className="flex items-start gap-2">
                  <ArrowRight
                    size={12}
                    className="mt-1 flex-shrink-0"
                    style={{ color: "oklch(0.72 0.18 55)" }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: "oklch(0.42 0.03 255)" }}
                  >
                    {uc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits */}
        {service.benefits.length > 0 && (
          <div
            className="rounded-lg p-4 mt-4"
            style={{ background: "oklch(0.94 0.006 250)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "oklch(0.35 0.06 258)" }}
            >
              Key Benefits
            </p>
            <div className="space-y-1.5">
              {service.benefits.slice(0, 3).map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle2
                    size={12}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.52 0.16 148)" }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: "oklch(0.35 0.04 255)" }}
                  >
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { data: services, isLoading } = useGetAllServices();
  const displayServices =
    services && services.length > 0 ? services : fallbackServices;

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              background: "oklch(0.18 0.07 258 / 0.08)",
              borderColor: "oklch(0.72 0.18 55 / 0.3)",
              color: "oklch(0.72 0.18 55)",
            }}
          >
            Our Expertise
          </div>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.15 0.05 258)" }}
          >
            Our NDT Services
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.45 0.03 255)" }}
          >
            Advanced non-destructive testing solutions tailored for India's
            steel sector — ensuring structural integrity without interrupting
            your operations.
          </p>

          {/* Decorative divider */}
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {isLoading
            ? ["ect", "mft", "rt", "ut"].map((k) => (
                <ServiceCardSkeleton key={k} />
              ))
            : displayServices.map((service, index) => (
                <ServiceCard
                  key={service.id.toString()}
                  service={service}
                  index={index}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
