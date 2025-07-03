import { Card } from "@/components/ui/card";
import { 
  MessageSquare, 
  PenTool, 
  Calendar, 
  Heart, 
  Lightbulb, 
  BookOpen
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Intelligent Conversations",
      description: "Engage in meaningful dialogue with advanced AI that understands context and evolves alongside you."
    },
    {
      icon: PenTool,
      title: "Creative Content",
      description: "Generate emails, stories, poetry, and marketing copy with AI-powered creative assistance."
    },
    {
      icon: Calendar,
      title: "Smart Organization",
      description: "Plan projects, manage schedules, and organize goals with intelligent task management."
    },
    {
      icon: Heart,
      title: "Emotional Support",
      description: "Receive empathetic guidance and motivational conversations for your well-being."
    },
    {
      icon: Lightbulb,
      title: "Business Intelligence",
      description: "Generate business ideas, strategies, and professional content to accelerate growth."
    },
    {
      icon: BookOpen,
      title: "Learning Assistant",
      description: "Get explanations, practice skills, and access knowledge tailored to your learning style."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            What Milo Can Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powered by advanced AI, Milo helps you with creative tasks, organization, 
            emotional support, and professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border border-border hover:border-primary/20 transition-colors">
              <div className="mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;