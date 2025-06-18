import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ExternalLink, Star } from "lucide-react";
import TemplateCard from "../components/TemplateCard";

interface Template {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  gumroadLink: string;
  category: string;
  rating: number;
  downloads: number;
}

const Store = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Load templates from localStorage
    const savedTemplates = localStorage.getItem("tempHubTemplates");
    if (savedTemplates) {
      setTemplates(JSON.parse(savedTemplates));
    } else {
      // Remove sample templates - user will upload their own
      setTemplates([]);
      localStorage.setItem("tempHubTemplates", JSON.stringify([]));
    }
  }, []);

  const categories = ["All", "Dashboard", "Landing Page", "Portfolio", "E-commerce", "Blog"];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Link to="/store" className="text-purple-300 font-medium">
                Store
              </Link>
              <Link to="/about" className="text-white hover:text-purple-300 transition-colors">
                About
              </Link>
              <Link to="/upload" className="text-white hover:text-purple-300 transition-colors">
                Upload
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Template Store</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover premium templates crafted by professionals for developers like you.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500"
                      : "border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No templates available yet. Upload your first template to get started!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Store;
