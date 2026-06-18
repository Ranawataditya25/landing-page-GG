// // // // // import { useRef, useEffect } from "react";
// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Input } from "@/components/ui/input";
// // // // // import { Textarea } from "@/components/ui/textarea";
// // // // // import { useForm } from "react-hook-form";
// // // // // import { zodResolver } from "@hookform/resolvers/zod";
// // // // // import { insertContactSchema, type InsertContact } from "@/lib/schema";
// // // // // import {
// // // // //   Form,
// // // // //   FormControl,
// // // // //   FormField,
// // // // //   FormItem,
// // // // //   FormLabel,
// // // // //   FormMessage,
// // // // // } from "@/components/ui/form";
// // // // // import { useMutation } from "@tanstack/react-query";
// // // // // import { useToast } from "@/hooks/use-toast";
// // // // // import { MessageSquare, Mail, Clock } from "lucide-react";

// // // // // export function Contact() {
// // // // //   const { toast } = useToast();

// // // // //   const nameRef = useRef<HTMLInputElement>(null);
// // // // //   const emailRef = useRef<HTMLInputElement>(null);
// // // // //   const messageRef = useRef<HTMLTextAreaElement>(null);

// // // // //   useEffect(() => {
// // // // //   nameRef.current?.focus({ preventScroll: true });
// // // // // }, []);

// // // // //   const form = useForm<InsertContact>({
// // // // //     resolver: zodResolver(insertContactSchema),
// // // // //     defaultValues: {
// // // // //       name: "",
// // // // //       email: "",
// // // // //       subject: "",
// // // // //       message: "",
// // // // //     },
// // // // //   });

// // // // //   const mutation = useMutation({
// // // // //     mutationFn: async (data: InsertContact) => {
// // // // //       const response = await fetch(
// // // // //         "https://goodguiders-maxbrain.onrender.com/api/storage/contact",
// // // // //         {
// // // // //           method: "POST",
// // // // //           headers: {
// // // // //             "Content-Type": "application/json",
// // // // //           },
// // // // //           body: JSON.stringify(data),
// // // // //         }
// // // // //       );

// // // // //       if (!response.ok) {
// // // // //         const errorData = await response.json();
// // // // //         throw new Error(errorData?.error || "Failed to send message");
// // // // //       }

// // // // //       return response.json();
// // // // //     },
// // // // //     onSuccess: (data) => {
// // // // //       toast({
// // // // //         title: "Success!",
// // // // //         description: data.message || "Message sent successfully!",
// // // // //       });
// // // // //       form.reset();
// // // // //     },
// // // // //     onError: (error: any) => {
// // // // //       toast({
// // // // //         title: "Error",
// // // // //         description: error?.message || "Failed to send message. Please try again.",
// // // // //         variant: "destructive",
// // // // //       });
// // // // //     },
// // // // //   });

// // // // //   const onSubmit = (data: InsertContact) => {
// // // // //     mutation.mutate(data);
// // // // //   };

// // // // //   const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Team%20GoodGuiders";

// // // // //   return (
// // // // //     <section id="contact" className="py-20 bg-white">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         <div className="grid lg:grid-cols-2 gap-12">
// // // // //           {/* Contact Info */}
// // // // //           <div>
// // // // //             <h2 className="text-4xl font-bold text-gray-900 mb-6">
// // // // //            Frequently Asked Questions
// // // // //             </h2>
// // // // //             <p className="text-xl text-gray-600 mb-8">
// // // // //               Have questions? We're here to help! Reach out to us via WhatsApp
// // // // //               or send us a message.
// // // // //             </p>

// // // // //             <div className="space-y-6">
// // // // //               <div className="flex items-center">
// // // // //                 <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
// // // // //                   <MessageSquare className="w-6 h-6 text-success" />
// // // // //                 </div>
// // // // //                 <div className="ml-4">
// // // // //                   <h4 className="font-semibold text-gray-900">WhatsApp Support</h4>
// // // // //                   <a
// // // // //                     href={whatsappUrl}
// // // // //                     target="_blank"
// // // // //                     rel="noopener noreferrer"
// // // // //                     className="text-success hover:underline"
// // // // //                   >
// // // // //                     Chat with us directly
// // // // //                   </a>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="flex items-center">
// // // // //                 <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
// // // // //                   <Mail className="w-6 h-6 text-primary" />
// // // // //                 </div>
// // // // //                 <div className="ml-4">
// // // // //                   <h4 className="font-semibold text-gray-900">Email Support</h4>
// // // // //                   <p className="text-gray-600">support@goodguiders.in</p>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="flex items-center">
// // // // //                 <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
// // // // //                   <Clock className="w-6 h-6 text-secondary" />
// // // // //                 </div>
// // // // //                 <div className="ml-4">
// // // // //                   <h4 className="font-semibold text-gray-900">Response Time</h4>
// // // // //                   <p className="text-gray-600">Within 2 hours</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Contact Form */}
// // // // //           <Card className="bg-[rgb(205,237,202)]">
// // // // //             <CardContent className="p-8">
// // // // //               <Form {...form}>
// // // // //                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
// // // // //                   <FormField
// // // // //                     control={form.control}
// // // // //                     name="name"
// // // // //                     render={({ field }) => (
// // // // //                       <FormItem>
// // // // //                         <FormLabel>Name</FormLabel>
// // // // //                         <FormControl>
// // // // //                           <Input
// // // // //                             {...field}
// // // // //                             ref={nameRef}
// // // // //                             onKeyDown={(e) => {
// // // // //                               if (e.key === "Enter") {
// // // // //                                 e.preventDefault();
// // // // //                                 emailRef.current?.focus();
// // // // //                               }
// // // // //                             }}
// // // // //                           />
// // // // //                         </FormControl>
// // // // //                         <FormMessage />
// // // // //                       </FormItem>
// // // // //                     )}
// // // // //                   />

// // // // //                   <FormField
// // // // //                     control={form.control}
// // // // //                     name="email"
// // // // //                     render={({ field }) => (
// // // // //                       <FormItem>
// // // // //                         <FormLabel>Email</FormLabel>
// // // // //                         <FormControl>
// // // // //                           <Input
// // // // //                             type="email"
// // // // //                             {...field}
// // // // //                             ref={emailRef}
// // // // //                             onKeyDown={(e) => {
// // // // //                               if (e.key === "Enter") {
// // // // //                                 e.preventDefault();
// // // // //                                 messageRef.current?.focus();
// // // // //                               }
// // // // //                             }}
// // // // //                           />
// // // // //                         </FormControl>
// // // // //                         <FormMessage />
// // // // //                       </FormItem>
// // // // //                     )}
// // // // //                   />

