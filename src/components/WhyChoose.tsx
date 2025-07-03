import { Card } from "@/components/ui/card";
import { Shield, User, Clock, Sparkles } from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Why Choose Milo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milo combines intelligence with empathy to provide a truly personalized AI experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Personalized</h3>
            <p className="text-sm text-muted-foreground">Adapts to your unique style and preferences</p>
          </Card>

          <Card className="p-6 text-center border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Secure</h3>
            <p className="text-sm text-muted-foreground">Your conversations remain private and secure</p>
          </Card>

          <Card className="p-6 text-center border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Empathetic</h3>
            <p className="text-sm text-muted-foreground">Designed with emotional intelligence at its core</p>
          </Card>

          <Card className="p-6 text-center border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Available 24/7</h3>
            <p className="text-sm text-muted-foreground">Ready to help whenever you need support</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;