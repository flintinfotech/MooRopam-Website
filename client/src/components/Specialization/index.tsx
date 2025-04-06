import './index.css'
import { Fade, Slide } from 'react-awesome-reveal';
import cows from '../../images/WhyUs/cows.png'
import earth from '../../images/WhyUs/earth.png'
import nutrition from '../../images/WhyUs/nutrition.png'
import science from '../../images/WhyUs/science.png'
import Title from '../common/Title';
import { Button } from '../ui/button';
import { Link } from 'wouter';

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

      <Fade triggerOnce>
        {/* <h1 className="text-4xl text-orange-600 font-heading font-bold mb-4">Why Choose Mooropan?</h1> */}
        <Title
          title={'<div>About MooRopan<sup className="text-xs relative -top-5">TM</sup></div>'}
          titleClassname={'text-[var(--clr-orange-1)]'}
        />
      </Fade>

      <Fade triggerOnce delay={200}>
        <p className="text-xl text-left text-gray-700 mt-12 mx-auto">
          MooRopan<sup className="text-[8px] relative -top-3">TM</sup> India is at the forefront of <b>dairy technology innovation</b>, committed to improving <b>livestock health, feed preservation, and farm automation</b>.
        </p>
      </Fade>

      <Fade triggerOnce delay={500}>
        <p className="text-xl text-left text-gray-700 mt-12 mx-auto">
          By combining <b>artificial intelligence, IoT, and biotechnology</b>, we equip dairy farmers with solutions to <b>maximize yield, reduce losses, and enhance operational efficiency</b>.
        </p>
      </Fade>

      <Fade triggerOnce delay={700}>
        <Button className="my-6 bg-[var(--clr-orange-3)] hover:bg-[var(--clr-orange-2)] text-white font-heading font-semibold" size="lg" asChild>
          <Link href="/about-us">Learn More</Link>
        </Button>
      </Fade>

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