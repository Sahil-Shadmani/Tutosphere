import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (

    <section id="contact" className="bg-[#f9fafc] py-8 md:py-16 scroll-mt-18 md:scroll-mt-20">
      
      <div className="container">

        <div className="text-center max-w-[500px] mx-auto mb-10">
          <h2 className="uppercase font-semibold text-orange-600 text-sm tracking-wide">
            Get In Touch
          </h2>
          <p className="font-semibold text-2xl md:text-3xl text-slate-800 mt-2">
            Have Questions? Reach Out To Us
          </p>
          <p className="text-gray-500 text-sm mt-2">
            We're here to help you find the right tutor and answer any questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-gray-200/80 rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-5">

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 sm:p-8 md:col-span-2 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                Fill out the form or reach us directly. Our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <span>support@tutosphere.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-white text-sm" />
                </div>
                <span>+91 98765 00000</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <span>Indore, Madhya Pradesh, India</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-blue-200 border-t border-white/15">
              Available Mon – Sat, 9:00 AM – 7:00 PM IST
            </div>
          </div>

          <div className="p-6 sm:p-8 md:col-span-3 bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about tutoring"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="submit"
                  className="bg-primary hover:bg-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-lg text-xs sm:text-sm flex items-center gap-2 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>Send Message</span>
                </button>

                {submitted && (
                  <span className="text-xs text-emerald-600 font-medium animate-fade-in">
                    ✓ Message sent successfully!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;