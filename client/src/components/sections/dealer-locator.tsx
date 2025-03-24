import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin } from "lucide-react";

const DealerLocator = () => {
  const [zipCode, setZipCode] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Would implement actual dealer search here
    console.log(`Searching for dealers near: ${zipCode}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">Find a Dealer Near You</h2>
            <p className="text-lg mb-6">
              Our network of authorized dealers ensures you can access Mooropan products wherever you are. Enter your location to find the nearest dealer.
            </p>
            
            <form onSubmit={handleSearch} className="mb-6">
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Enter ZIP Code or City"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full rounded-r-none border-r-0"
                />
                <Button 
                  type="submit"
                  className="bg-[#8c6e31] hover:bg-[#745a28] text-white font-heading font-medium px-6 py-3 rounded-l-none"
                >
                  Search
                </Button>
              </div>
            </form>
            
            <p className="text-muted-foreground text-sm mb-4">
              Don't see a dealer in your area? Contact us directly for shipping options or to inquire about becoming a dealer.
            </p>
            
            <Button 
              variant="link" 
              className="text-primary hover:text-primary/80 font-heading font-medium p-0"
              asChild
            >
              <a href="#contact" className="inline-flex items-center">
                Contact Us <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <div className="h-96 md:h-[400px] lg:h-[500px] w-full bg-gray-200 rounded-lg">
            {/* Dealer Map Placeholder */}
            <div className="h-full w-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-10 w-10 text-primary mb-3 mx-auto" />
                <p className="text-muted-foreground">Interactive Dealer Map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerLocator;
