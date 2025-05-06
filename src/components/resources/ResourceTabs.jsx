
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceCard from "./ResourceCard";

const ResourceTabs = ({ resourceCategories, activeTab, setActiveTab }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
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
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <ResourceCard 
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    link={item.link}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ResourceTabs;
