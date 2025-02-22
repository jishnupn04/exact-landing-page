"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "Testimonials", id: "testimonials" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="flex h-16 items-center px-4 min-w-screen mx-auto justify-between">
        <div className="mr-8">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
            EXACT
          </span>
        </div>
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
