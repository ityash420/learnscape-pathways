import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Globe,
  Send,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const whatsappNumber = "+917906601283";
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    program: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 790 660 1283"],
      description: "Mon-Fri 8AM-8PM, Sat-Sun 9AM-5PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["pupilenroll@gmail.com"],
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Online Tutoring Platform", "Available Worldwide"],
      description: "Virtual consultations available"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: [whatsappNumber.replace("+", "")],
      description: "Quick responses during business hours"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create mailto link with form data
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Program of Interest: ${formData.program}
Subject: ${formData.subject}

Message:
${formData.message}
      `;
      
      const mailtoLink = `mailto:pupilenroll@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email Client Opened!",
        description: "Please send the email from your email client to complete your inquiry.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        program: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const faqs = [
    {
      question: "How do I schedule a free consultation?",
      answer: "You can schedule a free consultation by filling out the contact form, calling us, or messaging us on WhatsApp. We'll arrange a convenient time to discuss your academic goals."
    },
    {
      question: "What programs do you offer?",
      answer: "We offer comprehensive preparation for SAT, IB, IGCSE, Common Core, and grade-level support for middle and high school students (grades 6-12)."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes! We offer both online and in-person classes. Our online platform is interactive and just as effective as in-person sessions."
    },
    {
      question: "What are your class timings?",
      answer: "We offer flexible scheduling including weekday evenings, weekends, and holiday intensives to accommodate different time zones and schedules."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us | Pupilenroll - Get in Touch with Expert Tutors</title>
        <meta name="description" content="Contact Pupilenroll for expert online tutoring services. Get personalized academic support for SAT, IB, IGCSE, and more. Free consultation available." />
        <meta name="keywords" content="contact tutoring, online tutor consultation, academic support contact, tutoring inquiry" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pupilenroll.com/contact" />
        <meta property="og:title" content="Contact Us | Pupilenroll - Get in Touch with Expert Tutors" />
        <meta property="og:description" content="Ready to start your academic success journey? Contact our expert tutors for personalized support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pupilenroll.com/contact" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Ready to start your academic success journey? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="font-semibold text-gray-900">
                        {info.title === "WhatsApp" ? (
                          <Button
                            variant="link"
                            className="p-0 h-auto text-blue-600"
                            onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                          >
                            {detail}
                          </Button>
                        ) : info.title === "Email" ? (
                          <a href={`mailto:${detail}`} className="text-blue-600 hover:underline">
                            {detail}
                          </a>
                        ) : info.title === "Phone" ? (
                          <a href={`tel:${detail}`} className="text-blue-600 hover:underline">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </div>
                    ))}
                    <p className="text-sm text-gray-600 mt-2">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Program of Interest
                      </label>
                      <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sat">SAT Preparation</SelectItem>
                          <SelectItem value="ib">IB Program Support</SelectItem>
                          <SelectItem value="igcse">IGCSE Excellence</SelectItem>
                          <SelectItem value="common-core">Common Core Mastery</SelectItem>
                          <SelectItem value="high-school">High School (Grades 9-12)</SelectItem>
                          <SelectItem value="middle-school">Middle School (Grades 6-8)</SelectItem>
                          <SelectItem value="other">Other/General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your academic goals and how we can help..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions & FAQ */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                  <CardDescription>
                    Get started immediately with these options
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full justify-start" 
                    size="lg"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to schedule a free consultation to discuss my academic goals.`, '_blank')}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Free Consultation
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    size="lg"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I have some questions about your programs. Can you help?`, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Chat
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    size="lg"
                    onClick={() => window.location.href = `tel:${whatsappNumber}`}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="pt-2 mt-2 border-t text-xs text-gray-600">
                      <div className="flex items-center">
                        <Globe className="mr-1 h-3 w-3" />
                        All times IST. Online sessions available globally.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-sm text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
