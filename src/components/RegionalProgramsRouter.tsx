import Programs from '@/pages/Programs';

const RegionalProgramsRouter = () => {
  // Always serve UK programs - geo-tagging disabled
  return <Programs />;
};

export default RegionalProgramsRouter;