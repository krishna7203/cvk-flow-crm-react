
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";

const SupportCTA = () => {
  return (
    <div className="bg-muted/40 rounded-lg p-6 text-center">
      <h2 className="text-xl font-medium mb-2">Need immediate assistance?</h2>
      <p className="mb-4 text-muted-foreground">
        Our support team is ready to help you with any questions or issues
      </p>
      <div className="flex justify-center gap-4">
        <Button variant="outline">
          <Mail className="mr-2 h-4 w-4" />
          Email Support
        </Button>
        <Button>
          <MessageSquare className="mr-2 h-4 w-4" />
          Chat with Us
        </Button>
      </div>
    </div>
  );
};

export default SupportCTA;