// // // // //                   <FormField
// // // // //                     control={form.control}
// // // // //                     name="subject"
// // // // //                     render={({ field }) => (
// // // // //                       <FormItem>
// // // // //                         <FormLabel>Subject</FormLabel>
// // // // //                         <FormControl>
// // // // //                           <Input {...field} />
// // // // //                         </FormControl>
// // // // //                         <FormMessage />
// // // // //                       </FormItem>
// // // // //                     )}
// // // // //                   />

// // // // //                   <FormField
// // // // //                     control={form.control}
// // // // //                     name="message"
// // // // //                     render={({ field }) => (
// // // // //                       <FormItem>
// // // // //                         <FormLabel>Message</FormLabel>
// // // // //                         <FormControl>
// // // // //                           <Textarea
// // // // //                             {...field}
// // // // //                             ref={messageRef}
// // // // //                             rows={4}
// // // // //                             onKeyDown={(e) => {
// // // // //                               if (e.key === "Enter" && !e.shiftKey) {
// // // // //                                 e.preventDefault();
// // // // //                                 form.handleSubmit(onSubmit)();
// // // // //                               }
// // // // //                             }}
// // // // //                           />
// // // // //                         </FormControl>
// // // // //                         <FormMessage />
// // // // //                       </FormItem>
// // // // //                     )}
// // // // //                   />

// // // // //                   <Button
// // // // //                     type="submit"
// // // // //                     className="w-full bg-primary hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
// // // // //                     disabled={mutation.isPending}
// // // // //                   >
// // // // //                     {mutation.isPending ? "Sending..." : "Send Message"}
// // // // //                   </Button>
// // // // //                 </form>
// // // // //               </Form>
// // // // //             </CardContent>
// // // // //           </Card>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }



// // // // import { useRef, useEffect } from "react";
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Textarea } from "@/components/ui/textarea";
// // // // import { useForm } from "react-hook-form";
// // // // import { zodResolver } from "@hookform/resolvers/zod";
// // // // import { insertContactSchema, type InsertContact } from "@/lib/schema";
// // // // import {
// // // //   Form,
// // // //   FormControl,
// // // //   FormField,
// // // //   FormItem,
// // // //   FormLabel,
// // // //   FormMessage,
// // // // } from "@/components/ui/form";
// // // // import { useMutation } from "@tanstack/react-query";
// // // // import { useToast } from "@/hooks/use-toast";
// // // // import { MessageSquare, Mail, Clock } from "lucide-react";

// // // // export function Contact() {
// // // //   const { toast } = useToast();

// // // //   const nameRef = useRef<HTMLInputElement>(null);
// // // //   const emailRef = useRef<HTMLInputElement>(null);
// // // //   const messageRef = useRef<HTMLTextAreaElement>(null);

// // // //   useEffect(() => {
// // // //     nameRef.current?.focus({ preventScroll: true });
// // // //   }, []);

// // // //   const form = useForm<InsertContact>({
// // // //     resolver: zodResolver(insertContactSchema),
// // // //     defaultValues: {
// // // //       name: "",
// // // //       email: "",
// // // //       subject: "",
// // // //       message: "",
// // // //     },
// // // //   });

// // // //   const mutation = useMutation({
// // // //     mutationFn: async (data: InsertContact) => {
// // // //       const response = await fetch(
// // // //         "https://goodguiders-maxbrain.onrender.com/api/storage/contact",
// // // //         {
// // // //           method: "POST",
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //           },
// // // //           body: JSON.stringify(data),
// // // //         }
// // // //       );

// // // //       if (!response.ok) {
// // // //         const errorData = await response.json();
// // // //         throw new Error(errorData?.error || "Failed to send message");
// // // //       }

// // // //       return response.json();
// // // //     },
// // // //     onSuccess: (data) => {
// // // //       toast({
// // // //         title: "Success!",
// // // //         description: data.message || "Message sent successfully!",
// // // //       });
// // // //       form.reset();
// // // //     },
// // // //     onError: (error: any) => {
// // // //       toast({
// // // //         title: "Error",
// // // //         description: error?.message || "Failed to send message. Please try again.",
// // // //         variant: "destructive",
// // // //       });
// // // //     },
// // // //   });

// // // //   const onSubmit = (data: InsertContact) => {
// // // //     mutation.mutate(data);
// // // //   };

// // // //   const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Team%20GoodGuiders";

// // // //   return (
// // // //     <section id="contact" className="py-20 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         <div className="grid lg:grid-cols-2 gap-12">
          
// // // //           {/* 1. Contact Form (Ab yeh Left Side par dikhega) */}
// // // //           <Card className="bg-[rgb(205,237,202)]">
// // // //             <CardContent className="p-8">
// // // //               <Form {...form}>
// // // //                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
// // // //                   <FormField
// // // //                     control={form.control}
// // // //                     name="name"
// // // //                     render={({ field }) => (
// // // //                       <FormItem>
// // // //                         <FormLabel>Name</FormLabel>
// // // //                         <FormControl>
// // // //                           <Input
// // // //                             {...field}
// // // //                             ref={nameRef}
// // // //                             onKeyDown={(e) => {
// // // //                               if (e.key === "Enter") {
// // // //                                 e.preventDefault();
// // // //                                 emailRef.current?.focus();
// // // //                               }
// // // //                             }}
// // // //                           />
// // // //                         </FormControl>
// // // //                         <FormMessage />
// // // //                       </FormItem>
// // // //                     )}
// // // //                   />

// // // //                   <FormField
// // // //                     control={form.control}
// // // //                     name="email"
// // // //                     render={({ field }) => (
// // // //                       <FormItem>
// // // //                         <FormLabel>Email</FormLabel>
// // // //                         <FormControl>
// // // //                           <Input
// // // //                             type="email"
// // // //                             {...field}
// // // //                             ref={emailRef}
// // // //                             onKeyDown={(e) => {
// // // //                               if (e.key === "Enter") {
// // // //                                 e.preventDefault();
// // // //                                 messageRef.current?.focus();
// // // //                               }
// // // //                             }}
// // // //                           />
// // // //                         </FormControl>
// // // //                         <FormMessage />
// // // //                       </FormItem>
// // // //                     )}
// // // //                   />

