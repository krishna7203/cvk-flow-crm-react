
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The <span className="highlight-gradient">CVK CRM</span> that works for you
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              The customer relationship platform that helps your business grow. Streamline sales, marketing, and support in one unified experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full py-6 px-8 text-base btn-gradient">Start Your Free Trial</Button>
              <Button variant="outline" className="rounded-full py-6 px-8 text-base">See a Demo</Button>
            </div>
            <div className="text-sm text-muted-foreground">
              No credit card required. 14-day free trial.
            </div>
          </div>
          <div className="hidden lg:block rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070" 
              alt="CVK CRM Dashboard" 
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
