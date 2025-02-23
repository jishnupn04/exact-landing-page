import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const testimonial = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      role: "Department Head, Stanford University",
      image: "/api/placeholder/100/100",
      quote:
        "This tool has revolutionized how we prepare exam papers. The LaTeX integration is flawless.",
    },
    {
      name: "Prof. James Chen",
      role: "Mathematics Professor, MIT",
      image: "/api/placeholder/100/100",
      quote:
        "The question bank feature saves us countless hours. It's an essential tool for our department.",
    },
    {
      name: "Dr. Emily Brown",
      role: "Principal, Berkeley High School",
      image: "/api/placeholder/100/100",
      quote:
        "The ease of use and professional output has made this our go-to solution for all assessments.",
    },
  ];

  return (
    <div>
      <section className="py-20 px-4 bg-slate-50 testimonial">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full ring-2 ring-indigo-100"
                    />
                    <div>
                      <CardTitle className="text-lg text-slate-900">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 italic">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default testimonial;
