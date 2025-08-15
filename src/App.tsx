
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import IndexUAE from "./pages/IndexUAE";
import IndexUSA from "./pages/IndexUSA";
import Programs from "./pages/Programs";
import Pricing from "./pages/Pricing";
import PricingUAE from "./pages/PricingUAE";
import PricingUSA from "./pages/PricingUSA";
import RegionalPricingRouter from "./components/RegionalPricingRouter";
import RegionalIndexRouter from "./components/RegionalIndexRouter";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StateTutoring from "./pages/StateTutoring";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsConditions from "./pages/TermsConditions";
import LondonTutor from "./pages/LondonTutor";
import ManchesterTutor from "./pages/ManchesterTutor";
import BirminghamTutor from "./pages/BirminghamTutor";
import LeedsTutor from "./pages/LeedsTutor";
import BristolTutor from "./pages/BristolTutor";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<RegionalIndexRouter />} />
              <Route path="/uae" element={<IndexUAE />} />
              <Route path="/usa" element={<IndexUSA />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/pricing" element={<RegionalPricingRouter />} />
              <Route path="/pricing-uae" element={<PricingUAE />} />
              <Route path="/pricing-usa" element={<PricingUSA />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/tutoring/:state" element={<StateTutoring />} />
              <Route path="/london-maths-tutor" element={<LondonTutor />} />
              <Route path="/manchester-maths-tutor" element={<ManchesterTutor />} />
              <Route path="/birmingham-maths-tutor" element={<BirminghamTutor />} />
              <Route path="/leeds-maths-tutor" element={<LeedsTutor />} />
              <Route path="/bristol-maths-tutor" element={<BristolTutor />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
