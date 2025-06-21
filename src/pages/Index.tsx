import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, Brain, Cpu, Sparkles, Bot, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: "Lovable.dev Ready",
      description: "Structured prompts optimized for Lovable's AI editor"
    },
    {
      icon: <Bot className="w-8 h-8 text-blue-400" />,
      title: "Cursor Compatible",
      description: "Advanced prompts designed for Cursor AI coding"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Replit Optimized",
      description: "Instant deployment prompts for Replit's environment"
    },
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />,
      title: "Vibe-Coding Focus",
      description: "Natural language prompts that understand your intent"
    }
  ];

  const tools = [
    {
      name: "Lovable.dev",
      description: "AI-powered web app builder",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Cursor",
      description: "AI-first code editor",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Replit",
      description: "Collaborative coding platform",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const MobileMenu = () => (
    <div className="flex flex-col space-y-6 p-6">
      <Link 
        to="/store" 
        className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Prompts
      </Link>
      <Link 
        to="/about" 
        className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About
      </Link>
      <Link 
        to="/upload" 
        className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Submit
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mr-2" />
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ocean of Prompts
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/store" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
                Prompts
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
                About
              </Link>
              <Link to="/upload" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
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
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
                  >
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[280px] bg-slate-950/95 backdrop-blur-xl border-l border-cyan-500/20"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <Sparkles className="w-6 h-6 text-cyan-400 mr-2" />
                      <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
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
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <Cpu className="relative w-20 h-20 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Ocean of
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Prompts
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Dive into a curated collection of AI prompts designed for modern development tools. 
              Structured, tested, and optimized for <span className="text-cyan-400 font-semibold">Lovable.dev</span>, 
              <span className="text-blue-400 font-semibold"> Cursor</span>, and 
              <span className="text-emerald-400 font-semibold"> Replit</span>.
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
                className="px-10 py-4 text-lg font-semibold border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Tools Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Optimized for Leading AI Tools</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our prompts are specifically crafted for the most advanced AI-powered development platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-500 blur-xl" 
                     style={{background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`}}></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${tool.color} mb-6 flex items-center justify-center`}>
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{tool.name}</h3>
                  <p className="text-gray-300 text-lg">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Ocean of Prompts?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Every prompt is tested, structured, and optimized for maximum effectiveness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-400/20">
              <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Level Up Your AI Development?</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Join thousands of developers using structured prompts to build better applications faster.
              </p>
              <Link to="/store">
                <Button size="lg" className="px-10 py-4 text-lg font-semibold">
                  Dive Into Prompts
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-cyan-400 mr-2" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ocean of Prompts
            </h3>
          </div>
          <p className="text-gray-400">
            © 2024 Ocean of Prompts. Empowering AI-driven development.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
