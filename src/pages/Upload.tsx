
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload as UploadIcon, Image, Link as LinkIcon, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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

const Upload = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    gumroadLink: "",
    category: ""
  });

  const categories = ["Dashboard", "Landing Page", "Portfolio", "E-commerce", "Blog", "Mobile App"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title || !formData.description || !formData.price || !formData.image || !formData.gumroadLink || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Create new template
    const newTemplate: Template = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      price: formData.price.startsWith('$') ? formData.price : `$${formData.price}`,
      image: formData.image,
      gumroadLink: formData.gumroadLink,
      category: formData.category,
      rating: 4.5,
      downloads: 0
    };

    // Save to localStorage
    const existingTemplates = localStorage.getItem("tempHubTemplates");
    const templates = existingTemplates ? JSON.parse(existingTemplates) : [];
    templates.push(newTemplate);
    localStorage.setItem("tempHubTemplates", JSON.stringify(templates));

    toast({
      title: "Success!",
      description: "Template uploaded successfully"
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      price: "",
      image: "",
      gumroadLink: "",
      category: ""
    });

    // Navigate to store after a brief delay
    setTimeout(() => {
      navigate("/store");
    }, 1500);
  };

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
              <Link to="/about" className="text-white hover:text-purple-300 transition-colors">
                About
              </Link>
              <Link to="/upload" className="text-purple-300 font-medium">
                Upload
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Upload Form */}
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Upload Template</h1>
            <p className="text-gray-300 text-lg">
              Share your amazing templates with the community
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <UploadIcon className="w-6 h-6" />
                Template Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Template Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter template title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your template..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-white">
                      Price
                    </Label>
                    <Input
                      id="price"
                      placeholder="29"
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-white">
                      Category
                    </Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="text-white hover:bg-white/10">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image" className="text-white flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    Image URL
                  </Label>
                  <Input
                    id="image"
                    placeholder="https://example.com/image.jpg"
                    value={formData.image}
                    onChange={(e) => handleInputChange("image", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                  {formData.image && (
                    <div className="mt-4 rounded-lg overflow-hidden">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gumroadLink" className="text-white flex items-center gap-2">
                    <LinkIcon className="w-4 h-4" />
                    Gumroad Link
                  </Label>
                  <Input
                    id="gumroadLink"
                    placeholder="https://gumroad.com/l/your-template"
                    value={formData.gumroadLink}
                    onChange={(e) => handleInputChange("gumroadLink", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  size="lg"
                >
                  Upload Template
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Upload;
