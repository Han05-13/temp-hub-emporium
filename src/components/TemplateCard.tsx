
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star, Download } from "lucide-react";

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

interface TemplateCardProps {
  template: Template;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  const handleBuyClick = () => {
    window.open(template.gumroadLink, '_blank');
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
              {template.title}
            </h3>
            <span className="text-sm text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">
              {template.category}
            </span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{template.price}</div>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {template.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{template.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span>{template.downloads.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <Button
          onClick={handleBuyClick}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
        >
          Buy on Gumroad
          <ExternalLink className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
