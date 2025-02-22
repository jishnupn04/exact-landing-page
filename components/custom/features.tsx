import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Zap, CheckCircle } from "lucide-react";

const features = [
  {
    title: "LaTeX Integration",
    description: "Seamlessly create mathematical equations with LaTeX support.",
    icon: <FileText className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "Smart Question Bank",
    description: "Maintain and organize your question repository efficiently.",
    icon: <Zap className="h-8 w-8 text-rose-500" />,
  },
  {
    title: "Multiple Templates",
    description: "Choose from pre-designed templates or create custom layouts.",
    icon: <CheckCircle className="h-8 w-8 text-emerald-500" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-50" id="features">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-slate-100 shadow-lg">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
