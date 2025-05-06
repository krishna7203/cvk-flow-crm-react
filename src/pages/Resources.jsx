
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Resource Library",
      description: "Access guides, templates, and reports to help your business grow",
      items: [
        {
          title: "CRM Implementation Guide",
          description: "Learn how to successfully implement a CRM system in your organization",
          icon: <FileText className="h-6 w-6" />,
          type: "Guide",
          link: "#",
        },
        {
          title: "Sales Pipeline Management",
          description: "Master the art of managing your sales pipeline effectively",
          icon: <BookOpen className="h-6 w-6" />,
          type: "eBook",
          link: "#",
        },
        {
          title: "Customer Relationship Metrics",
          description: "Key metrics to track for better customer relationships",
          icon: <FileText className="h-6 w-6" />,
          type: "Report",
          link: "#",
        },
      ]
    },
    {
      title: "Blog",
      description: "The latest insights on CRM, sales, and customer relationships",
      items: [
        {
          title: "5 Ways to Improve Customer Retention",
          description: "Strategies to keep your customers coming back",
          date: "May 1, 2025",
          link: "#",
        },
        {
          title: "The Future of CRM Technology",
          description: "Emerging trends in customer relationship management",
          date: "April 22, 2025",
          link: "#",
        },
        {
          title: "Building Effective Sales Workflows",
          description: "Streamline your sales process for better results",
          date: "April 15, 2025",
          link: "#",
        },
      ]
    }
  ];

  const webinars = [
    {
      title: "Mastering Customer Engagement",
      date: "May 15, 2025",
      time: "11:00 AM PST",
      presenter: "Sarah Johnson, Customer Success Director",
      link: "#"
    },
    {
      title: "Advanced CRM Analytics",
      date: "May 22, 2025",
      time: "1:00 PM PST",
      presenter: "Michael Chen, Data Analyst",
      link: "#"
    },
    {
      title: "Sales Pipeline Optimization",
      date: "June 5, 2025",
      time: "10:00 AM PST",
      presenter: "David Rodriguez, Sales Director",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover guides, reports, and tools to help you build better customer relationships and grow your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full">Resource Library</Button>
              <Button size="lg" variant="outline" className="rounded-full">Blog</Button>
              <Button size="lg" variant="outline" className="rounded-full">Webinars</Button>
            </div>
          </div>
        </section>

        {/* Resource categories */}
        {resourceCategories.map((category, index) => (
          <section key={index} className="py-16 container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-3">{category.title}</h2>
              <p className="text-muted-foreground text-lg">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="h-full">
                  <CardHeader>
                    {item.icon && <div className="mb-3">{item.icon}</div>}
                    {item.type && (
                      <div className="text-xs font-medium text-primary mb-2">{item.type}</div>
                    )}
                    {item.date && (
                      <div className="text-xs text-muted-foreground mb-2">{item.date}</div>
                    )}
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <a href={item.link} className="text-primary flex items-center gap-1 hover:underline">
                      Read More <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {category.title === "Resource Library" && (
              <div className="mt-8 text-center">
                <Button variant="outline" className="rounded-full">View All Resources</Button>
              </div>
            )}
            
            {category.title === "Blog" && (
              <div className="mt-8 text-center">
                <Button variant="outline" className="rounded-full">Visit The Blog</Button>
              </div>
            )}
          </section>
        ))}

        {/* Webinars section */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-3">Upcoming Webinars</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join our live sessions with industry experts and learn how to maximize your CRM potential
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {webinars.map((webinar, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="text-xs font-medium text-primary mb-2">WEBINAR</div>
                    <CardTitle className="text-xl">{webinar.title}</CardTitle>
                    <CardDescription>
                      <div className="mt-1">{webinar.date}</div>
                      <div>{webinar.time}</div>
                      <div className="mt-2">{webinar.presenter}</div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">Register Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button className="rounded-full">View All Webinars</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