// // // //                   <FormField
// // // //                     control={form.control}
// // // //                     name="subject"
// // // //                     render={({ field }) => (
// // // //                       <FormItem>
// // // //                         <FormLabel>Subject</FormLabel>
// // // //                         <FormControl>
// // // //                           <Input {...field} />
// // // //                         </FormControl>
// // // //                         <FormMessage />
// // // //                       </FormItem>
// // // //                     )}
// // // //                   />

// // // //                   <FormField
// // // //                     control={form.control}
// // // //                     name="message"
// // // //                     render={({ field }) => (
// // // //                       <FormItem>
// // // //                         <FormLabel>Message</FormLabel>
// // // //                         <FormControl>
// // // //                           <Textarea
// // // //                             {...field}
// // // //                             ref={messageRef}
// // // //                             rows={4}
// // // //                             onKeyDown={(e) => {
// // // //                               if (e.key === "Enter" && !e.shiftKey) {
// // // //                                 e.preventDefault();
// // // //                                 form.handleSubmit(onSubmit)();
// // // //                               }
// // // //                             }}
// // // //                           />
// // // //                         </FormControl>
// // // //                         <FormMessage />
// // // //                       </FormItem>
// // // //                     )}
// // // //                   />

// // // //                   <Button
// // // //                     type="submit"
// // // //                     className="w-full bg-primary hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
// // // //                     disabled={mutation.isPending}
// // // //                   >
// // // //                     {mutation.isPending ? "Sending..." : "Send Message"}
// // // //                   </Button>
// // // //                 </form>
// // // //               </Form>
// // // //             </CardContent>
// // // //           </Card>

// // // //           {/* 2. Contact Info (Ab yeh Right Side par dikhega) */}
// // // //           <div>
// // // //             <h2 className="text-4xl font-bold text-gray-900 mb-6">
// // // //               Frequently Asked Questions
// // // //             </h2>
// // // //             <p className="text-xl text-gray-600 mb-8">
// // // //               Have questions? We're here to help! Reach out to us via WhatsApp
// // // //               or send us a message.
// // // //             </p>

// // // //             <div className="space-y-6">
// // // //               <div className="flex items-center">
// // // //                 <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
// // // //                   <MessageSquare className="w-6 h-6 text-success" />
// // // //                 </div>
// // // //                 <div className="ml-4">
// // // //                   <h4 className="font-semibold text-gray-900">WhatsApp Support</h4>
// // // //                   <a
// // // //                     href={whatsappUrl}
// // // //                     target="_blank"
// // // //                     rel="noopener noreferrer"
// // // //                     className="text-success hover:underline"
// // // //                   >
// // // //                     Chat with us directly
// // // //                   </a>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="flex items-center">
// // // //                 <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
// // // //                   <Mail className="w-6 h-6 text-primary" />
// // // //                 </div>
// // // //                 <div className="ml-4">
// // // //                   <h4 className="font-semibold text-gray-900">Email Support</h4>
// // // //                   <p className="text-gray-600">support@goodguiders.in</p>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="flex items-center">
// // // //                 <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
// // // //                   <Clock className="w-6 h-6 text-secondary" />
// // // //                 </div>
// // // //                 <div className="ml-4">
// // // //                   <h4 className="font-semibold text-gray-900">Response Time</h4>
// // // //                   <p className="text-gray-600">Within 2 hours</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }



// // // // import { useRef, useEffect } from "react";
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Textarea } from "@/components/ui/textarea";
// // // // import { useForm } from "react-hook-form";
// // // // import { zodResolver } from "@hookform/resolvers/zod";
// // // // import { insertContactSchema, type InsertContact } from "@/lib/schema";
// // // // import {
// // // //   Form,
// // // //   FormControl,
// // // //   FormField,
// // // //   FormItem,
// // // //   FormLabel,
// // // //   FormMessage,
// // // // } from "@/components/ui/form";
// // // // import { useMutation } from "@tanstack/react-query";
// // // // import { useToast } from "@/hooks/use-toast";
// // // // import { MessageSquare, Mail, Clock } from "lucide-react";

// // // // export function Contact() {
// // // //   const { toast } = useToast();

// // // //   const nameRef = useRef<HTMLInputElement>(null);
// // // //   const emailRef = useRef<HTMLInputElement>(null);
// // // //   const messageRef = useRef<HTMLTextAreaElement>(null);

// // // //   useEffect(() => {
// // // //     nameRef.current?.focus({ preventScroll: true });
// // // //   }, []);

// // // //   const form = useForm<InsertContact>({
// // // //     resolver: zodResolver(insertContactSchema),
// // // //     defaultValues: {
// // // //       name: "",
// // // //       email: "",
// // // //       subject: "",
// // // //       message: "",
// // // //     },
// // // //   });

// // // //   const mutation = useMutation({
// // // //     mutationFn: async (data: InsertContact) => {
// // // //       const response = await fetch(
// // // //         "https://goodguiders-maxbrain.onrender.com/api/storage/contact",
// // // //         {
// // // //           method: "POST",
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //           },
// // // //           body: JSON.stringify(data),
// // // //         }
// // // //       );

// // // //       if (!response.ok) {
// // // //         const errorData = await response.json();
// // // //         throw new Error(errorData?.error || "Failed to send message");
// // // //       }

// // // //       return response.json();
// // // //     },
// // // //     onSuccess: (data) => {
// // // //       toast({
// // // //         title: "Success!",
// // // //         description: data.message || "Message sent successfully!",
// // // //       });
// // // //       form.reset();
// // // //     },
// // // //     onError: (error: any) => {
// // // //       toast({
// // // //         title: "Error",
// // // //         description: error?.message || "Failed to send message. Please try again.",
// // // //         variant: "destructive",
// // // //       });
// // // //     },
// // // //   });

// // // //   const onSubmit = (data: InsertContact) => {
// // // //     mutation.mutate(data);
// // // //   };

// // // //   const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Team%20GoodGuiders";

