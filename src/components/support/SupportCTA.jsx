
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SupportCTA = () => {
  const { toast } = useToast();

  const handleEmailSupport = () => {
    toast({
      title: "Support Email",
      description: "Opening your email client...",
    });
    // In a real app, this could open a mailto link or navigate to an email form
    window.open("mailto:support@example.com");
  };

  const handleChatSupport = () => {
    toast({
      title: "Live Chat",
      description: "Connecting you with a support agent...",
    });
    // This would typically open a chat widget or navigate to a chat page
  };

  return (
    <div className="bg-muted/40 rounded-lg p-6 text-center shadow-sm border border-muted/50 hover:border-muted transition-colors">
      <h2 className="text-xl font-medium mb-2">Need immediate assistance?</h2>
      <p className="mb-4 text-muted-foreground">
        Our support team is ready to help you with any questions or issues
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button variant="outline" onClick={handleEmailSupport} className="group">
          <Mail className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
          Email Support
          <ExternalLink className="ml-2 h-3 w-3 opacity-70" />
        </Button>
        <Button onClick={handleChatSupport} className="gap-2">
          <MessageSquare className="h-4 w-4" />
          Chat with Us
        </Button>
      </div>
    </div>
  );
};

export default SupportCTA;
