
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, Code2, Bot, Zap, Brain } from "lucide-react";
import TemplateCard from "../components/TemplateCard";

interface Prompt {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  gumroadLink: string;
  category: string;
  rating: number;
  downloads: number;
  tool: string;
}

const Store = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTool, setSelectedTool] = useState("All");

  useEffect(() => {
    // Load prompts from localStorage
    const storedPrompts = localStorage.getItem("oceanPrompts");
    if (storedPrompts) {
      setPrompts(JSON.parse(storedPrompts));
    }
  }, []);

  const categories = ["All", "Web Apps", "Landing Pages", "Dashboards", "APIs", "Components", "Full Stack"];
  const tools = ["All", "Lovable.dev", "Cursor", "Replit", "GitHub Copilot"];

  const filteredPrompts = prompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || prompt.category === selectedCategory;
    const matchesTool = selectedTool === "All" || prompt.tool === selectedTool;
    return matchesSearch && matchesCategory && matchesTool;
  });

  const getToolIcon = (tool: string) => {
    switch(tool) {
      case "Lovable.dev":
        return <Sparkles className="w-4 h-4" />;
      case "Cursor":
        return <Code2 className="w-4 h-4" />;
      case "Replit":
        return <Zap className="w-4 h-4" />;
      case "GitHub Copilot":
        return <Bot className="w-4 h-4" />;
      default:
        return <Brain className="w-4 h-4" />;
    }
  };

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
              <Link to="/store" className="text-cyan-400 font-semibold">
                Prompts
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
                About
              </Link>
              <Link to="/upload" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
                Submit
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <Brain className="relative w-16 h-16 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">AI Prompt Store</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover premium AI prompts crafted for modern development tools. Build faster, code smarter.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-6 mb-8">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search prompts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg backdrop-blur-sm"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300 hover:scale-105"
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Tool Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <Button
                  key={tool}
                  variant={selectedTool === tool ? "default" : "outline"}
                  onClick={() => setSelectedTool(tool)}
                  className="transition-all duration-300 hover:scale-105"
                  size="sm"
                >
                  {getToolIcon(tool)}
                  <span className="ml-2">{tool}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prompts Grid or Empty State */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrompts.map((prompt) => (
                <TemplateCard key={prompt.id} template={prompt} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"></div>
                <div className="relative w-24 h-24 mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                  <Code2 className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Prompts Available Yet</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Store;
