import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Clock,
  CheckCircle,
  FileCheck,
  UserCheck,
  Briefcase,
  Plus,
  Minus,
} from 'lucide-react';

interface ProgramExperience {
  [key: string]: boolean;
}

interface PAExperience {
  [key: string]: boolean;
}

interface HMGPExperience {
  [key: string]: boolean;
}

interface MitigationPlanningExperience {
  [key: string]: boolean;
}

interface AdditionalProgramsExperience {
  [key: string]: boolean;
}

interface DDRAExperience {
  [key: string]: boolean;
}

function ReadyToWork() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fileError, setFileError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [workTypes, setWorkTypes] = useState({
    individualAssistance: false,
    publicAssistance: false,
    hazardMitigation: false,
    planning: false,
  });
  const [hasIAExperience, setHasIAExperience] = useState(false);
  const [hasPAExperience, setHasPAExperience] = useState(false);
  const [hasHMGPExperience, setHasHMGPExperience] = useState(false);
  const [hasMitigationPlanningExperience, setHasMitigationPlanningExperience] =
    useState(false);
  const [hasAdditionalProgramsExperience, setHasAdditionalProgramsExperience] =
    useState(false);
  const [hasDDRAExperience, setHasDDRAExperience] = useState(false);
  const [programExperience, setProgramExperience] = useState<ProgramExperience>(
    {
      caseManagement: false,
      shelterOperations: false,
      rentalAssistance: false,
    }
  );
  const [paExperience, setPAExperience] = useState<PAExperience>({
    mitigation406: false,
    damageInventory: false,
    debris: false,
    emergencyProtectiveMeasures: false,
    categoryCthroughG: false,
  });
  const [hmgpExperience, setHMGPExperience] = useState<HMGPExperience>({
    acquisitions: false,
    elevation: false,
    windRetrofit: false,
    drainageCulverts: false,
    buyout: false,
    floodControls: false,
    saferoomShelters: false,
    retrofit: false,
    utilityInfrastructure: false,
    stormwaterManagement: false,
  });
  const [mitigationPlanningExperience, setMitigationPlanningExperience] =
    useState<MitigationPlanningExperience>({
      planWorkshops: false,
      planCOOPs: false,
      planDevelopment: false,
    });
  const [additionalProgramsExperience, setAdditionalProgramsExperience] =
    useState<AdditionalProgramsExperience>({
      hma: false,
      bric: false,
      sba: false,
      cdbgDr: false,
      environmental: false,
    });
  const [ddraExperience, setDDRAExperience] = useState<DDRAExperience>({
    substantialDamageEstimator: false,
    CertifiedAppraiser: false,
    CertifiedGeneralContractor: false,
    CertifiedFloodplainManager: false,
    CertifiedBuildingInspector: false,
    CertifiedHomeInspector: false,
    CodeEnforcement: false,
  });
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

  const validateFile = (file: File): boolean => {
    const maxSize = 1 * 200 * 1024; // 200KB in bytes
    if (file.size > maxSize) {
      setFileError('File size must be less than 50KB');
      return false;
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowedTypes.includes(file.type)) {
      setFileError('File must be PDF, DOC, or DOCX format');
      return false;
    }

    setFileError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert('Please accept the terms and conditions to continue.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Get and validate the file
    const resumeFile = formData.get('resume') as File;
    if (!validateFile(resumeFile)) {
      return;
    }

    try {
      // Convert file to base64
      const base64Content = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          try {
            const base64String = reader.result as string;
            resolve(base64String.split(',')[1]); // Remove data URL prefix
          } catch (error) {
            reject(new Error('Failed to process file'));
          }
        };
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(resumeFile);
      });

      // Prepare API Gateway payload with new structure
      const payload = {
        formType: 'ready-to-work',
        personalDetails: {
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          location: {
            city: formData.get('city'),
            county: formData.get('county'),
            state: formData.get('state'),
          },
        },
        workPreferences: {
          availability: formData.get('availability'),
          platform: formData.get('platform'),
          experience: formData.get('experience'),
        },
        experienceDetails: {
          individualAssistance: {
            hasExperience: hasIAExperience,
            areas: {
              caseManagement: programExperience.caseManagement,
              shelterOperations: programExperience.shelterOperations,
              rentalAssistance: programExperience.rentalAssistance,
            },
          },
          publicAssistance: {
            hasExperience: hasPAExperience,
            areas: {
              mitigation406: paExperience.mitigation406,
              damageInventory: paExperience.damageInventory,
              debris: paExperience.debris,
              emergencyProtectiveMeasures:
                paExperience.emergencyProtectiveMeasures,
              categoryCthroughG: paExperience.categoryCthroughG,
            },
          },
          hmgp: {
            hasExperience: hasHMGPExperience,
            areas: {
              acquisitions: hmgpExperience.acquisitions,
              elevation: hmgpExperience.elevation,
              windRetrofit: hmgpExperience.windRetrofit,
              drainageCulverts: hmgpExperience.drainageCulverts,
              buyout: hmgpExperience.buyout,
              floodControls: hmgpExperience.floodControls,
              saferoomShelters: hmgpExperience.saferoomShelters,
              retrofit: hmgpExperience.retrofit,
              utilityInfrastructure: hmgpExperience.utilityInfrastructure,
              stormwaterManagement: hmgpExperience.stormwaterManagement,
            },
          },
          mitigationPlanning: {
            hasExperience: hasMitigationPlanningExperience,
            areas: {
              planWorkshops: mitigationPlanningExperience.planWorkshops,
              planCOOP: mitigationPlanningExperience.planCOOP,
              planDevelopment: mitigationPlanningExperience.planDevelopment,
            },
          },
          ddra: {
            hasExperience: hasDDRAExperience,
            areas: {
              substantialDamageEstimator:
                ddraExperience.substantialDamageEstimator,
              certifiedAppraiser: ddraExperience.CertifiedAppraiser,
              certifiedGeneralContractor:
                ddraExperience.CertifiedGeneralContractor,
              certifiedFloodplainManager:
                ddraExperience.CertifiedFloodplainManager,
              certifiedBuildingInspector:
                ddraExperience.CertifiedBuildingInspector,
              certifiedHomeInspector: ddraExperience.CertifiedHomeInspector,
              codeEnforcement: ddraExperience.CodeEnforcement,
            },
          },
          additionalPrograms: {
            hasExperience: hasAdditionalProgramsExperience,
            areas: {
              hma: additionalProgramsExperience.hma,
              bric: additionalProgramsExperience.bric,
              sba: additionalProgramsExperience.sba,
              cdbgDr: additionalProgramsExperience.cdbgDr,
              environmental: additionalProgramsExperience.environmental,
            },
          },
        },
        resume: {
          filename: resumeFile.name,
          content: base64Content,
          contentType: resumeFile.type,
        },
      };

      // Submit to API Gateway
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
    } catch (error) {
      console.error('Error processing file:', error);
      setFileError('Failed to process file. Please try again.');
    }
  };

  const handleIAExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasIAExperience(e.target.checked);

    if (!e.target.checked) {
      setProgramExperience({
        caseManagement: false,
        shelterOperations: false,
        rentalAssistance: false,
      });
    }
  };

  const handlePAExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasPAExperience(e.target.checked);
    if (!e.target.checked) {
      setPAExperience({
        mitigation406: false,
        damageInventory: false,
        debris: false,
        emergencyProtectiveMeasures: false,
        categoryCthroughG: false,
      });
    }
  };

  const handleHMGPExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasHMGPExperience(e.target.checked);
    if (!e.target.checked) {
      setHMGPExperience({
        acquisitions: false,
        elevation: false,
        windRetrofit: false,
        drainageCulverts: false,
        buyout: false,
        floodControls: false,
        saferoomShelters: false,
        retrofit: false,
        utilityInfrastructure: false,
        stormwaterManagement: false,
      });
    }
  };

  const handleMitigationPlanningExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasMitigationPlanningExperience(e.target.checked);
    if (!e.target.checked) {
      setMitigationPlanningExperience({
        planWorkshops: false,
        planCOOP: false,
        planDevelopment: false,
      });
    }
  };

  const handleAdditionalProgramsExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasAdditionalProgramsExperience(e.target.checked);
    if (!e.target.checked) {
      setAdditionalProgramsExperience({
        hma: false,
        bric: false,
        sba: false,
        cdbgDr: false,
        environmental: false,
      });
    }
  };

  const handleDDRAExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasDDRAExperience(e.target.checked);
    if (!e.target.checked) {
      setDDRAExperience({
        substantialDamageEstimator: false,
        CertifiedAppraiser: false,
        CertifiedGeneralContractor: false,
        CertifiedFloodplainManager: false,
        CertifiedBuildingInspector: false,
        CertifiedHomeInspector: false,
        CodeEnforcement: false,
      });
    }
  };

  const handleProgramExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProgramExperience((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handlePAExperienceOptionsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPAExperience((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleHMGPExperienceOptionsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHMGPExperience((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleMitigationPlanningExperienceOptionsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMitigationPlanningExperience((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleAdditionalProgramsExperienceOptionsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdditionalProgramsExperience((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleDDRAExperienceOptionsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDDRAExperience((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
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
              Thank You for Your Interest in EMC Staffing!
            </h2>
            <p className="text-xl text-secondary mb-4 text-left">
              {firstName} {lastName}, we've received your application and our
              team will review it promptly.
            </p>
            <p className="text-lg text-secondary mb-4 text-left">
              We'll contact you within 48-72 hours to discuss potential
              opportunities that match your experience and qualifications.
            </p>
            <p className="text-lg text-secondary mb-4 text-left">
              If you have any immediate questions, please don't hesitate to call
              us at (689) 283-9646.
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
                Ready to Work?
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-3xl font-bold text-secondary mb-12">
                For opportunities nationwide, let us be your advocate by joining
                our network of emergency management professionals in response
                and recovery
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

      <div className="bg-[#d7d7d7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center pb-20">
            <div>
              <img
                src="/ready.webp"
                alt="Emergency Management Professional"
                className="rounded-lg shadow-2xl w-full h-auto"
                width={800}
                height={533}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Make a Difference
              </h2>
              <p className="text-lg text-secondary mb-6">
                EMC Staffing connects skilled emergency management professionals
                with local government and consulting firms leading disaster
                response and recovery efforts. Join our network to access
                opportunities that make a real impact.
              </p>
              <p className="text-lg text-secondary">
                Whether you're an experienced emergency management consultant or
                new to the industry, we have opportunities that match your
                skills and career goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="how-it-works" className="mb-20 scroll-mt-24">
            <h2 className="text-5xl font-bold text-secondary mb-8 text-center">
              How it Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:-rotate-2 p-6 group">
                <div className="flex justify-center mb-6">
                  <FileText className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:rotate-12 md:animate-fadeIn md:animate-pulse-slow" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                  1. Submit Your Profile
                </h3>
                <p className="text-secondary">
                  Complete the requested questionnaire to the best of your
                  ability and upload your resume. Our team will review your
                  submission within 48-72 hours. You will be contacted within 5
                  business days of your submission with the next steps.
                </p>
              </div>

              <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:rotate-2 p-6 group">
                <div className="flex justify-center mb-6">
                  <Clock className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:-rotate-12 md:animate-fadeIn md:animate-pulse-slow animation-delay-200" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                  2. Interview Process
                </h3>
                <p className="text-secondary">
                  If your qualifications match our needs, we'll schedule an
                  interview to learn more about your experience and discuss
                  available opportunities.
                </p>
              </div>

              <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:-rotate-2 p-6 group">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:rotate-12 md:animate-fadeIn md:animate-pulse-slow animation-delay-400" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                  3. Get Started
                </h3>
                <p className="text-secondary">
                  Once approved, you'll join our network and receive
                  notifications of opportunities matching your skills and
                  preferences.
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
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
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

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        City <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your city"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="county"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        County <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="county"
                        name="county"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your county"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        State <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your state"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="availability"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Preferred Schedule <span className="text-primary">*</span>
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select your preferred schedule</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Full-time">Full-time</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="platform"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Preferred Platform <span className="text-primary">*</span>
                    </label>
                    <select
                      id="platform"
                      name="platform"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select platform preference</option>
                      <option value="Virtual">Virtual</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="In-Person">In-Person</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Years of Experience{' '}
                      <span className="text-primary">*</span>
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select years of experience</option>
                      <option value="1-3">1-3 years</option>
                      <option value="4-6">4-6 years</option>
                      <option value="7-10">7-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-large text-secondary mb-4">
                      Please select relevant experience below:{' '}
                      <span className="text-primary">*</span>
                    </label>

                    {/* Individual Assistance Experience */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="hasIAExperience"
                          checked={hasIAExperience}
                          onChange={handleIAExperienceChange}
                          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label
                          htmlFor="hasIAExperience"
                          className="ml-2 text-secondary font-medium"
                        >
                          Individual Assistance (IA)
                        </label>
                      </div>

                      {hasIAExperience && (
                        <div className="ml-6 mt-2 space-y-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="caseManagement"
                              name="caseManagement"
                              checked={programExperience.caseManagement}
                              onChange={handleProgramExperienceChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="caseManagement"
                              className="ml-2 text-secondary"
                            >
                              Case Management
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="shelterOperations"
                              name="shelterOperations"
                              checked={programExperience.shelterOperations}
                              onChange={handleProgramExperienceChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="shelterOperations"
                              className="ml-2 text-secondary"
                            >
                              Shelter Operations
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="rentalAssistance"
                              name="rentalAssistance"
                              checked={programExperience.rentalAssistance}
                              onChange={handleProgramExperienceChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="rentalAssistance"
                              className="ml-2 text-secondary"
                            >
                              Rental Assistance
                            </label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Public Assistance Experience */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="hasPAExperience"
                          checked={hasPAExperience}
                          onChange={handlePAExperienceChange}
                          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label
                          htmlFor="hasPAExperience"
                          className="ml-2 text-secondary font-medium"
                        >
                          Public Assistance (PA)
                        </label>
                      </div>

                      {hasPAExperience && (
                        <div className="ml-6 mt-2 space-y-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="mitigation406"
                              name="mitigation406"
                              checked={paExperience.mitigation406}
                              onChange={handlePAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="mitigation406"
                              className="ml-2 text-secondary"
                            >
                              406 Mitigation
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="damageInventory"
                              name="damageInventory"
                              checked={paExperience.damageInventory}
                              onChange={handlePAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="damageInventory"
                              className="ml-2 text-secondary"
                            >
                              Damage Inventory
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="debris"
                              name="debris"
                              checked={paExperience.debris}
                              onChange={handlePAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="debris"
                              className="ml-2 text-secondary"
                            >
                              Debris
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="emergencyProtectiveMeasures"
                              name="emergencyProtectiveMeasures"
                              checked={paExperience.emergencyProtectiveMeasures}
                              onChange={handlePAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="emergencyProtectiveMeasures"
                              className="ml-2 text-secondary"
                            >
                              Emergency Protective Measures
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="categoryCthroughG"
                              name="categoryCthroughG"
                              checked={paExperience.categoryCthroughG}
                              onChange={handlePAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="categoryCthroughG"
                              className="ml-2 text-secondary"
                            >
                              Category C through G
                            </label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* HMGP Experience */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="hasHMGPExperience"
                          checked={hasHMGPExperience}
                          onChange={handleHMGPExperienceChange}
                          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label
                          htmlFor="hasHMGPExperience"
                          className="ml-2 text-secondary font-medium"
                        >
                          Hazard Mitigation Grant Program (HMGP)
                        </label>
                      </div>

                      {hasHMGPExperience && (
                        <div className="ml-6 mt-2 space-y-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="acquisitions"
                              name="acquisitions"
                              checked={hmgpExperience.acquisitions}
                              onChange={handleHMGPExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="acquisitions"
                              className="ml-2 text-secondary"
                            >
                              Acquisitions
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="elevation"
                              name="elevation"
                              checked={hmgpExperience.elevation}
                              onChange={handleHMGPExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="elevation"
                              className="ml-2 text-secondary"
                            >
                              Elevation
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="windRetrofit"
                              name="windRetrofit"
                              checked={hmgpExperience.windRetrofit}
                              onChange={handleHMGPExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="windRetrofit"
                              className="ml-2 text-secondary"
                            >
                              Wind Retrofit
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="drainageCulverts"
                              name="drainageCulverts"
                              checked={hmgpExperience.drainageCulverts}
                              onChange={handleHMGPExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="drainageCulverts"
                              className="ml-2 text-secondary"
                            >
                              Drainage/Culverts
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="buyout"
                              name="buyout"
                              checked={hmgpExperience.buyout}
                              onChange={handleHMGPExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="buyout"
                              className="ml-2 text-secondary"
                            >
                              Buyout
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="floodControls"
                              name="floodControls"
                              checked={hmgpExperience.floodControls}
                              onChange={handleHMGPExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="floodControls"
                              className="ml-2 text-secondary"
                            >
                              Flood Controls
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="saferoomShelters"
                              name="saferoomShelters"
                              checked={hmgpExperience.saferoomShelters}
                              onChange={handleHMGPExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="saferoomShelters"
                              className="ml-2 text-secondary"
                            >
                              Saferoom/Shelters
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="retrofit"
                              name="retrofit"
                              checked={hmgpExperience.retrofit}
                              onChange={handleHMGPExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="retrofit"
                              className="ml-2 text-secondary"
                            >
                              Retrofit
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="utilityInfrastructure"
                              name="utilityInfrastructure"
                              checked={hmgpExperience.utilityInfrastructure}
                              onChange={handleHMGPExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="utilityInfrastructure"
                              className="ml-2 text-secondary"
                            >
                              Utility Infrastructure
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="stormwaterManagement"
                              name="stormwaterManagement"
                              checked={hmgpExperience.stormwaterManagement}
                              onChange={handleHMGPExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="stormwaterManagement"
                              className="ml-2 text-secondary"
                            >
                              Stormwater Management
                            </label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Mitigation Planning Experience */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="hasMitigationPlanningExperience"
                          checked={hasMitigationPlanningExperience}
                          onChange={handleMitigationPlanningExperienceChange}
                          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label
                          htmlFor="hasMitigationPlanningExperience"
                          className="ml-2 text-secondary font-medium"
                        >
                          Planning
                        </label>
                      </div>

                      {hasMitigationPlanningExperience && (
                        <div className="ml-6 mt-2 space-y-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="planWorkshops"
                              name="planWorkshops"
                              checked={
                                mitigationPlanningExperience.planWorkshops
                              }
                              onChange={
                                handleMitigationPlanningExperienceOptionsChange
                              }
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="planWorkshops"
                              className="ml-2 text-secondary"
                            >
                              Planning Workshops
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="planCOOP"
                              name="planCOOP"
                              checked={mitigationPlanningExperience.planCOOP}
                              onChange={
                                handleMitigationPlanningExperienceOptionsChange
                              }
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="planCOOP"
                              className="ml-2 text-secondary"
                            >
                              COOP Plan
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="planUpdate"
                              name="planUpdate"
                              checked={mitigationPlanningExperience.planUpdate}
                              onChange={
                                handleMitigationPlanningExperienceOptionsChange
                              }
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="planUpdate"
                              className="ml-2 text-secondary"
                            >
                              Mitigation Plan Update
                            </label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* DDRA Experience */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="hasDDRAExperience"
                          checked={hasDDRAExperience}
                          onChange={handleDDRAExperienceChange}
                          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label
                          htmlFor="hasDDRAExperience"
                          className="ml-2 text-secondary font-medium"
                        >
                          Disaster Recovery Reform Act sec 1206 (DRRA)
                        </label>
                      </div>

                      {hasDDRAExperience && (
                        <div className="ml-6 mt-2 space-y-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="substantialDamageEstimator"
                              name="substantialDamageEstimator"
                              checked={
                                ddraExperience.substantialDamageEstimator
                              }
                              onChange={handleDDRAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="substantialDamageEstimator"
                              className="ml-2 text-secondary"
                            >
                              Substantial Damage Estimator
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="CertifiedAppraiser"
                              name="CertifiedAppraiser"
                              checked={ddraExperience.CertifiedAppraiser}
                              onChange={handleDDRAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="CertifiedAppraiser"
                              className="ml-2 text-secondary"
                            >
                              Certified Appraiser
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="CertifiedGeneralContractor"
                              name="CertifiedGeneralContractor"
                              checked={
                                ddraExperience.CertifiedGeneralContractor
                              }
                              onChange={handleDDRAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="CertifiedGeneralContractor"
                              className="ml-2 text-secondary"
                            >
                              Certified General Contractor
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="CertifiedFloodplainManager"
                              name="CertifiedFloodplainManager"
                              checked={
                                ddraExperience.CertifiedFloodplainManager
                              }
                              onChange={handleDDRAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="CertifiedFloodplainManager"
                              className="ml-2 text-secondary"
                            >
                              Certified Floodplain Manager
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="CertifiedBuildingInspector"
                              name="CertifiedBuildingInspector"
                              checked={
                                ddraExperience.CertifiedBuildingInspector
                              }
                              onChange={handleDDRAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="CertifiedBuildingInspector"
                              className="ml-2 text-secondary"
                            >
                              Certified Building Inspector
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="CertifiedHomeInspector"
                              name="CertifiedHomeInspector"
                              checked={ddraExperience.CertifiedHomeInspector}
                              onChange={handleDDRAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="CertifiedHomeInspector"
                              className="ml-2 text-secondary"
                            >
                              Certified Home Inspector
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="CodeEnforcement"
                              name="CodeEnforcement"
                              checked={ddraExperience.CodeEnforcement}
                              onChange={handleDDRAExperienceOptionsChange}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="CodeEnforcement"
                              className="ml-2 text-secondary"
                            >
                              Code Enforcement
                            </label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Additional Programs Experience */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="hasAdditionalProgramsExperience"
                          checked={hasAdditionalProgramsExperience}
                          onChange={handleAdditionalProgramsExperienceChange}
                          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label
                          htmlFor="hasAdditionalProgramsExperience"
                          className="ml-2 text-secondary font-medium"
                        >
                          Additional Programs
                        </label>
                      </div>

                      {hasAdditionalProgramsExperience && (
                        <div className="ml-6 mt-2 space-y-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="hma"
                              name="hma"
                              checked={additionalProgramsExperience.hma}
                              onChange={
                                handleAdditionalProgramsExperienceOptionsChange
                              }
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="hma"
                              className="ml-2 text-secondary"
                            >
                              Hazard Mitigation Assistance Program (HMA)
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="bric"
                              name="bric"
                              checked={additionalProgramsExperience.bric}
                              onChange={
                                handleAdditionalProgramsExperienceOptionsChange
                              }
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="bric"
                              className="ml-2 text-secondary"
                            >
                              Building Resilient Infrastructure and Communities
                              (BRIC)
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="sba"
                              name="sba"
                              checked={additionalProgramsExperience.sba}
                              onChange={
                                handleAdditionalProgramsExperienceOptionsChange
                              }
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="sba"
                              className="ml-2 text-secondary"
                            >
                              Small Business Administration (SBA)
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="cdbgDr"
                              name="cdbgDr"
                              checked={additionalProgramsExperience.cdbgDr}
                              onChange={
                                handleAdditionalProgramsExperienceOptionsChange
                              }
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="cdbgDr"
                              className="ml-2 text-secondary"
                            >
                              CDBG-DR
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="environmental"
                              name="environmental"
                              checked={
                                additionalProgramsExperience.environmental
                              }
                              onChange={
                                handleAdditionalProgramsExperienceOptionsChange
                              }
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor="environmental"
                              className="ml-2 text-secondary"
                            >
                              Environmental
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="resume"
                      className="block text-lg font-medium text-secondary mb-2"
                    >
                      Resume <span className="text-primary">*</span>
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          validateFile(file);
                        }
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-highlight"
                      required
                    />
                    {fileError && (
                      <p className="mt-2 text-sm text-red-600">{fileError}</p>
                    )}
                    <p className="mt-2 text-sm text-gray-500">
                      Accepted formats: PDF, DOC, DOCX (Max size: 200KB)
                    </p>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 text-secondary">
                      I agree to the{' '}
                      <a
                        href="/terms"
                        className="text-primary hover:text-highlight"
                        target="_blank"
                      >
                        Terms and Conditions
                      </a>{' '}
                      <span className="text-primary">*</span>
                    </label>
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
                  onClick={() => toggleFaq('types')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    Can I speak with someone directly?
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
                      Absolutely! After submitting your resume, a member of our
                      team will reach out to acknowledge your submission and
                      answer any questions you may have. If you'd like to speak
                      with someone before applying, please complete the Contact
                      Us form.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('timeline')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    Will I need to deploy for the assignment?
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
                      Yes, most positions require in-person deployment, though
                      some hybrid and remote opportunities may be available.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('requirements')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    How long will my deployment last?
                  </h3>
                  {expandedFaq === 'requirements' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'requirements' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      The length of your assignment depends on the client's
                      needs and the scope of the project. All contracts are
                      project based.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('benefits')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    What type of employment classification is this?
                  </h3>
                  {expandedFaq === 'benefits' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'benefits' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      All positions are 1099 independent contractor roles,
                      meaning taxes will not be withheld from your pay. EMC
                      Staffing or Contracting firm will report your earnings to
                      the IRS and provide you with the necessary documentation
                      for tax filing.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('travel')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    Do you offer benefits?
                  </h3>
                  {expandedFaq === 'travel' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'travel' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      Unfortunately not, all hires are independent consultants,
                      you are required to carry your own insurance.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('positionsx')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    What types of positions do you offer?
                  </h3>
                  {expandedFaq === 'positionsx' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'positionsx' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      Positions can be full or part-time, virtual, hybrid or
                      in-person.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('expreq')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    Is prior experience required?
                  </h3>
                  {expandedFaq === 'expreq' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'expreq' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      For Individual Assistance (IA) positions, a background in
                      customer service is the minimum requirement, you will be
                      trained on the ground. For all other positions, some level
                      of program knowledge is expected. We strongly recommend
                      completing at least 10 FEMA Independent Study (IS) courses
                      to build a solid foundation.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-light rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#d7d7d7] transition-colors"
                  onClick={() => toggleFaq('processtake')}
                >
                  <h3 className="text-xl font-bold text-secondary">
                    How long does the application process take?
                  </h3>
                  {expandedFaq === 'processtake' ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === 'processtake' && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary">
                      We review applications within 48-72 hours. If your
                      qualifications match an open position, an interview will
                      be scheduled promptly. The entire process from submission
                      to placement, depending on availability, can take up to
                      1-2 weeks. We move at the speed of our clients, depending
                      on the urgency, they may request a start date within 48
                      hours!
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
