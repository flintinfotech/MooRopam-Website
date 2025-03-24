import Title from "@/components/common/Title";
import { Card, CardContent } from "@/components/ui/card";
import { Tractor, Award, Users, Leaf } from "lucide-react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';

const AboutPage = () => {
  // Add this near the other state declarations
  const [hasTriggered, setHasTriggered] = useState<{ [key: number]: boolean }>({});

  const stats = [
    { id: 1, label: "Years of Experience", value: "25+", icon: Tractor },
    { id: 2, label: "Quality Certifications", value: "12", icon: Award },
    { id: 3, label: "Happy Farmers", value: "5,000+", icon: Users },
    { id: 4, label: "Organic Ingredients", value: "100%", icon: Leaf },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Nutritionist",
      bio: "Dr. Johnson has over 15 years of experience in animal nutrition and holds a PhD in Livestock Sciences.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Director of Operations",
      bio: "With 20 years in agricultural manufacturing, Michael ensures our feed production meets the highest standards.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "Emily Chang",
      role: "Research Lead",
      bio: "Emily leads our research team in developing innovative feed formulations for maximum cattle health and productivity.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="py-16 container mx-auto px-4">
      <div className="max-w-[var(--page-container-max-w)] mx-auto">

        <div className="text-center mb-12 ">
          {/* <h1 className="text-4xl font-heading font-bold mb-4">About Mooropan</h1> */}
          <Title
            title={'About Mooropan'}
            titleClassname={'text-[var(--clr-orange)]'}
          />
          {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A trusted name in cattle nutrition for over two decades, delivering premium
          quality feed solutions that help farmers maximize their livestock's health and productivity.
        </p> */}
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 ">
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
            <img
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Mooropan Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 ">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.id} className="text-center py-8 flex flex-col items-center">
                <CardContent className="pt-6">
                  <IconComponent className="h-10 w-10 text-primary mb-4" />
                  <VisibilitySensor
                    onChange={(isVisible: boolean) => {
                      if (isVisible && !hasTriggered[stat.id]) {
                        setHasTriggered(prev => ({ ...prev, [stat.id]: true }));
                      }
                    }}
                    active={!hasTriggered[stat.id]}
                  >
                    <div className="text-4xl font-bold mb-2">
                      <CountUp
                        end={parseInt(stat.value)}
                        duration={2.5}
                        separator=","
                        // start={0}
                        {...(hasTriggered[stat.id] ? { start: 0 } : {})}
                      />
                      {stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                    </div>
                  </VisibilitySensor>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Our Values Section */}
        <div className="mb-20 ">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center px-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We source ingredients responsibly and use eco-friendly manufacturing processes to minimize our environmental footprint.
              </p>
            </div>
            <div className="text-center px-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                Every batch of feed undergoes rigorous testing to ensure it meets our strict standards for nutritional content and purity.
              </p>
            </div>
            <div className="text-center px-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Partnership</h3>
              <p className="text-muted-foreground">
                We work closely with farmers to understand their needs and provide personalized solutions and support.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;