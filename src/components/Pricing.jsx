
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      description: "Perfect for small businesses and freelancers",
      features: [
        "Up to 1,000 contacts",
        "Basic pipeline management",
        "Email integration",
        "Mobile app access",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 10,000 contacts",
        "Advanced pipeline management",
        "Email and calendar integration",
        "Task automation",
        "Analytics and reporting",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited contacts",
        "Custom pipeline workflows",
        "Advanced automations",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Enterprise-grade security"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="highlight-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full rounded-full ${plan.popular ? 'btn-gradient' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
