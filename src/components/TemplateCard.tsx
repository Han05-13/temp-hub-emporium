
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
    <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 mr-2">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
              {template.title}
            </h3>
            <span className="text-xs sm:text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded-full inline-block font-medium">
              {template.category}
            </span>
          </div>
          <div className="text-right">
            <div className="text-xl sm:text-2xl font-bold text-gray-900">{template.price}</div>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed">
          {template.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
              <span className="font-medium">{template.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
              <span className="font-medium">{template.downloads.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <Button
          onClick={handleBuyClick}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-medium"
          size="sm"
        >
          Buy on Gumroad
          <ExternalLink className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
