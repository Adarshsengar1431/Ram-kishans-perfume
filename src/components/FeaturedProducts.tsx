import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import collectionImage from "@/assets/perfume-collection.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Royal Oudh",
      description: "A rich blend of traditional oudh with rose and saffron",
      price: "999",
      rating: 4.9,
      category: "Premium",
    },
    {
      id: 2,
      name: "Mystic Sandalwood",
      description: "Pure sandalwood essence with cardamom and cedar wood",
      price: "₹799",
      rating: 4.8,
      category: "Classic",
    },
    {
      id: 3,
      name: "Jasmine Nights",
      description: "Intoxicating jasmine with vanilla and amber",
      price: "₹399",
      rating: 5.0,
      category: "Floral",
    },
  ];

  return (
    <section id="collection" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Premium</span>{" "}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our exquisite range of premium fragrances, specially curated for the 
            discerning Indian customer. Contact us to place your order.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer bg-gradient-card border-border hover:shadow-luxury transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg aspect-square">
                  <img 
                    src={collectionImage} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Heart Icon */}
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-luxury text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm text-muted-foreground font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold bg-gradient-luxury bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-gradient-luxury text-primary-foreground hover:shadow-glow transition-all duration-300"
                      onClick={() => {
                        const message = `Hello RAM Kishan's Perfume,\n\nI'm interested in ordering:\n\n🌸 *${product.name}*\nPrice: ${product.price}\nCategory: ${product.category}\n\nDescription: ${product.description}\n\nPlease let me know the availability and ordering process.\n\nThank you!`;
                        const whatsappUrl = `https://wa.me/919513270508?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      Contact for Order
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/collections">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-medium"
            >
              View Full Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;