
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

const FAQSection = () => {
  return (
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
  );
};

export default FAQSection;
