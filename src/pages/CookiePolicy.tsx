import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - MathBeam.com</title>
        <meta name="description" content="MathBeam.com Cookie Policy - Learn about how we use cookies and similar technologies on our website." />
        <link rel="canonical" href="https://mathbeam.com/cookie-policy" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
            
            <p className="text-muted-foreground mb-6">
              <strong>Last Updated:</strong> January 2024
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">2.1 Essential Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and payment processing.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">2.2 Performance Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve our website performance.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">2.3 Functionality Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies allow the website to remember choices you make and provide enhanced, more personal features.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">2.4 Marketing Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are used to deliver adverts more relevant to you and your interests. They also help limit the number of times you see an advertisement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party services that set cookies on our website, including:
              </p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Google Analytics for website analysis</li>
                <li>Payment processors for secure transactions</li>
                <li>Video conferencing platforms for tutoring sessions</li>
                <li>Customer support chat services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Managing Cookies</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">4.1 Browser Settings</h3>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>View what cookies have been set</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies from specific sites</li>
                <li>Delete all cookies when you close your browser</li>
                <li>Delete all cookies currently stored</li>
              </ul>
              
              <h3 className="text-xl font-medium text-foreground mb-3">4.2 Cookie Preferences</h3>
              <p className="text-muted-foreground mb-4">
                When you first visit our website, you'll see a cookie banner allowing you to accept or customize your cookie preferences. You can change these preferences at any time by clicking the "Cookie Settings" link in our footer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Disabling certain cookies may impact your experience on our website:
              </p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Some features may not work properly</li>
                <li>You may need to re-enter information</li>
                <li>Personalized content may not be available</li>
                <li>Login sessions may not persist</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Updates to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <ul className="text-muted-foreground list-none">
                <li>Email: support@mathbeam.com</li>
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

export default CookiePolicy;