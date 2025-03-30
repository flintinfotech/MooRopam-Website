import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleCheckIcon, Tractor, Leaf, Warehouse } from "lucide-react";
import { Link, useLocation } from "wouter";
import ProductRow from "@/components/ProductRow";
import parse from "html-react-parser";
import cattlevideo from '../videos/mooropanvideo.mp4'

// const defaultProducts = [
//   {
//     name: "MasterGraze Premium",
//     price: "$45.99",
//     description: "Our flagship feed formula, designed for optimal cattle growth and weight gain with balanced nutrients.",
//     image: "https://images.unsplash.com/photo-1595872883741-8e17d5f84bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
//     tags: ["High Protein", "Vitamins", "Minerals"]
//   },
//   {
//     name: "CalfStart Formula",
//     price: "$52.99",
//     description: "Specialized nutrition for young calves, supporting immune development and early growth stages.",
//     image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
//     tags: ["Immune Support", "Growth", "Digestive Health"]
//   },
//   {
//     name: "ProducerPlus",
//     price: "$48.99",
//     description: "Advanced formula for dairy cattle, enhancing milk production while maintaining optimal health.",
//     image: "https://images.unsplash.com/photo-1529756148791-fbf30a8a1245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     tags: ["Milk Production", "Calcium", "Energy"]
//   }
// ];

const product1Info = [
  {
    node: "Mastitis is udder inflammation caused by bacterial infection."
  },
  {
    node: "Such infection results in breaching of blood milk barrier and changes the composition of milk which can be analyzed using sensors."
  },
  {
    node: "<span className='text-blue-800 text-2xl'>MastiSense<sup className='text-xs'>TM</sup></span> detects bovine mastitis at an early stage and is a cow side device, easy to use and interpret."
  },
  {
    node: "Milk analyte used for diagnosing mastitis can be repooled with bulk milk."
  },
  {
    node: "It is affordable and available under subscription revenue model with android app for data as Add-on feature."
  },
  // {
  //   node: "<div className='pt-6 text-lg text-center'>Watch the video below for step-wise guidance to use MastiSense<sup>TM</sup></div>"
  // },
]

const ProductsPage = () => {

  const [location, navigate] = useLocation();

  // if (error) {
  //   return (
  //     <div className="py-16 container mx-auto px-4 text-center">
  //       <h2 className="text-2xl font-heading font-bold text-destructive mb-4">There was an error loading the products</h2>
  //       <p className="text-muted-foreground">Please try again later or contact our support team.</p>
  //     </div>
  //   );
  // }

  return (
    <div className="py-16 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4">Our Premium Products</h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Scientifically formulated feeds designed to optimize cattle health, growth, and production.
        </p>
      </div>

      <section className="product-row ">
        <ProductRow
          productName="mastisense"
        />
        <div className="product-desc max-w-[var(--page-container-max-w)] mx-auto px-5">
          <div>
            {
              product1Info.map((item, index) => {

                return <div key={`${index}_${index + 1}`}>
                  <p className="text-xl my-4">
                    {parse(item.node)}
                  </p>
                </div>
              })
            }
          </div>
          {/* <div className="relative bg-red flex justify-center items-center min-h-[100%]">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-800 text-white my-1 rounded-sm hover:scale-[1.01]">
                <Link to="/contact-us" className={"w-full h-full flex justify-center items-center text-2xl font-bold"}>
                  Buy
                </Link>
              </div>
            </div> */}

          <div className="bg-blue-800 text-white my-1 rounded-sm hover:scale-[1.01] w-fit ">
            <Link to="/contact-us" className={"h-full py-2 px-4 flex justify-center items-center text-2xl font-bold"}>
              Buy Now
            </Link>
          </div>

          <div className='pt-6 text-lg text-center italic'>Watch the video below for step-wise guidance to use MastiSense<sup className='text-xs'>TM</sup></div>
        </div>
      </section>

      <div className="inset-0 mt-4">
        <video
          // ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          controls
        >
          <source src={cattlevideo} type="video/mp4" />
        </video>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {defaultProducts?.map((product: any, index) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="h-48 overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tags.includes('Organic') && (
                <div className="absolute top-3 right-3">
                  <Badge className="bg-green-600 hover:bg-green-700">Organic</Badge>
                </div>
              )}
            </div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description.substring(0, 80)}...</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {product.tags.slice(0, 3).map((tag: any, idx: any) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CircleCheckIcon className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">{tag}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="flex justify-between items-center w-full">
                <div className="text-lg font-bold">{product.price}</div>
                <div className="text-sm text-muted-foreground">Per bag</div>
              </div>
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div> */}

      {/* Product Categories Section */}
      {/* <div className="mt-20">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader className="pb-2">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Tractor className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Performance Feeds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Specially formulated high-energy feeds designed to maximize growth rates and production performance for beef and dairy cattle.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-2">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Organic Options</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                100% certified organic feed products made with non-GMO ingredients, supporting sustainable farming practices.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-2">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Warehouse className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Bulk Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cost-effective bulk feed options for large operations, with customized delivery schedules to meet your farm's needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="max-w-3xl mx-auto bg-muted p-8 rounded-xl">
          <h3 className="text-2xl font-heading font-bold mb-4">Need more info?</h3>
          <p className="mb-6 text-muted-foreground">
            Call us and share your specific herd requirements,
            regional conditions, and production goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg"
              onClick={e => {
                navigate('/contact-us')
              }}
            >Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;