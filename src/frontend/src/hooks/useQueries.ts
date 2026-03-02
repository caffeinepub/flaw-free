import { useMutation, useQuery } from "@tanstack/react-query";
import { ServiceType } from "../backend";
import type { Service, Testimonial } from "../backend.d.ts";
import { useActor } from "./useActor";

export function useGetAllServices() {
  const { actor, isFetching } = useActor();
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllServices();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useGetAllTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export interface InquiryPayload {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  serviceInterest: ServiceType;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (payload: InquiryPayload) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitInquiry(
        payload.name,
        payload.companyName,
        payload.phone,
        payload.email,
        payload.serviceInterest,
        payload.message,
      );
    },
  });
}

export { ServiceType };
