import Hero from "@/components/sections/hero";
import TagLine from "@/components/sections/tagline";
import Features from "@/components/sections/features";
import Products from "@/components/sections/products";
import About from "@/components/sections/about";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Waitlist from "@/components/sections/waitlist";
import DealerLocator from "@/components/sections/dealer-locator";
import Contact from "@/components/sections/contact";
import { useQuery } from "@tanstack/react-query";
import Specialization from "@/components/Specialization";

const HomePage = () => {
  const { data: products = [] } = useQuery({
    queryKey: ['/api/products'],
  });

  return (
    <>
      <Hero />
      <Specialization />
      <Products products={products} />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
