
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Developer-Focused",
      description: "Templates built by developers, for developers"
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-400" />,
      title: "Modern Design",
      description: "Contemporary designs that stand out"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: "Premium Quality",
      description: "Hand-crafted with attention to detail"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Ready to Use",
      description: "Get started immediately with our templates"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                TempHub
              </h1>
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-purple-300 transition-colors">
                Home
              </Link>
              <Link to="/store" className="text-white hover:text-purple-300 transition-colors">
                Store
              </Link>
              <Link to="/about" className="text-purple-300 font-medium">
                About
              </Link>
              <Link to="/upload" className="text-white hover:text-purple-300 transition-colors">
                Upload
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              TempHub
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            TempHub is your premium destination for high-quality web templates. 
            We specialize in creating modern, responsive, and developer-friendly templates 
            that help you build amazing projects faster and more efficiently.
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
                We believe that great design should be accessible to everyone. That's why we create 
                premium templates that combine beautiful aesthetics with clean, maintainable code.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Every template in our collection is carefully crafted to meet modern web standards, 
                ensuring you get the best possible foundation for your projects.
              </p>
              <Link to="/store">
                <Button size="lg">
                  Browse Templates
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">What We Offer</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  Premium quality templates
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  Modern, responsive designs
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  Clean, semantic code
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  Developer-friendly structure
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  Regular updates and support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose TempHub?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're passionate about creating templates that make your development process smoother and more enjoyable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
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
              Explore our collection of premium templates and find the perfect starting point for your next project.
            </p>
            <Link to="/store">
              <Button size="lg">
                Browse Store
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

export default About;
