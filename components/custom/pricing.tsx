import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
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
  return (
    <div>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-indigo-500" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-slate-900">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-600">{plan.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-slate-700"
                      >
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                    } transition-all duration-300`}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
