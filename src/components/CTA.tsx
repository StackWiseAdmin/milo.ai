import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Get Started with Milo Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Ready to transform the way you work, create, and live? Discover how an intelligent 
            AI companion can make your day smoother and your projects easier.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Learn More
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Free 7-day trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;