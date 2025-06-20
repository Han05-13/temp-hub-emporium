
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Zap, TrendingUp } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: "Premium Quality",
      description: "Hand-crafted templates with attention to detail"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Community Driven",
      description: "Templates loved by thousands of developers"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Lightning Fast",
      description: "Optimized templates for peak performance"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Always Updated",
      description: "Regular updates with latest technologies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                TempHub
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/store" className="text-white hover:text-purple-300 transition-colors">
                Store
              </Link>
              <Link to="/about" className="text-white hover:text-purple-300 transition-colors">
                About
              </Link>
              <Link to="/upload" className="text-white hover:text-purple-300 transition-colors">
                Upload
              </Link>
              <Button>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Premium Templates
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                For Developers
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover professionally crafted templates that save you time and help you build amazing projects faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/store">
                <Button size="lg" className="px-8 py-4 text-lg">
                  Browse Templates
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose TempHub?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We provide the highest quality templates with exceptional support and regular updates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of developers who trust TempHub for their template needs.
            </p>
            <Link to="/store">
              <Button size="lg" className="px-8 py-4 text-lg">
                Explore Templates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            TempHub
          </h3>
          <p className="text-gray-400">
            © 2024 TempHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
