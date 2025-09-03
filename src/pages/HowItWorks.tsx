import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Phone, 
  Calendar, 
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
      title: "Submit Your Request",
      description: "Visit our pricing page and submit your tutoring requirements. Select your preferred subjects, grade level, and schedule preferences to get started.",
      icon: MessageCircle,
      color: "from-info to-primary",
      iconColor: "text-info"
    },
    {
      step: "02", 
      title: "We Connect With You",
      description: "Our dedicated representative will reach out to you within 4 hours via WhatsApp, email, or phone call to discuss your specific needs and answer any questions.",
      icon: Phone,
      color: "from-success to-secondary",
      iconColor: "text-success"
    },
    {
      step: "03",
      title: "Free Demo Session",
      description: "Schedule a complimentary 30-minute demo session with a qualified tutor. Experience our teaching methodology and ensure it's the perfect fit for your learning style.",
      icon: Calendar,
      color: "from-warning to-accent",
      iconColor: "text-warning"
    },
    {
      step: "04",
      title: "Begin Regular Sessions",
      description: "Once you're satisfied with the demo session, book your regular tutoring sessions and start your journey towards academic excellence with our expert tutors.",
      icon: BookOpen,
      color: "from-purple to-primary",
      iconColor: "text-purple"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your busy schedule - evenings, weekends, or after school.",
      iconColor: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: Users,
      title: "Verified Tutors",
      description: "All our tutors are background-checked, qualified, and experienced professionals.",
      iconColor: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Protected online environment with parental controls and session monitoring.",
      iconColor: "text-info",
      bgColor: "bg-info/10"
    },
    {
      icon: MessageCircle,
      title: "Support",
      description: "Our support team is always available to help with any questions or concerns.",
      iconColor: "text-purple",
      bgColor: "bg-purple/10"
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
        <title>How It Works - MathBeam</title>
        <meta name="description" content="Learn how our tutoring platform works in 4 simple steps. Find verified tutors, book sessions, and start improving your grades today." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-info/10 via-success/5 to-warning/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4 bg-info/10 text-info border-info/20">
              Simple Process
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It <span className="bg-gradient-to-r from-info via-success to-warning bg-clip-text text-transparent">Works</span>
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
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {step.step}
                      </div>
                      <step.icon className={`w-8 h-8 ${step.iconColor} ml-auto`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-r from-muted/50 via-background to-muted/30">
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
                <Card key={index} className="text-center p-6 hover:shadow-md transition-all duration-300 hover:shadow-primary/5 border-l-4 border-l-transparent hover:border-l-primary">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
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
                <Badge variant="outline" className="mb-4 border-success/30 text-success">
                  Student Benefits
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What You'll Get From Our Tutoring
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Card className="p-6 bg-gradient-to-br from-primary/5 via-info/5 to-success/5 border-primary/20">
                  <div className="flex items-center mb-4 space-x-1">
                    <Star className="w-6 h-6 text-warning fill-warning" />
                    <Star className="w-6 h-6 text-warning fill-warning" />
                    <Star className="w-6 h-6 text-warning fill-warning" />
                    <Star className="w-6 h-6 text-warning fill-warning" />
                    <Star className="w-6 h-6 text-warning fill-warning" />
                  </div>
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "My daughter's math grades improved from C to A+ in just 3 months. The personalized attention made all the difference!"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-success to-info text-white rounded-full flex items-center justify-center mr-3">
                      <span className="font-semibold">SJ</span>
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
        <section className="py-16 bg-gradient-to-r from-info via-primary to-success">
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