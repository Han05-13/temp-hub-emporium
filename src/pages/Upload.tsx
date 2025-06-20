import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload as UploadIcon, Image, Link as LinkIcon, FileText, Sparkles, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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

const Upload = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    gumroadLink: "",
    category: "",
    tool: "",
    instructions: ""
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const categories = ["Web Apps", "Landing Pages", "Dashboards", "APIs", "Components", "Full Stack"];
  const tools = ["Lovable.dev", "Cursor", "Replit", "GitHub Copilot"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        setFormData(prev => ({
          ...prev,
          image: result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title || !formData.description || !formData.price || !formData.image || !formData.gumroadLink || !formData.category || !formData.tool || !formData.instructions) {
      toast({
        title: "Error",
        description: "Please fill in all fields including uploading an image",
        variant: "destructive"
      });
      return;
    }

    // Create new prompt
    const newPrompt: Prompt = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      price: formData.price.startsWith('$') ? formData.price : `$${formData.price}`,
      image: formData.image,
      gumroadLink: formData.gumroadLink,
      category: formData.category,
      tool: formData.tool,
      instructions: formData.instructions,
      rating: 4.5,
      downloads: 0
    };

    // Save to localStorage as JSON
    const existingPrompts = localStorage.getItem("oceanPrompts");
    const prompts = existingPrompts ? JSON.parse(existingPrompts) : [];
    prompts.push(newPrompt);
    localStorage.setItem("oceanPrompts", JSON.stringify(prompts));

    toast({
      title: "Success!",
      description: "Prompt uploaded successfully"
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      price: "",
      image: "",
      gumroadLink: "",
      category: "",
      tool: "",
      instructions: ""
    });
    setImageFile(null);
    setImagePreview("");

    // Navigate to store after a brief delay
    setTimeout(() => {
      navigate("/store");
    }, 1500);
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
              <Link to="/store" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
                Prompts
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
                About
              </Link>
              <Link to="/upload" className="text-cyan-400 font-semibold">
                Submit
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Upload Form */}
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Submit Prompt</h1>
            <p className="text-gray-300 text-lg">
              Add new AI prompts to the Ocean of Prompts collection
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <UploadIcon className="w-6 h-6" />
                Prompt Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Prompt Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter prompt title"
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
                    placeholder="Describe your prompt..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instructions" className="text-white flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Usage Instructions
                  </Label>
                  <Textarea
                    id="instructions"
                    placeholder="Provide detailed instructions on how to use this prompt effectively..."
                    value={formData.instructions}
                    onChange={(e) => handleInputChange("instructions", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[120px]"
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
                  <Label htmlFor="tool" className="text-white">
                    AI Tool
                  </Label>
                  <Select value={formData.tool} onValueChange={(value) => handleInputChange("tool", value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select AI tool" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-white/20">
                      {tools.map((tool) => (
                        <SelectItem key={tool} value={tool} className="text-white hover:bg-white/10">
                          {tool}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image" className="text-white flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    Upload Image
                  </Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="bg-white/10 border-white/20 text-white file:bg-cyan-500/20 file:text-cyan-300 file:border-0 file:rounded-md file:px-3 file:py-1"
                  />
                  {imagePreview && (
                    <div className="mt-4 rounded-lg overflow-hidden">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover"
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
                    placeholder="https://gumroad.com/l/your-prompt"
                    value={formData.gumroadLink}
                    onChange={(e) => handleInputChange("gumroadLink", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                  size="lg"
                >
                  Submit Prompt
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
