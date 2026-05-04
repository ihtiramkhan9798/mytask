import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const TrustBadges = () => {
  return (
    <div className="bg-[#0a0a0a] p-10 flex justify-center">
      <div className="w-full max-w-3xl h-auto min-h-[100px] rounded-[110px] bg-[#1a1a1a] border-[1px] border-[#3F23A1] flex flex-col md:flex-row items-center justify-between p-8 md:px-20 gap-8">
        
        
        <div className="flex flex-col items-center md:items-start text-white gap-2">
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google" 
            className="h-4 w-auto"
          />
          <div className="flex items-center gap-3">
            <span className="text-3xl font-light">Reviews</span>
            <div className="flex gap-0.5 pt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#EA4335" className="text-[#EA4335]" />
              ))}
            </div>
          </div>
        </div>

       
        <div className="relative bg-white text-gray-800 p-6 rounded-lg w-auto md:w-[180px] h-[180px] flex flex-col items-center justify-center gap-2 border shadow-lg">
          <ExternalLink 
            size={16} 
            className="absolute top-3 right-3 text-[#EA4335]" 
          />
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google" 
            className="h-3 w-auto"
          />
          <span className="text-lg font-medium">Partner</span>
        </div>

        {/* Right: Award Badge */}
        <div className="relative flex flex-col items-center justify-center text-center">
          <img 
            src="/path-to-your-award-badge.png" // Replace with actual badge asset path
            alt="Three Best Rated Award" 
            className="w-48 h-auto object-contain"
          />
          {/* Note: I've left a path here, as this badge would be an image asset.
              The text content within the badge in the image is: 
              "THREE BEST RATED - 2023 AWARD - BEST ADVERTISING AGENCIES - NEWARK" 
          */}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;