
import { BookOpen, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Pupilenroll</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering students to excel in their academic journey through personalized learning experiences and expert guidance.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 639 552 0698</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>neeraj.suyal@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li>SAT Preparation</li>
              <li>IB Program</li>
              <li>IGCSE Support</li>
              <li>Common Core</li>
              <li>High School (9-12)</li>
              <li>Middle School (6-8)</li>
            </ul>
          </div>
        </div>

        {/* US States Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Online Tutoring Available Across All US States
            </h3>
            <p className="text-gray-300 mb-6">
              Professional tutoring services available for students nationwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
            {[
              "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
              "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
              "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
              "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
              "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
              "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
              "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
            ].map((state, index) => (
              <div key={index} className="text-center">
                <Link 
                  to="/"
                  className="block p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-xs text-gray-300 hover:text-white"
                  title={`Online Math, English & Coding Tutoring in ${state} - Expert Tutors Available`}
                >
                  Tutor in {state}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">
              Our certified tutors provide online math, English, and coding courses to students across all 50 US states. 
              Get personalized tutoring from anywhere in the United States.
            </p>
            <p className="text-gray-400">
              © 2024 Pupilenroll. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
