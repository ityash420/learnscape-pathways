import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Target, 
  Users, 
  Clock,
  CheckCircle,
  MessageCircle
} from "lucide-react";
import studentSuccessImage from "@/assets/student-success-celebration.jpg";
import studentAchievementImage from "@/assets/student-achievement.jpg";

const ProgramsUAE = () => {
  const whatsappNumber = "+917906601283";

  const programs = [
    {
      title: "IGCSE Preparation",
      icon: GraduationCap,
      duration: "2 academic years",
      sessions: "2-3 sessions/week",
      description: "Comprehensive IGCSE preparation covering all major subjects with proven exam techniques for UAE students.",
      features: [
        "Mathematics (Core & Extended)",
        "Sciences (Biology, Chemistry, Physics)",
        "Computer Science & Programming",
        "Applied Mathematics",
        "Scientific research methods",
        "Past paper practice and exam technique"
      ],
      targetScore: "A*-A Achievement",
      color: "border-blue-500 bg-blue-50"
    },
    {
      title: "IB Diploma Programme",
      icon: Award,
      duration: "2 academic years",
      sessions: "3-4 sessions/week",
      description: "International Baccalaureate programme support with focus on UAE curriculum requirements.",
      features: [
        "Mathematics: Analysis & Approaches",
        "Mathematics: Applications & Interpretation",
        "Sciences (Biology, Chemistry, Physics)",
        "STEM Extended Essay support",
        "Science Internal Assessment guidance",
        "Mathematical research projects"
      ],
      targetScore: "38+ Points",
      color: "border-purple-500 bg-purple-50"
    },
    {
      title: "A-Level Excellence",
      icon: BookOpen,
      duration: "2 academic years",
      sessions: "2-3 sessions/week",
      description: "Advanced Level support for UAE students aiming for top UK and international universities.",
      features: [
        "Further Mathematics",
        "Advanced Sciences (Physics, Chemistry, Biology)",
        "Applied Mathematics",
        "Scientific research & analysis",
        "STEM University application support",
        "UCAS guidance for UK universities"
      ],
      targetScore: "A*-A Grades",
      color: "border-green-500 bg-green-50"
    },
    {
      title: "MOE UAE Curriculum",
      icon: Target,
      duration: "Ongoing support",
      sessions: "2-3 sessions/week",
      description: "UAE Ministry of Education curriculum support aligned with national standards and objectives.",
      features: [
        "Grade 1-12 Mathematics",
        "Science subjects (Biology, Chemistry, Physics)",
        "Advanced Mathematical concepts",
        "Scientific method & analysis",
        "EMSAT Mathematics & Science preparation",
        "UAE STEM assessments"
      ],
      targetScore: "Excellence in National Exams",
      color: "border-orange-500 bg-orange-50"
    }
  ];

  const gradePrograms = [
    {
      title: "High School Programme (Grades 9-12)",
      description: "Comprehensive support for IGCSE, IB, A-Level, and MOE UAE curriculum mastery.",
      subjects: [
        "Advanced Mathematics (Algebra, Calculus, Statistics)",
        "Sciences (Biology, Chemistry, Physics)",
        "Applied Mathematics & Statistics",
        "Computer Science & Programming",
        "Mathematical Modeling",
        "STEM University preparation and guidance"
      ],
      benefits: [
        "IGCSE/IB grade improvement",
        "University admission success",
        "Exam technique mastery",
        "Academic confidence building"
      ]
    },
    {
      title: "Middle School Programme (Grades 6-8)",
      description: "Foundation building programme preparing students for IGCSE and advanced studies in UAE.",
      subjects: [
        "Mathematics (Number, Algebra, Geometry)",
        "Science fundamentals (Biology, Chemistry, Physics)",
        "Mathematical problem solving",
        "Scientific observation & experiments",
        "STEM critical thinking & problem solving",
        "Mathematical study skills development"
      ],
      benefits: [
        "Strong academic foundations",
        "IGCSE readiness",
        "Bilingual proficiency",
        "Cultural awareness"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>UAE Maths & Science Academic Programmes | MathBeam.com - IGCSE, IB & MOE Curriculum</title>
        <meta name="description" content="Explore MathBeam.com's comprehensive UAE curriculum programmes including IGCSE preparation, IB excellence, A-Level support, and MOE UAE curriculum. Expert tutoring in Dubai, Abu Dhabi, and across UAE." />
        <meta name="keywords" content="IGCSE maths tutoring UAE, IB tutoring Dubai, A-Level science support UAE, MOE curriculum tutoring, UAE education support, EMSAT preparation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mathbeam.com/programs" />
        <meta property="og:title" content="UAE Maths & Science Academic Programmes | MathBeam.com - IGCSE, IB & MOE Curriculum" />
        <meta property="og:description" content="Comprehensive UAE curriculum programmes designed for excellence in IGCSE, IB, A-Level, and MOE curriculum support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mathbeam.com/programs" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "MathBeam UAE Programs",
            "description": "Expert online academic programmes for UAE students specializing in IGCSE, IB, A-Level, and MOE curriculum",
            "url": "https://mathbeam.com/programs",
            "telephone": "+917906601283",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "addressCountry": "UAE"
            },
            "offers": {
              "@type": "Offer",
              "name": "Academic Programme Tutoring",
              "description": "Comprehensive tutoring programmes starting from AED 110/hour",
              "priceCurrency": "AED",
              "price": "110"
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={studentSuccessImage} alt="Students celebrating success" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our UAE Academic Programmes
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Comprehensive preparation programmes designed for UAE curriculum excellence
          </p>
        </div>
      </section>

      {/* Exam Preparation Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              UAE Curriculum Preparation Programmes
            </h2>
            <p className="text-lg text-gray-600">
              Specialized preparation for IGCSE, IB, A-Level and MOE UAE curriculum
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className={`${program.color} border-2 hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <program.icon className="h-8 w-8 text-gray-700" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                      <div className="flex space-x-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {program.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {program.sessions}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-700 text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Program Features:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <Badge variant="secondary" className="text-sm font-semibold">
                        Target: {program.targetScore}
                      </Badge>
                      <Button 
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${program.title} program. Can you provide more details?`, '_blank')}
                        className="flex items-center space-x-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Enroll Now</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Level Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Grade Level Programmes
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive academic support tailored to UAE educational standards
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gradePrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Core Subjects:</h4>
                      <ul className="space-y-2">
                        {program.subjects.map((subject, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs justify-center">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${program.title}. Can you help me get started?`, '_blank')}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={studentAchievementImage} 
                alt="Student achieving academic success" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                UAE Success Stories That Inspire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Over 2,000 UAE students have achieved their academic dreams with our personalized programs. 
                From improved IGCSE grades to successful university admissions in UAE and internationally.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">97% improvement in IGCSE grades</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Average 2+ grade improvement in IB</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">95% UAE university acceptance rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Excel in Your UAE Studies?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of UAE students who have achieved their academic goals with our proven programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to schedule a free consultation for UAE programs.`, '_blank')}
            >
              Schedule Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsUAE;