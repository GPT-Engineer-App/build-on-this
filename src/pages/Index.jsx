import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Web Application</h1>
      <p className="text-xl mb-8">
        This is a minimal web application that you can modify and build upon. It provides a simple structure to get you started quickly.
      </p>
      <Button asChild>
        <Link to="/about">Learn More</Link>
      </Button>
    </div>
  );
};

export default Index;