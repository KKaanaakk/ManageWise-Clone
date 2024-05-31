import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PremiumFeature from "@/components/premiumfeature";
import ThirdSection from "@/components/ThirdSection";
import Faqs from "@/components/faqSection";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import JoinUs from "@/components/joinus";
import Footer from "@/components/footer";

export const metadata = {
  title: 'Manage Wise | A comprehensive management platform',
  description: 'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success.',
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PremiumFeature />
      <ThirdSection />
      <Faqs />
      <Pricing />
      <Testimonials />
      <JoinUs />
      <Footer />
    </div>
  );
}





