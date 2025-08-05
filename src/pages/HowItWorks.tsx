import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Calendar, 
  Video, 
  BookOpen, 
  Clock, 
  Users, 
  CheckCircle, 
  MessageCircle,
  Star,
  Shield,
  ArrowRight
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Find Your Perfect Tutor",
      description: "Browse through our verified tutors, filter by subject, grade level, and availability. Read reviews and check qualifications to find the perfect match.",
      icon: Search,
      color: "from-primary to-primary/80"
    },
    {
      step: "02", 
      title: "Book Your Session",
      description: "Schedule a session at your preferred time. Choose between one-time sessions or ongoing weekly tutoring based on your needs.",
      icon: Calendar,
      color: "from-secondary to-secondary/80"
    },
    {
      step: "03",
      title: "Start Learning",
      description: "Connect with your tutor through our secure platform. Enjoy personalized lessons designed specifically for your learning goals.",
      icon: Video,
      color: "from-accent to-accent/80"
    },
    {
      step: "04",
      title: "Track Progress",
      description: "Monitor your improvement with regular assessments and feedback. Watch your confidence and grades grow week by week.",
      icon: BookOpen,
      color: "from-primary to-accent"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your busy schedule - evenings, weekends, or after school."
    },
    {
      icon: Users,
      title: "Verified Tutors",
      description: "All our tutors are background-checked, qualified, and experienced professionals."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Protected online environment with parental controls and session monitoring."
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Our support team is always available to help with any questions or concerns."
    }
  ];

  const benefits = [
    "Personalized one-on-one attention",
    "Improved grades and test scores", 
    "Increased confidence in learning",
    "Flexible scheduling options",
    "Progress tracking and reports",
    "Access to learning resources"
  ];

  return (
    <>
      <Helmet>
        <title>How It Works - TutorConnect</title>
        <meta name="description" content="Learn how our tutoring platform works in 4 simple steps. Find verified tutors, book sessions, and start improving your grades today." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">
              Simple Process
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Works</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Getting started with personalized tutoring is easier than you think. Follow our simple 4-step process to connect with expert tutors and achieve your academic goals.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <CardContent className="p-6 relative">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg`}>
                        {step.step}
                      </div>
                      <step.icon className="w-8 h-8 text-primary ml-auto" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We've designed our platform with students and parents in mind, ensuring a safe, effective, and convenient learning experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  Student Benefits
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What You'll Get From Our Tutoring
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <Star className="w-6 h-6 text-yellow-500" />
                    <Star className="w-6 h-6 text-yellow-500" />
                    <Star className="w-6 h-6 text-yellow-500" />
                    <Star className="w-6 h-6 text-yellow-500" />
                  </div>
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "My daughter's math grades improved from C to A+ in just 3 months. The personalized attention made all the difference!"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold">SJ</span>
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Parent</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have improved their grades and confidence with our expert tutors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://wa.me/1234567890?text=I%20want%20to%20find%20a%20tutor', '_blank')}
              >
                Find a Tutor <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.location.href = '/pricing'}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default HowItWorks;