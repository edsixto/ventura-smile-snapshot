
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const DomainBanner = () => {
  return (
    <div className="bg-dental-primary text-white py-2 px-4 text-center">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="font-medium mb-2 sm:mb-0">
          This is a Temporary Website to demonstrate how a site could look. The domain VenturaDentists.com is available for purchase.
        </p>
        <Button 
          className="bg-white text-dental-primary hover:bg-gray-100 font-bold"
          onClick={() => window.open("https://mynamebrand.com/name/VenturaDentists.com", "_blank")}
        >
          <ExternalLink className="mr-2 h-4 w-4" /> BUY THIS DOMAIN
        </Button>
      </div>
    </div>
  );
};

export default DomainBanner;
