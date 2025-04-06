import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Title from "../common/Title";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white max-w-[var(--page-container-max-w)] mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl text-blue-900 font-heading font-bold mb-6">About Mooropan</h2>
            {/* <Title
              title={'About Mooropan'}
            /> */}
           
            <p className="text-lg mb-4">
            MooRopan India Pvt. Ltd. was established with the motive of "Gau-swasthayam Rakshatu" in May 2023. We provide cattle healthcare aid/ devices, services and consultations pan India.
            </p>
           
            <p className="text-lg my-4">
              Our products facilitate better
              management of herd. Our
              affordable products reduce cow
              morbidity, enhance milk quantity
              and quality.
            </p>
            
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-[var(--clr-orange-1)] mt-1 mr-3 h-5 w-5" />
                <p>Committed to sustainable sourcing and manufacturing</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[var(--clr-orange-1)] mt-1 mr-3 h-5 w-5" />
                <p>Products tested and approved by leading agricultural institutions</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[var(--clr-orange-1)] mt-1 mr-3 h-5 w-5" />
                <p>Family-owned business with deep roots in farming communities</p>
              </div>
            </div>
            
            <Button className="bg-[var(--clr-orange-3)] hover:bg-[var(--clr-orange-2)] text-white font-heading font-semibold" size="lg" asChild>
              <a href="#contact">Learn More About Our Story</a>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 grids grid-cols-s2 relative gap-4">
            <iframe
              className="rounded-lg col-spasn-2 h-80 w-full"
              src="https://www.youtube.com/embed/4QqkWmI_kX0"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* <img 
              src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Farmer working with cattle" 
              className="rounded-lg object-cover h-64 w-full"
            />
             <iframe
              className="rounded-lg h-64 w-full"
              src="https://www.youtube.com/embed/4QqkWmI_kX0"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <img 
              src="https://images.unsplash.com/photo-1605400100851-7bef21548aa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
              alt="Feed manufacturing facility" 
              className="rounded-lg object-cover h-64 w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Beautiful farm landscape" 
              className="rounded-lg object-cover h-64 w-full"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
