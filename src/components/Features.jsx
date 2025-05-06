
import { Check, Contact, Database, Briefcase, Bell, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Contact Management",
      description: "Store and organize all your contacts in one place with powerful filtering and tagging tools.",
      icon: Contact,
    },
    {
      title: "Sales Pipeline",
      description: "Visualize and manage your sales process with a customizable pipeline view.",
      icon: BarChart,
    },
    {
      title: "Data Analytics",
      description: "Gain insights into your business performance with detailed reports and analytics.",
      icon: Database,
    },
    {
      title: "Task Management",
      description: "Never miss a follow-up with integrated task management and reminders.",
      icon: Check,
    },
    {
      title: "Deal Tracking",
      description: "Track opportunities from lead to close with comprehensive deal management.",
      icon: Briefcase,
    },
    {
      title: "Notifications",
      description: "Stay informed with real-time alerts and notifications for important events.",
      icon: Bell,
    },
  ];

  return (
    <section id="features" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need in a <span className="highlight-gradient">Modern CRM</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            CVK provides all the tools you need to manage your customer relationships effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border border-border bg-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
