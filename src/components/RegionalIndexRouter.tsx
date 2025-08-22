import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { detectUserRegion } from '@/utils/regionDetection';
import Index from '@/pages/Index';
import IndexUAE from '@/pages/IndexUAE';
import IndexUSA from '@/pages/IndexUSA';

const RegionalIndexRouter = () => {
  const [region, setRegion] = useState<'UAE' | 'USA' | 'UK' | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const detectAndRedirect = async () => {
      // Only redirect from the root path
      if (location.pathname !== '/') {
        setLoading(false);
        return;
      }

      try {
        // Set a maximum timeout for the entire detection process
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Detection timeout')), 8000)
        );
        
        const detectedRegion = await Promise.race([
          detectUserRegion(),
          timeoutPromise
        ]);
        
        console.log('🎯 Final detected region for index:', detectedRegion);
        console.log('🧭 Current pathname:', location.pathname);
        setRegion(detectedRegion);
        
        // Redirect based on detected region
        if (detectedRegion === 'UAE') {
          console.log('🔄 Redirecting to UAE index...');
          navigate('/uae', { replace: true });
        } else if (detectedRegion === 'USA') {
          console.log('🔄 Redirecting to USA index...');
          navigate('/usa', { replace: true });
        } else {
          console.log('🔄 Staying on UK index...');
        }
      } catch (error) {
        console.error('Region detection failed in IndexRouter:', error);
        setRegion('UK'); // Force default region
      } finally {
        setLoading(false);
      }
    };

    detectAndRedirect();
  }, [navigate, location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Render appropriate index page based on current route
  console.log('🎬 Rendering index page for pathname:', location.pathname);
  
  if (location.pathname === '/uae') {
    console.log('🇦🇪 Rendering IndexUAE');
    return <IndexUAE />;
  }
  
  if (location.pathname === '/usa') {
    console.log('🇺🇸 Rendering IndexUSA'); 
    return <IndexUSA />;
  }
  
  // Default UK index page
  console.log('🇬🇧 Rendering default UK Index');
  return <Index />;
};

export default RegionalIndexRouter;