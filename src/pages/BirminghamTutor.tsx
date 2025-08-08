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

const BirminghamTutor = () => {
  const whatsappNumber = "+917906601283";

  const subjects = [
    {
      title: "GCSE Maths",
      description: "Comprehensive GCSE maths tutoring for Birmingham students",
      icon: Target,
      features: ["Algebra & Number", "Geometry & Measures", "Statistics & Probability", "Exam technique"]
    },
    {
      title: "A-Level Maths",
      description: "Advanced A-Level mathematics support for Birmingham students",
      icon: GraduationCap,
      features: ["Core Mathematics", "Statistics", "Mechanics", "Further Mathematics"]
    },
    {
      title: "KS2 & KS3 Maths",
      description: "Foundation maths skills for younger Birmingham students",
      icon: BookOpen,
      features: ["Number & Place Value", "Fractions & Decimals", "Geometry", "Problem Solving"]
    }
  ];

  const birminghamTestimonials = [
    {
      name: "Amelia Johnson",
      location: "Edgbaston, Birmingham",
      grade: "A-Level Student",
      content: "The Birmingham maths tutoring from MathBeam helped me achieve my A-Level goals. The online format was perfect for my busy schedule.",
      rating: 5
    },
    {
      name: "Mohammed Ali",
      location: "Sparkhill, Birmingham",
      grade: "GCSE Student",
      content: "I went from struggling with grade 3 to achieving grade 8 in GCSE Maths. The Birmingham tutors at MathBeam really understand local needs.",
      rating: 5
    },
    {
      name: "Charlotte Davis",
      location: "Moseley, Birmingham",
      grade: "Year 7 Student",
      content: "My daughter's maths confidence has soared since starting with MathBeam's Birmingham tutoring service. Highly recommended!",
      rating: 5
    }
  ];

  const birminghamBenefits = [
    {
      icon: MapPin,
      title: "Birmingham Expertise",
      description: "Deep understanding of Birmingham schools and curricula"
    },
    {
      icon: Clock,
      title: "Birmingham-Friendly Times",
      description: "Flexible scheduling for Birmingham students"
    },
    {
      icon: Users,
      title: "Birmingham Success Stories",
      description: "Proven track record with Birmingham students"
    },
    {
      icon: Phone,
      title: "Birmingham Support",
      description: "Local support team for Birmingham families"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MathBeam - Birmingham Maths Tutor",
    "description": "Find the best maths tutor in Birmingham. Personalised lessons for all levels, including KS2, KS3, GCSE & A-Level. Flexible scheduling – online & face-to-face.",
    "url": "https://mathbeam.com/birmingham-maths-tutor",
    "areaServed": "Birmingham, UK",
    "serviceType": "Online Maths Tutoring",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "@country": "UK"
    }
  };

  return (
    <>
      <Helmet>
        <title>Birmingham Maths Tutor – Private Lessons for GCSE & A-Level | MathBeam</title>
        <meta name="description" content="Find the best maths tutor in Birmingham. Personalised lessons for all levels, including KS2, KS3, GCSE & A-Level. Flexible scheduling – online & face-to-face." />
        <meta name="keywords" content="Birmingham maths tutor, GCSE maths Birmingham, A-Level maths Birmingham, online maths tutoring Birmingham, private maths lessons Birmingham" />
        <link rel="canonical" href="https://mathbeam.com/birmingham-maths-tutor" />
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
                  Birmingham Maths Tutoring
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Top <span className="text-primary">Birmingham Maths Tutor</span> for Success
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Find the best maths tutor in Birmingham with MathBeam. Personalised online lessons for KS2, KS3, GCSE & A-Level students across Birmingham. Flexible scheduling designed for Birmingham families.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in Birmingham maths tutoring for my child. Can you provide more information?`, '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book Free Birmingham Trial
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Birmingham Team
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={childrenStudying} 
                  alt="Birmingham students learning maths online"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Serving All Birmingham</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Birmingham Subjects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Maths Subjects for Birmingham Students
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive maths education tailored to Birmingham schools
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

        {/* Birmingham Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose MathBeam for Birmingham Maths Tutoring?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {birminghamBenefits.map((benefit, index) => (
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

        {/* Birmingham Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Birmingham Student Achievements
              </h2>
              <p className="text-xl text-muted-foreground">
                Success stories from Birmingham students and families
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {birminghamTestimonials.map((testimonial, index) => (
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
              Start Your Birmingham Maths Success Story
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the growing community of successful Birmingham students. Book your free trial today.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to book a free trial lesson for Birmingham maths tutoring.`, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Free Birmingham Trial Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BirminghamTutor;