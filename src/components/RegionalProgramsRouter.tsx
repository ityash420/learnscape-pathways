import { useEffect, useState } from 'react';
import { detectUserRegion } from '@/utils/regionDetection';
import Programs from '@/pages/Programs';
import ProgramsUAE from '@/pages/ProgramsUAE';
import ProgramsUSA from '@/pages/ProgramsUSA';

const RegionalProgramsRouter = () => {
  const [region, setRegion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRegion = async () => {
      try {
        const detectedRegion = await detectUserRegion();
        setRegion(detectedRegion);
      } catch (error) {
        console.error('Failed to detect region:', error);
        setRegion('default'); // fallback to UK/default
      } finally {
        setLoading(false);
      }
    };

    getRegion();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your regional programs...</p>
        </div>
      </div>
    );
  }

  switch (region) {
    case 'UAE':
      return <ProgramsUAE />;
    case 'USA':
      return <ProgramsUSA />;
    default:
      return <Programs />; // UK/Default
  }
};

export default RegionalProgramsRouter;