import React from 'react';
import { Shield, Users, Globe, BadgeCheck, Search, AlertTriangle, Scale } from 'lucide-react';

function App() {
  // Replace these with your actual Google Form URLs
  const membershipFormUrl = "YOUR_MEMBERSHIP_FORM_URL";
  const reportFormUrl = "YOUR_REPORT_FORM_URL";

  const openForm = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')"
          }}
        >
          <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center items-center text-center">
            <Shield className="w-16 h-16 text-blue-500 mb-6" />
            <h1 className="text-5xl font-bold text-white mb-6">Global OSINT Alliance</h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-8">
              A new community initiative seeking passionate individuals to join our mission in combating digital fraud through OSINT investigation.
            </p>
            <button 
              onClick={() => openForm(membershipFormUrl)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Be a Founding Member
            </button>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl">
              <Search className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Intelligence Gathering</h3>
              <p className="text-gray-300">Leveraging OSINT techniques to identify and track digital fraud operations worldwide.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Community Collaboration</h3>
              <p className="text-gray-300">Building a network of skilled investigators and cybersecurity experts.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl">
              <Globe className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Global Impact</h3>
              <p className="text-gray-300">Working with law enforcement agencies to bring cybercriminals to justice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <BadgeCheck className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">Join as a Founding Member</h2>
              <p className="text-xl text-gray-200 mb-8">
                We're looking for individuals passionate about OSINT and cybersecurity to help shape the future of our community. No prior experience required - just dedication and willingness to learn.
              </p>
              <button 
                onClick={() => openForm(membershipFormUrl)}
                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6 text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Report Scams</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            While we're building our team, you can still help by reporting scams. Your reports will help us understand patterns and prioritize our future operations.
          </p>
          
          {/* Legal Disclaimer */}
          <div className="bg-slate-700 p-6 rounded-lg mb-8 max-w-2xl mx-auto">
            <Scale className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Important Legal Notice</h3>
            <p className="text-gray-300 text-sm">
              Global OSINT Alliance is a community-driven initiative, not a law enforcement or legal authority. If you've been a victim of fraud or cybercrime, please report it to your local law enforcement authorities first. Our platform is meant to supplement, not replace, official legal channels.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              <p>Please contact:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Your local police department</li>
                <li>National cybercrime reporting center</li>
                <li>Your bank or financial institution (for financial fraud)</li>
              </ul>
            </div>
          </div>

          <button 
            onClick={() => openForm(reportFormUrl)}
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Submit Report
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Global OSINT Alliance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;