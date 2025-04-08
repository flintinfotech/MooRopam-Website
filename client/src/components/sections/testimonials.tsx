import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Title from "../common/Title";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import Slider, { Settings } from "react-slick";

// //@ts-ignore
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import quote from '../../images/blockquote.svg'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
// const settings: Settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   centerPadding: '30px',
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };

const testimonials = [
  {
    name: "John Davidson",
    company: "Davidson Family Farms, Texas",
    initials: "JD",
    rating: 5,
    text: "Since switching to MooRopan, my herd's health has visibly improved. Better coat quality, increased weight gain, and my veterinary costs are down nearly 30%."
  },
  {
    name: "Sarah Wilson",
    company: "Meadow Creek Dairy, Wisconsin",
    initials: "SW",
    rating: 5,
    text: "The ProducerPlus formula has made a remarkable difference in our dairy operation. Milk production is up 15%, and the quality metrics have never been better.",
    img: "https://picsum.photos/200/300"
  },
  {
    name: "Michael Thomas",
    company: "Thomas Ranch, Montana",
    initials: "MT",
    rating: 4.5,
    text: "What impressed me most was the customer support. Their team helped me tailor a feeding program specific to my herd's needs. Results were visible within 3 weeks."
  },
  {
    name: "RICHIe Davidson",
    company: "Family Farms, Texas",
    initials: "JD",
    rating: 4,
    text: "Fabulous! increased weight gain, and my veterinary costs are down nearly 30%."
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-amber-50">
      <div className="containesr max-w-[var(--page-container-max-w)] mx-auto px-5 py-3">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl font-heading font-bold mb-4">What Farmers Are Saying</h2> */}
          <Title
            title={'What Farmers Are Saying'}
            variation={2}
            titleClassname="text-[var(--clr-blue)]"
            color={'var(--clr-blue)'}
          />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what farmers across the country have experienced with MooRopan products.
          </p>
        </div>

        <div className=" ">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            // containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
          >
            {/* <Slider {...settings}> */}
            {testimonials.map((testimonial, index) => (

              <div key={index} className="overflow-visible p-4 relative">

                <img
                  src={quote}
                  className="quote-before font-red w-10 absolute z-[2] top-0 left-2"
                />

                <img
                  src={quote}
                  className="quote-after rotate-180 w-10 absolute z-[2] bottom-[1%] right-0"
                />

                <Card className="testm-card-main relative  bg-white shrink-0 min-h-[300px] w-[auto]">


                  <div className="absolute w-[100%] h-[2px] bg-gradient-to-l from-black to-transparent -right-2 -top-2"></div>
                  <div className="absolute w-[100%] h-[2px] bg-gradient-to-r from-black to-transparent -left-2 -bottom-2"></div>
                  <div className="absolute w-[2px] h-[100%] bg-gradient-to-b from-black to-transparent -right-2 -top-2"></div>
                  <div className="absolute w-[2px] h-[100%] bg-gradient-to-t from-black to-transparent -left-2 -bottom-2"></div>
                  <CardContent className="flex">
                    <section className="left-section p-6 flex flex-col">

                      <div className="flex items-center mb-4">
                        <div className="flex justify-end text-amber-500">
                          {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                            <Star key={i} className="fill-current h-5 w-5" />
                          ))}
                          {testimonial.rating % 1 > 0 && (
                            <Star className="fill-current h-5 w-5 stroke-current" />
                          )}
                        </div>
                      </div>
                      <p className="italic mb-6 line-clamp-5">
                        "{testimonial.text}"
                      </p>
                      <div className="bottom mt-auto">

                        <div className="flex items-center">
                          <div className="mr-4">
                            <div className="w-12 h-12 bg-[var(--clr-yellow)] rounded-full flex items-center justify-center text-[var(--clr-orange-1)] font-bold">
                              {testimonial.initials}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                          </div>
                        </div>

                        <div></div>

                      </div>

                    </section>
                    {testimonial?.img && <section className="right-image w-full max-h-[300px]">
                        <img
                          src={testimonial?.img}
                          className="object-cover object-center min-w-[250px] h-full"
                        />
                    </section>}
                  </CardContent>
                </Card>

              </div>
            ))}
          </Carousel>
          {/* </Slider> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
