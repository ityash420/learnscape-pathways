
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
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
  PenTool,
  DollarSign,
  PoundSterling,
  Moon,
  Sun
} from "lucide-react";
import collaborativeLearningImage from "@/assets/collaborative-learning.jpg";
import excellentGradesImage from "@/assets/excellent-grades.jpg";

const Pricing = () => {
  const whatsappNumber = "+917906601283";
  const [isUSD, setIsUSD] = useState(true);
  const [isDark, setIsDark] = useState(false);

  // Exchange rate: 1 USD = 1 GBP (1:1 conversion as requested)
  const convertPrice = (usdPrice: string) => {
    const numericPrice = parseFloat(usdPrice.replace('$', ''));
    return isUSD ? usdPrice : `£${numericPrice}`;
  };

  const showPaymentNotification = () => {
    alert("Full upfront payment is required for all packages.");
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
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

  const sciencePlans = [
    {
      name: "3 Month Package",
      price: "$899",
      originalPrice: "$1,200",
      duration: "3 months",
      description: "Intensive Science preparation for quick results",
      popular: false,
      features: [
        "36 hours of Science tutoring",
        "Physics, Chemistry, Biology",
        "Laboratory concepts explained",
        "Scientific method training",
        "Weekly progress assessments",
        "Practice tests and materials",
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
      description: "Comprehensive Science preparation with balanced pace",
      popular: true,
      features: [
        "72 hours of Science tutoring",
        "All science subjects covered",
        "Advanced problem solving",
        "Monthly progress reports",
        "Mock exams included",
        "Priority support",
        "Flexible scheduling",
        "Revision sessions",
        "Research project guidance"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$22/hour"
    },
    {
      name: "Full Year Package",
      price: "$2,699",
      originalPrice: "$3,600",
      duration: "12 months",
      description: "Complete Science academic year support with maximum value",
      popular: false,
      features: [
        "144 hours of Science tutoring",
        "Full curriculum mastery",
        "Advanced experiments explained",
        "University prep guidance",
        "24/7 support access",
        "Family progress meetings",
        "Guaranteed improvement",
        "Additional resources",
        "Science fair preparation"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$19/hour"
    }
  ];

  const examPackages = [
    {
      exam: "SAT Math & Science Preparation",
      duration: "3 months",
      price: "$1,299",
      originalPrice: "$1,800",
      sessions: "36 hours total",
      features: [
        "Math & Science sections focus",
        "Diagnostic assessment",
        "Personalized study plan",
        "Practice tests (8 full-length)",
        "Score analysis and improvement",
        "College application guidance",
        "Score improvement guarantee"
      ]
    },
    {
      exam: "IB Math & Science Support",
      duration: "Full year",
      price: "$2,999",
      originalPrice: "$4,500",
      sessions: "120 hours total",
      features: [
        "IB Math & Science subjects",
        "Extended Essay guidance (Math/Science)",
        "Internal Assessment help",
        "Laboratory report writing",
        "University application support",
        "Research project assistance"
      ]
    },
    {
      exam: "IGCSE Math & Science Package",
      duration: "2 years",
      price: "$4,999",
      originalPrice: "$7,200",
      sessions: "240 hours total",
      features: [
        "Math & Science subjects focus",
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
      service: "1-to-1 Personal Tutoring",
      price: "$60/hour",
      originalPrice: "$80/hour",
      description: "Individual one-on-one sessions with expert tutors"
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
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Helmet>
        <title>Math & Science Tutoring Packages | Pupilenroll - Expert Online Learning</title>
        <meta name="description" content="Discover affordable Math & Science tutoring packages. Expert tutors offering specialized preparation with guaranteed results. Full upfront payment required for all packages." />
        <meta name="keywords" content="math tutoring packages, science tutoring courses, physics tutoring, chemistry tutoring, biology tutoring, SAT math science preparation, IB math science support, IGCSE math science classes, affordable tutoring, online learning packages" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pupilenroll.com/pricing" />
        <meta property="og:title" content="Math & Science Tutoring Packages | Pupilenroll - Expert Online Learning" />
        <meta property="og:description" content="Expert Math & Science tutoring with special pricing. Choose from comprehensive packages designed for student success in Math and Science subjects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pupilenroll.com/pricing" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Math & Science Tutoring Packages",
              "description": "Comprehensive online tutoring packages for Math and Science subjects",
              "provider": {
                "@type": "Organization",
                "name": "Pupilenroll",
                "url": "https://pupilenroll.com"
              },
              "courseCode": "MATH-SCIENCE",
              "educationalCredentialAwarded": "Certificate of Completion"
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={collaborativeLearningImage} alt="Children learning together" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Math & Science Tutoring Packages
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Expert Math & Science tutoring with special pricing for parents
          </p>
          <div className="flex justify-center space-x-8 text-sm mb-8">
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
          
          {/* Currency and Theme Controls */}
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center space-x-3">
              <DollarSign className="h-5 w-5" />
              <Switch 
                checked={!isUSD} 
                onCheckedChange={(checked) => setIsUSD(!checked)}
                id="currency-toggle"
              />
              <PoundSterling className="h-5 w-5" />
              <Label htmlFor="currency-toggle" className="text-sm font-medium">
                {isUSD ? 'USD' : 'GBP'}
              </Label>
            </div>
            
            <div className="flex items-center space-x-3">
              <Sun className="h-5 w-5" />
              <Switch 
                checked={isDark} 
                onCheckedChange={toggleDarkMode}
                id="theme-toggle"
              />
              <Moon className="h-5 w-5" />
              <Label htmlFor="theme-toggle" className="text-sm font-medium">
                {isDark ? 'Dark' : 'Light'}
              </Label>
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
                     <div className="text-4xl font-bold text-blue-600">{convertPrice(plan.price)}</div>
                     <div className="text-lg text-gray-500 line-through">{convertPrice(plan.originalPrice)}</div>
                     <div className="text-sm text-green-600 font-semibold">Special Parent Pricing!</div>
                     <div className="text-xs text-red-600 font-bold border border-red-200 bg-red-50 p-2 rounded">
                       Full upfront payment is required for all packages
                     </div>
                   </div>
                  <div className="text-sm text-gray-500 mb-2">{convertPrice(plan.hourlyRate)} effective rate</div>
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

      {/* Science Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <BookOpen className="h-8 w-8 mr-3 text-green-600" />
              Science Tutoring Course Packages
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive Science tutoring courses covering Physics, Chemistry, and Biology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sciencePlans.map((plan, index) => (
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
                    <div className="text-4xl font-bold text-green-600">{convertPrice(plan.price)}</div>
                    <div className="text-lg text-gray-500 line-through">{convertPrice(plan.originalPrice)}</div>
                    <div className="text-sm text-green-600 font-semibold">Special Parent Pricing!</div>
                    <div className="text-xs text-red-600 font-bold border border-red-200 bg-red-50 p-2 rounded">
                      Full upfront payment is required for all packages
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{convertPrice(plan.hourlyRate)} effective rate</div>
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
                      window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${plan.name} Science course package. Can you provide more details?`, '_blank');
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

      {/* Exam-Specific Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Math & Science Exam Preparation Packages
            </h2>
            <p className="text-lg text-gray-600">
              Specialized Math & Science preparation for major examinations
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
                    <div className="text-3xl font-bold text-gray-900">{convertPrice(pkg.price)}</div>
                    <div className="text-lg text-gray-500 line-through">{convertPrice(pkg.originalPrice)}</div>
                    <div className="text-sm text-green-600 font-semibold">Special Parent Pricing!</div>
                    <div className="text-xs text-red-600 font-bold border border-red-200 bg-red-50 p-2 rounded">
                      Full upfront payment is required for all packages
                    </div>
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
                    <div className="text-2xl font-bold text-blue-600">{convertPrice(addon.price)}</div>
                    <div className="text-sm text-gray-500 line-through">{convertPrice(addon.originalPrice)}</div>
                    <div className="text-xs text-green-600 font-semibold">Special Rate!</div>
                    <div className="text-xs text-red-600 font-bold border border-red-200 bg-red-50 p-1 rounded">
                      Full payment required
                    </div>
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


      {/* Student Success Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Celebrating Every Success
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our students consistently achieve excellent results with our structured course packages. 
                See how our comprehensive approach leads to improved grades and increased confidence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Average 30% grade improvement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">98% course completion rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Affordable parent-friendly pricing</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={excellentGradesImage} 
                alt="Student with excellent grades celebrating success" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
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
