import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  CheckCircle, 
  MessageCircle, 
  Users, 
  Clock,
  BookOpen,
  Calculator,
  Star
} from "lucide-react";
import collaborativeLearningImage from "@/assets/collaborative-learning.jpg";

const Pricing = () => {
  const whatsappNumber = "+917906601283";
  const [selectedLessons, setSelectedLessons] = useState<number>(1);
  const [selectedDuration, setSelectedDuration] = useState<number>(6);
  const [selectedSubject, setSelectedSubject] = useState<string>("Math");
  const [selectedProgram, setSelectedProgram] = useState<string>("SAT Preparation");

  const lessonOptions = [
    { value: 1, label: "1 lesson per week" },
    { value: 2, label: "2 lessons per week" },
    { value: 3, label: "3 lessons per week" }
  ];

  const durationOptions = [
    { value: 6, label: "6 months" },
    { value: 12, label: "12 months" }
  ];

  const subjectOptions = [
    "Math",
    "Physics", 
    "Chemistry",
    "Biology",
    "Coding"
  ];

  const programOptions = [
    "SAT Preparation",
    "IB Program",
    "IGCSE Support",
    "Common Core",
    "High School (9-12)",
    "Middle School (6-8)"
  ];

  const handleGetPricing = () => {
    const message = `Hi! I'm interested in 1-to-1 tutoring for ${selectedProgram} - ${selectedSubject} with ${selectedLessons} lesson${selectedLessons > 1 ? 's' : ''} per week for ${selectedDuration} months. Can you provide me with pricing details?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>1-to-1 Tutoring Pricing | Pupilenroll - Expert Online Learning</title>
        <meta name="description" content="Get personalized 1-to-1 tutoring from exceptional tutors starting at $30 per hour. Choose your schedule and duration." />
        <meta name="keywords" content="1-to-1 tutoring, personalized tutoring, online tutoring pricing, math tutoring, science tutoring, private tutoring" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pupilenroll.com/pricing" />
        <meta property="og:title" content="1-to-1 Tutoring Pricing | Pupilenroll - Expert Online Learning" />
        <meta property="og:description" content="Get personalized 1-to-1 tutoring from exceptional tutors starting at $30 per hour." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pupilenroll.com/pricing" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={collaborativeLearningImage} alt="Children learning together" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            1-to-1 Tutoring
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Personalized learning with exceptional tutors
          </p>
          <div className="flex justify-center space-x-8 text-sm mb-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Expert Tutors</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Flexible Schedule</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Guaranteed Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-8 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white relative">
            <div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
            <div className="relative z-10 py-6">
              <Badge className="bg-yellow-400 text-orange-900 font-bold text-sm mb-4 animate-pulse">
                LIMITED TIME OFFER
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold mb-3">
                🎉 Special Launch Discount! 🎉
              </h2>
              <p className="text-lg md:text-xl mb-4 text-orange-100">
                Get <span className="font-bold text-yellow-300">30% OFF</span> your first month of tutoring
              </p>
              <div className="flex justify-center items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span>30 min Free Trial Session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span>Full Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-4 rounded-lg shadow-lg mx-auto max-w-md mb-6">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-xl font-bold line-through text-red-200">$30 per hour</span>
                <span className="text-2xl font-bold text-yellow-300 animate-pulse">→</span>
                <span className="text-2xl font-bold text-yellow-300">Special Price!</span>
              </div>
              <p className="text-sm text-orange-100 mt-2">Limited time offer - Save big!</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Learning Plan
            </h2>
            <p className="text-lg text-gray-600">
              Customize your tutoring experience to fit your schedule and goals
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-600 mb-4">
                <Users className="h-8 w-8 mx-auto mb-2" />
                1-to-1 Personalized Tutoring
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Program selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Choose your program:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {programOptions.map((program) => (
                    <Button
                      key={program}
                      variant={selectedProgram === program ? "default" : "outline"}
                      className="h-auto py-3 px-4"
                      onClick={() => setSelectedProgram(program)}
                    >
                      <div className="text-center">
                        <div className="text-sm font-medium">{program}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Subject selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Choose your subject:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {subjectOptions.map((subject) => (
                    <Button
                      key={subject}
                      variant={selectedSubject === subject ? "default" : "outline"}
                      className="h-auto py-4 px-4"
                      onClick={() => setSelectedSubject(subject)}
                    >
                      <div className="text-center">
                        <div className="text-sm font-medium">{subject}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Lessons per week selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Choose if you would like:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {lessonOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant={selectedLessons === option.value ? "default" : "outline"}
                      className="h-auto py-4 px-6"
                      onClick={() => setSelectedLessons(option.value)}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">{option.value}</div>
                        <div className="text-sm">lesson{option.value > 1 ? 's' : ''} per week</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Duration selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Choose how long you would like tutoring for:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {durationOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant={selectedDuration === option.value ? "default" : "outline"}
                      className="h-auto py-4 px-6"
                      onClick={() => setSelectedDuration(option.value)}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">{option.value}</div>
                        <div className="text-sm">months</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                <ul className="space-y-2">
                  {[
                    "Personalized one-on-one sessions",
                    "Expert tutors in Math and Science",
                    "Flexible scheduling",
                    "Progress tracking and reports",
                    "Study materials and resources",
                    "Homework assistance",
                    "Exam preparation support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selected plan summary */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Your Selected Plan:</h4>
                <p className="text-blue-800">
                  <strong>{selectedLessons}</strong> lesson{selectedLessons > 1 ? 's' : ''} per week for <strong>{selectedDuration}</strong> months
                </p>
                <p className="text-sm text-blue-600 mt-2">
                  Total sessions: {selectedLessons * selectedDuration * 4} hours
                </p>
              </div>

              {/* Get pricing button */}
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                onClick={handleGetPricing}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Get Special Price
              </Button>

              <p className="text-xs text-gray-500 text-center">
                *Final pricing depends on tutor experience and subject complexity. Contact us for personalized quotes.
              </p>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our 1-to-1 Tutoring?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <Star className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Expert Tutors</h4>
                  <p className="text-gray-600 text-sm">Qualified professionals with proven track records</p>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Flexible Timing</h4>
                  <p className="text-gray-600 text-sm">Schedule sessions at your convenience</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-green-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Personalized Learning</h4>
                  <p className="text-gray-600 text-sm">Tailored curriculum based on your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;