import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";

export const componentRegistry = {
  hero: HeroSection,
  features: FeaturesSection,
} as const