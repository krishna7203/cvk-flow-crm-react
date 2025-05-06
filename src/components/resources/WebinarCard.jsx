
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const WebinarCard = ({ title, date, time, presenter, link }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>{date} at {time}</span>
        </div>
        <div className="text-sm">
          Presenter: {presenter}
        </div>
        <Button asChild variant="outline" className="w-full">
          <a href={link}>Register Now</a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default WebinarCard;
