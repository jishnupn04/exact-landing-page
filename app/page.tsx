"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { TextEffect } from "@/components/ui/text-effect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  CheckCircle,
  FileText,
  Users,
  Zap,
  ChevronRight,
  Github,
  Linkedin,
  Check,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HeroSection from "@/components/custom/hero";
import FeaturesSection from "@/components/custom/features";
import PricingSection from "@/components/custom/pricing";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Navigation items
  const navItems = [
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "Testimonials", id: "testimonials" },
  ];
  const features = [
    {
      title: "LaTeX Integration",
      description:
        "Seamlessly create professional mathematical equations and formulas with built-in LaTeX support",
      icon: <FileText className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "Smart Question Bank",
      description:
        "Maintain and organize your question repository with intelligent categorization",
      icon: <Zap className="h-8 w-8 text-rose-500" />,
    },
    {
      title: "Multiple Templates",
      description:
        "Choose from various pre-designed templates or create custom layouts",
      icon: <CheckCircle className="h-8 w-8 text-emerald-500" />,
    },
  ];
  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      duration: "/month",
      description: "Perfect for small institutions",
      features: [
        "Up to 100 questions/month",
        "5 templates",
        "Basic LaTeX support",
        "Email support",
        "1 admin user",
      ],
    },
    {
      name: "Professional",
      price: "$99",
      duration: "/month",
      description: "Ideal for growing institutions",
      features: [
        "Unlimited questions",
        "20 templates",
        "Advanced LaTeX support",
        "Priority support",
        "5 admin users",
        "Custom branding",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "",
      description: "For large institutions",
      features: [
        "Unlimited everything",
        "Custom templates",
        "Full LaTeX support",
        "24/7 support",
        "Unlimited users",
        "API access",
        "Custom integration",
      ],
    },
  ];

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
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="flex h-16 items-center px-4 min-w-screen mx-auto justify-between">
          {/* Logo */}
          <div className="mr-8">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
              EXACT
            </span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex items-center space-x-6 flex-1">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <Button
                    variant="ghost"
                    className="text-slate-600 hover:text-indigo-600"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-slate-200">
                  Request Demo
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule a Demo</DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-slate-600">
                  Contact us at{" "}
                  <a href="mailto:demo@example.com" className="underline">
                    demo@example.com
                  </a>{" "}
                  to schedule your demo.
                </DialogDescription>
              </DialogContent>
            </Dialog>

            <Button className="bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex flex-1 justify-end">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start text-lg"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.name}
                    </Button>
                  ))}
                  <hr className="my-4" />
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Request Demo
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-600 to-rose-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-50">
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
                    <img
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <Card className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-50 to-rose-50 border-none">
          <CardContent className="pt-12 pb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              Ready to Streamline Your Exam Preparation?
            </h2>
            <p className="mb-8 text-slate-600">
              Join hundreds of educational institutions already using our
              platform
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-600">
            © 2025 Question Paper Generator. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-slate-600 hover:text-indigo-600 transition-colors duration-300"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-indigo-600 transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-indigo-600 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