// // // //   return (
// // // //     <section id="contact" className="py-20 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {/* gap-16 se mobile/tablet par aur lg:gap-24 se desktop par space badh jayega */}
// // // //         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
// // // //           {/* Contact Form (Left Side) */}
// // // //           <Card className="bg-[rgb(205,237,202)] w-full">
// // // //             <CardContent className="p-8">
// // // //               <Form {...form}>
// // // //                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
// // // //                   <FormField
// // // //                     control={form.control}
// // // //                     name="name"
// // // //                     render={({ field }) => (
// // // //                       <FormItem>
// // // //                         <FormLabel>Name</FormLabel>
// // // //                         <FormControl>
// // // //                           <Input
// // // //                             {...field}
// // // //                             ref={nameRef}
// // // //                             onKeyDown={(e) => {
// // // //                               if (e.key === "Enter") {
// // // //                                 e.preventDefault();
// // // //                                 emailRef.current?.focus();
// // // //                               }
// // // //                             }}
// // // //                           />
// // // //                         </FormControl>
// // // //                         <FormMessage />
// // // //                       </FormItem>
// // // //                     )}
// // // //                   />

// // // //                   <FormField
// // // //                     control={form.control}
// // // //                     name="email"
// // // //                     render={({ field }) => (
// // // //                       <FormItem>
// // // //                         <FormLabel>Email</FormLabel>
// // // //                         <FormControl>
// // // //                           <Input
// // // //                             type="email"
// // // //                             {...field}
// // // //                             ref={emailRef}
// // // //                             onKeyDown={(e) => {
// // // //                               if (e.key === "Enter") {
// // // //                                 e.preventDefault();
// // // //                                 messageRef.current?.focus();
// // // //                               }
// // // //                             }}
// // // //                           />
// // // //                         </FormControl>
// // // //                         <FormMessage />
// // // //                       </FormItem>
// // // //                     )}
// // // //                   />

// // // //                   <FormField
// // // //                     control={form.control}
// // // //                     name="subject"
// // // //                     render={({ field }) => (
// // // //                       <FormItem>
// // // //                         <FormLabel>Subject</FormLabel>
// // // //                         <FormControl>
// // // //                           <Input {...field} />
// // // //                         </FormControl>
// // // //                         <FormMessage />
// // // //                       </FormItem>
// // // //                     )}
// // // //                   />

// // // //                   <FormField
// // // //                     control={form.control}
// // // //                     name="message"
// // // //                     render={({ field }) => (
// // // //                       <FormItem>
// // // //                         <FormLabel>Message</FormLabel>
// // // //                         <FormControl>
// // // //                           <Textarea
// // // //                             {...field}
// // // //                             ref={messageRef}
// // // //                             rows={4}
// // // //                             onKeyDown={(e) => {
// // // //                               if (e.key === "Enter" && !e.shiftKey) {
// // // //                                 e.preventDefault();
// // // //                                 form.handleSubmit(onSubmit)();
// // // //                               }
// // // //                             }}
// // // //                           />
// // // //                         </FormControl>
// // // //                         <FormMessage />
// // // //                       </FormItem>
// // // //                     )}
// // // //                   />

// // // //                   <Button
// // // //                     type="submit"
// // // //                     className="w-full bg-primary hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
// // // //                     disabled={mutation.isPending}
// // // //                   >
// // // //                     {mutation.isPending ? "Sending..." : "Send Message"}
// // // //                   </Button>
// // // //                 </form>
// // // //               </Form>
// // // //             </CardContent>
// // // //           </Card>

// // // //           {/* Contact Info (Right Side) */}
// // // //           <div className="w-full">
// // // //             <h2 className="text-4xl font-bold text-gray-900 mb-6">
// // // //               Frequently Asked Questions
// // // //             </h2>
// // // //             <p className="text-xl text-gray-600 mb-8">
// // // //               Have questions? We're here to help! Reach out to us via WhatsApp
// // // //               or send us a message.
// // // //             </p>

// // // //             <div className="space-y-6">
// // // //               <div className="flex items-center">
// // // //                 <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
// // // //                   <MessageSquare className="w-6 h-6 text-success" />
// // // //                 </div>
// // // //                 <div className="ml-4">
// // // //                   <h4 className="font-semibold text-gray-900">WhatsApp Support</h4>
// // // //                   <a
// // // //                     href={whatsappUrl}
// // // //                     target="_blank"
// // // //                     rel="noopener noreferrer"
// // // //                     className="text-success hover:underline"
// // // //                   >
// // // //                     Chat with us directly
// // // //                   </a>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="flex items-center">
// // // //                 <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
// // // //                   <Mail className="w-6 h-6 text-primary" />
// // // //                 </div>
// // // //                 <div className="ml-4">
// // // //                   <h4 className="font-semibold text-gray-900">Email Support</h4>
// // // //                   <p className="text-gray-600">support@goodguiders.in</p>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="flex items-center">
// // // //                 <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
// // // //                   <Clock className="w-6 h-6 text-secondary" />
// // // //                 </div>
// // // //                 <div className="ml-4">
// // // //                   <h4 className="font-semibold text-gray-900">Response Time</h4>
// // // //                   <p className="text-gray-600">Within 2 hours</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // import {
// // //   Accordion,
// // //   AccordionContent,
// // //   AccordionItem,
// // //   AccordionTrigger,
// // // } from "@/components/ui/accordion";
// // // import { MessageSquare, Mail, Clock } from "lucide-react";

// // // export function Contact() {
// // //   const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Team%20GoodGuiders";

// // //   const faqData = [
// // //     {
// // //       id: "item-1",
// // //       question: "What is One to One Learning?",
// // //       answer: "One to one learning is where there is only one student learning from the teacher. So that the teacher is totally focused on the student, can easily track progress and pay individual attention at all times. And the student can also feel free to learn at a pace suitable to them and ask their doubts freely."
// // //     },
// // //     {
// // //       id: "item-2",
// // //       question: "Are the classes offline or online?",
// // //       answer: "The classes are conducted entirely online through an interactive platform, allowing students to learn comfortably from anywhere without any travel hassle."
// // //     },
// // //     {
// // //       id: "item-3",
// // //       question: "Are the classes Live?",
// // //       answer: "The classes are live and according to a decided schedule which is convenient for the student. This is not at all a recorded class, but totally live with the teacher teaching the student just as a normal home tuition."
// // //     }
// // //   ];

