import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    id: bigint;
    useCases: Array<string>;
    name: string;
    shortDescription: string;
    benefits: Array<string>;
    detailedDescription: string;
}
export type Time = bigint;
export interface Inquiry {
    name: string;
    email: string;
    serviceInterest: ServiceType;
    message: string;
    timestamp: Time;
    companyName: string;
    phone: string;
}
export interface Testimonial {
    id: bigint;
    clientName: string;
    company: string;
    message: string;
    rating: bigint;
}
export enum ServiceType {
    eddyCurrentTesting = "eddyCurrentTesting",
    radiologicalTesting = "radiologicalTesting",
    magnaFluxTesting = "magnaFluxTesting",
    ultrasonicTesting = "ultrasonicTesting",
    generalInquiry = "generalInquiry"
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getAllServices(): Promise<Array<Service>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getServiceById(id: bigint): Promise<Service | null>;
    getTestimonialById(id: bigint): Promise<Testimonial | null>;
    submitInquiry(name: string, companyName: string, phone: string, email: string, serviceInterest: ServiceType, message: string): Promise<void>;
}
