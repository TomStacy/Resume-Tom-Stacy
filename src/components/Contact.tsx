import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In real implementation, you would handle form submission to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll respond shortly.",
    });

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="section bg-background">
      <div className="container-tight">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to discuss potential collaboration? Feel free to reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg bg-card text-card-foreground">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject of your message"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <Button 
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Prefer to connect on social media? Find me on
              <a href="#" className="text-primary hover:underline mx-1">LinkedIn</a>or
              <a href="#" className="text-primary hover:underline mx-1">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
