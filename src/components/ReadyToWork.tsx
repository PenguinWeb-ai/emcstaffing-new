import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Users, Clock, Plus, Minus } from 'lucide-react';

function ReadyToWork() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [showOtherDescription, setShowOtherDescription] = useState(false);

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

    const additionalPrograms = formData.getAll('additionalPrograms');

    const payload = {
      formType: 'ready-to-work',
      personalInfo: {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
      },
      experience: {
        yearsOfExperience: formData.get('experience'),
        additionalPrograms: additionalPrograms,
        otherDescription: formData.get('otherDescription'),
      },
      workPreferences: {
        preferredPlatform: formData.get('preferredPlatform'),
        preferredSchedule: formData.get('preferredSchedule'),
        availability: formData.get('availability'),
      },
    };

    fetch(
      'https://qzl4q1ulnl.execute-api.us-east-2.amazonaws.com/EMC-PROD/emc-form',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    setIsSubmitted(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleOtherCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowOtherDescription(e.target.checked);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Welcome to the EMC Staffing Team, {firstName}!
            </h2>
            <p className="text-xl text-secondary mb-4 text-left">
              Thank you for your interest in joining our network of emergency
              management professionals. Your application has been successfully
              submitted.
            </p>
            <p className="text-lg text-secondary mb-4 text-left">
              Our recruitment team will review your qualifications and contact
              you within 48 hours to discuss potential opportunities that match
              your experience and preferences.
            </p>
            <p className="text-lg text-secondary mb-4 text-left">
              We're excited about the possibility of working with you to support
              communities in their time of need.
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
    <div>
      <div className="bg-white">
        <div className="pt-32 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-32">
              <h1 className="text-5xl font-bold text-secondary mb-6">
                Ready to Work
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-3xl font-bold text-secondary mb-12">
                <span className="text-[#d9363e]">Ready to SERVE?</span> Join our
                network of emergency management professionals and make a
                difference when it matters most.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-lg font-semibold text-white bg-primary hover:bg-highlight transition-colors px-4 py-2 rounded flex items-center justify-between w-full md:w-auto shadow-sm hover:shadow-md"
                >
                  <span>How it Works</span>
                  <span className="text-white transform transition-transform group-hover:translate-y-1">
                    {' '}
                    ↓
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('lets-get-started')}
                  className="text-lg font-semibold text-white bg-primary hover:bg-highlight transition-colors px-4 py-2 rounded flex items-center justify-between w-full md:w-auto shadow-sm hover:shadow-md"
                >
                  <span>Let's Get Started!</span>
                  <span className="text-white transform transition-transform group-hover:translate-y-1">
                    {' '}
                    ↓
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('candidates-faq')}
                  className="text-lg font-semibold text-white bg-primary hover:bg-highlight transition-colors px-4 py-2 rounded flex items-center justify-between w-full md:w-auto shadow-sm hover:shadow-md"
                >
                  <span>Candidates' FAQ</span>
                  <span className="text-white transform transition-transform group-hover:translate-y-1">
                    {' '}
                    ↓
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#d7d7d7] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center pb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Make a Difference When It Matters Most
              </h2>
              <p className="text-lg text-secondary mb-6">
                Join our elite network of emergency management professionals and
                be part of the solution when communities need it most. Whether
                you're an experienced consultant or looking to expand your
                career in emergency management, we have opportunities that match
                your skills and schedule.
              </p>
              <p className="text-lg text-secondary">
                Our consultants work on critical projects including disaster
                recovery, mitigation planning, and grant management across the
                United States.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/ready.webp"
                alt="Emergency Management Professional"
                className="rounded-lg shadow-2xl"
                width={800}
                height={533}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="how-it-works" className="mb-20 scroll-mt-24">
            <h2 className="text-5xl font-bold text-secondary mb-8 text-center">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:-rotate-2 p-6 group">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:rotate-12 md:animate-fadeIn md:animate-pulse-slow" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                  1. Apply to Join
                </h3>
                <p className="text-secondary">
                  Submit your application with your experience, qualifications,
                  and work preferences. Our team will review your background and
                  verify your credentials.
                </p>
              </div>

              <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:rotate-2 p-6 group">
                <div className="flex justify-center mb-6">
                  <Users className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:-rotate-12 md:animate-fadeIn md:animate-pulse-slow animation-delay-200" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                  2. Get Matched
                </h3>
                <p className="text-secondary">
                  We'll match you with opportunities that fit your expertise and
                  availability. You'll be contacted when projects align with
                  your skills and preferences.
                </p>
              </div>

              <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:-rotate-2 p-6 group">
                <div className="flex justify-center mb-6">
                  <Clock className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:rotate-12 md:animate-fadeIn md:animate-pulse-slow animation-delay-400" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                  3. Start Working
                </h3>
                <p className="text-secondary">
                  Begin your assignment and make a real impact in disaster
                  recovery and emergency management. We provide ongoing support
                  throughout your engagement.
                </p>
              </div>
            </div>
          </div>

          <div id="lets-get-started" className="mb-20 scroll-mt-24">
            <div className="bg-light rounded-lg overflow-hidden shadow-xl">
              <div className="p-8">
                <h2 className="text-5xl font-bold text-secondary mb-8 text-center">
                  Let's Get Started!
                </h2>
                <form
                  name="ready-to-work"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  encType="multipart/form-data"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="ready-to-work" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human:{' '}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        First Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Last Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
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
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Years of Emergency Management Experience{' '}
                      <span className="text-primary">*</span>
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select your experience level</option>
                      <option value="0-2 years">0-2 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="6-10 years">6-10 years</option>
                      <option value="11-15 years">11-15 years</option>
                      <option value="16-20 years">16-20 years</option>
                      <option value="20+ years">20+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-4">
                      Additional Programs (Check all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="mb-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="individualAssistance"
                            name="additionalPrograms"
                            value="Individual Assistance"
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <label
                            htmlFor="individualAssistance"
                            className="ml-2 text-secondary font-medium"
                          >
                            Individual Assistance (IA)
                          </label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="publicAssistance"
                            name="additionalPrograms"
                            value="Public Assistance"
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <label
                            htmlFor="publicAssistance"
                            className="ml-2 text-secondary font-medium"
                          >
                            FEMA Public Assistance (PA)
                          </label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="406Mitigation"
                            name="additionalPrograms"
                            value="406 Mitigation"
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <label
                            htmlFor="406Mitigation"
                            className="ml-2 text-secondary font-medium"
                          >
                            406 Mitigation
                          </label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="drra"
                            name="additionalPrograms"
                            value="Disaster Recovery Reform Act"
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <label
                            htmlFor="drra"
                            className="ml-2 text-secondary font-medium"
                          >
                            Disaster Recovery Reform Act (DRRA) sec 1206
                          </label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="hazardMitigation"
                            name="additionalPrograms"
                            value="Hazard Mitigation"
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <label
                            htmlFor="hazardMitigation"
                            className="ml-2 text-secondary font-medium"
                          >
                            Hazard Mitigation Grant Programs (HMGP)
                          </label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="mitigationPlanning"
                            name="additionalPrograms"
                            value="Mitigation Planning"
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <label
                            htmlFor="mitigationPlanning"
                            className="ml-2 text-secondary font-medium"
                          >
                            Mitigation Planning
                          </label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="other"
                            name="additionalPrograms"
                            value="Other"
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                            onChange={handleOtherCheckboxChange}
                          />
                          <label
                            htmlFor="other"
                            className="ml-2 text-secondary font-medium"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                    {showOtherDescription && (
                      <div className="mt-4">
                        <label
                          htmlFor="otherDescription"
                          className="block text-sm font-medium text-secondary mb-2"
                        >
                          Please describe your other experience
                        </label>
                        <textarea
                          id="otherDescription"
                          name="otherDescription"
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Please describe your other emergency management experience or qualifications..."
                        ></textarea>
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="preferredPlatform"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Preferred Platform <span className="text-primary">*</span>
                    </label>
                    <select
                      id="preferredPlatform"
                      name="preferredPlatform"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select preferred platform</option>
                      <option value="Virtual">Virtual</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="In-Person">In-Person</option>
                      <option value="No Preference">No Preference</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredSchedule"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Preferred Schedule <span className="text-primary">*</span>
                    </label>
                    <select
                      id="preferredSchedule"
                      name="preferredSchedule"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select preferred schedule</option>
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Flexible">Flexible</option>
                      <option value="As-Needed">As-Needed</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="availability"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Availability <span className="text-primary">*</span>
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select your availability</option>
                      <option value="Immediate">Immediate</option>
                      <option value="Within 1 week">Within 1 week</option>
                      <option value="Within 2 weeks">Within 2 weeks</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="resume"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Resume Upload <span className="text-primary">*</span>
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      Please upload your resume in PDF, DOC, or DOCX format.
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-primary text-white hover:bg-highlight transition-colors duration-300 rounded-lg font-semibold"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div id="candidates-faq" className="scroll-mt-24">
            <h2 className="text-5xl font-bold text-secondary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('qualifications')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    What qualifications do I need?
                  </h3>
                  {expandedFaq === 'qualifications' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'qualifications' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      We look for professionals with experience in emergency
                      management, disaster recovery, or related fields. Relevant
                      certifications, FEMA training, and field experience are
                      highly valued.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('process')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    What's the application process?
                  </h3>
                  {expandedFaq === 'process' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'process' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      After submitting your application, our team will review
                      your qualifications and conduct a background check. We'll
                      then contact you for an interview and add you to our
                      network of available consultants.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('assignments')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    How often will I get assignments?
                  </h3>
                  {expandedFaq === 'assignments' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'assignments' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      Assignment frequency depends on your qualifications,
                      availability, and current demand. We work to match you
                      with opportunities that fit your expertise and schedule
                      preferences.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('compensation')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    How does compensation work?
                  </h3>
                  {expandedFaq === 'compensation' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'compensation' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      Compensation varies based on the assignment, your
                      experience level, and project requirements. We offer
                      competitive rates and will discuss compensation details
                      for each specific opportunity.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('support')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    What support do you provide?
                  </h3>
                  {expandedFaq === 'support' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'support' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      We provide ongoing support throughout your assignments,
                      including project coordination, administrative assistance,
                      and professional development opportunities.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToWork;