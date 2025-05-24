import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileSearch, UserCheck, Briefcase, Plus, Minus } from 'lucide-react';

function RequestConsultant() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [organizationName, setOrganizationName] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

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
      formType: 'request-consultant',
      organizationDetails: {
        organizationName: formData.get('organizationName'),
        contactName: formData.get('contactName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
      },
      projectDetails: {
        projectType: formData.get('projectType'),
        projectDescription: formData.get('projectDescription'),
        consultantsNeeded: formData.get('consultantsNeeded'),
        timeline: formData.get('timeline'),
        estimatedDuration: formData.get('estimatedDuration'),
      },
      workPreferences: {
        preferredPlatform: formData.get('preferredPlatform'),
        preferredSchedule: formData.get('preferredSchedule'),
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

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Thank You for Choosing EMC Staffing!
            </h2>
            <p className="text-xl text-secondary mb-4 text-left">
              We've received your staffing request for {organizationName} and
              our team is already working to identify the perfect candidates for
              your needs.
            </p>
            <p className="text-lg text-secondary mb-4 text-left">
              A dedicated account manager will contact you within 24 hours to
              discuss your requirements in detail and present qualified
              candidates for your consideration.
            </p>
            <p className="text-lg text-secondary mb-4 text-left">
              We understand the urgency of emergency management staffing and are
              committed to providing you with rapid, quality solutions.
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
                Request a Consultant
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-3xl font-bold text-secondary mb-12">
                <span className="text-[#d9363e]">Need RESOURCES?</span> Get
                access to skilled emergency management professionals when and
                where you need them.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <button
                  onClick={() => scrollToSection('our-process')}
                  className="text-lg font-semibold text-white bg-primary hover:bg-highlight transition-colors px-4 py-2 rounded flex items-center justify-between w-full md:w-auto shadow-sm hover:shadow-md"
                >
                  <span>Our Process</span>
                  <span className="text-white transform transition-transform group-hover:translate-y-1">
                    {' '}
                    ↓
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('submit-request')}
                  className="text-lg font-semibold text-white bg-primary hover:bg-highlight transition-colors px-4 py-2 rounded flex items-center justify-between w-full md:w-auto shadow-sm hover:shadow-md"
                >
                  <span>Submit a Request</span>
                  <span className="text-white transform transition-transform group-hover:translate-y-1">
                    {' '}
                    ↓
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('clients-faq')}
                  className="text-lg font-semibold text-white bg-primary hover:bg-highlight transition-colors px-4 py-2 rounded flex items-center justify-between w-full md:w-auto shadow-sm hover:shadow-md"
                >
                  <span>Clients' FAQ</span>
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
                Expert Support When You Need It
              </h2>
              <p className="text-lg text-secondary mb-6">
                EMC Staffing provides rapid access to qualified emergency
                management consultants. Our professionals are ready to deploy
                within 24-72 hours, ensuring you have the support you need when
                time is critical.
              </p>
              <p className="text-lg text-secondary">
                We maintain a network of pre-vetted professionals with expertise
                across all aspects of emergency management.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/interview.webp"
                alt="Emergency Response Team"
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
          <div id="our-process" className="mb-20 scroll-mt-24">
            <h2 className="text-5xl font-bold text-secondary mb-8 text-center">
              Our Process
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:-rotate-2 p-6 group">
                <div className="flex justify-center mb-6">
                  <FileSearch className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:rotate-12 md:animate-fadeIn md:animate-pulse-slow" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                  1. Submit Requirements
                </h3>
                <p className="text-secondary">
                  Tell us about your project needs, timeline, and consultant
                  qualifications. Our team will review your requirements and
                  begin identifying the best matches from our network.
                </p>
              </div>

              <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:rotate-2 p-6 group">
                <div className="flex justify-center mb-6">
                  <UserCheck className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:-rotate-12 md:animate-fadeIn md:animate-pulse-slow animation-delay-200" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                  2. Review Candidates
                </h3>
                <p className="text-secondary">
                  Within 24-48 hours, depending on request, we will present you
                  with qualified candidates who match your requirements. Each
                  consultant is pre-vetted and ready for rapid deployment if
                  needed.
                </p>
              </div>

              <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:-rotate-2 p-6 group">
                <div className="flex justify-center mb-6">
                  <Briefcase className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:rotate-12 md:animate-fadeIn md:animate-pulse-slow animation-delay-400" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                  3. Start Working
                </h3>
                <p className="text-secondary">
                  Select your preferred consultant and let us handle the
                  logistics. Your consultant can begin work within 24-72 hours
                  of your selection.
                </p>
              </div>
            </div>
          </div>

          <div id="submit-request" className="mb-20 scroll-mt-24">
            <div className="bg-light rounded-lg overflow-hidden shadow-xl">
              <div className="p-8">
                <h2 className="text-5xl font-bold text-secondary mb-8 text-center">
                  Submit Your Request
                </h2>
                <form
                  name="request-consultant"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="request-consultant"
                  />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human:{' '}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="organizationName"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Organization Name{' '}
                        <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="organizationName"
                        name="organizationName"
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your organization name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Contact Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your full name"
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
                      htmlFor="projectType"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Project Type <span className="text-primary">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select a project type</option>
                      <option value="Individual Assistance">
                        Individual Assistance (IA)
                      </option>
                      <option value="Public Assistance">
                        FEMA Public Assistance (PA)
                      </option>
                      <option value="406 Mitigation">406 Mitigation</option>
                      <option value="Disaster Recovery Reform Act">
                        Disaster Recovery Reform Act (DRRA) sec 1206
                      </option>
                      <option value="Hazard Mitigation">
                        Hazard Mitigation Grant Programs (HMGP)
                      </option>
                      <option value="Mitigation Planning">
                        Mitigation Planning
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="consultantsNeeded"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Number of Consultants Needed{' '}
                      <span className="text-primary">*</span>
                    </label>
                    <select
                      id="consultantsNeeded"
                      name="consultantsNeeded"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select number of consultants</option>
                      <option value="1">1 consultant</option>
                      <option value="2-5">2-5 consultants</option>
                      <option value="6-10">6-10 consultants</option>
                      <option value="10+">10+ consultants</option>
                    </select>
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
                      htmlFor="estimatedDuration"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Estimated Project Duration{' '}
                      <span className="text-primary">*</span>
                    </label>
                    <select
                      id="estimatedDuration"
                      name="estimatedDuration"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select estimated duration</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="1+ year">1+ year</option>
                      <option value="Ongoing">Ongoing</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="projectDescription"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Project Description{' '}
                      <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Please describe your project needs and requirements"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      When do you need the consultant(s) to start?{' '}
                      <span className="text-primary">*</span>
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select your timeline</option>
                      <option value="Immediate">Immediate (24-72 hours)</option>
                      <option value="1 Week">Within 1 week</option>
                      <option value="2 Weeks">Within 2 weeks</option>
                      <option value="1 Month">Within 1 month</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-primary text-white hover:bg-highlight transition-colors duration-300 rounded-lg font-semibold"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div id="clients-faq" className="scroll-mt-24">
            <h2 className="text-5xl font-bold text-secondary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('timeline')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    How quickly can a consultant start?
                  </h3>
                  {expandedFaq === 'timeline' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'timeline' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      Our consultants are typically available to start within
                      24-72 hours of selection. For urgent needs, we can often
                      expedite the process.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('types')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    What types of consultants do you provide?
                  </h3>
                  {expandedFaq === 'types' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'types' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      We provide consultants across all areas of emergency
                      management in response and recovery, including but not
                      limited to Individual Assistance, Public Assistance/406,
                      Hazard Mitigation Grants Program (HMGP), Disaster Recovery
                      Reform Act (DRRA) sec 1206 and Mitigation Planning to name
                      a few. Tell us your needs, we will provide the experienced
                      resources for your task.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('vetting')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    How are consultants vetted?
                  </h3>
                  {expandedFaq === 'vetting' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'vetting' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      All consultants undergo thorough background checks,
                      including but not limited to references verification, IS
                      Course Certification and interview.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('scaling')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    What if we need to scale our team?
                  </h3>
                  {expandedFaq === 'scaling' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'scaling' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      We can quickly scale your team up or down based on project
                      needs. Our large network of consultants allows us to
                      respond rapidly to changing requirements.
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
                    Do you provide ongoing support?
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
                      Yes, we provide continuous support throughout the
                      engagement. A dedicated account manager will be available
                      to address any concerns and ensure project success.
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

export default RequestConsultant;
