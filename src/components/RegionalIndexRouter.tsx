import Index from '@/pages/Index';

const RegionalIndexRouter = () => {
  // Always serve UK index page as default - UAE/USA pages temporarily disabled
  return <Index />;
};

export default RegionalIndexRouter;