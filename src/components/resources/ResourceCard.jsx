
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResourceCard = ({ title, description, image, link }) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">
          {description}
        </CardDescription>
        <Button asChild variant="outline" className="w-full">
          <a href={link}>Read More</a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