// // //   return (
// // //     <section id="contact" className="py-20 bg-white">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// // //         {/* Responsive Grid layout */}
// // //         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
// // //           {/* FAQ Accordion Section (Left Side - Replaced Form) */}
// // //           <div className="w-full">
// // //             <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
// // //               {faqData.map((faq) => (
// // //                 <AccordionItem 
// // //                   key={faq.id} 
// // //                   value={faq.id} 
// // //                   className="border-none bg-gray-50 rounded-lg overflow-hidden transition-all data-[state=open]:bg-gray-100"
// // //                 >
// // //                   <AccordionTrigger className="flex justify-between items-center w-full p-5 text-left font-semibold text-lg text-gray-900 hover:no-underline">
// // //                     {faq.question}
// // //                   </AccordionTrigger>
// // //                   <AccordionContent className="p-5 pt-0 text-base leading-relaxed text-gray-700 bg-white border-t border-gray-100">
// // //                     {faq.answer}
// // //                   </AccordionContent>
// // //                 </AccordionItem>
// // //               ))}
// // //             </Accordion>
// // //           </div>

// // //           {/* Contact Info (Right Side) */}
// // //           <div className="w-full lg:sticky lg:top-8">
// // //             <h2 className="text-4xl font-bold text-gray-900 mb-6">
// // //               Frequently Asked Questions
// // //             </h2>
// // //             <p className="text-xl text-gray-600 mb-8">
// // //               Have questions? We're here to help! Reach out to us via WhatsApp
// // //               or send us a message.
// // //             </p>

// // //             <div className="space-y-6">
// // //               <div className="flex items-center">
// // //                 <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
// // //                   <MessageSquare className="w-6 h-6 text-emerald-600" />
// // //                 </div>
// // //                 <div className="ml-4">
// // //                   <h4 className="font-semibold text-gray-900">WhatsApp Support</h4>
// // //                   <a
// // //                     href={whatsappUrl}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     className="text-emerald-600 font-medium hover:underline"
// // //                   >
// // //                     Chat with us directly
// // //                   </a>
// // //                 </div>
// // //               </div>

// // //               <div className="flex items-center">
// // //                 <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
// // //                   <Mail className="w-6 h-6 text-orange-600" />
// // //                 </div>
// // //                 <div className="ml-4">
// // //                   <h4 className="font-semibold text-gray-900">Email Support</h4>
// // //                   <p className="text-gray-600">support@goodguiders.in</p>
// // //                 </div>
// // //               </div>

// // //               <div className="flex items-center">
// // //                 <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
// // //                   <Clock className="w-6 h-6 text-blue-600" />
// // //                 </div>
// // //                 <div className="ml-4">
// // //                   <h4 className="font-semibold text-gray-900">Response Time</h4>
// // //                   <p className="text-gray-600">Within 2 hours</p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import { useState } from "react";
// // import { MessageSquare, Mail, Clock, ChevronDown } from "lucide-react";

// // export function Contact() {
// //   const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Team%20GoodGuiders";

// //   // State to track which accordion item is currently open
// //   const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

// //   const toggleAccordion = (index: number) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   const faqData = [
// //     {
// //       question: "What is One to One Learning?",
// //       answer: "One to one learning is where there is only one student learning from the teacher. So that the teacher is totally focused on the student, can easily track progress and pay individual attention at all times. And the student can also feel free to learn at a pace suitable to them and ask their doubts freely."
// //     },
// //     {
// //       question: "Are the classes offline or online?",
// //       answer: "The classes are conducted entirely online through our interactive live platform. This allows students to learn from the comfort and safety of their homes, eliminating travel time while retaining all the benefits of personal face-to-face tutoring."
// //     },
// //     {
// //       question: "Are the classes Live?",
// //       answer: "The classes are live and according to a decided schedule which is convenient for the student. This is not at all a recorded class, but totally live with the teacher teaching the student just as a normal home tuition."
// //     },
// //     {
// //       question: "Can we choose our own class timings?",
// //       answer: "Yes, completely. The schedule is highly flexible and designed around the student's convenience. During enrollment, you can select specific days and time slots that work best with your school or college routine."
// //     },
// //     {
// //       question: "Do you offer a free trial or demo class?",
// //       answer: "Yes, we provide a complimentary 1-to-1 live demo session. This helps the student experience our teaching methodology, interact directly with the mentor, and understand the platform layout before making any commitment."
// //     },
// //     {
// //       question: "What happens if a student misses a scheduled class?",
// //       answer: "If you inform us at least a few hours in advance, the class can be easily rescheduled to another mutually convenient slot. Since it is a 1-to-1 session, you never lose a class or lag behind; the teacher simply picks up right where you left off."
// //     }
// //   ];

// //   return (
// //     <section id="contact" className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// //         {/* Layout Grid */}
// //         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
// //           {/* FAQ Accordion Section (Left Side) */}
// //           <div className="w-full space-y-4">
// //             {faqData.map((faq, index) => {
// //               const isOpen = openIndex === index;
// //               return (
// //                 <div 
// //                   key={index} 
// //                   className="rounded-lg overflow-hidden border border-gray-100 shadow-sm transition-all duration-200"
// //                 >
// //                   {/* Header/Trigger Box */}
// //                   <button
// //                     type="button"
// //                     onClick={() => toggleAccordion(index)}
// //                     className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg transition-colors duration-200 ${
// //                       isOpen 
// //                         ? "bg-[rgb(240,249,238)] text-gray-900" 
// //                         : "bg-gray-50 text-gray-800 hover:bg-gray-100"
// //                     }`}
// //                   >
// //                     <span>{faq.question}</span>
// //                     <ChevronDown 
// //                       className={`w-5 h-5 text-gray-500 transition-transform duration-200 ease-in-out ${
// //                         isOpen ? "transform rotate-180 text-gray-900" : ""
// //                       }`}
// //                     />
// //                   </button>

// //                   {/* Content Box */}
// //                   <div 
// //                     className={`grid transition-all duration-200 ease-in-out ${
// //                       isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
// //                     }`}
// //                   >
// //                     <div className="overflow-hidden">
// //                       <div className="p-5 text-base leading-relaxed text-gray-700 bg-white border-t border-gray-100">
// //                         {faq.answer}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           {/* Contact Info (Right Side) */}
// //           <div className="w-full lg:sticky lg:top-8">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-6">
// //               Frequently Asked Questions
// //             </h2>
// //             <p className="text-xl text-gray-600 mb-8">
// //               Have questions? We're here to help! Reach out to us via WhatsApp
// //               or send us a message.
// //             </p>

