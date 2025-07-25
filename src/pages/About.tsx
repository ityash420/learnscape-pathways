
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  MessageCircle,
  GraduationCap,
  Star,
  TrendingUp,
  Globe,
  Clock,
  CheckCircle
} from "lucide-react";

const About = () => {
  const whatsappNumber = "+1234567890";

  const stats = [
    { icon: Users, number: "5,000+", label: "Students Taught" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Star, number: "4.9/5", label: "Student Rating" },
    { icon: Globe, number: "50+", label: "Countries Served" }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "SAT & AP Specialist",
      credentials: "Ph.D. in Mathematics, Harvard University",
      experience: "12+ years",
      specialties: ["SAT Math", "AP Calculus", "AP Statistics"],
      achievements: "Average 200+ point SAT improvement"
    },
    {
      name: "Prof. Michael Chen",
      role: "IB Program Director",
      credentials: "M.Ed. International Education, Cambridge",
      experience: "15+ years",
      specialties: ["IB Mathematics", "IB Physics", "Extended Essay"],
      achievements: "95% of students achieve 35+ IB points"
    },
    {
      name: "Ms. Emily Rodriguez",
      role: "IGCSE Coordinator",
      credentials: "M.A. Education, Oxford University",
      experience: "10+ years",
      specialties: ["IGCSE Sciences", "English Literature", "Mathematics"],
      achievements: "90% A*/A grade achievement rate"
    },
    {
      name: "Dr. James Wilson",
      role: "Common Core Specialist",
      credentials: "Ed.D. Curriculum & Instruction",
      experience: "18+ years",
      specialties: ["K-12 Mathematics", "Critical Thinking", "Assessment"],
      achievements: "Featured curriculum developer"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education, ensuring every student reaches their full potential."
    },
    {
      icon: Users,
      title: "Personalization",
      description: "Every student is unique. We tailor our approach to match individual learning styles and goals."
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "We embrace modern teaching methods and technology to make learning engaging and effective."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We maintain the highest ethical standards and are committed to honest, transparent education."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "EduExcel Academy was founded with a mission to make quality education accessible to all students."
    },
    {
      year: "2019",
      title: "Digital Expansion",
      description: "Launched online learning platform, reaching students across multiple countries."
    },
    {
      year: "2020",
      title: "Curriculum Innovation",
      description: "Developed proprietary teaching methodologies and assessment tools."
    },
    {
      year: "2021",
      title: "Expert Team Growth",
      description: "Expanded team to include certified specialists for all major international examinations."
    },
    {
      year: "2022",
      title: "Recognition",
      description: "Received 'Excellence in Online Education' award from International Education Council."
    },
    {
      year: "2024",
      title: "Global Impact",
      description: "Reached milestone of 5,000+ students taught with 95% success rate maintained."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About EduExcel Academy
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Empowering students worldwide to achieve academic excellence through personalized, 
              innovative, and results-driven education programs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 flex items-center">
                  <Target className="h-6 w-6 mr-2" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide world-class, personalized education that empowers students to excel 
                  in their academic pursuits and achieve their dreams. We believe every student 
                  has the potential for greatness, and we're committed to unlocking that potential 
                  through innovative teaching methods and unwavering support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the global leader in personalized academic excellence, creating a world 
                  where every student has access to quality education that adapts to their unique 
                  learning style. We envision a future where academic success is achievable for 
                  all, regardless of geographical or economic barriers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600">
              Certified professionals dedicated to your academic success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-blue-600">{member.name}</CardTitle>
                      <p className="text-gray-600 font-medium">{member.role}</p>
                      <p className="text-sm text-gray-500 mt-1">{member.credentials}</p>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {member.experience}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{member.achievements}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Milestones in our commitment to educational excellence
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have achieved their academic goals with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <GraduationCap className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to learn more about EduExcel Academy and how you can help me achieve my academic goals.`, '_blank')}
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

export default About;
