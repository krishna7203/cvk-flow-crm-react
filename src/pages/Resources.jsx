
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon } from "lucide-react";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("guides");
  
  const resourceCategories = [
    {
      id: "guides",
      title: "Guides & Tutorials",
      description: "Step-by-step guides to help you get the most out of CVK CRM",
      items: [
        {
          title: "Getting Started with CVK CRM",
          description: "Learn how to set up your account and navigate the dashboard",
          image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=1170",
          link: "#"
        },
        {
          title: "Managing Your Customer Database",
          description: "Best practices for organizing and maintaining your contacts",
          image: "https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?q=80&w=1170",
          link: "#"
        },
        {
          title: "Sales Pipeline Management",
          description: "How to track deals and improve your sales process",
          image: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=735",
          link: "#"
        }
      ]
    },
    {
      id: "cases",
      title: "Case Studies",
      description: "See how other businesses have succeeded with CVK CRM",
      items: [
        {
          title: "How Company X Increased Sales by 45%",
          description: "Learn how this retail business transformed their customer relationships",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170",
          link: "#"
        },
        {
          title: "Service Company Improves Customer Retention",
          description: "Discover the strategies that led to a 60% increase in customer loyalty",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170",
          link: "#"
        },
        {
          title: "Tech Startup Scales Operations Efficiently",
          description: "How a growing company managed their expanding customer base seamlessly",
          image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1170",
          link: "#"
        }
      ]
    },
    {
      id: "templates",
      title: "Templates & Tools",
      description: "Ready-to-use resources to enhance your workflow",
      items: [
        {
          title: "Sales Email Templates",
          description: "Professionally written templates for different stages of your sales process",
          image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974",
          link: "#"
        },
        {
          title: "CRM Data Migration Toolkit",
          description: "Tools and guides for moving your data to CVK CRM",
          image: "https://images.unsplash.com/photo-1583911860348-c16e48f3432b?q=80&w=1888",
          link: "#"
        },
        {
          title: "ROI Calculator",
          description: "Calculate the potential return on investment from using CVK CRM",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911",
          link: "#"
        }
      ]
    }
  ];
  
  const webinars = [
    {
      title: "Mastering Customer Relationships in 2025",
      date: "May 15, 2025",
      time: "2:00 PM EST",
      presenter: "Jane Smith, Customer Success Director",
      link: "#"
    },
    {
      title: "Integrating Your Tech Stack with CVK CRM",
      date: "May 22, 2025",
      time: "1:00 PM EST",
      presenter: "Michael Chen, Integration Specialist",
      link: "#"
    },
    {
      title: "Advanced Sales Pipeline Strategies",
      date: "June 3, 2025",
      time: "11:00 AM EST",
      presenter: "Sarah Johnson, Sales Expert",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
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
        
        {/* Resources Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {resourceCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {resourceCategories.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{category.title}</h2>
                    <div className="max-w-2xl mx-auto">
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item, index) => (
                      <Card key={index} className="overflow-hidden h-full">
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base mb-4">
                            {item.description}
                          </CardDescription>
                          <Button asChild variant="outline" className="w-full">
                            <a href={item.link}>Read More</a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Webinars Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Webinars</h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-muted-foreground">
                  Join our live webinars to learn from experts and enhance your CRM skills
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webinars.map((webinar, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle>{webinar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>{webinar.date} at {webinar.time}</span>
                    </div>
                    <div className="text-sm">
                      Presenter: {webinar.presenter}
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <a href={webinar.link}>Register Now</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline">View All Webinars</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
