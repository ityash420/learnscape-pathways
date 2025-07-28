import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import cartoonImage from "@/assets/404-cartoon.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="text-center max-w-md mx-auto px-6">
        <img 
          src={cartoonImage} 
          alt="404 Not Found" 
          className="w-64 h-48 mx-auto mb-8 object-contain"
        />
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for seems to have gone on a learning adventure!
        </p>
        <Link to="/">
          <Button size="lg" className="px-8">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
