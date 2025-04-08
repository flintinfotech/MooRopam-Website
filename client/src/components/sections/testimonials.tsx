import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Title from "../common/Title";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import Slider, { Settings } from "react-slick";

// //@ts-ignore
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
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
    text: "The ProducerPlus formula has made a remarkable difference in our dairy operation. Milk production is up 15%, and the quality metrics have never been better."
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
      <div className="containesr max-w-[var(--page-container-max-w)] mx-auto px-5">
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

              <Card key={index} className="bg-white shrink-0 shadow-md w-[400px]">
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
                  <p className="italic mb-6 min-h-[150px] line-clamp-5">
                    "{testimonial.text}"
                  </p>
                  <div className="bottom">

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
                </CardContent>
              </Card>
            ))}
          </Carousel>
          {/* </Slider> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
