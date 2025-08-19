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

          {/* Support Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 bg-gradient-luxury bg-clip-text text-transparent">
                Our Support Services
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Personal Consultation</h3>
                    <p className="text-muted-foreground">
                      Get personalized fragrance recommendations based on your preferences and occasions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Home Delivery</h3>
                    <p className="text-muted-foreground">
                      Safe and secure delivery across India with tracking and insurance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Quick Response</h3>
                    <p className="text-muted-foreground">
                      We respond to all queries within 2 hours during business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold text-foreground">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold text-foreground">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold text-foreground">Closed</span>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Note:</strong> WhatsApp support is available 24/7 for urgent queries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 bg-gradient-luxury bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-serif">How do I place an order?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can contact us via phone, WhatsApp, or email with your preferred fragrances. 
                    Our team will guide you through the ordering process.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-serif">What are the payment options?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We accept cash on delivery, bank transfers, UPI payments, and all major credit/debit cards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-serif">Do you offer samples?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we provide small samples for our premium fragrances to help you make the right choice.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-serif">What is your return policy?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer exchanges within 7 days of purchase if the product is unopened and in original condition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerCare;