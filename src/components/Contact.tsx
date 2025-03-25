
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export const Contact = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: <Mail size={20} className="text-[#7B4AE2]" />,
      title: "Email",
      details: "tomaszgajda@example.com",
      linkText: "Send a message",
      link: "mailto:tomaszgajda@example.com"
    },
    {
      icon: <Phone size={20} className="text-[#7B4AE2]" />,
      title: "Phone",
      details: "+1 234 567 890",
      linkText: "Make a call",
      link: "tel:+1234567890"
    },
    {
      icon: <MapPin size={20} className="text-[#7B4AE2]" />,
      title: "Location",
      details: "Warsaw, Poland",
      linkText: "Get directions",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#151515]">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-[#7B4AE2]">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">Get In Touch</h3>
          <p className="text-white/70 mt-4">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-[#1A1A1A] rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-[#2A2A2A] rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{info.title}</h4>
                    <p className="text-white/70 mt-1">{info.details}</p>
                    <a 
                      href={info.link} 
                      className="text-[#7B4AE2] hover:underline inline-block mt-2"
                    >
                      {info.linkText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-2 bg-[#1A1A1A] rounded-lg p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            className="bg-[#2A2A2A] border-0 focus-visible:ring-[#7B4AE2] text-white"
                            {...field}
                          />
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
                        <FormControl>
                          <Input
                            placeholder="Your Email"
                            className="bg-[#2A2A2A] border-0 focus-visible:ring-[#7B4AE2] text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Subject"
                          className="bg-[#2A2A2A] border-0 focus-visible:ring-[#7B4AE2] text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          className="bg-[#2A2A2A] border-0 focus-visible:ring-[#7B4AE2] text-white min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="bg-[#7B4AE2] hover:bg-[#6B3AD2] text-white rounded-full px-8 py-6"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
