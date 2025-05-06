
import React from "react";
import { Button } from "@/components/ui/button";

const ResourcesHero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Resources & Support</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg opacity-90 mb-8">
            Everything you need to get the most out of your CVK CRM experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Support
            </Button>
            <Button className="bg-white text-primary hover:bg-white/90">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
