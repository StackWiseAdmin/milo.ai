import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              Milo AI
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Your intelligent AI companion
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Milo is more than just an AI chatbot — it's your thoughtful, emotionally supportive, 
              and highly capable assistant designed to help you unlock your full potential.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
          </div>

          {/* Simple feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-3xl mx-auto">
            <Card className="p-6 text-center border border-border">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Intelligent</h3>
              <p className="text-sm text-muted-foreground">Advanced AI that understands context</p>
            </Card>

            <Card className="p-6 text-center border border-border">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Conversational</h3>
              <p className="text-sm text-muted-foreground">Natural dialogue that evolves with you</p>
            </Card>

            <Card className="p-6 text-center border border-border">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Supportive</h3>
              <p className="text-sm text-muted-foreground">Empathetic assistance for your goals</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;