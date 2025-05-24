import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const payload = {
      formType: 'contact',
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    fetch('https://qzl4q1ulnl.execute-api.us-east-2.amazonaws.com/EMC-PROD/emc-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-secondary mb-6">Thank You for Contacting EMC Staffing!</h2>
            <p className="text-xl text-secondary mb-4 text-left">
              We appreciate you reaching out to us, {name}. Your message has been successfully received.
            </p>
            <p className="text-lg text-secondary mb-4 text-left">
              Our team will review your message and respond within 24 hours to address your inquiry or concerns.
            </p>
            <p className="text-lg text-secondary mb-4 text-left">
              If your matter is urgent, please don't hesitate to call us directly at <span className="font-semibold">(689) 283-9646</span>.
            </p>
            <p className="text-lg text-secondary text-left">
              Redirecting you to our homepage in 20 seconds...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-secondary mb-6">Contact Us</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Get in touch with our team to discuss your emergency management staffing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div className="bg-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-secondary mb-6">Send Us a Message</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-white hover:bg-highlight transition-colors duration-300 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Phone</h3>
                  <p className="text-secondary">(689) 283-9646</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Email</h3>
                  <p className="text-secondary">info@emc-staffing.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Location</h3>
                  <p className="text-secondary">
                    3801 Avalon Park East Blvd.<br />
                    Suite 200<br />
                    Orlando, FL 32828
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;