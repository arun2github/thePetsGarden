'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative w-20 h-24">
                <img
                  src="/images/tpg_logo.png"
                  alt="The Pets Garden"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                The Pets Garden
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
        >
          {/* Page Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-12 text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </motion.p>
          </div>

          {/* Content */}
          <div className="px-8 py-12 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <p className="text-slate-600 text-lg">
                <strong>Last updated:</strong> February 9, 2026
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">📋</span>
                Information We Collect
              </h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name, email address, and phone number</li>
                    <li>Address for pet delivery services</li>
                    <li>Pet preferences and care requirements</li>
                    <li>Payment information (processed securely)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Usage Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Website interaction and navigation patterns</li>
                    <li>Device information and browser type</li>
                    <li>IP address and location data (if permitted)</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* How We Use Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">🎯</span>
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Provide pet care services and facilitate pet sales</li>
                <li>Process payments and manage orders</li>
                <li>Send service updates and care instructions</li>
                <li>Improve our website and services</li>
                <li>Respond to customer inquiries and support requests</li>
                <li>Send promotional offers (with your consent)</li>
              </ul>
            </motion.section>

            {/* Information Sharing */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">🤝</span>
                Information Sharing
              </h2>
              <div className="text-slate-700 space-y-4">
                <p className="font-semibold">We do not sell or rent your personal information to third parties.</p>
                <p>We may share information in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>With trusted service providers (payment processors, delivery services)</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">🔒</span>
                Data Security
              </h2>
              <div className="text-slate-700 space-y-3">
                <p>We implement industry-standard security measures to protect your information:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and regular security updates</li>
                  <li>Limited access to personal information</li>
                  <li>Regular security audits and monitoring</li>
                </ul>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-rose-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">⚖️</span>
                Your Rights
              </h2>
              <div className="text-slate-700 space-y-3">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
                <p className="mt-4 font-semibold">
                  To exercise these rights, contact us at{' '}
                  <a href="mailto:sanjutiwarishw@gmail.com" className="text-amber-600 hover:text-amber-800">
                  sanjutiwarishw@gmail.com
                  </a>
                </p>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 text-center"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Questions About This Policy?</h2>
              <p className="text-slate-700 mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Email:</strong> sanjutiwarishw@gmail.com</p>
                <p><strong>Phone:</strong> +91 9534413619</p>
                <p><strong>Address:</strong> Tiwari tola opp tiwari transport, Saharsa, Bihar</p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}