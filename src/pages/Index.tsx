
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
  TrendingUp
} from "lucide-react";
import childrenStudying from "@/assets/children-studying.jpg";
import onlineLearningChild from "@/assets/online-learning-child.jpg";
import studentsSuccess from "@/assets/students-success.jpg";

const Index = () => {
  const whatsappNumber = "+917906601283";

  const examSections = [
    {
      title: "Common Core Exam",
      description: "Comprehensive preparation for Common Core State Standards assessments, focusing on critical thinking and problem-solving skills.",
      icon: Target,
      features: ["Math & English Language Arts", "Grade-specific curriculum alignment", "Practice assessments", "Progress tracking"]
    },
    {
      title: "SAT Exam",
      description: "Expert SAT preparation to maximize your college admission chances with proven strategies and practice tests.",
      icon: GraduationCap,
      features: ["Evidence-Based Reading", "Writing & Language", "Math (Calculator & No Calculator)", "Optional Essay preparation"]
    },
    {
      title: "IB Exam",
      description: "International Baccalaureate program support for all subjects with experienced IB-certified instructors.",
      icon: Award,
      features: ["Higher Level (HL) subjects", "Standard Level (SL) subjects", "Extended Essay guidance", "Theory of Knowledge (TOK)"]
    },
    {
      title: "IGCSE Exam",
      description: "Cambridge IGCSE preparation covering all major subjects with international curriculum expertise.",
      icon: BookOpen,
      features: ["Core & Extended Mathematics", "Sciences (Biology, Chemistry, Physics)", "Languages & Literature", "Social Sciences"]
    }
  ];

  const gradePrograms = [
    {
      title: "High School (Grades 9-12)",
      description: "Comprehensive academic support for high school students preparing for college and standardized tests.",
      subjects: ["Advanced Mathematics", "Sciences", "AP Courses", "College Prep", "SAT/ACT Preparation"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Middle School (Grades 6-8)",
      description: "Building strong foundations in core subjects while developing critical thinking and study skills.",
      subjects: ["Algebra & Geometry", "Life Sciences", "Language Arts", "Social Studies", "Study Skills"],
      color: "bg-green-50 border-green-200"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      grade: "Grade 12",
      exam: "SAT",
      score: "1540/1600",
      feedback: "The personalized attention and expert guidance helped me achieve my target score. I'm now attending my dream university!",
      rating: 5
    },
    {
      name: "Michael Chen",
      grade: "Grade 11",
      exam: "IB",
      score: "42/45",
      feedback: "The IB program support was exceptional. My tutors understood the curriculum perfectly and helped me excel in all subjects.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      grade: "Grade 10",
      exam: "IGCSE",
      score: "8 A*s",
      feedback: "Thanks to the structured approach and continuous feedback, I achieved outstanding results in my IGCSE exams.",
      rating: 5
    },
    {
      name: "David Wilson",
      grade: "Grade 9",
      exam: "Common Core",
      score: "Advanced",
      feedback: "The Common Core preparation helped me build strong analytical skills. I feel confident in my academic abilities now.",
      rating: 5
    }
  ];

  const comparisonData = [
    {
      aspect: "Learning Approach",
      traditional: "One-size-fits-all methodology",
      pupilenroll: "Personalized learning paths tailored to individual needs"
    },
    {
      aspect: "Schedule Flexibility",
      traditional: "Fixed time slots, limited rescheduling",
      pupilenroll: "Flexible scheduling, 24/7 online support available"
    },
    {
      aspect: "Progress Tracking",
      traditional: "Basic progress reports",
      pupilenroll: "Real-time analytics and detailed performance insights"
    },
    {
      aspect: "Teacher Quality",
      traditional: "Variable instructor experience",
      pupilenroll: "Certified experts with proven track records"
    },
    {
      aspect: "Technology Integration",
      traditional: "Limited use of educational technology",
      pupilenroll: "AI-powered learning tools and interactive platforms"
    },
    {
      aspect: "Cost Effectiveness",
      traditional: "Higher costs for premium tutoring",
      pupilenroll: "Competitive pricing with better value proposition"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${childrenStudying})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Excel in Your Academic Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert tutoring for SAT, IB, IGCSE, Common Core, and all grade levels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Your Free Class - Connect with WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 relative group"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                <span className="group-hover:opacity-100 opacity-100">WhatsApp Us</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Preparation Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Exam Preparation
            </h2>
            <p className="text-lg text-gray-600">
              Specialized programs designed to help you excel in every major examination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examSections.map((exam, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <exam.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{exam.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {exam.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exam.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Level Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Grade-Specific Programs
            </h2>
            <p className="text-lg text-gray-600">
              Tailored curriculum support for middle and high school students
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gradePrograms.map((program, index) => (
              <Card key={index} className={`border-2 ${program.color} relative overflow-hidden`}>
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10"
                  style={{ backgroundImage: `url(${onlineLearningChild})` }}
                ></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PupilEnroll Way?
            </h2>
            <p className="text-lg text-gray-600">
              See how our modern approach compares to traditional tutoring methods
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Mobile-friendly header */}
            <div className="md:hidden">
              <div className="bg-gray-100 p-4 font-semibold text-gray-900 text-center">
                Why Choose PupilEnroll Way?
              </div>
            </div>
            
            {/* Desktop header */}
            <div className="hidden md:grid grid-cols-3 gap-0">
              <div className="bg-gray-100 p-6 font-semibold text-gray-900">
                Comparison Aspect
              </div>
              <div className="bg-red-50 p-6 font-semibold text-red-800 text-center">
                Traditional Tutoring
              </div>
              <div className="bg-green-50 p-6 font-semibold text-green-800 text-center">
                PupilEnroll Way
              </div>
            </div>
            
            {comparisonData.map((item, index) => (
              <div key={index} className="border-t">
                {/* Mobile layout */}
                <div className="md:hidden p-4 space-y-4">
                  <div className="font-medium text-gray-900 text-lg">
                    {item.aspect}
                  </div>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-red-800 mb-1">Traditional Tutoring</div>
                      <div className="text-gray-700 text-sm">{item.traditional}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-green-800 mb-1">PupilEnroll Way</div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item.pupilenroll}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-3 gap-0">
                  <div className="p-6 font-medium text-gray-900 bg-gray-50">
                    {item.aspect}
                  </div>
                  <div className="p-6 text-gray-700 bg-red-25">
                    {item.traditional}
                  </div>
                  <div className="p-6 text-gray-700 bg-green-25">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{item.pupilenroll}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our students who achieved their academic goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.grade}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {testimonial.exam}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-green-600">{testimonial.score}</span>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "{testimonial.feedback}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Class Section */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${studentsSuccess})` }}
        ></div>
        <div className="absolute inset-0 bg-blue-600 bg-opacity-80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Success Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your first class today and experience the difference personalized learning makes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Clock className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 relative group"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in booking a class. Can you help me get started?`, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="group-hover:opacity-100 opacity-100">WhatsApp Us</span>
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>1000+ Students Taught</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
