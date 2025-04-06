import VisOnScroll from '@/components/VisOnScroll';
import './index.css'
import { Fade, Slide } from 'react-awesome-reveal';
import sampleImg from '../../../assets/images/Services/sample.jpg'
import cows from '../../images/WhyUs/cows.png'
import earth from '../../images/WhyUs/earth.png'
import nutrition from '../../images/WhyUs/nutrition.png'
import { motion } from "framer-motion";
import science from '../../images/WhyUs/science.png'
import Title from '../common/Title';

const Specialization = () => {

  const json = [
    {
      img: nutrition,
      content: <>Nutrient-Dense Formula</>,
      description: "Optimized balance of proteins, vitamins, and minerals for optimal cattle growth and health."
    },
    {
      img: science,
      content: <>Science-Backed</>,
      description: "Developed by leading animal nutritionists with years of research and field testing."

    },
    {
      img: earth,
      content: <>Sustainably Sourced</>,
      description: "Ingredients sourced from responsible farms that practice sustainable agriculture."

    },
    {
      img: cows,
      content: <>Improved Yield</>,
      description: "Farmers report up to 20% increase in production metrics after switching to our solutions."

    }
  ]

  return <div className="speciali-wrapper max-w-[var(--page-container-max-w)] mx-auto px-5 py-1 md:py-5 max-sm:mt-2">
    <div className='speciali-box py-4 sm:py-6'>
      {/* <imgf
        src={ArcImg}
        alt="ribbon"
        className="arcs w-full h-full"
      /> */}
      <VisOnScroll>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* <h1 className="text-4xl text-orange-600 font-heading font-bold mb-4">Why Choose Mooropan?</h1> */}
          <Title
            title={'Why Choose MooRopan?'}
            titleClassname={'text-[var(--clr-orange-1)]'}
          />
          <p className="text-xl text-muted-foreground max-w-5xl mt-12 mx-auto">
            Our scientifically formulated feed solutions provide complete nutrition that promotes cattle health and maximizes your farm's productivity.
          </p>
        </motion.div>
      </VisOnScroll>
        <div className='features-content '>
          <div className='flex gap-2 mx-2 justify-between'>
            {
              json.map((item: any, index: number) => {

                return <div className='features-card-main' key={`${index}_${item.content}`} >
                  <Slide direction='up' triggerOnce delay={index * 100} className='h-full relative'>
                    <div className='features-card relative h-full'>
                      <div className='h-full img-wrap'>
                        <img
                          className='h-full object-cover img'
                          src={item.img}
                          alt={`img_${index}`}
                        />
                      </div>
                      <div className='features-card-text absolute bottom-0 text-center  w-full min-h-[4rem] flex items-center justify-center'>
                        <div className='features-card-text-content'>
                          <div className='title font-extrabold tracking-wider text-2xl text-white font-kanit'>
                            {
                              item.content
                            }
                          </div>
                          <div className='features-card-description text-left text-white m-[10px] text-lg'>
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>

              })
            }
          </div>
        </div>
    </div>
  </div>
}

export default Specialization;