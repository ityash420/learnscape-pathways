import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Clock, 
  Target, 
  Star, 
  CheckCircle, 
  MessageCircle,
  GraduationCap,
  Award,
  TrendingUp,
  MapPin,
  Phone
} from "lucide-react";
import childrenStudying from "@/assets/children-studying.jpg";
import onlineLearningChild from "@/assets/online-learning-child.jpg";

const BristolTutor = () => {
  const whatsappNumber = "+917906601283";

  const subjects = [
    {
      title: "GCSE Maths",
      description: "Comprehensive GCSE maths tutoring for Bristol students",
      icon: Target,
      features: ["Algebra & Number", "Geometry & Measures", "Statistics & Probability", "Exam technique"]
    },
    {
      title: "A-Level Maths",
      description: "Advanced A-Level mathematics support for Bristol students",
      icon: GraduationCap,
      features: ["Core Mathematics", "Statistics", "Mechanics", "Further Mathematics"]
    },
    {
      title: "KS2 & KS3 Maths",
      description: "Foundation maths skills for younger Bristol students",
      icon: BookOpen,
      features: ["Number & Place Value", "Fractions & Decimals", "Geometry", "Problem Solving"]
    }
  ];

  const bristolTestimonials = [
    {
      name: "Lucy Roberts",
      location: "Clifton, Bristol",
      grade: "A-Level Student",
      content: "The Bristol maths tutoring from MathBeam was exceptional. I achieved an A* in A-Level Maths thanks to their expert online support.",
      rating: 5
    },
    {
      name: "Ben Clarke",
      location: "Redland, Bristol",
      grade: "GCSE Student",
      content: "I went from grade 5 to grade 9 in GCSE Maths with MathBeam's Bristol tutoring. The personalized approach worked perfectly for me.",
      rating: 5
    },
    {
      name: "Grace Morgan",
      location: "Bishopston, Bristol",
      grade: "Year 8 Student",
      content: "My confidence in maths has grown tremendously since starting with Bristol tutors at MathBeam. I actually enjoy maths now!",
      rating: 5
    }
  ];

  const bristolBenefits = [
    {
      icon: MapPin,
      title: "Bristol Expertise",
      description: "Deep knowledge of Bristol schools and educational standards"
    },
    {
      icon: Clock,
      title: "Bristol-Friendly Hours",
      description: "Flexible scheduling perfect for Bristol students"
    },
    {
      icon: Users,
      title: "Bristol Success Stories",
      description: "Proven results with Bristol students"
    },
    {
      icon: Phone,
      title: "Bristol Support",
      description: "Dedicated support team for Bristol families"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MathBeam - Bristol Maths Tutor",
    "description": "Find the best maths tutor in Bristol. Personalised lessons for all levels, including KS2, KS3, GCSE & A-Level. Flexible scheduling – online & face-to-face.",
    "url": "https://mathbeam.com/bristol-maths-tutor",
    "areaServed": "Bristol, UK",
    "serviceType": "Online Maths Tutoring",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bristol",
      "@country": "UK"
    }
  };

  return (
    <>
      <Helmet>
        <title>Bristol Maths Tutor – Private Lessons for GCSE & A-Level | MathBeam</title>
        <meta name="description" content="Find the best maths tutor in Bristol. Personalised lessons for all levels, including KS2, KS3, GCSE & A-Level. Flexible scheduling – online & face-to-face." />
        <meta name="keywords" content="Bristol maths tutor, GCSE maths Bristol, A-Level maths Bristol, online maths tutoring Bristol, private maths lessons Bristol" />
        <link rel="canonical" href="https://mathbeam.com/bristol-maths-tutor" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  Bristol Maths Tutoring
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Premier <span className="text-primary">Bristol Maths Tutor</span> for Success
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Find the best maths tutor in Bristol with MathBeam. Expert online lessons for KS2, KS3, GCSE & A-Level students across Bristol. Flexible scheduling tailored for Bristol families.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in Bristol maths tutoring for my child. Can you provide more information?`, '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book Free Bristol Trial
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Bristol Team
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={childrenStudying} 
                  alt="Bristol students learning maths online"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Serving All Bristol Areas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bristol Subjects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Maths Subjects for Bristol Students
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quality maths education designed specifically for Bristol students
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <subject.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{subject.title}</CardTitle>
                    <CardDescription>{subject.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {subject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bristol Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose MathBeam for Bristol Maths Tutoring?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bristolBenefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bristol Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Bristol Student Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Amazing achievements from Bristol students and families
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {bristolTestimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-sm text-primary">{testimonial.grade}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Start Your Bristol Maths Success Journey
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join successful Bristol students. Book your free trial lesson today.
            </p>
            <Button 
              size="lg" 
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to book a free trial lesson for Bristol maths tutoring.`, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Free Bristol Trial Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BristolTutor;