// //             <div className="space-y-6">
// //               {/* WhatsApp Item */}
// //               <div className="flex items-center">
// //                 <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
// //                   <MessageSquare className="w-6 h-6 text-emerald-600" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <h4 className="font-semibold text-gray-900">WhatsApp Support</h4>
// //                   <a
// //                     href={whatsappUrl}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-emerald-600 font-medium hover:underline"
// //                   >
// //                     Chat with us directly
// //                   </a>
// //                 </div>
// //               </div>

// //               {/* Email Item */}
// //               <div className="flex items-center">
// //                 <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
// //                   <Mail className="w-6 h-6 text-orange-600" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <h4 className="font-semibold text-gray-900">Email Support</h4>
// //                   <p className="text-gray-600">support@goodguiders.in</p>
// //                 </div>
// //               </div>

// //               {/* Response Time Item */}
// //               <div className="flex items-center">
// //                 <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
// //                   <Clock className="w-6 h-6 text-blue-600" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <h4 className="font-semibold text-gray-900">Response Time</h4>
// //                   <p className="text-gray-600">Within 2 hours</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// // import { useState } from "react";
// // import { MessageSquare, Mail, Clock, ChevronDown } from "lucide-react";

// // export function Contact() {
// //   const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Team%20GoodGuiders";

// //   // State to track which accordion item is currently open
// //   const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

// //   const toggleAccordion = (index: number) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   const faqData = [
// //     {
// //       question: "What is One to One Learning?",
// //       answer: "One to one learning is where there is only one student learning from the teacher. So that the teacher is totally focused on the student, can easily track progress and pay individual attention at all times. And the student can also feel free to learn at a pace suitable to them and ask their doubts freely."
// //     },
// //     {
// //       question: "Are the classes offline or online?",
// //       answer: "The classes are conducted entirely online through our interactive live platform. This allows students to learn from the comfort and safety of their homes, eliminating travel time while retaining all the benefits of personal face-to-face tutoring."
// //     },
// //     {
// //       question: "Are the classes Live?",
// //       answer: "The classes are live and according to a decided schedule which is convenient for the student. This is not at all a recorded class, but totally live with the teacher teaching the student just as a normal home tuition."
// //     },
// //     {
// //       question: "How is different from other online live classes?",
// //       answer: "Here the video and audio of students are always on. So there is no scope of student missing out on learning at any time. Also since there is only one student in front of the teacher, so there is no lagging behind or shyness in asking doubts. Also the teacher gives homework and checks homework in each class before teaching new concepts."


// //     },
// //     {
// //       question: "What is the profile and qualification of the teachers?",
// //       answer: "All the teachers are IITians/Doctors/NITians/Experts with 5-10 years of experience in teaching for IIT JEE and NEET exams. Most importantly, we also ensure that the teachers are empathetic enough to be able to connect to each student at an individual level and maintain a professional but effective rapport with the students. They become virtual parents of the students with respect to academics."
// //     },
// //     {
// //       question: "Will you also give study material?",
// //       answer: "Yes, we will provide the study material relevant for the exam. However, we mostly provide softcopy study material, practice material, tests and some critical recorded videos. We try to avoid hardcopy material as much as possible in line with our ethos of Online learning. However, where absolutely needed we will provide relevant hardcopy books and also suggest to purchase any extra books as per need.."
// //     },
// //      {
// //       question: "How will you ensure the syllabus gets completed?",
// //       answer: "We have a clear mechanism where the teacher and student both fill the concepts/topics covered in each session, so as to keep track of the progress and remaining chapters. Also a chief mentor is appointed for each student whose work is to call the students and keep track of the progress and any issues. And try to resolve issues as fast as possible."
// //     },
// //      {
// //       question: "How do you  ensure quality of teaching consistency?",
// //       answer: "We follow a multi-tiered process to ensure high quality and consistent teaching standards for each student. It starts with ensuring that qualified, experienced and empathetic teachers are only selected. Then we have an extensive training for each of our teachers. Then we ensure we talk to each student in detail and understand their learning styles and pair them with teachers who will be most effective with such students. Finally we have a chief mentor assigned to each student who is always in touch with the student to ensure they are loving the classes and actually learning the concepts and are able to apply those while solving questions. We believe in getting students to study, and not just teaching them and leave."
// //     },
// //      {
// //       question: "How willyou take mock tests and. give All India Rank?",
// //       answer: "We take our own mock tests for the students. And our mocks are exactly aligned to the actual exam, since we don’t want to teach the students unnecessarily tough concepts like many prominent coaching centers which break the confidence of the students. We believe in positive reinforcement and encouragement to do well, and we practice is thoroughly."
// //     },
// //      {
// //       question: "Where are the batches startings?",
// //       answer: "Every month we try to start new batches. Also if you are looking for Customized courses in 1:1 mode then we can start as soon as you want. We would love to understand your specific timings, so kindly reach out to know more."
// //     },
// //      {
// //       question: "Can I talk to a teacher before enrolling the student?",
// //       answer: "Yes. We in fact insist that we arrange a Zoom call for the parent and student with our Chief Academic Officer, who is an IITian and been teaching for JEE for more than 10 years himself."
// //     },
// //      {
// //       question: "Can I get a. demo class before enrolling in the. course?",
// //       answer: "Yes. We can arrange a demo class if you feel the need for it. Trust us when you say, it will be tough for you to move away from us once you have attended a demo class. The one to one sessions are intense but very effective and fulfilling."
// //     },
// //      {
// //       question: "why should i not join an old known institute but join PracBee?",
// //       answer: "You join an institute to learn. And get an excellent score and rank in the target exam. PracBee helps you do exactly that. Through first of its kind one to one coaching for high intensity exams like IIT JEE. If you want to crack the exam, PracBee should be your ideal partner and not an institute which does not focus on every student, but tries to create only a few toppers."
// //     },
// //      {
// //       question: "How do i pay for the course?",
// //       answer: "You can pay for the course through all these methods - On our website through Net Banking or debit/credit cards. Or you can also transfer the amount directly in PracBee account, for which we can send you the account details."
// //     },

// //      {
// //       question: "When will my classes start?",
// //       answer: "Your classes will start as soon as you are ready. Since there is no batch but only you, so there is no delay in starting as early as possible towards your goal."
// //     },

// //   ];

