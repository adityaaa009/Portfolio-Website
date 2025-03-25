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
    <section
      className="bg-white pt-[185px] pb-[68px] px-20 max-md:pt-[100px] max-md:px-5"
      id="contact"
    >
      <div className="max-w-[736px] mx-auto">
        <h2 className="text-black text-3xl font-bold tracking-[10.66px] text-center">
          CONTACT
        </h2>

        <p className="text-black text-[15px] leading-[21px] text-center mt-[102px] max-md:mt-10">
          Need a skilled designer, developer, or project manager? I'm here to
          help. Get in touch through the contact form below, and I'll be happy
          to discuss your project.
        </p>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/125c471a6d7f1166d2c2c15de42aa2ba29448e58?placeholderIfAbsent=true"
          alt="Divider"
          className="w-[170px] mx-auto mt-[30px]"
        />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-[122px]"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="ENTER YOUR NAME*"
                      className="border-l-4 border-black p-4"
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
                      placeholder="ENTER YOUR EMAIL*"
                      className="border-l-4 border-black p-4"
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
                    <Input
                      placeholder="PHONE NUMBER"
                      className="border-l-4 border-black p-4"
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
                      placeholder="YOUR MESSAGE*"
                      className="border-l-4 border-black p-4 min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                className="px-8 py-4 border-x-4 border-black hover:bg-black hover:text-white transition-colors"
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};
