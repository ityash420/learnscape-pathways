import Pricing from '@/pages/Pricing';

const RegionalPricingRouter = () => {
  // Always serve UK pricing - geo-tagging disabled
  return <Pricing />;
};

export default RegionalPricingRouter;