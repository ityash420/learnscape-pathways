import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Send,
  CheckCircle,
  Star,
  Target,
  BookOpen,
  Users,
  Lock,
  Zap,
  Heart
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import collaborativeLearningImage from "@/assets/collaborative-learning.jpg";

const Contact = () => {
  const whatsappNumber = "+917906601283";
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    program: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi! I'd like to schedule a personalized academic strategy session. 

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Program Interest: ${formData.program}
Subject: ${formData.subject}

Message: ${formData.message}

Please contact me to discuss my academic goals and how you can help me achieve excellence.`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your strategy session request on WhatsApp for a 4-hour response!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      program: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const learningSteps = [
    {
      number: "1",
      title: "Skill Gap Analysis",
      description: "Identify strengths and areas for improvement through comprehensive assessment"
    },
    {
      number: "2", 
      title: "Custom Study Plan",
      description: "Tailored learning pathway designed specifically for your goals and timeline"
    },
    {
      number: "3",
      title: "1-on-1 Mentorship", 
      description: "Weekly sessions with experienced tutors who track your progress"
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Mentored" },
    { number: "92%", label: "Grade Improvement" },
    { number: "3x", label: "Faster Learning" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us | MathBeam.com - Get Your Personalized Math & Science Strategy Session</title>
        <meta name="description" content="Schedule your free personalized math and science strategy session. Join 1,000+ students who've achieved 180+ point SAT improvements through expert mentorship." />
        <meta name="keywords" content="math tutoring contact, science tutoring contact, academic strategy session, SAT improvement, personalized tutoring, expert educators, free consultation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mathbeam.com/contact" />
        <meta property="og:title" content="Contact Us | MathBeam.com - Get Your Personalized Math & Science Strategy Session" />
        <meta property="og:description" content="Schedule your free personalized math and science strategy session with expert educators." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mathbeam.com/contact" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={collaborativeLearningImage} alt="Professional handshake" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Unlock Your Academic Excellence
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Ready to transform your grades? Connect with our expert tutors and start your journey to academic success today.
          </p>
        </div>
      </section>

      {/* Strategy Session Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-0">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-orange-500 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">
                    Start Your Academic Transformation Journey
                  </h2>
                </div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Experience proven learning methods that boost confidence and deliver real results. Our expert tutors create customized roadmaps that turn academic challenges into victories.
                </p>
              </div>

              {/* Strategy Steps */}
              <div className="mb-12">
                <div className="flex items-center justify-center mb-8">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <h3 className="text-2xl font-bold text-gray-900">What Your Free Strategy Session Includes</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {learningSteps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {step.number}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                  Real Results from Real Students
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {achievements.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Take Action */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-purple-500 mr-2" />
                  <h3 className="text-2xl font-bold text-gray-900">Take the First Step Toward Excellence</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                  Complete the form below to schedule your free strategy session. Our education experts will contact you within 4 hours with your personalized academic roadmap.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium">
                    <Lock className="h-4 w-4 mr-2" />
                    100% Confidential
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                    <Zap className="h-4 w-4 mr-2" />
                    4-Hour Response
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-sm font-medium">
                    <Heart className="h-4 w-4 mr-2" />
                    No Pressure Consultation
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Connect with Our Education Experts
            </h2>
            <p className="text-lg text-gray-600">
              Choose your preferred way to connect — whether through our detailed consultation form or direct contact methods. Our team responds quickly with personalized guidance.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center justify-center mb-4">
                <Send className="h-6 w-6 text-blue-600 mr-2" />
                <CardTitle className="text-2xl">Schedule Your Strategy Session</CardTitle>
              </div>
              <CardDescription className="text-base">
                Complete this form for a comprehensive consultation. We'll analyze your goals and create a personalized academic roadmap within 4 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Program of Interest *
                    </label>
                    <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)} required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sat">SAT Preparation</SelectItem>
                        <SelectItem value="ib">IB Program Support</SelectItem>
                        <SelectItem value="igcse">IGCSE Excellence</SelectItem>
                        <SelectItem value="common-core">Common Core Mastery</SelectItem>
                        <SelectItem value="high-school">High School (Grades 9-12)</SelectItem>
                        <SelectItem value="middle-school">Middle School (Grades 6-8)</SelectItem>
                        <SelectItem value="other">Other/General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Academic Goals *
                  </label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="What are your specific academic targets?"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your academic challenges and goals *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Share your current academic level, target scores, timeline, and any specific challenges you're facing..."
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Schedule My Free Strategy Session
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-blue-600 font-medium">+91 790 660 1283</p>
                <p className="text-sm text-gray-600 mt-1">Mon-Fri 8AM-8PM IST</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <Button 
                  variant="link" 
                  className="text-green-600 font-medium p-0 h-auto"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                >
                  Start Chat
                </Button>
                <p className="text-sm text-gray-600 mt-1">Quick responses</p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:support@mathbeam.com" className="text-purple-600 font-medium hover:underline">
                  support@mathbeam.com
                </a>
                <p className="text-sm text-gray-600 mt-1">24-hour response</p>
              </CardContent>
            </Card>
          </div>

          {/* Location Info */}
          <div className="mt-12 text-center bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Our Location</h3>
            </div>
            <p className="text-gray-600 mb-2">
              While we primarily serve students online worldwide, our <strong>main office</strong> is located in Visakhapatnam, Andhra Pradesh.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg inline-block">
              <p className="text-sm text-blue-800">
                <strong>Business Update:</strong> We've enhanced our programs! <strong>MathBeam.com</strong> continues to provide the same expert tutoring services with our enhanced curriculum and personalized approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
