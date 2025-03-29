
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export const Contact = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="contact" className="bg-[#e6e6e6] py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-2xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-header mb-16">CONTACT</h2>
          
          <p className="text-center text-sm leading-relaxed max-w-xl mb-8">
            Need a skilled designer, developer, or project manager? I'm here to help. Get in touch through the contact form below, and I'll be happy to discuss your project.
          </p>
          
          <div className="separator mb-8">
            <span></span>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      placeholder="ENTER YOUR NAME*"
                      className="w-full border-b-2 border-black bg-transparent p-3 focus:outline-none text-sm"
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
                    <input
                      placeholder="ENTER YOUR EMAIL*"
                      className="w-full border-b-2 border-black bg-transparent p-3 focus:outline-none text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      placeholder="PHONE NUMBER"
                      className="w-full border-b-2 border-black bg-transparent p-3 focus:outline-none text-sm"
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
                    <textarea
                      placeholder="YOUR MESSAGE*"
                      className="w-full border-b-2 border-black bg-transparent p-3 focus:outline-none min-h-[100px] text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="border-2 border-black px-16 py-2 hover:bg-black hover:text-white transition-colors text-sm"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};
