import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Star, 
  CheckCircle, 
  MessageCircle,
  MapPin,
  GraduationCap,
  Calculator,
  PenTool,
  Code
} from "lucide-react";
import collaborativeLearningImage from "@/assets/collaborative-learning.jpg";
import excellentGradesImage from "@/assets/excellent-grades.jpg";

const StateTutoring = () => {
  const { state } = useParams();
  const stateName = state?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || '';
  
  const whatsappNumber = "+917906601283";

  const subjects = [
    {
      name: "Math Tutoring",
      icon: Calculator,
      description: `Expert math tutoring services in ${stateName}. From basic arithmetic to advanced calculus.`,
      features: ["Algebra & Geometry", "Calculus & Statistics", "SAT/ACT Math Prep", "Homework Help"]
    },
    {
      name: "English Tutoring",
      icon: PenTool,
      description: `Professional English tutoring in ${stateName}. Improve reading, writing, and comprehension skills.`,
      features: ["Reading Comprehension", "Essay Writing", "Grammar & Vocabulary", "Literature Analysis"]
    },
    {
      name: "Coding Programs",
      icon: Code,
      description: `Learn programming and web development with our ${stateName} coding tutors.`,
      features: ["Python & JavaScript", "Web Development", "App Development", "Computer Science"]
    },
    {
      name: "Exam Preparation",
      icon: GraduationCap,
      description: `Comprehensive exam prep for students in ${stateName}. SAT, IB, IGCSE, and more.`,
      features: ["SAT Preparation", "IB Program Support", "IGCSE Tutoring", "College Prep"]
    }
  ];

  const benefits = [
    "Certified tutors with proven track records",
    "Flexible online scheduling",
    "Personalized learning plans",
    "Progress tracking and reporting",
    "Affordable pricing packages",
    "Money-back guarantee"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`Online Tutoring in ${stateName} | Math, English, Coding Tutors | Pupilenroll`}</title>
        <meta name="description" content={`Professional online tutoring services in ${stateName}. Expert math, English, and coding tutors available. SAT, IB, IGCSE preparation. Affordable packages with guaranteed results.`} />
        <meta name="keywords" content={`online tutoring ${stateName}, math tutor ${stateName}, English tutor ${stateName}, coding classes ${stateName}, SAT prep ${stateName}, tutoring services ${stateName}`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://pupilenroll.com/tutoring/${state}`} />
        <meta property="og:title" content={`Online Tutoring in ${stateName} | Pupilenroll`} />
        <meta property="og:description" content={`Expert online tutoring services for students in ${stateName}. Math, English, and coding tutors available.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pupilenroll.com/tutoring/${state}`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Pupilenroll - Online Tutoring in ${stateName}",
              "description": "Professional online tutoring services in ${stateName}",
              "url": "https://pupilenroll.com/tutoring/${state}",
              "areaServed": "${stateName}",
              "serviceType": "Online Tutoring Services",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tutoring Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Math Tutoring in ${stateName}"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "English Tutoring in ${stateName}"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Coding Classes in ${stateName}"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={collaborativeLearningImage} alt="Students learning together" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Online Tutoring in {stateName}
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Expert tutors available for students across {stateName}. Math, English, Coding, and Exam Preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                View Course Packages
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm looking for online tutoring services in ${stateName}. Can you help me?`, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tutoring Services Available in {stateName}
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive online tutoring across all major subjects for {stateName} students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <subject.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{subject.name} in {stateName}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {subject.features.map((feature, idx) => (
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Tutoring Services in {stateName}?
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to helping {stateName} students achieve academic excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {stateName} Students Achieving Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Students across {stateName} are excelling with our personalized tutoring approach. 
                From improved test scores to increased confidence, see how we're making a difference.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">500+ {stateName} students served</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Average 25% grade improvement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Flexible online scheduling for busy families</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={excellentGradesImage} 
                alt="Student celebrating excellent grades" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Academic Success Journey in {stateName}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of {stateName} students who have improved their grades with our expert tutoring
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg">
              <GraduationCap className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm a student in ${stateName} interested in online tutoring. Can you provide more information?`, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us Now
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>1000+ Students in {stateName}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StateTutoring;