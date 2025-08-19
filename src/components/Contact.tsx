import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin,} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Get in</span>{" "}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to find your perfect fragrance? Contact us for personalized recommendations 
            and to place your order. We're here to help you discover your signature scent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your fragrance preferences or any questions you have..."
                    className="bg-input border-border focus:border-primary min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-luxury text-primary-foreground hover:shadow-glow transition-all duration-300 py-6 text-lg font-medium"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-luxury p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Email Us</h4>
                    <p className="text-muted-foreground">info@ramkishanperfume.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-luxury p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Call Us</h4>
                    <p className="text-muted-foreground">+91 86684 35425</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-luxury p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Visit Us</h4>
                    <p className="text-muted-foreground">
                      Latur<br />
                      Maharashtra 413531
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
            </div>
            </div>
            </section>
  );
};

export default Contact;