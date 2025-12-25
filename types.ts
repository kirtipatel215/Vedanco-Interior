import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string; // Added for hover reveal effect
}

export interface PricingTier {
  service: string;
  price: string;
  unit?: string;
  features: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  role: string;
}

export enum Region {
  INDIA = 'INDIA',
  INTERNATIONAL = 'INTERNATIONAL'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}