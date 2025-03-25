import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import Contact from "@/components/sections/contact";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  company: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      company: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      setIsSubmitting(true);
      return apiRequest("/api/contacts", "POST", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Something went wrong!",
        description: "Please try again later or contact us directly by phone.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="">
      <Contact
      />
     {
      false && <>
       <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Get in touch with our team for inquiries about our products, custom feed solutions, or partnership opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Send Us A Message</CardTitle>
            <CardDescription>
              Fill out the form and our team will get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Farm or Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="flex flex-col">
          <div className="mb-10">
            <h2 className="text-2xl font-heading font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Our dedicated team is here to help you find the best feed solutions for your cattle operations.
              Whether you need product information, technical support, or want to discuss custom formulations,
              we're just a message away.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">Mon-Fri: 8am-5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">info@nutrigraze.com</p>
                  <p className="text-muted-foreground">support@nutrigraze.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Main Office</h3>
                  <p className="text-muted-foreground">
                    1234 Farm Road, Suite 500<br />
                    Heartland, MidWest 56789<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-lg">Customer Support Hours</h3>
              </div>
              <p className="text-muted-foreground mb-2">
                <span className="font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM CST
              </p>
              <p className="text-muted-foreground mb-2">
                <span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM CST
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Sunday:</span> Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
     }
    </div>
  );
};

export default ContactPage;