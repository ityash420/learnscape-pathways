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
  BookOpen
} from "lucide-react";

const Pricing = () => {
  const whatsappNumber = "+916395520698";

  const pricingPlans = [
    {
      name: "3 Month Package",
      price: "$2,400",
      duration: "3 months",
      description: "Intensive short-term preparation for quick results",
      popular: false,
      features: [
        "36 hours of tutoring",
        "Personalized study plan",
        "Weekly progress assessments",
        "Practice tests and materials",
        "Email support",
        "Performance tracking"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$67/hour"
    },
    {
      name: "6 Month Package", 
      price: "$4,200",
      duration: "6 months",
      description: "Comprehensive preparation with balanced pace",
      popular: true,
      features: [
        "72 hours of tutoring",
        "Detailed curriculum coverage",
        "Monthly progress reports",
        "Mock exams included",
        "Priority support",
        "Flexible scheduling",
        "Revision sessions"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$58/hour"
    },
    {
      name: "Full Year Package",
      price: "$7,200", 
      duration: "12 months",
      description: "Complete academic year support with maximum value",
      popular: false,
      features: [
        "144 hours of tutoring",
        "Full curriculum mastery",
        "Continuous assessment",
        "University prep guidance",
        "24/7 support access",
        "Family progress meetings",
        "Guaranteed improvement",
        "Additional resources"
      ],
      sessions: "3 sessions/week",
      hourlyRate: "$50/hour"
    }
  ];

  const examPackages = [
    {
      exam: "SAT Preparation",
      duration: "3 months",
      price: "$1,800",
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
      price: "$4,500",
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
      price: "$7,200",
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
      price: "$60/hour",
      description: "Additional tutoring hours beyond your package"
    },
    {
      service: "Mock Exam Administration",
      price: "$150/exam",
      description: "Full-length practice exams with detailed analysis"
    },
    {
      service: "College Application Support",
      price: "$500",
      description: "Complete guidance for university applications"
    },
    {
      service: "Study Materials Package",
      price: "$200",
      description: "Comprehensive textbooks and digital resources"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Pricing Plans | Pupilenroll - Affordable Online Tutoring</title>
        <meta name="description" content="Explore Pupilenroll's transparent pricing plans for SAT, IB, IGCSE, and Common Core preparation. Choose from 3-month, 6-month, or full-year packages with expert tutoring." />
        <meta name="keywords" content="tutoring pricing, online tutoring cost, SAT prep pricing, IB tutoring rates, IGCSE preparation cost, affordable tutoring" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pupilenroll.com/pricing" />
        <meta property="og:title" content="Pricing Plans | Pupilenroll - Affordable Online Tutoring" />
        <meta property="og:description" content="Transparent pricing for expert tutoring services. Choose the perfect plan for your academic success." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pupilenroll.com/pricing" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing Plans
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Choose the perfect plan that fits your academic goals and budget
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Flexible Payment Options</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* General Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Learning Journey
            </h2>
            <p className="text-lg text-gray-600">
              Flexible duration options to match your learning goals and timeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
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
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 my-4">{plan.price}</div>
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
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${plan.name}. Can you provide more details?`, '_blank')}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Get Started
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
              Exam-Specific Packages
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive preparation packages for major examinations
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
                  <div className="text-3xl font-bold text-gray-900">{pkg.price}</div>
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
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${pkg.exam} package. Can you provide more details about enrollment?`, '_blank')}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
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
                  <div className="text-2xl font-bold text-blue-600">{addon.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    {addon.description}
                  </p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to add ${addon.service} to my plan. Can you help?`, '_blank')}
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
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to learn more about your pricing and get started with a consultation.`, '_blank')}
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
