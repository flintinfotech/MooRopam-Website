import Title from "@/components/common/Title";
import { Card, CardContent } from "@/components/ui/card";
import { Tractor, Award, Users, Leaf } from "lucide-react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import PresenceImg from '../images/OurPresence.jpg'
import AboutUsVideo from '../images/AboutUsVideo.mp4'
import CowWalking from '../images/cow-walking.mp4'
import supriya from "../images/supriya.png";

import ankita from "../images/ankita.png";
import aryan from "../images/aryan.png";

const AboutPage = () => {
  // Add this near the other state declarations
  const [hasTriggered, setHasTriggered] = useState<{ [key: number]: boolean }>({});

  const stats = [
    { id: 1, label: "Years of Experience", value: "25+", icon: Tractor },
    // { id: 2, label: "Quality Certifications", value: "12", icon: Award },
    { id: 3, label: "Happy Farmers", value: "5,000+", icon: Users },
    { id: 4, label: "Organic Ingredients", value: "100%", icon: Leaf },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Anikta Singh",
      role: "Founder",
      // bio: "Dr. Johnson has over 15 years of experience in animal nutrition and holds a PhD in Livestock Sciences.",
      image: ankita,
    },
    {
      id: 2,
      name: "Aryan Donga",
      role: "Co-Founder",
      // bio: "With 20 years in agricultural manufacturing, Michael ensures our feed production meets the highest standards.",
      image: aryan,
    },
    {
      id: 3,
      name: "Supriya Shetkar",
      role: "CFO",
      // bio: "Emily leads our research team in developing innovative feed formulations for maximum cattle health and productivity.",
      image: supriya,
    },
  ];

  return (
    <div className="py-16 container relative mx-auto">
      {/* <img
        src={AboutBg}
        className="z-[-1] absolute bottom-0 left-0 object-cover w-[100vw] h-auto blur-sm opacity-50"
      /> */}

      <div className="">

        <div className="text-center mb-12">
          <Title
            title={'About Mooropan'}
            titleClassname={'text-[var(--clr-orange)]'}
          />
          
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 max-w-[var(--page-container-max-w)] mx-auto">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              MooRopan India Pvt. Ltd. was
              established with the motive of
              "Gau-swasthayam Rakshatu" in May
              2023. We provide cattle healthcare
              aid/ devices, services and
              consultations pan India.

            </p>
            <p className="text-muted-foreground mb-4">
              Our products facilitate better
              management of herd. Our
              affordable products reduce cow
              morbidity, enhance milk quantity
              and quality.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to innovate and improve our formulations, working closely with
              agricultural scientists and nutritionists to develop products that meet the evolving
              needs of modern cattle farming.
            </p>
          </div>
          <div className="h-80 lg:h-auto overflow-hidden rounded-xl">
            {/* <img
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Mooropan Story"
              className="w-full h-full object-cover"
            /> */}
            <iframe
              className="rounded-lg col-spasn-2 h-80 w-full"
              src="https://www.youtube.com/embed/4QqkWmI_kX0"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        
        <div className="max-w-[var(--page-container-max-w)] mx-auto mt-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-left space-y-6 pt-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[var(--clr-orange)]">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At MooRopan, we are dedicated to revolutionizing cattle healthcare through innovative and sustainable solutions. Our mission is to empower farmers with accessible, high-quality healthcare products and expert guidance, ensuring the optimal health and productivity of their livestock.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We strive to be the catalyst for positive change in the agricultural sector, promoting practices that benefit both farmers and their cattle while maintaining the highest standards of quality and care.
              </p>
            </div>

            <div className="text-left space-y-6 pt-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[var(--clr-blue)]">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We envision a future where every farmer in India has access to advanced cattle healthcare solutions, supported by cutting-edge technology and expert knowledge. Our goal is to create a sustainable ecosystem where traditional wisdom meets modern innovation.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Through our commitment to "Gau-swasthayam Rakshatu", we aim to set new standards in cattle healthcare, fostering a healthier, more productive agricultural community while preserving and enhancing traditional farming values.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[var(--page-container-max-w)] mx-auto mb-20">
          <div>
             <video
              src={CowWalking}
              autoPlay
              playsInline
              muted
              loop
              className=" inset-0 w-full h-full object-contain opacity-60 z-[-1]"
            />
          </div>
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={stat.id}
                className="text-center py-10 flex flex-col items-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <VisibilitySensor
                    onChange={(isVisible: boolean) => {
                      if (isVisible && !hasTriggered[stat.id]) {
                        setHasTriggered(prev => ({ ...prev, [stat.id]: true }));
                      }
                    }}
                    active={!hasTriggered[stat.id]}
                  >
                    <div className="text-5xl font-bold mb-2 text-primary/90">
                      <CountUp
                        end={parseInt(stat.value)}
                        duration={2.5}
                        separator=","
                        {...(hasTriggered[stat.id] ? { start: 0 } : {})}
                      />
                      {stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                    </div>
                  </VisibilitySensor>
                  <p className="text-muted-foreground text-lg font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div> */}

        {/* <img
          src={PresenceImg}
          className="w-full h-auto shadow-md rounded-lg mb-20 max-w-[var(--page-container-max-w)] mx-auto"
        /> */}

        <div className="relative overflow-x-visible">
          {/* <img
            src={AboutBg}
            className="z-[-1] absolute bottom-0 left-0 object-cover w-[100vw] h-auto"
          /> */}
          {/* Our Values Section */}
          <div className="mb-20 relative bg-gray-20s0">
            <video
              src={AboutUsVideo}
              autoPlay
              playsInline
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-plus-darker z-[-1]"
            />
            <div className="relative z-10 py-16 max-w-[var(--page-container-max-w)] mx-auto">
              {/* <h2 className="text-3xl font-heading font-bold text-center mb-10">Our Values</h2> */}
              <Title
                title={'Our Values'}
               />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center px-8 py-10 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-10 w-10 text-gray" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-gray">Sustainability</h3>
                  <p className="text-gray/80">
                    We source ingredients responsibly and use eco-friendly manufacturing processes to minimize our environmental footprint.
                  </p>
                </div>
                <div className="text-center px-8 py-10 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-gray" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-gray">Quality</h3>
                  <p className="text-gray/80">
                    Every batch of feed undergoes rigorous testing to ensure it meets our strict standards for nutritional content and purity.
                  </p>
                </div>
                <div className="text-center px-8 py-10 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-gray" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-gray">Partnership</h3>
                  <p className="text-gray/80">
                    We work closely with farmers to understand their needs and provide personalized solutions and support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="mb-12 max-w-[var(--page-container-max-w)] mx-auto">
            {/* <h2 className="text-5xl font-heading font-bold text-center mb-10">Leadership Team</h2> */}
            <Title
              title="Our Leadership"
              titleClassname="text-[var(--clr-blue)]"
              variation={2}
              color={'var(--clr-blue)'}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
              {teamMembers.map((member) => (
                <div key={member.id} className="text-center group">
                  <div className="board-member relative w-60 h-60 mx-auto mb-4 transition-all duration-300 group-hover:scale-105">
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full shadow-xl h-full object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </div>
                  <div className="relative transition-all group-hover:top-4">
                    <h3 className="text-3xl font-onest font-bold text-[var(--clr-orange)] mb-1 transition-transform duration-300 group-hover:translate-y-[-4px]">{member.name}</h3>
                    <p className="text-primary text-xl font-bold mb-2 transition-all duration-300 group-hover:text-[var(--clr-orange)]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;