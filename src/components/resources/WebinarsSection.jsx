
import React from "react";
import { Button } from "@/components/ui/button";
import WebinarCard from "./WebinarCard";

const WebinarsSection = ({ webinars }) => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Webinars</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our live webinars to learn from experts and enhance your CRM skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <WebinarCard 
              key={index}
              title={webinar.title}
              date={webinar.date}
              time={webinar.time}
              presenter={webinar.presenter}
              link={webinar.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline">View All Webinars</Button>
        </div>
      </div>
    </section>
  );
};

export default WebinarsSection;
