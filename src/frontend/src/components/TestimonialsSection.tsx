import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import type { Testimonial } from "../backend.d.ts";
import { useGetAllTestimonials } from "../hooks/useQueries";

const fallbackTestimonials: Testimonial[] = [
  {
    id: BigInt(1),
    clientName: "Rajesh Kumar Singh",
    company: "Tata Steel Ltd, Jamshedpur",
    message:
      "Flaw Free's Phased Array UT team detected a critical sub-surface lamination in our hot strip mill rollers that we had completely missed. Their detailed report saved us from a catastrophic shutdown. Exceptional expertise.",
    rating: BigInt(5),
  },
  {
    id: BigInt(2),
    clientName: "Priya Venkataraman",
    company: "SAIL – Rourkela Steel Plant",
    message:
      "We've been using Flaw Free for our annual turnaround inspections for 3 years. Their radiological team is highly professional, radiation-safe, and delivers reports within 24 hours. Pan India deployment capability is a major advantage.",
    rating: BigInt(5),
  },
  {
    id: BigInt(3),
    clientName: "Mohammed Aslam Khan",
    company: "JSW Steel, Bellary",
    message:
      "The eddy current testing on our heat exchanger bundles was performed with world-class precision. The team identified 12 tubes with wall thinning >40% that needed immediate plugging. A true save.",
    rating: BigInt(5),
  },
  {
    id: BigInt(4),
    clientName: "Suresh Babu Nair",
    company: "RINL Vizag Steel",
    message:
      "Flaw Free mobilized a magna flux team within 36 hours for our emergency crane girder inspection. Their Level III engineer was on-site in person — that level of commitment is rare in the industry.",
    rating: BigInt(5),
  },
  {
    id: BigInt(5),
    clientName: "Anita Desai",
    company: "Essar Steel, Hazira",
    message:
      "Outstanding service quality, meticulous documentation, and competitive pricing. The Flaw Free team integrates seamlessly with our shutdown planning team. Highly recommended for any steel sector NDT requirement.",
    rating: BigInt(5),
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={14}
          fill={n <= rating ? "oklch(0.78 0.18 55)" : "none"}
          stroke={n <= rating ? "oklch(0.78 0.18 55)" : "oklch(0.6 0.03 255)"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const rating = Number(testimonial.rating);
  return (
    <div
      className="rounded-xl p-6 md:p-8 border relative flex flex-col h-full"
      style={{
        background: "oklch(0.98 0.004 250)",
        borderColor: "oklch(0.88 0.01 255)",
      }}
    >
      {/* Quote icon */}
      <div
        className="absolute top-5 right-6 opacity-10"
        style={{ color: "oklch(0.35 0.08 258)" }}
      >
        <Quote size={48} />
      </div>

      {/* Top accent */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full"
        style={{ background: "oklch(0.72 0.18 55)" }}
      />

      <StarRating rating={rating} />

      <p
        className="text-sm leading-relaxed mt-4 mb-6 flex-1"
        style={{ color: "oklch(0.35 0.04 255)" }}
      >
        "{testimonial.message}"
      </p>

      <div
        className="flex items-center gap-3 mt-auto pt-4 border-t"
        style={{ borderColor: "oklch(0.90 0.01 255)" }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0"
          style={{
            background: "oklch(0.22 0.06 258)",
            color: "oklch(0.78 0.18 55)",
          }}
        >
          {testimonial.clientName.charAt(0)}
        </div>
        <div>
          <p
            className="font-semibold text-sm"
            style={{ color: "oklch(0.18 0.05 258)" }}
          >
            {testimonial.clientName}
          </p>
          <p className="text-xs" style={{ color: "oklch(0.52 0.04 255)" }}>
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function TestimonialSkeleton() {
  return (
    <div
      className="rounded-xl p-6 border"
      style={{ borderColor: "oklch(0.88 0.01 255)" }}
    >
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="w-4 h-4 rounded-sm" />
        ))}
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/6 mb-6" />
      <div
        className="flex items-center gap-3 pt-4 border-t"
        style={{ borderColor: "oklch(0.90 0.01 255)" }}
      >
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useGetAllTestimonials();
  const displayTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials
      : fallbackTestimonials;

  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleCount =
    typeof window !== "undefined" && window.innerWidth >= 1024
      ? 3
      : window.innerWidth >= 640
        ? 2
        : 1;
  const maxIndex = Math.max(0, displayTestimonials.length - visibleCount);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-background overflow-hidden"
    >
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
            Client Stories
          </div>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.15 0.05 258)" }}
          >
            Trusted by Steel Leaders
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.45 0.03 255)" }}
          >
            What India's top steel producers say about Flaw Free's inspection
            services.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <TestimonialSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            {/* Carousel container */}
            <div ref={containerRef} className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: `calc(-${current} * (100% / ${Math.min(displayTestimonials.length, 3)} + 8px))`,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              >
                {displayTestimonials.map((t) => (
                  <div
                    key={t.id.toString()}
                    className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <TestimonialCard testimonial={t} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation */}
            {displayTestimonials.length > visibleCount && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={prev}
                  disabled={current === 0}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-40"
                  style={{
                    borderColor: "oklch(0.72 0.18 55)",
                    color: "oklch(0.72 0.18 55)",
                    background:
                      current === 0
                        ? "transparent"
                        : "oklch(0.72 0.18 55 / 0.1)",
                  }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: maxIndex + 1 }, (_, idx) => idx).map(
                    (idx) => (
                      <button
                        type="button"
                        key={`dot-${idx}`}
                        onClick={() => setCurrent(idx)}
                        className="w-2 h-2 rounded-full transition-all duration-200"
                        style={{
                          background:
                            idx === current
                              ? "oklch(0.72 0.18 55)"
                              : "oklch(0.78 0.03 255)",
                          transform:
                            idx === current ? "scale(1.3)" : "scale(1)",
                        }}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ),
                  )}
                </div>

                <button
                  type="button"
                  onClick={next}
                  disabled={current === maxIndex}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-40"
                  style={{
                    borderColor: "oklch(0.72 0.18 55)",
                    color: "oklch(0.72 0.18 55)",
                    background:
                      current === maxIndex
                        ? "transparent"
                        : "oklch(0.72 0.18 55 / 0.1)",
                  }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
