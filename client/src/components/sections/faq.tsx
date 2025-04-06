import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Mooropan different from other cattle feed?",
    answer: "Mooropan products are formulated based on the latest nutritional science, using premium ingredients sourced from sustainable farms. Our proprietary blending process ensures optimal nutrient bioavailability, and all products undergo rigorous quality testing before reaching your farm."
  },
  {
    question: "How long before I see results in my herd?",
    answer: "Most farmers report noticeable improvements in cattle coat quality and energy levels within 2-3 weeks. More significant benefits like weight gain, milk production increases, and reproductive health improvements typically become apparent after 4-6 weeks of consistent use."
  },
  {
    question: "Do you offer custom feed formulations?",
    answer: "Yes! For larger operations, our nutritionists can develop custom formulations tailored to your specific herd needs, regional conditions, and production goals. Contact our support team to schedule a consultation."
  },
  {
    question: "How do I determine the right feeding program for my operation?",
    answer: "We recommend starting with our Feed Assessment Tool on our website, which provides tailored recommendations based on your herd size, breed, age distribution, and production goals. For more personalized guidance, our customer support team includes certified animal nutritionists who can help develop an optimal feeding strategy."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section id="faq" className="py-16 bg-[var(--clr-yellow-light)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about our products and services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-heading font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
