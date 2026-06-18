// // import { Card, CardContent } from "@/components/ui/card";

// // const testimonials = [
// //   {
// //     name: "Rahul Sharma",
// //     role: "Class 12, Science Stream",
// //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
// //     content: "Good Guiders helped me choose the right engineering stream and prepare for JEE. I scored 98.2 percentile thanks to their mentorship!",
// //     rating: 5
// //   },
// //   {
// //     name: "Priya Patel",
// //     role: "Commerce Graduate",
// //     image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
// //     content: "The career counseling session opened my eyes to opportunities I never knew existed. Now I'm pursuing my dream job in finance!",
// //     rating: 5
// //   },
// //   {
// //     name: "Arjun Kumar",
// //     role: "Study Abroad Student",
// //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
// //     content: "Got into my dream university in Canada! The study abroad guidance was comprehensive and made the entire process smooth.",
// //     rating: 5
// //   }
// // ];

// // export function Testimonials() {
// //   return (
// //     <section className="py-20 bg-[rgb(205,237,202)]">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories from Our Students</h2>
// //           <p className="text-xl text-gray-700">See how our mentorship has transformed student careers</p>
// //         </div>
        
// //         <div className="grid md:grid-cols-3 gap-8">
// //           {testimonials.map((testimonial, index) => (
// //             <Card key={index} className="bg-white shadow-lg">
// //               <CardContent className="p-8">
// //                 <div className="flex items-center mb-6">
// //                   <img 
// //                     src={testimonial.image} 
// //                     alt={`Student testimonial - ${testimonial.name}`} 
// //                     className="w-16 h-16 rounded-full object-cover"
// //                   />
// //                   <div className="ml-4">
// //                     <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
// //                     <p className="text-gray-600 text-sm">{testimonial.role}</p>
// //                   </div>
// //                 </div>
// //                 <p className="text-gray-700 italic mb-4">
// //                   "{testimonial.content}"
// //                 </p>
// //                 <div className="flex text-yellow-400">
// //                   <span>⭐⭐⭐⭐⭐</span>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import { Card, CardContent } from "@/components/ui/card";

// const testimonials = [
//   {
//     name: "Rahul Sharma",
//     role: "Class 12, Science Stream",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
//     content: "Good Guiders helped me choose the right engineering stream and prepare for JEE. I scored 98.2 percentile thanks to their mentorship!",
//     rating: 5
//   },
//   {
//     name: "Priya Patel",
//     role: "Commerce Graduate",
//     image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
//     content: "The career counseling session opened my eyes to opportunities I never knew existed. Now I'm pursuing my dream job in finance!",
//     rating: 5
//   },
//   {
//     name: "Arjun Kumar",
//     role: "Study Abroad Student",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
//     content: "Got into my dream university in Canada! The study abroad guidance was comprehensive and made the entire process smooth.",
//     rating: 5
//   },
//   {
//     name: "Sneha Reddy",
//     role: "Class 10 Student",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
//     content: "Amazing guidance for stream selection! The mentors helped me understand my strengths and clear all my confusion.",
//     rating: 5
//   },
//   {
//     name: "Amit Verma",
//     role: "NEET Aspirant",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
//     content: "The personalized study plan and regular doubt-clearing sessions gave me the confidence to crack my medical exams.",
//     rating: 5
//   }
// ];

// export function Testimonials() {
//   return (
//     <section className="py-20 bg-[rgb(205,237,202)]">
//       {/* max-w-[95rem] ka use kiya hai taaki full width cover ho */}
//       <div className="max-w-[95rem] mx-auto px-2 sm:px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories from Our Students</h2>
//           <p className="text-xl text-gray-700">See how our mentorship has transformed student careers</p>
//         </div>
        
//         {/* gap-3 aur grid-cols-5 ka combination horizontal space fill karega */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
//           {testimonials.map((testimonial, index) => (
//             <Card key={index} className="bg-white shadow-md flex flex-col justify-between">
//               <CardContent className="p-4 flex flex-col h-full justify-between">
//                 <div>
//                   <div className="flex flex-col items-center text-center mb-3">
//                     <img 
//                       src={testimonial.image} 
//                       alt={`Student testimonial - ${testimonial.name}`} 
//                       className="w-14 h-14 rounded-full object-cover mb-2"
//                     />
//                     <div>
//                       <h4 className="font-semibold text-gray-900 text-sm leading-tight">{testimonial.name}</h4>
//                       <p className="text-gray-500 text-xs mt-0.5">{testimonial.role}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 italic text-[13px] mb-4 line-clamp-5">
//                     "{testimonial.content}"
//                   </p>
//                 </div>
//                 <div className="flex text-yellow-400 justify-center text-xs mt-auto">
//                   <span>⭐⭐⭐⭐⭐</span>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Class 12, Science Stream",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "Good Guiders helped me choose the right engineering stream and prepare for JEE. I scored 98.2 percentile thanks to their mentorship!",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Commerce Graduate",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "The career counseling session opened my eyes to opportunities I never knew existed. Now I'm pursuing my dream job in finance!",
    rating: 5
  },
  {
    name: "Arjun Kumar",
    role: "Study Abroad Student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "Got into my dream university in Canada! The study abroad guidance was comprehensive and made the entire process smooth.",
    rating: 5
  },
  {
    name: "Sneha Reddy",
    role: "Class 10 Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "Amazing guidance for stream selection! The mentors helped me understand my strengths and clear all my confusion.",
    rating: 5
  },
  {
    name: "Amit Verma",
    role: "NEET Aspirant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "The personalized study plan and regular doubt-clearing sessions gave me the confidence to crack my medical exams.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-[rgb(205,237,202)]">
      {/* max-w-none ka use kiya hai taaki screen ki full width cover ho */}
      <div className="w-full px-2 sm:px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories from Our Students</h2>
          <p className="text-xl text-gray-700">See how our mentorship has transformed student careers</p>
        </div>
        
        {/* grid-cols-5 maintain rakha hai, gap-2 se space aur kam ho gaya hai */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md flex flex-col justify-between">
              <CardContent className="p-3 flex flex-col h-full justify-between">
                <div>
                  <div className="flex flex-col items-center text-center mb-3">
                    <img 
                      src={testimonial.image} 
                      alt={`Student testimonial - ${testimonial.name}`} 
                      className="w-12 h-12 rounded-full object-cover mb-2"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight">{testimonial.name}</h4>
                      <p className="text-gray-500 text-[10px] mt-0.5">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-[12px] mb-3 text-center line-clamp-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex text-yellow-400 justify-center text-xs mt-auto">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}