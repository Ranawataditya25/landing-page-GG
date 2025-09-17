import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@/lib/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Mail, Clock } from "lucide-react";

export function Contact() {
  const { toast } = useToast();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
  nameRef.current?.focus({ preventScroll: true });
}, []);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await fetch(
        "https://goodguiders-maxbrain.onrender.com/api/storage/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error || "Failed to send message");
      }

      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message || "Message sent successfully!",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error?.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Team%20GoodGuiders";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Have questions? We're here to help! Reach out to us via WhatsApp
              or send us a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-success" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">WhatsApp Support</h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-success hover:underline"
                  >
                    Chat with us directly
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Email Support</h4>
                  <p className="text-gray-600">support@goodguiders.in</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Response Time</h4>
                  <p className="text-gray-600">Within 2 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-[rgb(205,237,202)]">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            ref={nameRef}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                emailRef.current?.focus();
                              }
                            }}
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            ref={emailRef}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                messageRef.current?.focus();
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            ref={messageRef}
                            rows={4}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                form.handleSubmit(onSubmit)();
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