// //   return (
// //     <section id="contact" className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// //         {/* Main Grid Container with equal alignment */}
// //         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
// //           {/* FAQ Accordion Section (Left Side) with Fixed Height & Scroll */}
// //           <div className="w-full max-h-[540px] overflow-y-auto pr-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-200">
// //             {faqData.map((faq, index) => {
// //               const isOpen = openIndex === index;
// //               return (
// //                 <div 
// //                   key={index} 
// //                   className="rounded-lg overflow-hidden border border-gray-100 shadow-sm transition-all duration-200"
// //                 >
// //                   {/* Header/Trigger Box */}
// //                   <button
// //                     type="button"
// //                     onClick={() => toggleAccordion(index)}
// //                     className={`flex justify-between items-center w-full p-5 text-left font-semibold text-[17px] transition-colors duration-200 ${
// //                       isOpen 
// //                         ? "bg-[rgb(240,249,238)] text-gray-900" 
// //                         : "bg-gray-50 text-gray-800 hover:bg-gray-100"
// //                     }`}
// //                   >
// //                     <span className="pr-4">{faq.question}</span>
// //                     <ChevronDown 
// //                       className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ease-in-out ${
// //                         isOpen ? "transform rotate-180 text-gray-900" : ""
// //                       }`}
// //                     />
// //                   </button>

// //                   {/* Content Box */}
// //                   <div 
// //                     className={`grid transition-all duration-200 ease-in-out ${
// //                       isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
// //                     }`}
// //                   >
// //                     <div className="overflow-hidden">
// //                       <div className="p-5 text-base leading-relaxed text-gray-700 bg-white border-t border-gray-100">
// //                         {faq.answer}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           {/* Contact Info (Right Side) */}
// //           <div className="w-full pt-2">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
// //               Frequently Asked Questions
// //             </h2>
// //             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
// //               Have questions? We're here to help! Reach out to us via WhatsApp
// //               or send us a message.
// //             </p>

// //             <div className="space-y-6">
// //               {/* WhatsApp Item */}
// //               <div className="flex items-center">
// //                 <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
// //                   <MessageSquare className="w-6 h-6 text-emerald-600" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <h4 className="font-semibold text-gray-900">WhatsApp Support</h4>
// //                   <a
// //                     href={whatsappUrl}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-emerald-600 font-medium hover:underline"
// //                   >
// //                     Chat with us directly
// //                   </a>
// //                 </div>
// //               </div>

// //               {/* Email Item */}
// //               <div className="flex items-center">
// //                 <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
// //                   <Mail className="w-6 h-6 text-orange-600" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <h4 className="font-semibold text-gray-900">Email Support</h4>
// //                   <p className="text-gray-600">support@goodguiders.in</p>
// //                 </div>
// //               </div>

// //               {/* Response Time Item */}
// //               <div className="flex items-center">
// //                 <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
// //                   <Clock className="w-6 h-6 text-blue-600" />
// //                 </div>
// //                 <div className="ml-4">
// //                   <h4 className="font-semibold text-gray-900">Response Time</h4>
// //                   <p className="text-gray-600">Within 2 hours</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import { useState } from "react";
// import { MessageSquare, Mail, Clock, ChevronDown } from "lucide-react";

// export function Contact() {
//   const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Team%20GoodGuiders";

//   // State to track which accordion item is currently open
//   const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqData = [
//     {
//       question: "What is One to One Learning?",
//       answer: "One to one learning is where there is only one student learning from the teacher. So that the teacher is totally focused on the student, can easily track progress and pay individual attention at all times. And the student can also feel free to learn at a pace suitable to them and ask their doubts freely."
//     },
//     {
//       question: "Are the classes offline or online?",
//       answer: "The classes are conducted entirely online through our interactive live platform. This allows students to learn from the comfort and safety of their homes, eliminating travel time while retaining all the benefits of personal face-to-face tutoring."
//     },
//     {
//       question: "Are the classes Live?",
//       answer: "The classes are live and according to a decided schedule which is convenient for the student. This is not at all a recorded class, but totally live with the teacher teaching the student just as a normal home tuition."
//     },
//     {
//       question: "Can we choose our own class timings?",
//       answer: "Yes, completely. The schedule is highly flexible and designed around the student's convenience. During enrollment, you can select specific days and time slots that work best with your school or college routine."
//     },
//     {
//       question: "Do you offer a free trial or demo class?",
//       answer: "Yes, we provide a complimentary 1-to-1 live demo session. This helps the student experience our teaching methodology, interact directly with the mentor, and understand the platform layout before making any commitment."
//     },
//     {
//       question: "What happens if a student misses a scheduled class?",
//       answer: "If you inform us at least a few hours in advance, the class can be easily rescheduled to another mutually convenient slot. Since it is a 1-to-1 session, you never lose a class or lag behind; the teacher simply picks up right where you left off."
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main Grid Layout */}
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
//           {/* FAQ Accordion Section (Left Side) - Height restricted to show exactly 5 items */}
//           <div className="w-full max-h-[435px] overflow-y-auto pr-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-200">
//             {faqData.map((faq, index) => {
//               const isOpen = openIndex === index;
//               return (
//                 <div 
//                   key={index} 
//                   className="rounded-lg overflow-hidden border border-gray-100 shadow-sm transition-all duration-200"
//                 >
//                   {/* Header/Trigger Box */}
//                   <button
//                     type="button"
//                     onClick={() => toggleAccordion(index)}
//                     className={`flex justify-between items-center w-full p-4 text-left font-semibold text-[16px] transition-colors duration-200 ${
//                       isOpen 
//                         ? "bg-[rgb(240,249,238)] text-gray-900" 
//                         : "bg-gray-50 text-gray-800 hover:bg-gray-100"
//                     }`}
//                   >
//                     <span className="pr-4">{faq.question}</span>
//                     <ChevronDown 
//                       className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ease-in-out ${
//                         isOpen ? "transform rotate-180 text-gray-900" : ""
//                       }`}
//                     />
//                   </button>

//                   {/* Content Box */}
//                   <div 
//                     className={`grid transition-all duration-200 ease-in-out ${
//                       isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
//                     }`}
//                   >
//                     <div className="overflow-hidden">
//                       <div className="p-5 text-base leading-relaxed text-gray-700 bg-white border-t border-gray-100">
//                         {faq.answer}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Contact Info (Right Side) */}
//           <div className="w-full pt-1">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               Have questions? We're here to help! Reach out to us via WhatsApp
//               or send us a message.
//             </p>

//             <div className="space-y-6">
//               {/* WhatsApp Box */}
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <MessageSquare className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div className="ml-4">
//                   <h4 className="font-semibold text-gray-900">WhatsApp Support</h4>
//                   <a
//                     href={whatsappUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-emerald-600 font-medium hover:underline"
//                   >
//                     Chat with us directly
//                   </a>
//                 </div>
//               </div>

