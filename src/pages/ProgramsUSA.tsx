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

const ProgramsUSA = () => {
  const whatsappNumber = "+917906601283";

  const programs = [
    {
      title: "SAT Preparation",
      icon: GraduationCap,
      duration: "6-12 months",
      sessions: "3-4 sessions/week",
      description: "Comprehensive SAT preparation program focusing on Math, Reading, and Writing sections for US college admissions.",
      features: [
        "SAT Math (Algebra, Geometry, Trigonometry)",
        "Evidence-Based Reading and Writing",
        "Practice tests and score analysis",
        "Test-taking strategies",
        "College application guidance",
        "Score improvement guarantee"
      ],
      targetScore: "1400+ SAT Score",
      color: "border-blue-500 bg-blue-50"
    },
    {
      title: "AP Mathematics & Sciences",
      icon: Award,
      duration: "Full academic year",
      sessions: "2-3 sessions/week",
      description: "Advanced Placement courses preparation for college credit and enhanced university applications.",
      features: [
        "AP Calculus AB/BC",
        "AP Statistics",
        "AP Physics 1, 2, C",
        "AP Chemistry",
        "AP Biology",
        "College Board exam preparation"
      ],
      targetScore: "Score 4-5 on AP Exams",
      color: "border-purple-500 bg-purple-50"
    },
    {
      title: "High School Mathematics",
      icon: BookOpen,
      duration: "Ongoing support",
      sessions: "2-3 sessions/week",
      description: "Complete high school mathematics curriculum support from Algebra to Calculus.",
      features: [
        "Algebra I & II",
        "Geometry & Trigonometry",
        "Pre-Calculus",
        "Calculus (Honors)",
        "Statistics & Probability",
        "Mathematical modeling"
      ],
      targetScore: "A Grade Achievement",
      color: "border-green-500 bg-green-50"
    },
    {
      title: "Common Core Standards",
      icon: Target,
      duration: "Grade-specific support",
      sessions: "2-3 sessions/week",
      description: "Aligned with Common Core State Standards for comprehensive US curriculum mastery.",
      features: [
        "Grades 6-12 Mathematics",
        "Problem-solving strategies",
        "Mathematical practices",
        "Critical thinking development",
        "State assessment preparation",
        "Progress monitoring"
      ],
      targetScore: "Proficient/Advanced on State Tests",
      color: "border-orange-500 bg-orange-50"
    }
  ];

  const gradePrograms = [
    {
      title: "High School Programme (Grades 9-12)",
      description: "Comprehensive support for high school mathematics, SAT prep, and AP courses for US students.",
      subjects: [
        "Algebra II & Pre-Calculus",
        "AP Calculus AB/BC & Statistics",
        "SAT/ACT Mathematics",
        "AP Sciences (Physics, Chemistry, Biology)",
        "College application essays",
        "University preparation & guidance"
      ],
      benefits: [
        "Higher GPA achievement",
        "College admission success",
        "AP exam excellence",
        "Scholarship opportunities"
      ]
    },
    {
      title: "Middle School Programme (Grades 6-8)",
      description: "Foundation building programme preparing students for high school success and advanced mathematics.",
      subjects: [
        "Pre-Algebra & Algebra I foundations",
        "Geometry basics & spatial reasoning",
        "Statistics & probability introduction",
        "Problem-solving & critical thinking",
        "Science fundamentals",
        "Study skills & organization"
      ],
      benefits: [
        "Strong math foundations",
        "High school readiness",
        "Confidence building",
        "Academic excellence habits"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>USA Maths & Science Academic Programmes | MathBeam.com - SAT, AP & Common Core</title>
        <meta name="description" content="Explore MathBeam.com's comprehensive USA curriculum programmes including SAT preparation, AP courses, High School math, and Common Core standards. Expert tutoring across all US states." />
        <meta name="keywords" content="SAT math tutoring USA, AP tutoring, high school math support, Common Core tutoring, college prep tutoring, ACT preparation USA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mathbeam.com/programs" />
        <meta property="og:title" content="USA Maths & Science Academic Programmes | MathBeam.com - SAT, AP & Common Core" />
        <meta property="og:description" content="Comprehensive USA curriculum programmes designed for excellence in SAT, AP courses, and Common Core standards." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mathbeam.com/programs" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "MathBeam USA Programs",
            "description": "Expert online academic programmes for USA students specializing in SAT, AP courses, and Common Core curriculum",
            "url": "https://mathbeam.com/programs",
            "telephone": "+917906601283",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "addressCountry": "USA"
            },
            "offers": {
              "@type": "Offer",
              "name": "Academic Programme Tutoring",
              "description": "Comprehensive tutoring programmes starting from $40/hour",
              "priceCurrency": "USD",
              "price": "40"
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
            Our USA Academic Programmes
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Comprehensive preparation programmes designed for US curriculum excellence
          </p>
        </div>
      </section>

      {/* Exam Preparation Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              USA Curriculum Preparation Programmes
            </h2>
            <p className="text-lg text-gray-600">
              Specialized preparation for SAT, AP courses, High School math, and Common Core standards
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
              Comprehensive academic support tailored to US educational standards
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
                USA Success Stories That Inspire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Over 3,000 US students have achieved their academic dreams with our personalized programs. 
                From improved SAT scores to successful college admissions at top US universities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Average 200+ point SAT improvement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">85% achieve AP score of 4 or 5</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">92% college acceptance rate</span>
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
            Ready to Excel in Your US Studies?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of US students who have achieved their academic goals with our proven programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to schedule a free consultation for USA programs.`, '_blank')}
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

export default ProgramsUSA;