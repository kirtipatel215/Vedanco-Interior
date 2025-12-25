
import React from 'react';
import { Region, ServiceItem, PricingTier, ProcessStep, Testimonial } from './types';
import { 
  PencilRuler, 
  Hammer, 
  Lightbulb, 
  Sofa, 
  PaintBucket, 
  FileCheck, 
  LayoutTemplate,
  ChefHat,
  Building,
} from 'lucide-react';
import { ASSETS } from './assets';

export const SERVICES_INDIA: ServiceItem[] = [
  { 
    title: "2D & 3D Interior Design", 
    description: "Comprehensive visualization of your space.", 
    icon: <PencilRuler className="w-6 h-6" />,
    image: ASSETS.servicesIndia[0]
  },
  { 
    title: "Civil Work & False Ceiling", 
    description: "Structural changes and aesthetic ceiling designs.", 
    icon: <Hammer className="w-6 h-6" />,
    image: ASSETS.servicesIndia[1]
  },
  { 
    title: "Electrical & Lighting", 
    description: "Strategic lighting plans and electrical setups.", 
    icon: <Lightbulb className="w-6 h-6" />,
    image: ASSETS.servicesIndia[2]
  },
  { 
    title: "Furniture Manufacturing", 
    description: "Custom-made furniture to fit your style.", 
    icon: <Sofa className="w-6 h-6" />,
    image: ASSETS.servicesIndia[3]
  },
  { 
    title: "Modular Kitchen & Wardrobes", 
    description: "Functional and modern storage solutions.", 
    icon: <ChefHat className="w-6 h-6" />,
    image: ASSETS.servicesIndia[4]
  },
  { 
    title: "Painting & Polishing", 
    description: "Premium finishes for walls and furniture.", 
    icon: <PaintBucket className="w-6 h-6" />,
    image: ASSETS.servicesIndia[5]
  },
  { 
    title: "Full Turnkey Execution", 
    description: "End-to-end management from concept to handover.", 
    icon: <FileCheck className="w-6 h-6" />,
    image: ASSETS.servicesIndia[6]
  },
];

export const SERVICES_INTERNATIONAL: ServiceItem[] = [
  { 
    title: "2D Floor Planning", 
    description: "Precise layouts for optimal space utilization.", 
    icon: <LayoutTemplate className="w-6 h-6" />,
    image: ASSETS.servicesIntl[0]
  },
  { 
    title: "3D HD Renders", 
    description: "Photo-realistic visuals of your future space.", 
    icon: <PencilRuler className="w-6 h-6" />,
    image: ASSETS.servicesIntl[1]
  },
  { 
    title: "3D Walkthrough Video", 
    description: "Immersive video tours of the designed space.", 
    icon: <PencilRuler className="w-6 h-6" />, 
    image: ASSETS.servicesIntl[2]
  },
  { 
    title: "Material & Theme Board", 
    description: "Curated selection of textures and colors.", 
    icon: <PaintBucket className="w-6 h-6" />,
    image: ASSETS.servicesIntl[3]
  },
  { 
    title: "Furniture Layout Planning", 
    description: "Optimized placement for flow and function.", 
    icon: <Sofa className="w-6 h-6" />,
    image: ASSETS.servicesIntl[4]
  },
  { 
    title: "Commercial Concepts", 
    description: "Designs for restaurants, cafes, and offices.", 
    icon: <Building className="w-6 h-6" />,
    image: ASSETS.servicesIntl[5]
  },
];

export const PRICING_INDIA: PricingTier[] = [
  { service: "Home Interior", price: "₹1.5L – ₹12L", features: ["Full Home Design", "Material Selection", "Execution"] },
  { service: "Modular Kitchen", price: "₹60k – ₹2.5L", features: ["Custom Cabinets", "Hardware", "Installation"] },
  { service: "Office Interiors", price: "₹2L – ₹20L", features: ["Workstations", "Cabins", "Reception"] },
  { service: "Turnkey Cost", price: "₹900 – ₹1800", unit: "per sq.ft.", features: ["All Inclusive", "Project Management", "Handover"] },
];

export const PRICING_INTERNATIONAL: PricingTier[] = [
  { service: "One Room 3D", price: "$59 – $199", features: ["HD Renders", "Layout Plan", "Moodboard"] },
  { service: "Full Home 3D", price: "$499 – $2,999", features: ["Whole House Design", "Walkthrough", "Detailed Plans"] },
  { service: "Commercial / Office", price: "$299 – $3,999", features: ["Layout Optimization", "Branding Integration", "3D Views"] },
  { service: "Full Design Package", price: "$999 – $9,999", features: ["Premium Renders", "BOQ", "Material List", "Support"] },
];

export const PROCESS_INDIA: ProcessStep[] = [
  { step: 1, title: "Site Visit & Measure", description: "We visit your location to understand the space." },
  { step: 2, title: "Concept & 3D Design", description: "Visualizing the dream with moodboards and renders." },
  { step: 3, title: "BOQ & Costing", description: "Transparent pricing and material selection." },
  { step: 4, title: "Execution & Manufacturing", description: "Civil work, furniture creation, and installation." },
  { step: 5, title: "Final Handover", description: "Move-in ready space delivered on time." },
];

export const PROCESS_INTERNATIONAL: ProcessStep[] = [
  { step: 1, title: "Online Meeting", description: "Virtual consultation to discuss requirements." },
  { step: 2, title: "Measurements", description: "Client shares floor plans and dimensions." },
  { step: 3, title: "Concept & Rendering", description: "We create high-definition 3D designs." },
  { step: 4, title: "Design Package Delivery", description: "Receive all drawings, renders, and lists via email." },
  { step: 5, title: "Client Execution", description: "You execute locally with our detailed roadmap." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aditya Verma",
    location: "Mumbai, India",
    role: "Homeowner",
    text: "VEDANCO transformed our 3BHK into a masterpiece. The turnkey execution was flawless, and they handled everything from civil work to the final decor. Highly recommended!"
  },
  {
    name: "Sarah Jenkins",
    location: "London, UK",
    role: "Architect",
    text: "The 3D renders provided for my client's villa were photorealistic. The design package was detailed and easy for our local contractors to follow. Great service!"
  },
  {
    name: "Rajesh & Priya",
    location: "Bangalore, India",
    role: "Couple",
    text: "We were worried about managing the renovation while working, but VEDANCO's project management was top-notch. They delivered on time and within budget."
  },
  {
    name: "Michael Ross",
    location: "Dubai, UAE",
    role: "Restaurant Owner",
    text: "The theme selection for our new cafe is exactly what we wanted. The virtual walkthrough helped us visualize the space perfectly before starting construction."
  }
];

export const TARGET_MARKETS_INDIA = ["Homes", "Villas", "Offices", "Cafes", "Restaurants"];
export const TARGET_MARKETS_INTL = ["USA", "UAE", "UK", "Canada", "Australia", "Singapore"];
