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
  TrendingUp
} from "lucide-react";
import childrenStudying from "@/assets/children-studying.jpg";
import onlineLearningChild from "@/assets/online-learning-child.jpg";
import studentsSuccess from "@/assets/students-success.jpg";

const Index = () => {
  const whatsappNumber = "+917906601283";

  const examSections = [
    {
      title: "GCSE Maths",
      description: "Comprehensive GCSE maths preparation covering all key topics with exam-focused techniques and strategies.",
      icon: Target,
      features: ["Number & Algebra", "Geometry & Measures", "Statistics & Probability", "Exam Technique & Practice"]
    },
    {
      title: "A-Level Maths",
      description: "Advanced A-Level mathematics support to help students excel in their further education and university applications.",
      icon: GraduationCap,
      features: ["Core Mathematics", "Statistics", "Mechanics", "Further Mathematics"]
    },
    {
      title: "IB Maths",
      description: "International Baccalaureate mathematics program support with experienced IB-qualified instructors.",
      icon: Award,
      features: ["Mathematics: Analysis & Approaches", "Mathematics: Applications & Interpretation", "Internal Assessment", "Extended Essay Support"]
    },
    {
      title: "Key Stage 2 & 3",
      description: "Strong foundation building for younger students in preparation for GCSE success.",
      icon: BookOpen,
      features: ["Number & Place Value", "Fractions & Decimals", "Geometry & Shape", "Problem Solving Skills"]
    }
  ];

  const gradePrograms = [
    {
      title: "Secondary School (Years 7-13)",
      description: "Comprehensive academic support for secondary students preparing for GCSEs, A-Levels and university applications.",
      subjects: ["GCSE Mathematics", "A-Level Mathematics", "Further Mathematics", "University Preparation", "Exam Techniques"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Primary School (Years 1-6)",
      description: "Building strong foundations in mathematics while developing problem-solving and analytical thinking skills.",
      subjects: ["Number & Calculation", "Geometry & Measurement", "Statistics & Data", "Problem Solving", "Mathematical Reasoning"],
      color: "bg-green-50 border-green-200"
    }
  ];

  const testimonials = [
    {
      name: "Emma Thompson",
      grade: "Year 13",
      exam: "A-Level",
      score: "A*",
      feedback: "The personalised attention and expert guidance helped me achieve my target grade. I'm now studying at my dream university!",
      rating: 5
    },
    {
      name: "James Mitchell",
      grade: "Year 12",
      exam: "IB",
      score: "42/45",
      feedback: "The IB maths support was exceptional. My tutor understood the curriculum perfectly and helped me excel in all areas.",
      rating: 5
    },
    {
      name: "Sophie Williams",
      grade: "Year 11",
      exam: "GCSE",
      score: "Grade 9",
      feedback: "Thanks to the structured approach and continuous feedback, I achieved outstanding results in my GCSE maths.",
      rating: 5
    },
    {
      name: "Oliver Brown",
      grade: "Year 9",
      exam: "KS3",
      score: "Outstanding",
      feedback: "The Key Stage 3 preparation helped me build strong analytical skills. I feel confident in my maths abilities now.",
      rating: 5
    }
  ];

  const comparisonData = [
    {
      aspect: "Learning Approach",
      traditional: "One-size-fits-all methodology",
      mathbeam: "Personalized learning paths tailored to individual needs"
    },
    {
      aspect: "Schedule Flexibility",
      traditional: "Fixed time slots, limited rescheduling",
      mathbeam: "Flexible scheduling, 24/7 online support available"
    },
    {
      aspect: "Progress Tracking",
      traditional: "Basic progress reports",
      mathbeam: "Real-time analytics and detailed performance insights"
    },
    {
      aspect: "Teacher Quality",
      traditional: "Variable instructor experience",
      mathbeam: "Certified experts with proven track records"
    },
    {
      aspect: "Technology Integration",
      traditional: "Limited use of educational technology",
      mathbeam: "AI-powered learning tools and interactive platforms"
    },
    {
      aspect: "Cost Effectiveness",
      traditional: "Higher costs for premium tutoring",
      mathbeam: "Competitive pricing with better value proposition"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Online Math & Science Tutoring | Expert 1-on-1 Tuition | GCSE, A-Level, IB</title>
        <meta name="description" content="Expert online math & science tutoring for GCSE, A-Level, IB & all Key Stages. 98% success rate, qualified UK tutors. Book your FREE trial lesson today!" />
        <meta name="keywords" content="online math tutoring, science tutoring, GCSE maths, A-level maths, IB tutoring, Key Stage tutoring, UK tutors, exam preparation" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="google-site-verification" content="your-google-site-verification-code" />
        <link rel="canonical" href="https://pupilenroll.com/" />
        <meta property="og:title" content="Online Math & Science Tutoring | Expert 1-on-1 Tuition | GCSE, A-Level, IB" />
        <meta property="og:description" content="Expert online math & science tutoring for GCSE, A-Level, IB & all Key Stages. 98% success rate, qualified UK tutors. Book your FREE trial lesson today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pupilenroll.com/" />
        <meta property="og:image" content="https://pupilenroll.com/og-image.jpg" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Pupilenroll - Online Math & Science Tutoring" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Math & Science Tutoring | Expert 1-on-1 Tuition" />
        <meta name="twitter:description" content="Expert online math & science tutoring for GCSE, A-Level, IB & all Key Stages. 98% success rate, qualified UK tutors." />
        <meta name="twitter:image" content="https://pupilenroll.com/og-image.jpg" />
        <meta name="twitter:site" content="@pupilenroll" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Pupilenroll",
            "description": "Expert online math and science tutoring platform specializing in GCSE, A-Level, IB, and Key Stage preparation for UK students",
            "url": "https://pupilenroll.com",
            "telephone": "+917906601283",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Visakhapatnam",
              "addressRegion": "Andhra Pradesh",
              "addressCountry": "India"
            },
            "sameAs": [
              "https://wa.me/917906601283"
            ],
            "offers": {
              "@type": "Offer",
              "name": "1-on-1 Online Tutoring",
              "description": "Personalized online tutoring sessions"
            }
          })}
        </script>
      </Helmet>
      
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${childrenStudying})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Science Tutoring for Academic Excellence
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto">
              Expert tutoring for GCSE, A-Level, IB, and all Key Stages across the UK
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto px-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto text-center py-4 px-6 text-base font-medium"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to book a FREE demo session. Please let me know the available time slots.`, '_blank')}
              >
                Book Your Free Class - Connect with WhatsApp
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto text-center py-4 px-6 text-base font-medium"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in 1-to-1 tutoring sessions. Can you provide more details?`, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                1-to-1 Tutoring
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Pricing Banner */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <span className="text-2xl md:text-3xl font-bold relative">
                £30 per hour
                <div className="absolute inset-0 bg-white h-0.5 top-1/2 transform -translate-y-1/2"></div>
              </span>
              <span className="text-2xl">→</span>
              <span className="text-2xl md:text-3xl font-bold text-yellow-300">Special Price!</span>
            </div>
            <p className="text-lg font-semibold">Limited time offer - Save big!</p>
          </div>
        </div>
      </section>

      {/* Free Demo Session Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-indigo-200 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-blue-300 rounded-full opacity-25"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Book your{" "}
                  <span className="relative">
                    <span className="text-blue-600">Free Demo</span>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-blue-300 opacity-40 -z-10 rounded"></div>
                  </span>{" "}
                  session
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get a free academic counselling session with our expert tutors
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">What you'll get in your demo:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">1-on-1 expert session</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Learning assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Custom study plan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Interactive experience</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to book a FREE demo session. Please let me know the available time slots.`, '_blank')}
                >
                  Book a free demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I have some questions about your tutoring services.`, '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ask Questions
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Demo Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">4.9★</div>
                  <div className="text-sm text-gray-600 font-medium">Rating</div>
                </div>
              </div>
            </div>

            {/* Right Visual Content */}
            <div className="relative">
              <div className="relative">
                {/* Main visual with existing assets */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={onlineLearningChild}
                    alt="Student in online learning session"
                    className="w-full h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Experience Interactive Learning</h3>
                    <p className="text-blue-100">Join thousands of successful students</p>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live Session</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-white rounded-xl p-3 shadow-lg transform -translate-y-1/2">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-gray-800">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Preparation Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              UK Exam Board Expertise
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Specialised programmes designed to help you excel in every major UK examination board
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Exam Boards We Support</h3>
              <p className="text-blue-800 text-lg">
                Comprehensive coverage across all major UK examination boards including <strong>AQA</strong>, <strong>OCR</strong>, <strong>Edexcel</strong>, and <strong>WJEC</strong> - ensuring your child receives targeted preparation aligned with their specific curriculum and assessment requirements.
              </p>
            </div>
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
              Year Group Programmes
            </h2>
            <p className="text-lg text-gray-600">
              Tailored curriculum support for primary and secondary school students across the UK
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
              Why Choose MathBeam Way?
            </h2>
            <p className="text-lg text-gray-600">
              See how our modern approach compares to traditional tutoring methods
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Mobile-friendly header */}
            <div className="md:hidden">
              <div className="bg-gray-100 p-4 font-semibold text-gray-900 text-center">
                Why Choose MathBeam Way?
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
                MathBeam Way
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
                      <div className="text-sm font-medium text-green-800 mb-1">MathBeam Way</div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item.mathbeam}</span>
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
                      <span>{item.mathbeam}</span>
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
            <Button size="lg">
              <Clock className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            
            <Button 
              size="lg"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in 1-to-1 tutoring sessions. Can you provide pricing and schedule?`, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              <span>1-to-1 Tutoring</span>
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
    </>
  );
};

export default Index;
