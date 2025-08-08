import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - MathBeam.com</title>
        <meta name="description" content="MathBeam.com Terms & Conditions - Read our terms of service for online math and science tutoring services." />
        <link rel="canonical" href="https://mathbeam.com/terms-conditions" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
            
            <p className="text-muted-foreground mb-6">
              <strong>Last Updated:</strong> January 2024
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                1.1 MathBeam.com helps students find qualified tutors and tutors to market their services. These terms and conditions apply to all users unless specifically stated otherwise.
              </p>
              <p className="text-muted-foreground mb-4">
                1.2 MathBeam.com is operated by MathBeam Educational Services. Our website is located at https://mathbeam.com and our contact details are provided on the website.
              </p>
              <p className="text-muted-foreground mb-4">
                1.3 Users may register on the website as students or tutors. Registration stores information to enhance future visits.
              </p>
              <p className="text-muted-foreground mb-4">
                1.4 By using our website, users agree to these terms and conditions. These are legally binding - please read them carefully before agreeing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. MathBeam Rights & Responsibilities</h2>
              <p className="text-muted-foreground mb-4">MathBeam promises to:</p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Help tutors and students connect through our platform</li>
                <li>Maintain a functioning website with communication systems and booking platform</li>
                <li>Communicate planned maintenance or downtime</li>
                <li>Keep the website free from viruses and security threats</li>
                <li>Verify tutor identities and qualifications where applicable</li>
                <li>Process payments securely and promptly</li>
                <li>Handle complaints in accordance with our policies</li>
                <li>Protect user information with appropriate security measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">All users must:</p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Be responsible for their own security when using our services</li>
                <li>Not post defamatory, offensive, or illegal material</li>
                <li>Report any inappropriate content immediately</li>
                <li>Exercise judgment regarding information accuracy</li>
                <li>Contact us immediately if their password is compromised</li>
                <li>Not use the website to engage directly outside our platform</li>
                <li>Abide by our Privacy Policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Student Responsibilities</h2>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Students must be 18+ to book tutoring, or have parental consent if under 18</li>
                <li>Maintain accurate personal details and contact information</li>
                <li>Confirm bookings within specified timeframes</li>
                <li>Provide valid payment details for confirmed bookings</li>
                <li>Ensure suitable environment for online or in-person lessons</li>
                <li>Check tutor credentials and qualifications independently</li>
                <li>Have proper equipment for online lessons</li>
                <li>Give 24+ hours notice for cancellations to avoid charges</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Tutor Responsibilities</h2>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Must be 18+ years old and legally entitled to work</li>
                <li>Provide accurate profile information and maintain updates</li>
                <li>Disclose any criminal convictions or background issues</li>
                <li>Maintain appropriate qualifications and insurance</li>
                <li>Set competitive fees comparable to market rates</li>
                <li>Respond to messages and make bookings promptly</li>
                <li>Only make bookings as instructed by students</li>
                <li>Be punctual and professional for all lessons</li>
                <li>Not complete coursework or assignments for students</li>
                <li>Have appropriate equipment for online teaching</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Payment Terms</h2>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Lesson fees displayed clearly at booking time</li>
                <li>Fees include tutor fee plus MathBeam service fee</li>
                <li>Payment processed 24 hours after lesson completion</li>
                <li>Cancellations within 24 hours may incur charges</li>
                <li>Refunds processed according to our refund policy</li>
                <li>All fees include applicable taxes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cancellations and Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Students may cancel bookings without charge by giving 24+ hours notice. Cancellations with less notice may incur the full lesson fee. Refunds are processed for legitimate complaints or technical issues on our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content on MathBeam.com is protected by copyright and other intellectual property rights. Users may not reproduce, distribute, or create derivative works without permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                MathBeam acts as a platform to connect students and tutors. We are not responsible for the quality, content, or outcomes of tutoring sessions. Our liability is limited to the fees paid for our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Privacy and Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                We collect and process personal data in accordance with our Privacy Policy and applicable data protection laws. Users consent to our data processing practices by using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                Disputes should first be addressed through our customer support team. Unresolved disputes may be subject to mediation or arbitration as outlined in our dispute resolution procedures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these terms and conditions, contact us at:
              </p>
              <ul className="text-muted-foreground list-none">
                <li>Email: legal@mathbeam.com</li>
                <li>Phone: +917906601283</li>
                <li>Website: https://mathbeam.com</li>
              </ul>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsConditions;