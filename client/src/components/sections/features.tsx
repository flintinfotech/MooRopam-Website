import { Leaf, Beaker, Sprout, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Specialization from "../Specialization";
import Title from "../common/Title";

const features = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Nutrient-Dense Formula",
    description: "Optimized balance of proteins, vitamins, and minerals for optimal cattle growth and health."
  },
  {
    icon: <Beaker className="h-8 w-8" />,
    title: "Science-Backed",
    description: "Developed by leading animal nutritionists with years of research and field testing."
  },
  {
    icon: <Sprout className="h-8 w-8" />,
    title: "Sustainably Sourced",
    description: "Ingredients sourced from responsible farms that practice sustainable agriculture."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Improved Yield",
    description: "Farmers report up to 20% increase in production metrics after switching to our solutions."
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const iconVariants = {
  offscreen: { scale: 0.6, opacity: 0 },
  onscreen: { 
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
      delay: 0.3
    }
  }
};

const Features = () => {
 
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-4">Why Choose Mooropan?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our scientifically formulated feed solutions provide complete nutrition that promotes cattle health and maximizes your farm's productivity.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <motion.div 
                className="text-primary text-4xl mb-4"
                variants={iconVariants}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
