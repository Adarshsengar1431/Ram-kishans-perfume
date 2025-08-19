import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, MessageCircle, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CustomerCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="ghost" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              <span className="bg-gradient-luxury bg-clip-text text-transparent">
                Customer Care
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're here to help you with all your fragrance needs. Our dedicated team is 
              committed to providing exceptional service and support.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-card border-border hover:shadow-luxury transition-all duration-300">
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-xl font-serif">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Speak directly with our fragrance experts
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">+91 86684 35425</p>
                  <p className="text-sm text-muted-foreground">Mon-Sat: 10 AM - 8 PM</p>
                </div>
                <Button className="mt-4 bg-gradient-luxury text-primary-foreground">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border hover:shadow-luxury transition-all duration-300">
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-xl font-serif">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Quick responses on WhatsApp
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">+91 86684 35425</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </div>
                <Button className="mt-4 bg-gradient-luxury text-primary-foreground">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border hover:shadow-luxury transition-all duration-300">
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-xl font-serif">Email Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Detailed support via email
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">support@ramkishanperfume.com</p>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </div>
                <Button className="mt-4 bg-gradient-luxury text-primary-foreground">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerCare;