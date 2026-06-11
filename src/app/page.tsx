import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import FeatureWorks from "@/components/sections/FeatureWorks";
import ServicePreview from "@/components/sections/ServicePreview";
import { buildPageMetadata, seoPages } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata(seoPages.home);
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicePreview />
      <FeatureWorks />
    </>
  );
}
