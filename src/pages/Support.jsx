
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HelpCircle } from "lucide-react";
import ContactForm from "@/components/support/ContactForm";
import FAQSection from "@/components/support/FAQSection";
import SupportCTA from "@/components/support/SupportCTA";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={28} className="text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Support Center</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ContactForm />
            <FAQSection />
          </div>
          
          <SupportCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
