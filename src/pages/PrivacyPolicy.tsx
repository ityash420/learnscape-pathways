import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - MathBeam.com</title>
        <meta name="description" content="MathBeam.com Privacy Policy - Learn how we collect, use, and protect your personal information in our online tutoring services." />
        <link rel="canonical" href="https://mathbeam.com/privacy-policy" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <p className="text-muted-foreground mb-6">
              <strong>Last Updated:</strong> January 2024
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                MathBeam.com ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our online tutoring services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">2.1 Personal Information</h3>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Name, email address, phone number</li>
                <li>Student grade level and academic needs</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication preferences</li>
              </ul>
              
              <h3 className="text-xl font-medium text-foreground mb-3">2.2 Usage Information</h3>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Website browsing patterns and preferences</li>
                <li>Session recordings for quality assurance (with consent)</li>
                <li>Device information and IP addresses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Provide and improve our tutoring services</li>
                <li>Match students with appropriate tutors</li>
                <li>Process payments and manage accounts</li>
                <li>Communicate about services and support</li>
                <li>Analyze usage to enhance user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell or rent your personal information. We may share information only in these circumstances:
              </p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>With tutors to facilitate educational services</li>
                <li>With service providers who assist in operations</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate security measures to protect your information, including encryption, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Data portability where applicable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our services are designed for minors with parental consent. We require parental permission before collecting information from children under 13 and comply with applicable children's privacy laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For questions about this Privacy Policy, contact us at:
              </p>
              <ul className="text-muted-foreground list-none">
                <li>Email: privacy@mathbeam.com</li>
                <li>Phone: +917906601283</li>
              </ul>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;