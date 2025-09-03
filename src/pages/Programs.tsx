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

const Programs = () => {
  const whatsappNumber = "+916395520698";

  const programs = [
    {
      title: "GCSE Preparation",
      icon: GraduationCap,
      duration: "2 academic years",
      sessions: "2-3 sessions/week",
      description: "Comprehensive GCSE preparation covering all major subjects with proven exam techniques and strategies.",
      features: [
        "Mathematics (Foundation & Higher)",
        "Sciences (Biology, Chemistry, Physics)",
        "Advanced Mathematical concepts",
        "Scientific method & analysis",
        "Past paper practice and exam technique"
      ],
      targetScore: "Grade 7-9 Achievement",
      color: "border-blue-500 bg-blue-50"
    },
    {
      title: "A-Level Excellence",
      icon: Award,
      duration: "2 academic years",
      sessions: "3-4 sessions/week",
      description: "Advanced Level support covering all subjects with university preparation focus.",
      features: [
        "Further Mathematics",
        "Advanced Sciences (Physics, Chemistry, Biology)",
        "Applied Mathematics",
        "Scientific research methods",
        "UCAS application support",
        "University interview preparation"
      ],
      targetScore: "A*-A Grades",
      color: "border-purple-500 bg-purple-50"
    },
    {
      title: "11+ Preparation",
      icon: BookOpen,
      duration: "6-12 months",
      sessions: "2-3 sessions/week",
      description: "Comprehensive 11+ exam preparation for grammar school and independent school entry.",
      features: [
        "Mathematical Reasoning",
        "Non-Verbal Reasoning",
        "Advanced Mathematics",
        "Scientific thinking",
        "Problem-solving strategies",
        "Practice papers and mock exams"
      ],
      targetScore: "Top 25% Performance",
      color: "border-green-500 bg-green-50"
    },
    {
      title: "Key Stage Support",
      icon: Target,
      duration: "Ongoing support",
      sessions: "2-3 sessions/week",
      description: "National Curriculum aligned instruction for Key Stage 2, 3 and 4 students.",
      features: [
        "KS2 SATs preparation",
        "KS3 foundation building",
        "KS4 GCSE support",
        "Problem-solving strategies",
        "Assessment preparation",
        "Progress monitoring"
      ],
      targetScore: "Above Expected Progress",
      color: "border-orange-500 bg-orange-50"
    }
  ];

  const gradePrograms = [
    {
      title: "Secondary School Programme (Years 7-11)",
      description: "Comprehensive support for GCSE preparation and Key Stage 3 & 4 curriculum mastery.",
      subjects: [
        "Advanced Mathematics (Algebra, Geometry, Statistics)",
        "Triple Sciences (Biology, Chemistry, Physics)",
        "Applied Mathematics & Statistics",
        "Scientific Research & Analysis",
        "Mathematical Modeling",
        "Study Skills & Exam Technique"
      ],
      benefits: [
        "GCSE grade improvement",
        "University preparation",
        "Exam technique mastery",
        "Subject confidence building"
      ]
    },
    {
      title: "Primary School Programme (Years 3-6)",
      description: "Foundation building programme focusing on Key Stage 2 SATs and core academic skills development.",
      subjects: [
        "Mathematics (Number, Algebra, Geometry, Statistics)",
        "Sciences (Biology, Chemistry, Physics basics)",
        "Mathematical Problem-solving & Reasoning",
        "Scientific observation & experiments",
        "Study Skills Development",
        "11+ Mathematical Preparation (if required)"
      ],
      benefits: [
        "SATs achievement",
        "Secondary school readiness",
        "Confidence building",
        "Learning skills development"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>UK Maths & Science Academic Programmes | MathBeam.com - GCSE, A-Level & 11+ Preparation</title>
        <meta name="description" content="Explore MathBeam.com's comprehensive UK curriculum programmes including GCSE preparation, A-Level excellence, 11+ exam support, and Key Stage tutoring. Expert tutoring for Years 3-13." />
        <meta name="keywords" content="GCSE maths tutoring, A-Level science support, 11+ preparation, Key Stage tutoring, UK curriculum, secondary school support, primary school tutoring" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mathbeam.com/programs" />
        <meta property="og:title" content="UK Maths & Science Academic Programmes | MathBeam.com - GCSE, A-Level & 11+ Preparation" />
        <meta property="og:description" content="Comprehensive UK curriculum programmes designed for excellence in GCSE, A-Level, 11+, and Key Stage support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mathbeam.com/programs" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={studentSuccessImage} alt="Students celebrating success" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our UK Academic Programmes
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Comprehensive preparation programmes designed for UK curriculum excellence
          </p>
        </div>
      </section>

      {/* Exam Preparation Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              UK Exam Preparation Programmes
            </h2>
            <p className="text-lg text-gray-600">
              Specialized preparation for GCSE, A-Level, 11+ and Key Stage assessments
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
                          2 Sessions/Week
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
              Year Group Programmes
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive academic support tailored to specific UK school years
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
      <section className="py-16 bg-gray-50">
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
                Success Stories That Inspire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Over 5,000 students have achieved their academic dreams with our personalized programs. 
                From improved grades to college admissions, our students consistently exceed expectations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">95% improvement in student grades</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Average 2+ GCSE grade improvement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">98% university acceptance rate</span>
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
            Ready to Excel in Your Studies?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have achieved their academic goals with our proven programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
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

export default Programs;
