
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Code2, Bot, Zap, Brain, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  instructions: string;
}

const Store = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTool, setSelectedTool] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load prompts from localStorage
    const storedPrompts = localStorage.getItem("oceanPrompts");
    if (storedPrompts) {
      setPrompts(JSON.parse(storedPrompts));
    }
  }, []);

  const categories = ["All", "Web Apps", "Landing Pages", "Dashboards", "SaaS", "UI Templates", "Full Stack"];
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
        return <div className="w-4 h-4 bg-orange-500 rounded-full" />;
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

  const MobileMenu = () => (
    <div className="flex flex-col space-y-6 p-6">
      <Link 
        to="/" 
        className="text-lg font-medium text-slate-600 hover:text-orange-500 transition-all duration-300"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Home
      </Link>
      <Link 
        to="/store" 
        className="text-lg font-medium text-orange-500"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Prompts
      </Link>
      <Link 
        to="/about" 
        className="text-lg font-medium text-slate-600 hover:text-orange-500 transition-all duration-300"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-sky-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
                alt="Ocean of Prompts Logo" 
                className="w-6 h-6 sm:w-8 sm:h-8 mr-2 rounded-full"
              />
              <h1 className="text-lg sm:text-2xl font-bold text-slate-800">
                Ocean of Prompts
              </h1>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-600 hover:text-orange-500 transition-all duration-300 font-medium">
                Home
              </Link>
              <Link to="/store" className="text-orange-500 font-semibold">
                Prompts
              </Link>
              <Link to="/about" className="text-slate-600 hover:text-orange-500 transition-all duration-300 font-medium">
                About
              </Link>
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
                  className="w-[280px] bg-white/95 backdrop-blur-xl border-l border-sky-200"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
                        alt="Ocean of Prompts Logo" 
                        className="w-6 h-6 mr-2 rounded-full"
                      />
                      <h2 className="text-lg font-bold text-slate-800">
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

      {/* Header */}
      <section className="pt-24 pb-8 sm:pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-blue-400/30 rounded-full blur-lg animate-pulse"></div>
                <img 
                  src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
                  alt="Ocean of Prompts Logo" 
                  className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-4">AI Prompt Store</h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Discover premium AI prompts crafted for modern development tools. Build faster, code smarter.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <div className="relative max-w-xl mx-auto px-4">
              <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search prompts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-10 sm:h-12 bg-white/60 border-sky-200 text-slate-800 placeholder-slate-400 text-base sm:text-lg backdrop-blur-sm"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Tool Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {tools.map((tool) => (
                <Button
                  key={tool}
                  variant={selectedTool === tool ? "default" : "outline"}
                  onClick={() => setSelectedTool(tool)}
                  className="transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                  size="sm"
                >
                  {getToolIcon(tool)}
                  <span className="ml-1 sm:ml-2">{tool}</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPrompts.map((prompt) => (
                <TemplateCard key={prompt.id} template={prompt} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-20 px-4">
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-full blur-xl"></div>
                <div className="relative w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-gradient-to-r from-orange-100 to-blue-100 rounded-full flex items-center justify-center border border-orange-200">
                  <Code2 className="w-8 h-8 sm:w-12 sm:h-12 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">No Prompts Available Yet</h3>
              <p className="text-slate-600 mb-6">Check back soon for new AI prompts!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Store;
