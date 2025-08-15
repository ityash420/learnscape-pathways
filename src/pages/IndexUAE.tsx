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

const IndexUAE = () => {
  const whatsappNumber = "+917906601283";

  const examSections = [
    {
      title: "IGCSE Maths",
      description: "Comprehensive IGCSE maths preparation covering all key topics with exam-focused techniques and strategies.",
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
      title: "MOE UAE Curriculum",
      description: "Strong foundation building aligned with UAE Ministry of Education curriculum standards.",
      icon: BookOpen,
      features: ["Number & Place Value", "Fractions & Decimals", "Geometry & Shape", "Problem Solving Skills"]
    }
  ];

  const gradePrograms = [
    {
      title: "Secondary School (Grades 9-12)",
      description: "Comprehensive academic support for secondary students preparing for IGCSE, A-Levels and university applications.",
      subjects: ["IGCSE Mathematics", "A-Level Mathematics", "Further Mathematics", "University Preparation", "Exam Techniques"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Primary & Middle School (Grades 1-8)",
      description: "Building strong foundations in mathematics while developing problem-solving and analytical thinking skills.",
      subjects: ["Number & Calculation", "Geometry & Measurement", "Statistics & Data", "Problem Solving", "Mathematical Reasoning"],
      color: "bg-green-50 border-green-200"
    }
  ];

  const testimonials = [
    {
      name: "Amira Al-Zahra",
      grade: "Grade 12",
      exam: "A-Level",
      score: "A*",
      feedback: "The personalised attention and expert guidance helped me achieve my target grade. I'm now studying at my dream university!",
      rating: 5
    },
    {
      name: "Omar Hassan",
      grade: "Grade 11",
      exam: "IB",
      score: "42/45",
      feedback: "The IB maths support was exceptional. My tutor understood the curriculum perfectly and helped me excel in all areas.",
      rating: 5
    },
    {
      name: "Fatima Ahmed",
      grade: "Grade 10",
      exam: "IGCSE",
      score: "A*",
      feedback: "Thanks to the structured approach and continuous feedback, I achieved outstanding results in my IGCSE maths.",
      rating: 5
    },
    {
      name: "Khalid Mohammad",
      grade: "Grade 8",
      exam: "MOE UAE",
      score: "Excellent",
      feedback: "The MOE curriculum preparation helped me build strong analytical skills. I feel confident in my maths abilities now.",
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
      mathbeam: "Competitive pricing starting from AED 110/hour"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Expert Online Math & Science Tutoring UAE | MathBeam.com - IGCSE, IB, MOE Curriculum</title>
        <meta name="description" content="Learn maths online with top tutors in UAE for IGCSE, A-Level, IB & MOE curriculum. Flexible, affordable & results-driven. Starting AED 110/hour." />
        <meta name="keywords" content="online math tutoring UAE, online science tutoring Dubai, IGCSE preparation UAE, IB tutoring UAE, MOE curriculum support, A-Level tutoring UAE, 1-on-1 tutoring, exam preparation UAE" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mathbeam.com/" />
        <meta property="og:title" content="Expert Online Math & Science Tutoring UAE | MathBeam.com - IGCSE, IB, MOE Curriculum" />
        <meta property="og:description" content="Achieve academic excellence with expert 1-on-1 online math and science tutoring in UAE. 98% success rate, AED 110/hour." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mathbeam.com/" />
        <meta property="og:image" content="https://mathbeam.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Online Math & Science Tutoring UAE | MathBeam.com" />
        <meta name="twitter:description" content="Achieve academic excellence with expert 1-on-1 online math and science tutoring in UAE. 98% success rate." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "MathBeam UAE",
            "description": "Expert online math and science tutoring platform specializing in IGCSE, IB, A-Level, and MOE UAE curriculum preparation",
            "url": "https://mathbeam.com",
            "telephone": "+917906601283",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "addressCountry": "UAE"
            },
            "sameAs": [
              "https://wa.me/917906601283"
            ],
            "offers": {
              "@type": "Offer",
              "name": "1-on-1 Online Tutoring",
              "description": "Personalized online tutoring sessions starting from AED 110/hour",
              "priceCurrency": "AED",
              "price": "110"
            }
          })}
        </script>
      </Helmet>
      
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
              Expert tutoring for IGCSE, A-Level, IB, and MOE curriculum across UAE
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to book a FREE demo session. Please let me know the available time slots.`, '_blank')}
              >
                Book Your Free Class - Connect with WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in 1-to-1 tutoring sessions. Can you provide more details?`, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                1-to-1 Tutoring from AED 110/hour
              </Button>
            </div>
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
              UAE Curriculum Expertise
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Specialised programmes designed to help you excel in every major UAE curriculum and international board
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Curricula We Support</h3>
              <p className="text-blue-800 text-lg">
                Comprehensive coverage across all major curricula including <strong>MOE UAE</strong>, <strong>IGCSE (CIE Cambridge & Edexcel)</strong>, <strong>IB Programme</strong>, and <strong>A-Levels</strong> - ensuring your child receives targeted preparation aligned with their specific curriculum and assessment requirements.
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
                    <CardTitle className="text-xl text-gray-900">{exam.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {exam.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exam.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
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

      {/* Grade Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Programmes for Every Grade Level
            </h2>
            <p className="text-lg text-gray-600">
              From early years to university preparation, we support students at every stage of their academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gradePrograms.map((program, index) => (
              <Card key={index} className={`${program.color} border-2 hover:shadow-lg transition-all`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{program.title}</CardTitle>
                  <CardDescription className="text-gray-700 text-lg">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Core Subjects & Areas:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {program.subjects.map((subject, subjectIndex) => (
                        <div key={subjectIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700">{subject}</span>
                        </div>
                      )))}
                    </div>
                    <Button 
                      className="w-full mt-4"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in ${program.title} tutoring. Can you provide more details?`, '_blank')}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Success Stories from Our Students
            </h2>
            <p className="text-lg text-gray-600">
              Hear from students who have transformed their grades and confidence with MathBeam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-4">
                  <CardTitle className="text-xl font-semibold text-gray-900">{testimonial.name}</CardTitle>
                  <CardDescription className="text-gray-600">{testimonial.grade} - {testimonial.exam}</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-3">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-3">"{testimonial.feedback}"</p>
                  <Badge className="bg-green-100 text-green-800 font-semibold rounded-full px-3 py-1">
                    Score: {testimonial.score}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MathBeam vs Traditional Tutoring Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose MathBeam Over Traditional Tutoring?
            </h2>
            <p className="text-lg text-gray-600">
              Discover the benefits of our innovative approach to online math tutoring
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aspect</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditional Tutoring</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MathBeam</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {comparisonData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.aspect}</td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">{item.traditional}</td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">{item.mathbeam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Child's Math Skills?
          </h2>
          <p className="text-xl mb-8">
            Join MathBeam today and unlock your child's full potential with our expert online tutoring services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-gray-100"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm ready to get started with MathBeam.`, '_blank')}
            >
              Get Started Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-700"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I have more questions before I sign up.`, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default IndexUAE;
