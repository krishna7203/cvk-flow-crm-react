
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Trusted by <span className="highlight-gradient">Businesses Worldwide</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
              {/* Placeholder for company logos */}
              <div className="h-12 w-full flex items-center justify-center">Company 1</div>
              <div className="h-12 w-full flex items-center justify-center">Company 2</div>
              <div className="h-12 w-full flex items-center justify-center">Company 3</div>
              <div className="h-12 w-full flex items-center justify-center">Company 4</div>
            </div>
          </div>
        </section>
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
