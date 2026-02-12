'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsAndConditions() {
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
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-12 text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Terms & Conditions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Please read these terms carefully before using our services.
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

            {/* Acceptance of Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">📋</span>
                Acceptance of Terms
              </h2>
              <div className="text-slate-700 space-y-3">
                <p>
                  By accessing and using The Pets Garden website and services, you agree to be bound by these Terms and Conditions. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
                <p>
                  These terms apply to all visitors, users, and customers who access or use our pet care and sales services.
                </p>
              </div>
            </motion.section>

            {/* Services */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">🐾</span>
                Our Services
              </h2>
              <div className="text-slate-700 space-y-4">
                <p><strong>The Pets Garden provides:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Premium pet care services including grooming, boarding, and training</li>
                  <li>Pet sales including dogs, cats, and other companion animals</li>
                  <li>Pet health and wellness consultations</li>
                  <li>Pet accessories and supplies</li>
                  <li>Emergency pet care services</li>
                </ul>
                <p className="mt-4">
                  All services are subject to availability and our professional assessment of pet needs.
                </p>
              </div>
            </motion.section>

            {/* Pet Sales Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">🏪</span>
                Pet Sales Terms
              </h2>
              <div className="text-slate-700 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Health Guarantee</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>All pets come with health certificates from licensed veterinarians</li>
                    <li>2-day health guarantee from date of purchase</li>
                    <li>Vaccination records and medical history provided</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Return Policy</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Returns accepted within 2 days for health-related issues only</li>
                    <li>Full refund provided with veterinary documentation</li>
                    <li>No returns accepted for behavioral or preference reasons after 48 hours</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Buyer Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Provide proper care, nutrition, and veterinary attention</li>
                    <li>Comply with local pet ownership laws and regulations</li>
                    <li>Spay/neuter pets unless breeding rights are purchased</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Payment Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">💳</span>
                Payment Terms
              </h2>
              <div className="text-slate-700 space-y-3">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment required in full before service delivery or pet transfer</li>
                  <li>We accept cash, credit/debit cards, and digital payments</li>
                  <li>All prices include applicable taxes unless otherwise stated</li>
                  <li>Service cancellations require 24-hour notice for full refund</li>
                  <li>Pet deposits are non-refundable unless health issues arise</li>
                  <li>Late payment fees may apply for ongoing service contracts</li>
                </ul>
              </div>
            </motion.section>

            {/* User Responsibilities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-rose-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">👥</span>
                User Responsibilities
              </h2>
              <div className="text-slate-700 space-y-3">
                <p>By using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect our staff and other customers</li>
                  <li>Follow all facility rules and guidelines</li>
                  <li>Report any concerns or issues promptly</li>
                </ul>
              </div>
            </motion.section>

            {/* Liability Limitations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">⚖️</span>
                Liability Limitations
              </h2>
              <div className="text-slate-700 space-y-4">
                <p>
                  <strong>The Pets Garden's liability is limited to the amount paid for services.</strong>
                </p>
                <p>We are not liable for:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Injuries to pets due to pre-existing conditions</li>
                  <li>Behavioral issues that develop after service completion</li>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Events beyond our reasonable control (force majeure)</li>
                </ul>
                <p className="mt-4 font-semibold">
                  Pet insurance is strongly recommended for all customers.
                </p>
              </div>
            </motion.section>

            {/* Changes to Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-200"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">🔄</span>
                Changes to Terms
              </h2>
              <div className="text-slate-700 space-y-3">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
                  on our website. Your continued use of our services after changes constitutes acceptance of the new terms.
                </p>
                <p>
                  We recommend reviewing these terms periodically for any updates.
                </p>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 text-center"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Questions About These Terms?</h2>
              <p className="text-slate-700 mb-6">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Email:</strong> sanjutiwarishw@gmail.com</p>
                <p><strong>Phone:</strong> +91 9534413619</p>
                <p><strong>WhatsApp:</strong> +91 9534413619</p>
                <p><strong>Address:</strong> Tiwari tola opp tiwari transport, Saharsa, Bihar</p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}