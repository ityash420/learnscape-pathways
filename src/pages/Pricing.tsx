
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
  const whatsappNumber = "+1234567890";

  const pricingPlans = [
    {
      name: "Individual Tutoring",
      price: "$80/hour",
      description: "One-on-one personalized sessions with expert tutors",
      popular: false,
      features: [
        "Personalized learning plan",
        "Flexible scheduling",
        "Progress tracking",
        "Homework support",
        "Exam preparation materials",
        "Monthly progress reports"
      ],
      subjects: "All subjects available",
      sessions: "Minimum 4 hours/month"
    },
    {
      name: "Small Group Classes",
      price: "$45/hour",
      description: "Interactive learning in groups of 3-5 students",
      popular: true,
      features: [
        "Collaborative learning environment",
        "Peer interaction and support",
        "Cost-effective solution",
        "Regular assessments",
        "Study materials included",
        "Group projects and activities",
        "Flexible make-up sessions"
      ],
      subjects: "Subject-specific groups",
      sessions: "2-3 sessions/week"
    },
    {
      name: "Intensive Bootcamp",
      price: "$1,200/month",
      description: "Accelerated preparation for upcoming exams",
      popular: false,
      features: [
        "Daily intensive sessions",
        "Comprehensive study materials",
        "Mock exams and practice tests",
        "Expert instructor guidance",
        "Progress monitoring",
        "Guaranteed score improvement",
        "Certificate of completion"
      ],
      subjects: "Exam-specific focus",
      sessions: "15-20 hours/week"
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
              General Tutoring Plans
            </h2>
            <p className="text-lg text-gray-600">
              Flexible options to match your learning style and schedule
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
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {plan.subjects}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
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
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${plan.name} plan. Can you provide more details?`, '_blank')}
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
