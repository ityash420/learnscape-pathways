
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  MessageCircle, 
  Star, 
  Users, 
  Clock,
  BookOpen,
  Code,
  AlertCircle,
  Calculator,
  PenTool
} from "lucide-react";

const Pricing = () => {
  const whatsappNumber = "+917906601283";

  const showPaymentNotification = () => {
    alert("Full upfront payment is required for all packages.");
  };

  const mathPlans = [
    {
      name: "3 Month Package",
      price: "$899",
      originalPrice: "$1,200",
      duration: "3 months",
      description: "Intensive Math preparation for quick results",
      popular: false,
      features: [
        "36 hours of Math tutoring",
        "Personalized study plan",
        "Weekly progress assessments",
        "Practice tests and materials",
        "Email support",
        "Performance tracking",
        "Homework assistance"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$25/hour"
    },
    {
      name: "6 Month Package", 
      price: "$1,599",
      originalPrice: "$2,100",
      duration: "6 months",
      description: "Comprehensive Math preparation with balanced pace",
      popular: true,
      features: [
        "72 hours of Math tutoring",
        "Detailed curriculum coverage",
        "Monthly progress reports",
        "Mock exams included",
        "Priority support",
        "Flexible scheduling",
        "Revision sessions",
        "Advanced problem solving"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$22/hour"
    },
    {
      name: "Full Year Package",
      price: "$2,699",
      originalPrice: "$3,600",
      duration: "12 months",
      description: "Complete Math academic year support with maximum value",
      popular: false,
      features: [
        "144 hours of Math tutoring",
        "Full curriculum mastery",
        "Continuous assessment",
        "University prep guidance",
        "24/7 support access",
        "Family progress meetings",
        "Guaranteed improvement",
        "Additional resources",
        "Competition prep"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$19/hour"
    }
  ];

  const englishPlans = [
    {
      name: "3 Month Package",
      price: "$899",
      originalPrice: "$1,200",
      duration: "3 months",
      description: "Intensive English preparation for quick results",
      popular: false,
      features: [
        "36 hours of English tutoring",
        "Reading comprehension focus",
        "Writing skills development",
        "Grammar and vocabulary",
        "Speaking practice sessions",
        "Email support",
        "Performance tracking"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$25/hour"
    },
    {
      name: "6 Month Package", 
      price: "$1,599",
      originalPrice: "$2,100",
      duration: "6 months",
      description: "Comprehensive English preparation with balanced pace",
      popular: true,
      features: [
        "72 hours of English tutoring",
        "Literature analysis",
        "Essay writing mastery",
        "Monthly progress reports",
        "Mock exams included",
        "Priority support",
        "Flexible scheduling",
        "Creative writing skills"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$22/hour"
    },
    {
      name: "Full Year Package",
      price: "$2,699",
      originalPrice: "$3,600",
      duration: "12 months",
      description: "Complete English academic year support with maximum value",
      popular: false,
      features: [
        "144 hours of English tutoring",
        "Full curriculum mastery",
        "Advanced composition",
        "University prep guidance",
        "24/7 support access",
        "Family progress meetings",
        "Guaranteed improvement",
        "Additional resources",
        "Public speaking training"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$19/hour"
    }
  ];

  const codingPlans = [
    {
      name: "Basic Coding",
      price: "$1,299",
      originalPrice: "$1,800",
      duration: "3 months",
      description: "Introduction to programming fundamentals",
      features: [
        "Python programming basics",
        "HTML/CSS fundamentals",
        "JavaScript introduction",
        "Basic algorithms",
        "Project-based learning",
        "Code review sessions"
      ],
      sessions: "2 sessions/week",
      hourlyRate: "$54/hour"
    },
    {
      name: "Advanced Coding",
      price: "$2,499",
      originalPrice: "$3,600",
      duration: "6 months",
      description: "Advanced programming concepts and web development",
      features: [
        "Advanced Python/JavaScript",
        "React framework",
        "Database management",
        "API development",
        "Portfolio projects",
        "Industry best practices",
        "Career guidance"
      ],
      sessions: "2 sessions/week",
      hourlyRate: "$52/hour"
    },
    {
      name: "Full Stack Developer",
      price: "$3,999",
      originalPrice: "$6,000",
      duration: "12 months",
      description: "Complete web development bootcamp",
      features: [
        "Frontend & Backend development",
        "Modern frameworks (React, Node.js)",
        "Database design & management",
        "Cloud deployment",
        "Real-world projects",
        "Interview preparation",
        "Job placement assistance",
        "Continuous mentorship"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$46/hour"
    }
  ];

  const examPackages = [
    {
      exam: "SAT Preparation",
      duration: "3 months",
      price: "$1,299",
      originalPrice: "$1,800",
      sessions: "36 hours total",
      features: [
        "Diagnostic assessment",
        "Personalized study plan",
        "Practice tests (8 full-length)",
        "Score analysis and improvement",
        "College application guidance",
        "Score improvement guarantee"
      ]
    },
    {
      exam: "IB Program Support",
      duration: "Full year",
      price: "$2,999",
      originalPrice: "$4,500",
      sessions: "120 hours total",
      features: [
        "All IB subjects covered",
        "Extended Essay guidance",
        "TOK support",
        "Internal Assessment help",
        "CAS activity planning",
        "University application support"
      ]
    },
    {
      exam: "IGCSE Package",
      duration: "2 years",
      price: "$4,999",
      originalPrice: "$7,200",
      sessions: "240 hours total",
      features: [
        "Core and Extended subjects",
        "Coursework assistance",
        "Practical exam preparation",
        "Mock examinations",
        "Progress tracking",
        "University pathway guidance"
      ]
    }
  ];

  const addOns = [
    {
      service: "Extra Practice Sessions",
      price: "$45/hour",
      originalPrice: "$60/hour",
      description: "Additional tutoring hours beyond your package"
    },
    {
      service: "Mock Exam Administration",
      price: "$99/exam",
      originalPrice: "$150/exam",
      description: "Full-length practice exams with detailed analysis"
    },
    {
      service: "College Application Support",
      price: "$349",
      originalPrice: "$500",
      description: "Complete guidance for university applications"
    },
    {
      service: "Homework Support Service",
      price: "$29/hour",
      originalPrice: "$40/hour",
      description: "Daily homework help and assignment assistance"
    }
  ];

  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Affordable Online Tutoring Packages | Pupilenroll - Math, English, Coding Courses</title>
        <meta name="description" content="Discover affordable online tutoring packages for Math, English, and Coding. Expert tutors offering SAT, IB, IGCSE preparation with guaranteed results. Special pricing for parents." />
        <meta name="keywords" content="online tutoring packages, math tutoring courses, english tutoring programs, coding courses, SAT preparation, IB tutoring, IGCSE classes, affordable tutoring, online learning packages" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pupilenroll.com/pricing" />
        <meta property="og:title" content="Affordable Online Tutoring Packages | Pupilenroll - Math, English, Coding Courses" />
        <meta property="og:description" content="Expert online tutoring courses with special pricing. Choose from Math, English, and Coding packages designed for student success." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pupilenroll.com/pricing" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Online Tutoring Packages",
              "description": "Comprehensive online tutoring packages for Math, English, and Coding",
              "provider": {
                "@type": "Organization",
                "name": "Pupilenroll",
                "url": "https://pupilenroll.com"
              },
              "courseCode": "MATH-ENG-CODE",
              "educationalCredentialAwarded": "Certificate of Completion"
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Affordable Online Tutoring Packages
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Special pricing for parents - Choose the perfect course package for your child's success
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Parent-Friendly Pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Guaranteed Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Expert Tutors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Math Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Calculator className="h-8 w-8 mr-3 text-blue-600" />
              Math Tutoring Course Packages
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive math tutoring courses from basic concepts to advanced problem solving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mathPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'border-2 border-blue-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-blue-600">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-600">{plan.price}</div>
                    <div className="text-lg text-gray-500 line-through">{plan.originalPrice}</div>
                    <div className="text-sm text-green-600 font-semibold">Special Parent Pricing!</div>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{plan.hourlyRate} effective rate</div>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration: {plan.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {plan.sessions}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    onClick={() => {
                      showPaymentNotification();
                      window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${plan.name} Math course package. Can you provide more details?`, '_blank');
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enroll in Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* English Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <PenTool className="h-8 w-8 mr-3 text-green-600" />
              English Tutoring Course Packages
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive English tutoring courses from grammar basics to advanced composition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {englishPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'border-2 border-green-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-green-600">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-green-600">{plan.price}</div>
                    <div className="text-lg text-gray-500 line-through">{plan.originalPrice}</div>
                    <div className="text-sm text-green-600 font-semibold">Special Parent Pricing!</div>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{plan.hourlyRate} effective rate</div>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration: {plan.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {plan.sessions}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'}`}
                    onClick={() => {
                      showPaymentNotification();
                      window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${plan.name} English course package. Can you provide more details?`, '_blank');
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enroll in Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coding Course Programs
            </h2>
            <p className="text-lg text-gray-600">
              Learn programming from basics to advanced web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {codingPlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600 flex items-center">
                    <Code className="h-5 w-5 mr-2" />
                    {plan.name}
                  </CardTitle>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration: {plan.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Sessions: {plan.sessions}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-lg text-gray-500 line-through">{plan.originalPrice}</div>
                    <div className="text-sm text-green-600 font-semibold">Special Parent Pricing!</div>
                  </div>
                  <div className="text-sm text-gray-500">{plan.hourlyRate} effective rate</div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => {
                      showPaymentNotification();
                      window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${plan.name} coding course program. Can you provide more details about enrollment?`, '_blank');
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start Coding Journey
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam-Specific Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exam Preparation Course Packages
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive preparation course packages for major examinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examPackages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{pkg.exam}</CardTitle>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration: {pkg.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Sessions: {pkg.sessions}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">{pkg.price}</div>
                    <div className="text-lg text-gray-500 line-through">{pkg.originalPrice}</div>
                    <div className="text-sm text-green-600 font-semibold">Special Parent Pricing!</div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full"
                    onClick={() => {
                      showPaymentNotification();
                      window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${pkg.exam} course package. Can you provide more details about enrollment?`, '_blank');
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enroll in Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Enhance your learning experience with these optional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{addon.service}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-blue-600">{addon.price}</div>
                    <div className="text-sm text-gray-500 line-through">{addon.originalPrice}</div>
                    <div className="text-xs text-green-600 font-semibold">Special Rate!</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    {addon.description}
                  </p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      showPaymentNotification();
                      window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to add ${addon.service} to my plan. Can you help?`, '_blank');
                    }}
                  >
                    Add to Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ/Guarantee Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Guarantee
            </h2>
            <p className="text-xl text-blue-100">
              We're confident in our teaching methods and student success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Score Improvement</h3>
              <p className="text-blue-100">
                Guaranteed score improvement or additional sessions at no cost
              </p>
            </div>

            <div>
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
              <p className="text-blue-100">
                Certified instructors with proven track records of student success
              </p>
            </div>

            <div>
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Promise</h3>
              <p className="text-blue-100">
                30-day money-back guarantee if you're not completely satisfied
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to learn more about your course packages and get started with a consultation.`, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
