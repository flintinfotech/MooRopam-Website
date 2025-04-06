import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const waitlistFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  farmName: z.string().min(2, { message: "Farm/Ranch name is required" }),
  herdSize: z.string().min(1, { message: "Please select a herd size" }),
  details: z.string().optional(),
  agreesToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms to submit",
  }),
});

type WaitlistFormData = z.infer<typeof waitlistFormSchema>;

const Waitlist = () => {
  const { toast } = useToast();
  
  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      farmName: "",
      herdSize: "",
      details: "",
      agreesToTerms: false,
    },
  });

  const waitlistMutation = useMutation({
    mutationFn: (data: WaitlistFormData) => {
      return apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      toast({
        title: "Thank you for joining our waitlist!",
        description: "We'll be in touch soon with more information.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: WaitlistFormData) => {
    waitlistMutation.mutate(data);
  };

  return (
    <section id="waitlist" className="py-16 bg-[var(--clr-orange-3)] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Be the First to Try Mooropan</h2>
          <p className="text-lg mb-8">
            Join our waitlist to be among the first farmers to experience the Mooropan difference. Early subscribers will receive exclusive discounts and personalized consultation.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Full Name" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:bg-white/20 focus:outline-none placeholder:text-white/70 text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-white/90" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Email Address" 
                          type="email"
                          {...field} 
                          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:bg-white/20 focus:outline-none placeholder:text-white/70 text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-white/90" />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="farmName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Farm/Ranch Name" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:bg-white/20 focus:outline-none placeholder:text-white/70 text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-white/90" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="herdSize"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:bg-white/20 focus:outline-none text-white/70">
                            <SelectValue placeholder="Herd Size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="small">Small (1-50 head)</SelectItem>
                          <SelectItem value="medium">Medium (51-200 head)</SelectItem>
                          <SelectItem value="large">Large (201-500 head)</SelectItem>
                          <SelectItem value="xl">Very Large (500+ head)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-white/90" />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your current feeding program and challenges" 
                        {...field} 
                        className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:bg-white/20 focus:outline-none placeholder:text-white/70 text-white h-24"
                      />
                    </FormControl>
                    <FormMessage className="text-white/90" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="agreesToTerms"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1 data-[state=checked]:bg-white data-[state=checked]:text-[var(--clr-orange-1)]"
                      />
                    </FormControl>
                    <div className="text-sm space-y-1 leading-none text-left">
                      <FormLabel>
                        I agree to receive updates from Mooropan about products, services, and early access opportunities. We respect your privacy and will never share your information.
                      </FormLabel>
                      <FormMessage className="text-white/90" />
                    </div>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="bg-white text-[var(--clr-orange-1)] hover:bg-gray-100 font-heading font-semibold px-8 py-3"
                disabled={waitlistMutation.isPending}
              >
                {waitlistMutation.isPending ? "Submitting..." : "Join the Waitlist"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
