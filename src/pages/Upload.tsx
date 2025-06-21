import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload as UploadIcon, Menu, AlertCircle, FileText, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

interface PromptData {
  title: string;
  description: string;
  category: string;
  tool: string;
  price: string;
  gumroadLink: string;
  instructions: string;
  image: File | null;
}

const Upload = () => {
  const [email, setEmail] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const [promptData, setPromptData] = useState<PromptData>({
    title: "",
    description: "",
    category: "",
    tool: "",
    price: "",
    gumroadLink: "",
    instructions: "",
    image: null
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
    
    if (email === "hariharansuthan05@gmail.com") {
      setIsAuthorized(true);
      toast({
        title: "Access Granted",
        description: "Welcome! You can now submit prompts.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Sorry, you don't have permission to submit prompts.",
        variant: "destructive",
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPromptData(prev => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!promptData.title || !promptData.description || !promptData.category || !promptData.tool) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Get existing prompts from localStorage
    const existingPrompts = JSON.parse(localStorage.getItem("oceanPrompts") || "[]");
    
    // Create new prompt object
    const newPrompt = {
      id: Date.now().toString(),
      title: promptData.title,
      description: promptData.description,
      category: promptData.category,
      tool: promptData.tool,
      price: promptData.price || "Free",
      gumroadLink: promptData.gumroadLink || "",
      instructions: promptData.instructions,
      image: promptData.image ? URL.createObjectURL(promptData.image) : "/placeholder.svg",
      rating: 5.0,
      downloads: 0
    };

    // Add new prompt to existing prompts
    existingPrompts.push(newPrompt);
    
    // Save back to localStorage
    localStorage.setItem("oceanPrompts", JSON.stringify(existingPrompts));
    
    toast({
      title: "Prompt Submitted Successfully!",
      description: "Your prompt has been added to the store.",
    });

    // Reset form
    setPromptData({
      title: "",
      description: "",
      category: "",
      tool: "",
      price: "",
      gumroadLink: "",
      instructions: "",
      image: null
    });
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
        className="text-lg font-medium text-slate-600 hover:text-orange-500 transition-all duration-300"
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
              <Link to="/store" className="text-slate-600 hover:text-orange-500 transition-all duration-300 font-medium">
                Prompts
              </Link>
              <Link to="/about" className="text-slate-600 hover:text-orange-500 transition-all duration-300 font-medium">
                About
              </Link>
              <Link to="/upload" className="text-orange-500 font-semibold">
                Submit
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

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {!isAuthorized ? (
            <Card className="bg-white/60 backdrop-blur-sm border-sky-200 shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
                    alt="Ocean of Prompts Logo" 
                    className="w-12 h-12"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800">Submit Your Prompt</CardTitle>
                <p className="text-slate-600">Please verify your email to continue</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-white/60 border-sky-200"
                      required
                    />
                  </div>
                  
                  {emailSubmitted && !isAuthorized && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        Access denied. Only authorized users can submit prompts.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <Button type="submit" className="w-full">
                    Verify Email
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/lovable-uploads/deabc4bb-c9c6-4785-aa75-f1c6eb24df13.png" 
                    alt="Ocean of Prompts Logo" 
                    className="w-12 h-12"
                  />
                </div>
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Submit Your AI Prompt</h1>
                <p className="text-slate-600">Share your carefully crafted prompts with the community</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Instructions Section */}
                <div className="lg:col-span-1">
                  <Card className="bg-white/60 backdrop-blur-sm border-sky-200 shadow-lg sticky top-28">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg text-slate-800">
                        <FileText className="mr-2 h-5 w-5 text-orange-500" />
                        Submission Guidelines
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-slate-600">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Prompt Quality</h4>
                        <p>Ensure your prompt is well-tested and produces consistent, high-quality results.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Clear Instructions</h4>
                        <p>Provide detailed usage instructions including any specific requirements or parameters.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Preview Image</h4>
                        <p>Upload a representative image showing the expected output or interface of your prompt.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Tool Compatibility</h4>
                        <p>Specify which AI development tool your prompt is optimized for.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Form Section */}
                <div className="lg:col-span-2">
                  <Card className="bg-white/60 backdrop-blur-sm border-sky-200 shadow-lg">
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="title" className="text-slate-700">Prompt Title *</Label>
                            <Input
                              id="title"
                              value={promptData.title}
                              onChange={(e) => setPromptData(prev => ({ ...prev, title: e.target.value }))}
                              placeholder="e.g., Modern Dashboard Generator"
                              className="bg-white/60 border-sky-200"
                              required
                            />
                          </div>

                          <div>
                            <Label htmlFor="category" className="text-slate-700">Category *</Label>
                            <Select value={promptData.category} onValueChange={(value) => setPromptData(prev => ({ ...prev, category: value }))}>
                              <SelectTrigger className="bg-white/60 border-sky-200">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Web Apps">Web Apps</SelectItem>
                                <SelectItem value="Landing Pages">Landing Pages</SelectItem>
                                <SelectItem value="Dashboards">Dashboards</SelectItem>
                                <SelectItem value="SaaS">SaaS</SelectItem>
                                <SelectItem value="UI Templates">UI Templates</SelectItem>
                                <SelectItem value="Full Stack">Full Stack</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="description" className="text-slate-700">Description *</Label>
                          <Textarea
                            id="description"
                            value={promptData.description}
                            onChange={(e) => setPromptData(prev => ({ ...prev, description: e.target.value }))}
                            placeholder="Describe what your prompt does and what it creates..."
                            className="bg-white/60 border-sky-200 min-h-[100px]"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="instructions" className="text-slate-700">Usage Instructions *</Label>
                          <Textarea
                            id="instructions"
                            value={promptData.instructions}
                            onChange={(e) => setPromptData(prev => ({ ...prev, instructions: e.target.value }))}
                            placeholder="Provide step-by-step instructions on how to use this prompt effectively..."
                            className="bg-white/60 border-sky-200 min-h-[120px]"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="tool" className="text-slate-700">AI Tool *</Label>
                            <Select value={promptData.tool} onValueChange={(value) => setPromptData(prev => ({ ...prev, tool: value }))}>
                              <SelectTrigger className="bg-white/60 border-sky-200">
                                <SelectValue placeholder="Select AI tool" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Lovable.dev">Lovable.dev</SelectItem>
                                <SelectItem value="Cursor">Cursor</SelectItem>
                                <SelectItem value="Replit">Replit</SelectItem>
                                <SelectItem value="GitHub Copilot">GitHub Copilot</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="price" className="text-slate-700">Price</Label>
                            <Input
                              id="price"
                              value={promptData.price}
                              onChange={(e) => setPromptData(prev => ({ ...prev, price: e.target.value }))}
                              placeholder="e.g., $9.99 or Free"
                              className="bg-white/60 border-sky-200"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="gumroadLink" className="text-slate-700">Gumroad Link (optional)</Label>
                          <Input
                            id="gumroadLink"
                            value={promptData.gumroadLink}
                            onChange={(e) => setPromptData(prev => ({ ...prev, gumroadLink: e.target.value }))}
                            placeholder="https://gumroad.com/l/your-prompt"
                            className="bg-white/60 border-sky-200"
                          />
                        </div>

                        <div>
                          <Label htmlFor="image" className="text-slate-700">Preview Image</Label>
                          <div className="mt-2">
                            <input
                              id="image"
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById('image')?.click()}
                              className="w-full h-32 border-2 border-dashed border-sky-300 hover:border-orange-400 transition-colors"
                            >
                              <div className="text-center">
                                <UploadIcon className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                                <p className="text-sm text-slate-600">
                                  {promptData.image ? promptData.image.name : "Click to upload preview image"}
                                </p>
                              </div>
                            </Button>
                          </div>
                        </div>

                        <Button type="submit" className="w-full">
                          Submit Prompt
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
