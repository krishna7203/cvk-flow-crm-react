
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourceTabs from "@/components/resources/ResourceTabs";
import WebinarsSection from "@/components/resources/WebinarsSection";
import { resourceCategories, webinars } from "@/data/resourcesData";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("guides");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20"> {/* Padding top to prevent content from hiding under fixed navbar */}
        <ResourcesHero />
        <ResourceTabs 
          resourceCategories={resourceCategories}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <WebinarsSection webinars={webinars} />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
