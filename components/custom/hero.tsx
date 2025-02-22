import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 text-left min-h-screen flex justify-start items-center bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-3xl mx-auto">
        <TextEffect
          per="char"
          as="h3"
          preset="slide"
          className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text"
        >
          Generate Perfect Question Papers in Minutes
        </TextEffect>
        <p className="mt-4 text-xl text-slate-600">
          Streamline your exam preparation process with our intelligent
          question paper generator.
        </p>
        <div className="mt-8 flex flex-wrap justify-start gap-4">
          <Button className="bg-gradient-to-r from-indigo-600 to-rose-600 text-white">
            Request Demo
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-slate-200">
            View Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
