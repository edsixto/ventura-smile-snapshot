
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const DomainBanner = () => {
  return (
    <div className="bg-green-600 text-white py-2 px-4 text-center">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="font-medium mb-2 sm:mb-0">
          This website is designed and built to showcase what your website could look like. The domain VenturaDentists.com is available for sale.
        </p>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline font-bold text-green-100">Limited offer: $599 until Friday 10am EST</span>
          <Button 
            className="bg-white text-green-600 hover:bg-gray-100 font-bold"
            onClick={() => window.open("https://mynamebrand.com/name/VenturaDentists.com", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" /> BUY THIS DOMAIN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DomainBanner;
