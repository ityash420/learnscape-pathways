import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { detectUserRegion } from '@/utils/regionDetection';
import Pricing from '@/pages/Pricing';
import PricingUAE from '@/pages/PricingUAE';
import PricingUSA from '@/pages/PricingUSA';

const RegionalPricingRouter = () => {
  const [region, setRegion] = useState<'UAE' | 'USA' | 'UK' | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const detectAndRedirect = async () => {
      // If user is already on a specific regional pricing page, don't redirect
      if (location.pathname.includes('pricing-')) {
        setLoading(false);
        return;
      }

      const detectedRegion = await detectUserRegion();
      setRegion(detectedRegion);
      
      // Redirect based on detected region
      if (detectedRegion === 'UAE' && location.pathname === '/pricing') {
        navigate('/pricing-uae', { replace: true });
      } else if (detectedRegion === 'USA' && location.pathname === '/pricing') {
        navigate('/pricing-usa', { replace: true });
      }
      
      setLoading(false);
    };

    detectAndRedirect();
  }, [navigate, location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading pricing...</p>
        </div>
      </div>
    );
  }

  // Render appropriate pricing page based on current route
  if (location.pathname === '/pricing-uae') {
    return <PricingUAE />;
  }
  
  if (location.pathname === '/pricing-usa') {
    return <PricingUSA />;
  }
  
  // Default UK pricing page
  return <Pricing />;
};

export default RegionalPricingRouter;