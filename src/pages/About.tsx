
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Brain, Zap, Bot, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-First Approach",
      description: "Prompts designed specifically for AI-powered development tools"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Tool-Specific",
      description: "Optimized for Lovable.dev, Cursor, Replit, and more"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
      title: "Vibe-Coding Ready",
      description: "Natural language prompts that capture your intent"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      title: "Community Driven",
      description: "Built by developers, for developers"
    }
  ];

  const supportedTools = [
    {
      name: "Lovable.dev",
      description: "AI-powered web application builder with real-time preview",
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      features: ["React components", "Tailwind styling", "Real-time editing"]
    },
    {
      name: "Cursor",
      description: "AI-first code editor with advanced completion",
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      features: ["Code completion", "Refactoring", "Bug fixing"]
    },
    {
      name: "Replit",
      description: "Collaborative coding platform with instant deployment",
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      features: ["Live collaboration", "Instant deployment", "Multiple languages"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <Sparkles className="w-8 h-8 text-cyan-400 mr-2" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ocean of Prompts
              </h1>
            </Link>
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
                Home
              </Link>
              <Link to="/store" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
                Prompts
              </Link>
              <Link to="/about" className="text-cyan-400 font-semibold">
                About
              </Link>
              <Link to="/upload" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
                Submit
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Brain className="relative w-20 h-20 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            About
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ocean of Prompts
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We're revolutionizing AI-powered development by providing structured, 
            tested prompts that help developers build better applications faster 
            with modern no-code and low-code tools.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                The future of development is AI-powered, and we believe every developer 
                should have access to high-quality prompts that unlock the full potential 
                of these revolutionary tools.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Ocean of Prompts bridges the gap between human creativity and AI capability, 
                providing structured prompts that help you communicate your vision effectively 
                to AI development tools.
              </p>
              <Link to="/store">
                <Button size="lg" className="px-8 py-3">
                  Explore Prompts
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-semibold text-white mb-6">What We Provide</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <Bot className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  Tool-specific AI prompts
                </li>
                <li className="flex items-center">
                  <Code2 className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  Structured development workflows
                </li>
                <li className="flex items-center">
                  <Brain className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  Vibe-coding optimized prompts
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  Rapid prototyping templates
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  Community-tested solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Tools */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Supported AI Development Tools</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our prompts are specifically crafted and tested for the leading AI-powered development platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supportedTools.map((tool, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{tool.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{tool.description}</p>
                <div className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Ocean of Prompts?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We understand the nuances of AI-powered development and create prompts that deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
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
              <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Development?</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Join the future of AI-powered development with our curated collection of structured prompts.
              </p>
              <Link to="/store">
                <Button size="lg" className="px-10 py-4 text-lg font-semibold">
                  Start Building
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

export default About;
