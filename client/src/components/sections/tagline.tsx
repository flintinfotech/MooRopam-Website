import { motion } from "framer-motion";

const TagLine = () => {
  const text = "Affordable and Innovative Solutions for Cow Health";

  return (
    <section className="py-3 bg-primary/d5 overflow-hidden bg-orange-200">
      <div className="container mx-auto px-4 nav__text-content-wrapper ">
        {/* <motion.h2 
          className="nav__text-content text-3xl md:text-4xl font-bold font-onest tracking-wider text-center text-primary"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2> */}
        <h2 className="nav__text-content text-3xl md:text-4xl font-bold font-onest tracking-wider text-center text-primsary">
          {text}
        </h2>
      </div>
    </section>
  );
};

export default TagLine;