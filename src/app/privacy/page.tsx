// src/app/privacy/page.tsx
import Link from "next/link";
import { ArrowLeft, Shield, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-lime-50/30">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Button variant="ghost" className="flex items-center gap-2 group-hover:bg-slate-100">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent">
                SnapFit
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Privacy & Security
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            SnapFit Privacy Policy
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: <span className="font-semibold">December 9, 2024</span>
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8">
          <p className="text-slate-700 leading-relaxed">
            SnapFit ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, store, disclose, and safeguard your information when 
            you use our website, mobile application, and associated services (collectively, the "Services").
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            SnapFit is headquartered in Pakistan and serves clients globally. By accessing or using our Services, 
            you agree to the terms of this Privacy Policy. If you do not agree, please discontinue using our Services.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {policySections.map((section, index) => (
            <section key={index} id={section.id} className="scroll-mt-20">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-lime-100 text-lime-700 rounded-full text-sm font-bold">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="prose prose-slate max-w-none">
                  {section.content}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-lime-50 to-green-50 border border-lime-200 rounded-2xl p-8 mt-12 text-center">
          <Globe className="w-12 h-12 text-lime-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Questions About Our Privacy Policy?</h3>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            We're committed to protecting your privacy and being transparent about our data practices. 
            If you have any questions or concerns, please don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-lime-600 hover:bg-lime-700 text-white">
              <a href="mailto:privacy@snapfit.ai">
                <Mail className="w-4 h-4 mr-2" />
                Contact Privacy Team
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">
                Back to Homepage
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

const policySections = [
  {
    id: "scope",
    title: "Scope of This Policy",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          This Privacy Policy applies to all personal data collected through SnapFit's website, 
          app, integrations, or related platforms. It covers both individual users and business clients.
        </p>
        <p>
          SnapFit complies with Pakistan's upcoming Personal Data Protection Bill, the EU's General 
          Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA).
        </p>
      </div>
    )
  },
  {
    id: "information-collected",
    title: "Information We Collect",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-slate-900 mb-2">A. Personal Information You Provide</h3>
          <p className="text-slate-700 mb-3">
            We may collect information you provide directly to us, such as:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
            <li>Name, email address, phone number, and business name</li>
            <li>Payment and billing information (processed securely by third-party providers)</li>
            <li>Uploaded product images, AI-generated visuals, and custom settings</li>
            <li>Account credentials and preferences</li>
            <li>Communications or inquiries sent to our support team</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-2">B. Automatically Collected Data</h3>
          <p className="text-slate-700 mb-3">
            When you use our Services, we may automatically collect:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
            <li>IP address, browser type, device information, and operating system</li>
            <li>Access times, pages viewed, and session data</li>
            <li>Cookies, tracking pixels, and similar identifiers</li>
            <li>General geolocation data</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-2">C. Device Permissions & Media Access</h3>
          <p className="text-slate-700 mb-3">
            Our app may request access to your device features, such as:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
            <li><strong>Camera and Photos:</strong> To capture or upload product images.</li>
            <li><strong>Storage or Files:</strong> To save generated visuals.</li>
            <li><strong>Microphone (if applicable):</strong> For voice-enabled functions.</li>
          </ul>
          <p className="text-slate-700 mt-2">
            You may revoke permissions through your device settings at any time.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-2">D. User-Generated Content (UGC)</h3>
          <p className="text-slate-700">
            User-Generated Content includes any text, images, or videos you upload or generate through SnapFit. 
            Your UGC remains your intellectual property; however, you grant SnapFit limited rights to process, 
            store, and use such content solely for delivering our Services.
          </p>
          <p className="text-slate-700 mt-2">
            With your consent, we may use anonymized samples for marketing, demos, or improving AI accuracy.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-2">E. Business & Analytics Data</h3>
          <p className="text-slate-700 mb-3">
            We collect and analyze business-related data such as:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
            <li>Transaction records, credit usage, and billing metrics</li>
            <li>Usage statistics, feature interaction data, and performance logs</li>
            <li>Support tickets and feedback</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-2">F. Recruitment Information</h3>
          <p className="text-slate-700">
            If you apply for a job or collaborate with SnapFit, we may collect and process your application 
            details, resume, and contact information solely for recruitment purposes.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "legal-bases",
    title: "Legal Bases for Processing (GDPR)",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>We process personal data under the following legal bases:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Contractual Necessity:</strong> To deliver requested services and manage your account.</li>
          <li><strong>Legitimate Interests:</strong> To improve SnapFit's features, security, and user experience.</li>
          <li><strong>Consent:</strong> For marketing communications, promotional offers, or device access. You may withdraw consent at any time.</li>
          <li><strong>Legal Obligations:</strong> To comply with tax, accounting, and regulatory requirements.</li>
        </ul>
      </div>
    )
  },
  {
    id: "data-usage",
    title: "How We Use Your Information",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>We use collected data to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Operate and improve our Services</li>
          <li>Generate AI-based visuals from your uploads</li>
          <li>Process payments and manage billing</li>
          <li>Personalize user experiences and recommendations</li>
          <li>Communicate service updates, offers, or promotions</li>
          <li>Monitor usage patterns and prevent fraud</li>
          <li>Comply with legal obligations or resolve disputes</li>
        </ul>
      </div>
    )
  },
  {
    id: "data-disclosure",
    title: "Disclosure of Information",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>We may share data in the following circumstances:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Service Providers:</strong> Hosting, analytics, payment gateways, and customer support tools</li>
          <li><strong>Affiliates & Partners:</strong> For collaboration, technical support, or API integrations</li>
          <li><strong>Legal & Regulatory Authorities:</strong> When required by law or to protect rights and safety</li>
          <li><strong>Business Transfers:</strong> In case of merger, acquisition, restructuring, or sale of assets, your data may be transferred under the same privacy safeguards</li>
          <li><strong>With Consent:</strong> When you authorize third-party integrations or marketing collaborations</li>
        </ul>
        <p className="font-semibold text-slate-900">We do not sell your personal data.</p>
      </div>
    )
  },
  {
    id: "data-rights",
    title: "Your Rights and Choices",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          Depending on your jurisdiction, you may have the right to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Access your data and request a copy</li>
          <li>Correct or update inaccurate information</li>
          <li>Delete your personal data ("Right to be Forgotten")</li>
          <li>Restrict or object to data processing</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Opt-out of marketing emails or targeted advertising</li>
          <li>File a complaint with a data protection authority</li>
        </ul>
        <p>
          To exercise these rights, contact us at <a href="mailto:privacy@snapfit.ai" className="text-lime-600 hover:text-lime-700 font-medium">privacy@snapfit.ai</a>. 
          We may verify your identity before processing your request.
        </p>
      </div>
    )
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <p className="font-semibold text-slate-900">SnapFit</p>
          <p>Email: <a href="mailto:privacy@snapfit.ai" className="text-lime-600 hover:text-lime-700 font-medium">privacy@snapfit.ai</a></p>
          <p>Website: <a href="https://www.snapfit.ai" className="text-lime-600 hover:text-lime-700 font-medium">www.snapfit.ai</a></p>
        </div>
      </div>
    )
  }
];
