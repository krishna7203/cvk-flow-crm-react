
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your customer relationships?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join thousands of businesses using CVK CRM to grow their customer relationships and increase sales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="rounded-full py-6 px-8 text-base bg-white text-primary hover:bg-white/90">
              Start Your Free Trial
            </Button>
            <Button variant="outline" className="rounded-full py-6 px-8 text-base border-white text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
