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
      title: "SAT Preparation",
      icon: GraduationCap,
      duration: "12-16 weeks",
      sessions: "2-3 sessions/week",
      description: "Comprehensive SAT preparation covering all sections with proven strategies and practice tests.",
      features: [
        "Evidence-Based Reading and Writing",
        "Mathematics (Calculator & No Calculator)",
        "Essay Writing (Optional)",
        "Full-length practice tests",
        "Score improvement guarantee",
        "College application guidance"
      ],
      targetScore: "1400+ SAT Score",
      color: "border-blue-500 bg-blue-50"
    },
    {
      title: "IB Program Support",
      icon: Award,
      duration: "Full academic year",
      sessions: "3-4 sessions/week",
      description: "Complete International Baccalaureate program support for all subjects and requirements.",
      features: [
        "Higher Level (HL) subjects",
        "Standard Level (SL) subjects",
        "Extended Essay guidance",
        "Theory of Knowledge (TOK)",
        "Creativity, Activity, Service (CAS)",
        "Internal Assessment support"
      ],
      targetScore: "35+ IB Points",
      color: "border-purple-500 bg-purple-50"
    },
    {
      title: "IGCSE Excellence",
      icon: BookOpen,
      duration: "2 academic years",
      sessions: "2-4 sessions/week",
      description: "Cambridge IGCSE preparation covering core and extended subjects with expert guidance.",
      features: [
        "Core & Extended Mathematics",
        "Sciences (Biology, Chemistry, Physics)",
        "English Language & Literature",
        "Modern Foreign Languages",
        "Social Sciences",
        "Coursework and practical support"
      ],
      targetScore: "A*/A Grades",
      color: "border-green-500 bg-green-50"
    },
    {
      title: "Common Core Mastery",
      icon: Target,
      duration: "Ongoing support",
      sessions: "2-3 sessions/week",
      description: "Standards-aligned instruction focusing on critical thinking and problem-solving skills.",
      features: [
        "Mathematics (K-12 aligned)",
        "English Language Arts",
        "Critical thinking development",
        "Problem-solving strategies",
        "Assessment preparation",
        "Progress monitoring"
      ],
      targetScore: "Proficient/Advanced",
      color: "border-orange-500 bg-orange-50"
    }
  ];

  const gradePrograms = [
    {
      title: "High School Program (Grades 9-12)",
      description: "College preparatory curriculum with focus on standardized test preparation and advanced coursework.",
      subjects: [
        "Advanced Mathematics (Algebra II, Pre-Calculus, Calculus)",
        "AP Courses (Multiple subjects available)",
        "Sciences (Biology, Chemistry, Physics)",
        "SAT/ACT Preparation",
        "College Application Support",
        "Academic Writing & Research"
      ],
      benefits: [
        "College readiness preparation",
        "Standardized test excellence",
        "AP exam preparation",
        "University admission guidance"
      ]
    },
    {
      title: "Middle School Program (Grades 6-8)",
      description: "Foundation building program focusing on core academic skills and study habits development.",
      subjects: [
        "Pre-Algebra & Geometry Foundations",
        "Life Sciences & Physical Sciences",
        "Language Arts & Reading Comprehension",
        "Social Studies & Geography",
        "Study Skills & Organization",
        "Critical Thinking Development"
      ],
      benefits: [
        "Strong academic foundation",
        "Study skills development",
        "Confidence building",
        "High school preparation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Academic Programs | Pupilenroll - SAT, IB, IGCSE & More</title>
        <meta name="description" content="Explore Pupilenroll's comprehensive academic programs including SAT prep, IB support, IGCSE excellence, and Common Core mastery. Expert tutoring for grades 6-12." />
        <meta name="keywords" content="SAT preparation, IB program support, IGCSE tutoring, Common Core, high school tutoring, middle school support" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pupilenroll.com/programs" />
        <meta property="og:title" content="Academic Programs | Pupilenroll - SAT, IB, IGCSE & More" />
        <meta property="og:description" content="Comprehensive academic programs designed for excellence in SAT, IB, IGCSE, and grade-level support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pupilenroll.com/programs" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={studentSuccessImage} alt="Students celebrating success" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Academic Programs
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Comprehensive preparation programs designed for academic excellence
          </p>
        </div>
      </section>

      {/* Exam Preparation Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exam Preparation Programs
            </h2>
            <p className="text-lg text-gray-600">
              Specialized preparation for major international examinations
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
              Grade-Level Programs
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive academic support tailored to specific grade levels
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
                  <span className="text-gray-700">Average 200+ point SAT score increase</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">98% college acceptance rate</span>
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
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
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
