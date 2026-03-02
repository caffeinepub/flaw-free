import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { ServiceType, useSubmitInquiry } from "../hooks/useQueries";

const serviceOptions: { label: string; value: ServiceType }[] = [
  { label: "Eddy Current Testing", value: ServiceType.eddyCurrentTesting },
  { label: "Magna Flux Testing", value: ServiceType.magnaFluxTesting },
  { label: "Radiological Testing", value: ServiceType.radiologicalTesting },
  { label: "Ultrasonic Testing", value: ServiceType.ultrasonicTesting },
  { label: "General Inquiry", value: ServiceType.generalInquiry },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7977072178",
    sub: "Mon–Sat, 9AM–7PM IST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@flawfree.in",
    sub: "Reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "Jamshedpur, Jharkhand",
    sub: "Pan India Operations",
  },
  {
    icon: Clock,
    label: "Emergency NDT",
    value: "24 / 7 Callout",
    sub: "+91-9001234567",
  },
];

interface FormState {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  serviceInterest: ServiceType | "";
  message: string;
}

const emptyForm: FormState = {
  name: "",
  companyName: "",
  phone: "",
  email: "",
  serviceInterest: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      serviceInterest: value as ServiceType,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.companyName ||
      !form.phone ||
      !form.email ||
      !form.serviceInterest ||
      !form.message
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    submitInquiry(
      {
        name: form.name,
        companyName: form.companyName,
        phone: form.phone,
        email: form.email,
        serviceInterest: form.serviceInterest as ServiceType,
        message: form.message,
      },
      {
        onSuccess: () => {
          toast.success(
            "Inquiry submitted! Our team will contact you within 24 hours.",
            { duration: 5000 },
          );
          setForm(emptyForm);
        },
        onError: () => {
          toast.error(
            "Submission failed. Please try again or call us directly.",
          );
        },
      },
    );
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.13 0.06 260) 0%, oklch(0.10 0.05 258) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: "oklch(0.72 0.18 55 / 0.12)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              background: "oklch(0.72 0.18 55 / 0.15)",
              borderColor: "oklch(0.72 0.18 55 / 0.35)",
              color: "oklch(0.82 0.16 75)",
            }}
          >
            Get in Touch
          </div>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.95 0.01 255)" }}
          >
            Request a Quote
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.65 0.04 255)" }}
          >
            Tell us about your inspection requirements and our team will get
            back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3
              className="font-display font-bold text-xl mb-6"
              style={{ color: "oklch(0.90 0.02 255)" }}
            >
              Contact Details
            </h3>
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-4 rounded-xl border"
                  style={{
                    background: "oklch(0.18 0.06 260 / 0.5)",
                    borderColor: "oklch(0.28 0.05 258 / 0.5)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.72 0.18 55 / 0.18)" }}
                  >
                    <Icon size={18} style={{ color: "oklch(0.78 0.18 55)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "oklch(0.55 0.04 255)" }}
                    >
                      {info.label}
                    </p>
                    <p
                      className="font-semibold text-sm mt-0.5"
                      style={{ color: "oklch(0.88 0.02 255)" }}
                    >
                      {info.value}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(0.58 0.04 255)" }}
                    >
                      {info.sub}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Quick response badge */}
            <div
              className="mt-6 p-5 rounded-xl border"
              style={{
                background: "oklch(0.72 0.18 55 / 0.1)",
                borderColor: "oklch(0.72 0.18 55 / 0.3)",
              }}
            >
              <p
                className="font-display font-bold text-base"
                style={{ color: "oklch(0.85 0.14 65)" }}
              >
                ⚡ Emergency Callout?
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "oklch(0.70 0.04 255)" }}
              >
                Call our 24/7 hotline for urgent shutdown inspections. We deploy
                within 48 hours anywhere in India.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 md:p-8 border"
              style={{
                background: "oklch(0.16 0.06 260 / 0.7)",
                borderColor: "oklch(0.28 0.05 258 / 0.5)",
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.78 0.03 255)" }}
                  >
                    Full Name{" "}
                    <span style={{ color: "oklch(0.72 0.18 55)" }}>*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rajesh Kumar"
                    required
                    className="bg-transparent border-opacity-50 text-sm"
                    style={{
                      borderColor: "oklch(0.35 0.05 258 / 0.6)",
                      color: "oklch(0.90 0.01 255)",
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="companyName"
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.78 0.03 255)" }}
                  >
                    Company Name{" "}
                    <span style={{ color: "oklch(0.72 0.18 55)" }}>*</span>
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Tata Steel Ltd"
                    required
                    className="bg-transparent text-sm"
                    style={{
                      borderColor: "oklch(0.35 0.05 258 / 0.6)",
                      color: "oklch(0.90 0.01 255)",
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.78 0.03 255)" }}
                  >
                    Phone Number{" "}
                    <span style={{ color: "oklch(0.72 0.18 55)" }}>*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="bg-transparent text-sm"
                    style={{
                      borderColor: "oklch(0.35 0.05 258 / 0.6)",
                      color: "oklch(0.90 0.01 255)",
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.78 0.03 255)" }}
                  >
                    Email Address{" "}
                    <span style={{ color: "oklch(0.72 0.18 55)" }}>*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="inspection@company.in"
                    required
                    className="bg-transparent text-sm"
                    style={{
                      borderColor: "oklch(0.35 0.05 258 / 0.6)",
                      color: "oklch(0.90 0.01 255)",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <Label
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.78 0.03 255)" }}
                >
                  Service of Interest{" "}
                  <span style={{ color: "oklch(0.72 0.18 55)" }}>*</span>
                </Label>
                <Select
                  onValueChange={handleServiceChange}
                  value={form.serviceInterest}
                >
                  <SelectTrigger
                    className="bg-transparent text-sm"
                    style={{
                      borderColor: "oklch(0.35 0.05 258 / 0.6)",
                      color: form.serviceInterest
                        ? "oklch(0.90 0.01 255)"
                        : "oklch(0.55 0.03 255)",
                    }}
                  >
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 mb-6">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.78 0.03 255)" }}
                >
                  Message / Requirement{" "}
                  <span style={{ color: "oklch(0.72 0.18 55)" }}>*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your inspection requirements — component type, material, plant location, urgency..."
                  required
                  rows={5}
                  className="bg-transparent text-sm resize-none"
                  style={{
                    borderColor: "oklch(0.35 0.05 258 / 0.6)",
                    color: "oklch(0.90 0.01 255)",
                  }}
                />
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full font-bold text-base py-6 rounded-lg transition-all"
                style={{
                  background: "oklch(0.72 0.18 55)",
                  color: "oklch(0.12 0.04 30)",
                }}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Inquiry
                  </>
                )}
              </Button>

              <p
                className="text-xs text-center mt-3"
                style={{ color: "oklch(0.5 0.03 255)" }}
              >
                We respect your privacy. Your information is never shared with
                third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
