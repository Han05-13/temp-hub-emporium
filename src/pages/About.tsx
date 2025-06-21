
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Brain, Zap, Bot, Target, Users, Lightbulb, Menu, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "AI-First Approach",
      description: "Prompts designed specifically for AI-powered development tools"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Tool-Specific",
      description: "Optimized for Lovable.dev, Cursor, Replit, and more"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Vibe-Coding Ready",
      description: "Natural language prompts that capture your intent"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Community Driven",
      description: "Built by developers, for developers"
    }
  ];

  const supportedTools = [
    {
      name: "Lovable.dev",
      description: "AI-powered web application builder with real-time preview",
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      features: ["React components", "Tailwind styling", "Real-time editing"]
    },
    {
      name: "Cursor",
      description: "AI-first code editor with advanced completion",
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      features: ["Code completion", "Refactoring", "Bug fixing"]
    },
    {
      name: "Replit",
      description: "Collaborative coding platform with instant deployment",
      icon: <Zap className="w-8 h-8 text-green-500" />,
      features: ["Live collaboration", "Instant deployment", "Multiple languages"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
                alt="Ocean of Prompts Logo" 
                className="w-6 h-6 sm:w-8 sm:h-8 mr-2 rounded-full"
              />
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
                Ocean of Prompts
              </h1>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                Home
              </Link>
              <Link to="/store" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                Prompts
              </Link>
              <Link to="/about" className="text-orange-500 font-semibold">
                About
              </Link>
              <Link to="/upload" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                Submit
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
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
                  <div className="flex flex-col space-y-6 p-6">
                    <Link 
                      to="/" 
                      className="text-lg font-medium text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      Home
                    </Link>
                    <Link 
                      to="/store" 
                      className="text-lg font-medium text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      Prompts
                    </Link>
                    <Link 
                      to="/about" 
                      className="text-lg font-medium text-orange-500"
                    >
                      About
                    </Link>
                    <Link 
                      to="/upload" 
                      className="text-lg font-medium text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      Submit
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img 
              src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
              alt="Ocean of Prompts Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            About
            <span className="block bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Ocean of Prompts
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
            We're revolutionizing AI-powered development by providing structured, 
            tested prompts that help developers build better applications faster 
            with modern no-code and low-code tools.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                The future of development is AI-powered, and we believe every developer 
                should have access to high-quality prompts that unlock the full potential 
                of these revolutionary tools.
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Ocean of Prompts bridges the gap between human creativity and AI capability, 
                providing structured prompts that help you communicate your vision effectively 
                to AI development tools.
              </p>
              <Link to="/store">
                <Button size="lg" className="px-6 sm:px-8 py-2 sm:py-3">
                  Explore Prompts
                  <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">What We Provide</h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-600">
                <li className="flex items-center">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-3 flex-shrink-0" />
                  Tool-specific AI prompts
                </li>
                <li className="flex items-center">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-3 flex-shrink-0" />
                  Structured development workflows
                </li>
                <li className="flex items-center">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-3 flex-shrink-0" />
                  Vibe-coding optimized prompts
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-3 flex-shrink-0" />
                  Rapid prototyping templates
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-3 flex-shrink-0" />
                  Community-tested solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Tools */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Supported AI Development Tools</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Our prompts are specifically crafted and tested for the leading AI-powered development platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {supportedTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 sm:mb-6">{tool.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{tool.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{tool.description}</p>
                <div className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm sm:text-base text-gray-500">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Ocean of Prompts?</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              We understand the nuances of AI-powered development and create prompts that deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 sm:mb-6">{highlight.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{highlight.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Transform Your Development?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed opacity-90 px-4">
              Join the future of AI-powered development with our curated collection of structured prompts.
            </p>
            <Link to="/store">
              <Button size="lg" variant="secondary" className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold">
                Start Building
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 sm:py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <img 
              src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
              alt="Ocean of Prompts Logo" 
              className="w-5 h-5 sm:w-6 sm:h-6 mr-2 rounded-full"
            />
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
              Ocean of Prompts
            </h3>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            © 2024 Ocean of Prompts. Empowering AI-driven development.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
