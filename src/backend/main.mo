import Array "mo:core/Array";
import Map "mo:core/Map";
import Int "mo:core/Int";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";

actor {
  type ServiceType = {
    #eddyCurrentTesting;
    #magnaFluxTesting;
    #radiologicalTesting;
    #ultrasonicTesting;
    #generalInquiry;
  };

  type Inquiry = {
    name : Text;
    companyName : Text;
    phone : Text;
    email : Text;
    serviceInterest : ServiceType;
    message : Text;
    timestamp : Time.Time;
  };

  type Service = {
    id : Nat;
    name : Text;
    shortDescription : Text;
    detailedDescription : Text;
    useCases : [Text];
    benefits : [Text];
  };

  type Testimonial = {
    id : Nat;
    clientName : Text;
    company : Text;
    rating : Nat;
    message : Text;
  };

  module Inquiry {
    public func compareByTimestamp(a : Inquiry, b : Inquiry) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  let inquiries = Map.empty<Nat, Inquiry>();
  var nextInquiryId = 0;

  let services = Map.empty<Nat, Service>();

  let testimonials = Map.empty<Nat, Testimonial>();
  var nextTestimonialId = 0;

  // Pre-seed services
  do {
    services.add(
      1,
      {
        id = 1;
        name = "Eddy Current Testing";
        shortDescription = "Detect surface and sub-surface flaws using electromagnetic induction.";
        detailedDescription = "Eddy Current Testing is a non-destructive testing method that uses electromagnetic induction to detect surface and sub-surface flaws in conductive materials.";
        useCases = [
          "Crack detection in metal surfaces",
          "Conductivity measurement",
          "Heat treatment verification",
        ];
        benefits = [
          "Fast and accurate",
          "No need for direct contact",
          "Suitable for complex shapes",
        ];
      },
    );

    services.add(
      2,
      {
        id = 2;
        name = "Magna Flux Testing";
        shortDescription = "Detect surface and near-surface discontinuities in ferromagnetic materials.";
        detailedDescription = "Magna Flux Testing, also known as Magnetic Particle Testing, is a method used to detect surface and near-surface discontinuities in ferromagnetic materials.";
        useCases = [
          "Weld inspections",
          "Detection of fatigue cracks",
          "Quality control in manufacturing",
        ];
        benefits = [
          "High sensitivity",
          "Cost-effective",
          "Rapid results",
        ];
      },
    );

    services.add(
      3,
      {
        id = 3;
        name = "Radiological Testing";
        shortDescription = "Inspect internal structure of materials using X-rays or gamma rays.";
        detailedDescription = "Radiological Testing is a non-destructive testing technique that uses X-rays or gamma rays to inspect the internal structure of materials.";
        useCases = [
          "Inspection of welds",
          "Detection of inclusions in metals",
          "Checking structural integrity",
        ];
        benefits = [
          "Accurate internal imaging",
          "Non-invasive",
          "Applicable to a variety of materials",
        ];
      },
    );

    services.add(
      4,
      {
        id = 4;
        name = "Ultrasonic Testing";
        shortDescription = "Detect internal flaws using high-frequency sound waves.";
        detailedDescription = "Ultrasonic Testing is a method that uses high-frequency sound waves to detect internal flaws in materials.";
        useCases = [
          "Thickness measurements",
          "Detection of voids and cracks",
          "Bond testing",
        ];
        benefits = [
          "Deep penetration",
          "Accurate measurements",
          "Portable equipment",
        ];
      },
    );
  };

  // Pre-seed testimonials
  do {
    testimonials.add(
      1,
      {
        id = 1;
        clientName = "Rajesh Kumar";
        company = "Steel India Pvt Ltd";
        rating = 5;
        message = "Flaw Free provided excellent NDT services. Highly recommend their professionalism and expertise!";
      },
    );

    testimonials.add(
      2,
      {
        id = 2;
        clientName = "Meena Singh";
        company = "Bharat Metals";
        rating = 4;
        message = "Reliable and accurate testing. The team was very knowledgeable and efficient.";
      },
    );
  };

  // Public methods
  public shared ({ caller }) func submitInquiry(
    name : Text,
    companyName : Text,
    phone : Text,
    email : Text,
    serviceInterest : ServiceType,
    message : Text,
  ) : async () {
    let inquiry : Inquiry = {
      name;
      companyName;
      phone;
      email;
      serviceInterest;
      message;
      timestamp = Time.now();
    };

    inquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
    ();
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort(Inquiry.compareByTimestamp);
  };

  public query ({ caller }) func getAllServices() : async [Service] {
    services.values().toArray();
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray();
  };

  public query ({ caller }) func getServiceById(id : Nat) : async ?Service {
    services.get(id);
  };

  public query ({ caller }) func getTestimonialById(id : Nat) : async ?Testimonial {
    testimonials.get(id);
  };
};
