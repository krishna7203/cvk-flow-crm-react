import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, HelpCircle, Mail } from "lucide-react";

const Support = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible!",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
    },
    {
      question: "Can I upgrade my plan?",
      answer: "Yes, you can upgrade your plan at any time from your account settings.",
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription from the billing section in your account settings.",
    },
    {
      question: "Is there a mobile app?",
      answer: "We're currently developing mobile apps for iOS and Android. Stay tuned!",
    },
    {
      question: "How can I get technical support?",
      answer: "You can reach our technical support team by submitting a ticket through your dashboard or by contacting us using the form on this page.",
    },
  ];

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
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <CardTitle>Contact Us</CardTitle>
                </div>
                <CardDescription>
                  Our support team is available Monday through Friday, 9am to 5pm.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full p-3 rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </div>
                <CardDescription>
                  Find quick answers to common questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Badge variant="outline" className="text-primary">Q</Badge>
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground ml-8">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-muted/40 rounded-lg p-6 text-center">
            <h2 className="text-xl font-medium mb-2">Need immediate assistance?</h2>
            <p className="mb-4 text-muted-foreground">
              Our support team is ready to help you with any questions or issues
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Email Support
              </Button>
              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat with Us
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