//               {/* Email Box */}
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-6 h-6 text-orange-600" />
//                 </div>
//                 <div className="ml-4">
//                   <h4 className="font-semibold text-gray-900">Email Support</h4>
//                   <p className="text-gray-600">support@goodguiders.in</p>
//                 </div>
//               </div>

//               {/* Response Time Box */}
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Clock className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div className="ml-4">
//                   <h4 className="font-semibold text-gray-900">Response Time</h4>
//                   <p className="text-gray-600">Within 2 hours</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { MessageSquare, Mail, Clock, ChevronDown } from "lucide-react";

export function Contact() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Team%20GoodGuiders";

  // State to track which accordion item is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [

    {
      question: "What is One to One Learning?",
      answer: "One to one learning is where there is only one student learning from the teacher. So that the teacher is totally focused on the student, can easily track progress and pay individual attention at all times. And the student can also feel free to learn at a pace suitable to them and ask their doubts freely."
    },
    {
      question: "Are the classes offline or online?",
      answer: "The classes are conducted entirely online through our interactive live platform. This allows students to learn from the comfort and safety of their homes, eliminating travel time while retaining all the benefits of personal face-to-face tutoring."
    },
    {
      question: "Are the classes Live?",
      answer: "The classes are live and according to a decided schedule which is convenient for the student. This is not at all a recorded class, but totally live with the teacher teaching the student just as a normal home tuition."
    },
    {
      question: "How is different from other online live classes?",
      answer: "Here the video and audio of students are always on. So there is no scope of student missing out on learning at any time. Also since there is only one student in front of the teacher, so there is no lagging behind or shyness in asking doubts. Also the teacher gives homework and checks homework in each class before teaching new concepts."


    },
    {
      question: "What is the profile and qualification of the teachers?",
      answer: "All the teachers are IITians/Doctors/NITians/Experts with 5-10 years of experience in teaching for IIT JEE and NEET exams. Most importantly, we also ensure that the teachers are empathetic enough to be able to connect to each student at an individual level and maintain a professional but effective rapport with the students. They become virtual parents of the students with respect to academics."
    },
    {
      question: "Will you also give study material?",
      answer: "Yes, we will provide the study material relevant for the exam. However, we mostly provide softcopy study material, practice material, tests and some critical recorded videos. We try to avoid hardcopy material as much as possible in line with our ethos of Online learning. However, where absolutely needed we will provide relevant hardcopy books and also suggest to purchase any extra books as per need.."
    },
     {
      question: "How will you ensure the syllabus gets completed?",
      answer: "We have a clear mechanism where the teacher and student both fill the concepts/topics covered in each session, so as to keep track of the progress and remaining chapters. Also a chief mentor is appointed for each student whose work is to call the students and keep track of the progress and any issues. And try to resolve issues as fast as possible."
    },
     {
      question: "How do you  ensure quality of teaching consistency?",
      answer: "We follow a multi-tiered process to ensure high quality and consistent teaching standards for each student. It starts with ensuring that qualified, experienced and empathetic teachers are only selected. Then we have an extensive training for each of our teachers. Then we ensure we talk to each student in detail and understand their learning styles and pair them with teachers who will be most effective with such students. Finally we have a chief mentor assigned to each student who is always in touch with the student to ensure they are loving the classes and actually learning the concepts and are able to apply those while solving questions. We believe in getting students to study, and not just teaching them and leave."
    },
     {
      question: "How willyou take mock tests and. give All India Rank?",
      answer: "We take our own mock tests for the students. And our mocks are exactly aligned to the actual exam, since we don’t want to teach the students unnecessarily tough concepts like many prominent coaching centers which break the confidence of the students. We believe in positive reinforcement and encouragement to do well, and we practice is thoroughly."
    },
     {
      question: "Where are the batches startings?",
      answer: "Every month we try to start new batches. Also if you are looking for Customized courses in 1:1 mode then we can start as soon as you want. We would love to understand your specific timings, so kindly reach out to know more."
    },
     {
      question: "Can I talk to a teacher before enrolling the student?",
      answer: "Yes. We in fact insist that we arrange a Zoom call for the parent and student with our Chief Academic Officer, who is an IITian and been teaching for JEE for more than 10 years himself."
    },
     {
      question: "Can I get a. demo class before enrolling in the. course?",
      answer: "Yes. We can arrange a demo class if you feel the need for it. Trust us when you say, it will be tough for you to move away from us once you have attended a demo class. The one to one sessions are intense but very effective and fulfilling."
    },
     {
      question: "why should i not join an old known institute but join PracBee?",
      answer: "You join an institute to learn. And get an excellent score and rank in the target exam. PracBee helps you do exactly that. Through first of its kind one to one coaching for high intensity exams like IIT JEE. If you want to crack the exam, PracBee should be your ideal partner and not an institute which does not focus on every student, but tries to create only a few toppers."
    },
     {
      question: "How do i pay for the course?",
      answer: "You can pay for the course through all these methods - On our website through Net Banking or debit/credit cards. Or you can also transfer the amount directly in PracBee account, for which we can send you the account details."
    },

     {
      question: "When will my classes start?",
      answer: "Your classes will start as soon as you are ready. Since there is no batch but only you, so there is no delay in starting as early as possible towards your goal."
    },

  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* FAQ Container - Fixed height to show 5 items, scroll for the 6th */}
          <div className="w-full max-h-[460px] overflow-y-auto pr-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-200">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="rounded-lg overflow-hidden border border-gray-100 shadow-sm transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className={`flex justify-between items-center w-full p-4 text-left font-semibold text-[16px] transition-colors duration-200 ${
                      isOpen ? "bg-[rgb(240,249,238)] text-gray-900" : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ease-in-out ${
                        isOpen ? "transform rotate-180 text-gray-900" : ""
                      }`}
                    />
                  </button>

                  <div 
                    className={`grid transition-all duration-200 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 text-base leading-relaxed text-gray-700 bg-white border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Info (Right Side) */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Have questions? We're here to help! Reach out to us via WhatsApp
              or send us a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">WhatsApp Support</h4>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                    Chat with us directly
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Email Support</h4>
                  <p className="text-gray-600">support@goodguiders.in</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Response Time</h4>
                  <p className="text-gray-600">Within 2 hours</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}