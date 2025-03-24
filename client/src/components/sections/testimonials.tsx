import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Davidson",
    company: "Davidson Family Farms, Texas",
    initials: "JD",
    rating: 5,
    text: "Since switching to Mooropan, my herd's health has visibly improved. Better coat quality, increased weight gain, and my veterinary costs are down nearly 30%."
  },
  {
    name: "Sarah Wilson",
    company: "Meadow Creek Dairy, Wisconsin",
    initials: "SW",
    rating: 5,
    text: "The ProducerPlus formula has made a remarkable difference in our dairy operation. Milk production is up 15%, and the quality metrics have never been better."
  },
  {
    name: "Michael Thomas",
    company: "Thomas Ranch, Montana",
    initials: "MT",
    rating: 4.5,
    text: "What impressed me most was the customer support. Their team helped me tailor a feeding program specific to my herd's needs. Results were visible within 3 weeks."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-amber-50">
      <div className="containesr max-w-[var(--page-container-max-w)] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">What Farmers Are Saying</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what farmers across the country have experienced with Mooropan products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-500">
                    {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                      <Star key={i} className="fill-current h-5 w-5" />
                    ))}
                    {testimonial.rating % 1 > 0 && (
                      <Star className="fill-current h-5 w-5 stroke-current" />
                    )}
                  </div>
                </div>
                <p className="italic mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                      {testimonial.initials}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
