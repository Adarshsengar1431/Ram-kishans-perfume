import { Button } from "@/components/ui/button";
import { Award, Leaf, Heart, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Trusted Quality",
      description: "Loved by customers across India for authentic quality and exceptional customer service.",
    },
    {
      icon: Leaf,
      title: "Premium Ingredients",
      description: "Authentic ingredients and traditional methods ensure long-lasting, high-quality fragrances perfect for Indian weather.",
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Direct consultation and personalized recommendations to help you find your perfect fragrance.",
    },
    {
      icon: Sparkles,
      title: "Indian Heritage",
      description: "Blending traditional Indian essences with modern sophistication for the discerning customer.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              <span className="text-foreground">About</span>{" "}
              <span className="bg-gradient-luxury bg-clip-text text-transparent">RAM Kishan's Perfume</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Established with a passion for creating exceptional fragrances for the Indian market, 
              we specialize in premium perfumes that blend traditional Indian essences with modern sophistication. 
              Each fragrance is carefully crafted to suit the Indian climate and preferences.
            </p>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Each perfume tells a story, captures a moment, and evokes emotions. We believe 
              that fragrance is not just about scent—it's about creating an unforgettable 
              experience that becomes part of your personal signature.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-luxury text-primary-foreground hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-medium"
            >
              Discover Our Story
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-luxury rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-serif font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-muted-foreground font-medium">Years of Trust</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-serif font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-muted-foreground font-medium">Premium Fragrances</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-serif font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-muted-foreground font-medium">Satisfied Customers</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-serif font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-muted-foreground font-medium">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;