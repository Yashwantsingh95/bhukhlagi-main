import React, { useState, useEffect } from 'react';
import NavBar from '../component/NavBar';
import FloatingBgDoodles from '../component/FloatingBgDoodles';
import sendMail from '../services/mailService.js'
import Footer from '../component/Footer.jsx';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (getFormSubmitted()) {
      setSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };


  const setFormSubmitted = () => {
    const data = {
      value: true,
      expiry: Date.now() + 24 * 60 * 60 * 1000, // 1 day
    };

    localStorage.setItem("formSubmitted", JSON.stringify(data));
  };

  const getFormSubmitted = () => {
    const item = localStorage.getItem("formSubmitted");

    if (!item) return false;

    const data = JSON.parse(item);

    if (Date.now() > data.expiry) {
      localStorage.removeItem("formSubmitted");
      return false;
    }

    return data.value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    try {
      await sendMail(formData);
      setFormSubmitted();
      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      alert("Try again");
    }

      setLoading(false);


  };

  return (
    <>
      <NavBar currentPage='join' />
      <FloatingBgDoodles />
      
      {/* Premium Background */}
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#f8f9ff] to-[#fbf4eb]">
        
        {/* Ambient Glows */}
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-orange/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-brown/5 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Contact Us Section */}
        <section className="pb-20 pt-32 px-6 relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Side - Contact Info */}
              <div className="flex flex-col items-start">
                <span className="block text-xs md:text-sm tracking-[0.25em] uppercase text-orange font-bold mb-4 opacity-80">
                  Contact Us
                </span>
                <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold font-serif leading-[1.1] mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange to-brown">
                  Let's Connect
                </h1>
                <p className="text-mid/80 text-lg mb-12 leading-relaxed max-w-md font-medium">
                  Have a question about our menu, want to join our team, or interested in a franchise? Drop us a line below.
                </p>

                <div className="space-y-8 w-full max-w-sm">
                  {/* Email */}
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white shadow-sm border border-brown/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-mid/60 uppercase tracking-widest font-bold mb-1">Email</div>
                      <span className="text-dark font-semibold text-[15px]">bhukhlagi.udaipur@gmail.com</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white shadow-sm border border-brown/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-mid/60 uppercase tracking-widest font-bold mb-1">Visit Us</div>
                      <div className="text-dark font-semibold text-[15px]">Udaipur, Rajasthan</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white shadow-sm border border-brown/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-mid/60 uppercase tracking-widest font-bold mb-1">Call Us</div>
                      <span className="text-dark font-semibold text-[15px]">+91 8000500917</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Premium Form Card */}
              <div className="bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(123,45,0,0.1)] relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className='relative'>
                    <input
                      type="text"
                      name="name"
                      placeholder='Your Name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-white/80 bg-white/50 text-dark placeholder:text-mid/50 focus:bg-white focus:border-orange focus:ring-4 focus:ring-orange/10 focus:outline-none transition-all duration-300"
                    />
                    <div
                      className={`absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-sm transition-all duration-1000 ease-out ${loading ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                    ></div>
                    {errors.name && <p className="text-red-500 text-xs font-medium mt-2 ml-2">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className='relative'>
                    <input
                      type="email"
                      name="email"
                      placeholder='Email Address'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-white/80 bg-white/50 text-dark placeholder:text-mid/50 focus:bg-white focus:border-orange focus:ring-4 focus:ring-orange/10 focus:outline-none transition-all duration-300"
                    />
                    <div
                      className={`absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-sm transition-all duration-1000 ease-out ${loading ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                    ></div>
                    {errors.email && <p className="text-red-500 text-xs font-medium mt-2 ml-2">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className='relative'>
                    <input
                      type="text"
                      name="phone"
                      placeholder='Phone Number'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-white/80 bg-white/50 text-dark placeholder:text-mid/50 focus:bg-white focus:border-orange focus:ring-4 focus:ring-orange/10 focus:outline-none transition-all duration-300"
                    />
                    <div
                      className={`absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-sm transition-all duration-1000 ease-out ${loading ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                    ></div>
                    {errors.phone && <p className="text-red-500 text-xs font-medium mt-2 ml-2">{errors.phone}</p>}
                  </div>

                  {/* Message */}
                  <div className='relative'>
                    <textarea
                      name="message"
                      placeholder='How can we help you?'
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-white/80 bg-white/50 text-dark placeholder:text-mid/50 focus:bg-white focus:border-orange focus:ring-4 focus:ring-orange/10 focus:outline-none resize-none transition-all duration-300"
                    />
                    <div
                      className={`absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-sm transition-all duration-1000 ease-out ${loading ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                    ></div>
                    {errors.message && <p className="text-red-500 text-xs font-medium mt-2 ml-2">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="relative pt-2">
                    <button
                      type="submit"
                      disabled={loading || submitted}
                      className={`w-full bg-gradient-to-r from-brown to-darker text-cream font-sans font-bold text-[15px] px-8 py-5 rounded-2xl shadow-lg shadow-brown/30 tracking-wide transition-all duration-300 flex justify-center items-center gap-3
                        ${loading || submitted ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1 hover:shadow-xl hover:shadow-brown/40 cursor-pointer"}`}
                    >
                      {submitted ? "Message Sent ✅" : loading ? "Sending..." : "Send Message"}
                      {!submitted && !loading && <span className="text-lg">→</span>}
                    </button>

                    <div
                      className={`absolute inset-0 rounded-2xl bg-white/30 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    ></div>
                  </div>
                </form>

                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center z-50 rounded-[40px] bg-white/30 backdrop-blur-sm">
                    <div className="w-[300px] h-[300px]">
                      <DotLottieReact
                        src="/formSend.json"
                        autoplay
                        loop
                      />
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Join;