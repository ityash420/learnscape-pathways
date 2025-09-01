import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { detectUserRegion } from '@/utils/regionDetection';
import Index from '@/pages/Index';
import IndexUAE from '@/pages/IndexUAE';
import IndexUSA from '@/pages/IndexUSA';

const RegionalIndexRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only perform regional detection for interactive users, not crawlers
    const isBot = /bot|crawler|spider|crawling/i.test(navigator.userAgent);
    
    if (isBot || location.pathname !== '/') {
      return;
    }

    // Non-blocking regional detection for user experience
    const detectForUser = async () => {
      try {
        const detectedRegion = await detectUserRegion();
        
        // Only redirect if user is clearly from UAE or USA
        if (detectedRegion === 'UAE') {
          navigate('/uae', { replace: true });
        } else if (detectedRegion === 'USA') {
          navigate('/usa', { replace: true });
        }
        // UK users and others stay on default page
      } catch (error) {
        console.log('Region detection skipped:', error);
        // Silently fail, user stays on UK page
      }
    };

    // Small delay to ensure page renders first for SEO
    setTimeout(detectForUser, 100);
  }, [navigate, location.pathname]);

  // Always render appropriate page immediately - no loading states
  if (location.pathname === '/uae') {
    return <IndexUAE />;
  }
  
  if (location.pathname === '/usa') {
    return <IndexUSA />;
  }
  
  // Default UK index page - served immediately for SEO
  return <Index />;
};

export default RegionalIndexRouter;