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
        // Set a maximum timeout for the entire detection process
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Detection timeout')), 8000)
        );
        
        const detectedRegion = await Promise.race([
          detectUserRegion(),
          timeoutPromise
        ]);
        
        console.log('Final detected region for programs:', detectedRegion);
        setRegion(detectedRegion);
      } catch (error) {
        console.error('Failed to detect region in ProgramsRouter:', error);
        setRegion('UK'); // fallback to UK/default
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