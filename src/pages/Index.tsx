
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, Brain, Cpu, Bot, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-orange-500" />,
      title: "Lovable.dev Ready",
      description: "Structured prompts optimized for Lovable's AI editor"
    },
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: "Cursor Compatible",
      description: "Advanced prompts designed for Cursor AI coding"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "Replit Optimized",
      description: "Instant deployment prompts for Replit's environment"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Vibe-Coding Focus",
      description: "Natural language prompts that understand your intent"
    }
  ];

  const tools = [
    {
      name: "Lovable.dev",
      description: "AI-powered web app builder",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Cursor",
      description: "AI-first code editor",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Replit",
      description: "Collaborative coding platform",
      color: "from-green-500 to-blue-500"
    }
  ];

  const MobileMenu = () => (
    <div className="flex flex-col space-y-6 p-6">
      <Link 
        to="/store" 
        className="text-lg font-medium text-gray-600 hover:text-orange-500 transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Prompts
      </Link>
      <Link 
        to="/about" 
        className="text-lg font-medium text-gray-600 hover:text-orange-500 transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About
      </Link>
      <Link 
        to="/upload" 
        className="text-lg font-medium text-gray-600 hover:text-orange-500 transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Submit
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
                alt="Ocean of Prompts Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 mr-3 rounded-full"
              />
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
                Ocean of Prompts
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/store" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                Prompts
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                About
              </Link>
              <Link to="/upload" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                Submit
              </Link>
              <Button size="sm" className="px-6">
                Get Started
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-orange-500 hover:text-orange-600 hover:bg-orange-50"
                  >
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[280px] bg-white/95 backdrop-blur-sm border-l border-gray-200"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
                        alt="Ocean of Prompts Logo" 
                        className="w-6 h-6 mr-2 rounded-full"
                      />
                      <h2 className="text-lg font-bold text-gray-900">
                        Menu
                      </h2>
                    </div>
                  </div>
                  <MobileMenu />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
                alt="Ocean of Prompts Logo" 
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
              Ocean of
              <span className="block bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Prompts
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Dive into a curated collection of AI prompts designed for modern development tools. 
              Structured, tested, and optimized for <span className="text-orange-500 font-semibold">Lovable.dev</span>, 
              <span className="text-blue-500 font-semibold"> Cursor</span>, and 
              <span className="text-green-500 font-semibold"> Replit</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/store">
                <Button size="lg" className="px-10 py-4 text-lg font-semibold">
                  Explore Prompts
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-10 py-4 text-lg font-semibold"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Tools Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Optimized for Leading AI Tools</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our prompts are specifically crafted for the most advanced AI-powered development platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${tool.color} mb-6 flex items-center justify-center`}>
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                <p className="text-gray-600 text-lg">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ocean of Prompts?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every prompt is tested, structured, and optimized for maximum effectiveness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl p-12 text-white">
            <Brain className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Level Up Your AI Development?</h2>
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              Join thousands of developers using structured prompts to build better applications faster.
            </p>
            <Link to="/store">
              <Button size="lg" variant="secondary" className="px-10 py-4 text-lg font-semibold">
                Dive Into Prompts
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
              alt="Ocean of Prompts Logo" 
              className="w-6 h-6 mr-2 rounded-full"
            />
            <h3 className="text-2xl font-bold text-gray-900">
              Ocean of Prompts
            </h3>
          </div>
          <p className="text-gray-500">
            © 2024 Ocean of Prompts. Empowering AI-driven development.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
