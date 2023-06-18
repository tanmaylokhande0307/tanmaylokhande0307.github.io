export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Features />
      <Zigzag />
      <Testimonials />
    </>
  );
}
