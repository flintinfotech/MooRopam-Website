import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { parse as pathParse } from "path";
import parse from 'html-react-parser'
import MastiSenseImg from '../../images/ProductMastisense.png'
import SiloRopanImg from '../../images/ProductSiloRopan.png'
import './products.css'
import Title from "../common/Title";
// import intro from "../../images/product-intro.mp4"
import intro from "../../images/bg-white-video.mp4"

// Default products to display if API fetch fails
const defaultProducts = [
  {
    id: 1,
    name: "MastiSense<sup>TM</sup>",
    price: "$45.99",
    description: "An advanced bovine mastitis detection device that ensures healthier cows and better milk quality.",
    image: MastiSenseImg,
    tags: ["Affordable", "Ease of use"]
  },
  {
    id: 2,
    name: "SiloRopan<sup>TM</sup>",
    price: "$52.99",
    description: "A scientifically formulated bacterial culture that enhances silage fermentation for optimal nutrition retention.",
    image: SiloRopanImg,
    tags: ["Immune Support", "Growth", "Digestive Health"]
  },
];

type ProductsProps = {
  products: any[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const productCard = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  }
};

const imageAnimation = {
  hover: {
    scale: 1.05,
  },
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

const TypewriterText = ({ text }: { text: string }) => {
  return (
    <motion.p
      className="text-left text-blue-900 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

const Products = ({ products = [] }: ProductsProps) => {
  // Use default products if API didn't return any
  const displayProducts = products.length > 0 ? products : defaultProducts;

  return (
    <section id="products" className="products-wrapper relative px-5 py-1 md:py-5 mt-2 md:mt-10">
      <div className="products__bg"></div>
      <div className="max-w-[var(--page-container-max-w)] mx-auto">

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <h2 className="text-3xl font-heading text-[var(--clr-blue)] font-bold mb-4">Our Premium Products</h2> */}
            <Title
              title={'Our Premium Products'}
              titleClassname={'text-[var(--clr-black)]'}
            />
            {/* <TypewriterText text="" /> */}
            <p>
            Specially formulated to meet the unique nutritional needs of your cattle at every stage of development.
              </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-[repeat(2,1fr)] justify-center gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {displayProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="min-w-[400pssx]"
                variants={productCard}
                // whileHover={{
                //   y: -10,
                //   transition: { type: "spring", stiffness: 400, damping: 10 }
                // }}
              >
                <Card className="overflow-hidden relative grid grid-cols-[250px_1fr] h-full shadow-md hover:shadow-xl transition-shadow duration-300">
                
                    <video
                      src={intro}
                      autoPlay
                      // playsInline
                      muted
                      loop
                      controls={false}
                      className="rounded-lg absolute border-0 top-0 left-0 w-[100%] h-[100%] object-cover z-[-1]"
                    />
                  <div className="overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full  object-cover"
                      variants={imageAnimation}
                      whileHover="hover"
                    />
                  </div>
                  <CardContent className="p-6 relative">
                    <div className="mb-3">
                      <h3 className="text-2xl tracking-wider font-bold w-full text-center font-onest">{
                          parse(product.name)
                      }</h3>
                    </div>
                    {/* <p className="text-muted-foreground mb-4">{parse(product.description)}</p> */}
                    <motion.div className="text-center mb-4">
                      <TypewriterText text={parse(product.description) as string} />
                    </motion.div>
                    <motion.div
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      {product.tags.map((tag: string, idx: number) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-[var(--clr-yellow)] border-[var(--clr-blue)]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </motion.div>

                    <Button
                      className="w-full text-white text-xl py-6 rounded-none cursor-pointer bg-[var(--clr-orange-3)] hover:bg-[var(--clr-orange-2)]"
                      asChild
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Product
                      </motion.div>
                    </Button>
                  </CardContent>
                  {/* <CardFooter className="p-0 pt-0">
                    <Button
                      className="w-full text-white text-xl py-6 rounded-none cursor-pointer bg-[var(--clr-orange-3)] hover:bg-[var(--clr-orange-2)]"
                      asChild
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Product
                      </motion.div>
                    </Button>
                  </CardFooter> */}
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              variant="link"
              className="font-heading text-2xl font-semibold text-white hover:text-gray-200 cursor-pointer transition-colors"
              asChild
            >
              <motion.div whileHover={{ x: 5 }} whileTap={{ x: -2 }}>
                View Full Product Catalog
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ChevronRight className="ml-1 h-4 w-4" />
                </motion.div>
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
