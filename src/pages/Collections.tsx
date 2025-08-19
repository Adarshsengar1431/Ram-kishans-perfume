import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import collectionImage from "@/assets/perfume-collection.jpg";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSizes, setSelectedSizes] = useState({}); // Track size for each product


  const categories = ["All", "Premium", "Classic", "Floral", "Woody", "Oriental"];
  const sizes = ["50ml", "100ml", "150ml"];

  const products = [
    {
      id: 1,
      name: "Royal Oudh",
      description: "A rich blend of traditional oudh with rose and saffron, perfect for special occasions",
      price: "₹999",
      originalPrice: "₹1200",
      rating: 4.9,
      reviews: 127,
      category: "Premium",
      isNew: true,
      image: "src/assets/new.jpg"
    },
    {
      id: 2,
      name: "Mystic Sandalwood",
      description: "Pure sandalwood essence with cardamom and cedar wood, a timeless classic",
      price: "₹799",
      originalPrice: "₹999",
      rating: 4.8,
      reviews: 89,
      category: "Classic",
      isNew: false,
    },
    {
      id: 3,
      name: "Jasmine Nights",
      description: "Intoxicating jasmine with vanilla and amber, perfect for evening wear",
      price: "₹399",
      originalPrice: "₹799",
      rating: 5.0,
      reviews: 156,
      category: "Floral",
      isNew: true,
      image: "src/assets/new.jpg"
    },
    {
      id: 4,
      name: "Desert Rose",
      description: "Exotic blend of rose petals with saffron and white musk",
      price: "₹499",
      originalPrice: "₹999",
      rating: 4.7,
      reviews: 92,
      category: "Floral",
      isNew: false,
      image: "src/assets/new.jpg"
    },
    {
      id: 5,
      name: "Amber Nights",
      description: "Warm amber with hints of vanilla and patchouli",
      price: "₹999",
      originalPrice: "₹1499",
      rating: 4.6,
      reviews: 74,
      category: "Oriental",
      isNew: false,
      image: "src/assets/new.jpg"
    },
    {
      id: 6,
      name: "Cedar Dreams",
      description: "Fresh cedar wood with bergamot and lavender notes",
      price: "599",
      originalPrice: "₹999",
      rating: 4.8,
      reviews: 103,
      category: "Woody",
      isNew: true,
      image: "src/assets/new.jpg"
    },
    {
      id: 7,
      name: "Golden Musk",
      description: "Pure white musk with golden amber and soft florals",
      price: "₹299",
      originalPrice: "₹499",
      rating: 4.9,
      reviews: 145,
      category: "Premium",
      isNew: false,
      image: "src/assets/new.jpg"
    },
    {
      id: 8,
      name: "Vintage Attar",
      description: "Traditional Indian attar with rose and kewda essence",
      price: "₹499",
      originalPrice: "₹799",
      rating: 4.5,
      reviews: 68,
      category: "Classic",
      isNew: false,
      image: "src/assets/new.jpg"
    },
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);


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
                Our Complete Collection
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our extensive range of premium fragrances, each carefully crafted to represent 
              the finest traditions of Indian perfumery. Contact us to place your order.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-card/50 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-luxury text-primary-foreground" 
                  : "border-border hover:border-primary/50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group cursor-pointer bg-gradient-card border-border hover:shadow-luxury transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-t-lg aspect-square">
                    <img 
                      src={product.image || collectionImage} // Fallback to collectionImage if product image is not available
                      alt={product.name}
                      onError={(e) => e.currentTarget.src = collectionImage} // Fallback image on error"}
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

                    {/* New Badge */}
                    {product.isNew && (
                      <div className="absolute top-12 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        New
                      </div>
                    )}
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
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-semibold bg-gradient-luxury bg-clip-text text-transparent">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                    </div>
                    
{/* Size Selection */}
<div className="flex gap-2 mb-4">
  {["50ml", "100ml", "200ml"].map((size) => (
    <Button
      key={size}
      variant={selectedSizes[product.id] === size ? "default" : "outline"}
      className="px-3 py-1 text-sm"
      onClick={() =>
        setSelectedSizes((prev) => ({
          ...prev,
          [product.id]: size,
        }))
      }
    >
      {size}
    </Button>
  ))}
</div>

                    <Button 
                      onClick={() => {
                      
                        const message = `Hello Ram Kishan Perfume's,\n\nI'm interested in ordering:\n\n🌸 *${product.name}*\nPrice: ${product.price}\nOriginal Price: ${product.originalPrice}\nSize: ${selectedSizes[product.id] || "100ml"}\nCategory: ${product.category}\nRating: ${product.rating}⭐ (${product.reviews} reviews)\n\nDescription: ${product.description}\n\nPlease let me know the availability and ordering process.\n\nThank you!`;
                        const whatsappUrl = `https://wa.me/8668435425?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      size="sm" 
                      className="w-full bg-gradient-luxury text-primary-foreground hover:shadow-glow transition-all duration-300"
                    >
                      Contact for Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;