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

const LeedsTutor = () => {
  const whatsappNumber = "+917906601283";

  const subjects = [
    {
      title: "GCSE Maths",
      description: "Comprehensive GCSE maths tutoring for Leeds students",
      icon: Target,
      features: ["Algebra & Number", "Geometry & Measures", "Statistics & Probability", "Exam technique"]
    },
    {
      title: "A-Level Maths",
      description: "Advanced A-Level mathematics support for Leeds students",
      icon: GraduationCap,
      features: ["Core Mathematics", "Statistics", "Mechanics", "Further Mathematics"]
    },
    {
      title: "KS2 & KS3 Maths",
      description: "Foundation maths skills for younger Leeds students",
      icon: BookOpen,
      features: ["Number & Place Value", "Fractions & Decimals", "Geometry", "Problem Solving"]
    }
  ];

  const leedsTestimonials = [
    {
      name: "Emma Thompson",
      location: "Headingley, Leeds",
      grade: "A-Level Student",
      content: "MathBeam's Leeds tutoring service helped me achieve an A in A-Level Maths. The online lessons fit perfectly around my Leeds college schedule.",
      rating: 5
    },
    {
      name: "Jake Williams",
      location: "Chapel Allerton, Leeds",
      grade: "GCSE Student",
      content: "I improved from grade 4 to grade 8 in GCSE Maths with help from Leeds tutors at MathBeam. The improvement was incredible!",
      rating: 5
    },
    {
      name: "Sophie Green",
      location: "Roundhay, Leeds",
      grade: "Year 9 Student",
      content: "The Leeds maths tutoring has made such a difference to my confidence. I now look forward to maths lessons!",
      rating: 5
    }
  ];

  const leedsBenefits = [
    {
      icon: MapPin,
      title: "Leeds Local Knowledge",
      description: "Expert understanding of Leeds schools and curricula"
    },
    {
      icon: Clock,
      title: "Leeds-Friendly Scheduling",
      description: "Flexible timing that works for Leeds students"
    },
    {
      icon: Users,
      title: "Leeds Success Rate",
      description: "Outstanding results with Leeds students"
    },
    {
      icon: Phone,
      title: "Leeds Support Team",
      description: "Dedicated support for Leeds families"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MathBeam - Leeds Maths Tutor",
    "description": "Find the best maths tutor in Leeds. Personalised lessons for all levels, including KS2, KS3, GCSE & A-Level. Flexible scheduling – online & face-to-face.",
    "url": "https://mathbeam.com/leeds-maths-tutor",
    "areaServed": "Leeds, UK",
    "serviceType": "Online Maths Tutoring",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Leeds",
      "@country": "UK"
    }
  };

  return (
    <>
      <Helmet>
        <title>Leeds Maths Tutor – Private Lessons for GCSE & A-Level | MathBeam</title>
        <meta name="description" content="Find the best maths tutor in Leeds. Personalised lessons for all levels, including KS2, KS3, GCSE & A-Level. Flexible scheduling – online & face-to-face." />
        <meta name="keywords" content="Leeds maths tutor, GCSE maths Leeds, A-Level maths Leeds, online maths tutoring Leeds, private maths lessons Leeds" />
        <link rel="canonical" href="https://mathbeam.com/leeds-maths-tutor" />
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
                  Leeds Maths Tutoring
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Expert <span className="text-primary">Leeds Maths Tutor</span> for Excellence
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Find the best maths tutor in Leeds with MathBeam. Quality online lessons for KS2, KS3, GCSE & A-Level students throughout Leeds. Flexible scheduling perfect for Leeds students.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in Leeds maths tutoring for my child. Can you provide more information?`, '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book Free Leeds Trial
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Leeds Team
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={childrenStudying} 
                  alt="Leeds students learning maths online"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Serving All Leeds Areas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leeds Subjects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Maths Tutoring Subjects for Leeds Students
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert maths education designed for Leeds schools and students
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

        {/* Leeds Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose MathBeam for Leeds Maths Tutoring?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leedsBenefits.map((benefit, index) => (
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

        {/* Leeds Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Leeds Student Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Real results from Leeds students and families
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {leedsTestimonials.map((testimonial, index) => (
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
              Ready to Excel in Leeds Maths?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join successful Leeds students. Book your free trial lesson today.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to book a free trial lesson for Leeds maths tutoring.`, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Free Leeds Trial Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LeedsTutor;