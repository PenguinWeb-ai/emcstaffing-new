import React, { useEffect, useState } from 'react';
import {
  Award,
  Users,
  CheckCircle,
  Rocket,
  Shield as Shield2,
  Clock,
  Target,
  X,
} from 'lucide-react';

interface LeadershipProfile {
  name: string;
  title: string;
  image: string;
  education: string[];
  summary: string[];
  achievements: string[];
}

function About() {
  const [selectedLeader, setSelectedLeader] =
    useState<LeadershipProfile | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const leadershipProfiles: LeadershipProfile[] = [
    {
      name: 'VICKY NGOIE, MBA',
      title: 'Founder / Principal Consultant',
      image: '/vicky2.webp',
      education: [
        "Master's in Business Administration",
        'Pursuing Doctorate in Organization Leadership',
      ],
      summary: [
        'A highly qualified Emergency Management and Project Management professional, with extensive experience in Mitigation Planning, Hazard Mitigation Grant Program (HMGP) and Public Assistant (PA).',
      ],
      achievements: [
        "Over twenty (20) years coordinating and providing technical assistance to Local, State, Disaster Resistant Universities, and Tribal officials on the preparation, revision, and updating mitigation plans. Served as a Project Manager for HMGP in multiple states including Florida, Colorado, California, New York, and Louisiana. Led FEMA PA projects in California, Texas, Georgia, Louisiana, North Carolina. Provided G318 training and HMGP Applicant Briefings in Florida and New York. Developed and implemented a successful closeout process for the New York Governor's Office of Storm Recovery's (GOSR) Small Business Administration program.",
      ],
    },
    {
      name: 'TRACY SMITH, MAOM',
      title: 'SME Planning',
      image: '/tracy.webp',
      education: ["Master's in Organization Management"],
      summary: [
        'Versatile professional with successful experience in FEMA Public Assistance (PA), strategic planning, mitigation planning, Hazard Mitigation Grant Program (HMGP), grants administration/management, project management, program development, non-profit management, community development and training.',
      ],
      achievements: [
        "More than fifteen (15) years' experience providing FEMA technical assistance to Federal, State, Local Municipalities, Private Non-Profits (PNP), and House of Worships (HOW).  Provided Disaster Recovery and Leadership support to multiple states including Florida, Louisiana, Ohio, and New York.",
      ],
    },
    {
      name: 'CARLOS PENA, MEcon',
      title: 'SME Individual Assistance',
      image: '/carlos.webp',
      education: [
        "Master's in Economics",
        'Pursuing MBA in Corporate Finance and Organizational Development',
        'Bachelor of Science in Industrial Engineer',
      ],
      summary: [
        'Subject matter Expert and Project Management professional with extensive experience in FEMA Public Assistance (PA), Individual Assistance, preparing project worksheet, participating in senior level FEMA meetings and coordinating project closeout activities. Experience in emergency response at EOCs.',
      ],
      achievements: [
        'Over fifteen (15) years of experience providing support and expertise to communities affected by disasters at State, County and Local levels, including recovery projects during Hurricanes Ike, Irma, Maria, Fiona, Ian, Debbie, Helene and Milton in the States of Texas, Florida, Nebraska and Alaska and the territory of Puerto Rico. Experience in Emergency Response operations in Massachusetts and Texas for Columbia Gas Explosion and COVID-19, respectively at the EOC and Emergency Shelters.',
        'Proficient in English, Spanish and Italian',
      ],
    },
    {
      name: 'MARK ALBRIGHT, BConst',
      title: 'SME in Federal Programs',
      image: '/shadow.webp',
      education: [
        'Bachelor in Building Construction',
        '2 years undergraduate studies in Architecture',
      ],
      summary: [
        'A Subject Matter Expert (SME) in Federal programs and dedicated leader that provides regulatory knowledge needed to deliver successful outcomes in FEMA PA, HMGP, Debris, CDBG-DR, CDBG-MIT, 406 Mitigation, Section 428, HMA, PDM, FMA and SRL to name a few.',
      ],
      achievements: [
        "Possesses over forty (40) years' experience in emergency management response and recovery including owning a construction company and managing multimillion dollar construction projects in both government, public and private sectors. Led construction projection for the U.S. Army Corps of Engineers (USACE), Cape Canaveral Air Force Station, Kennedy Space Center, Westgate Vacation Villas, EPCOT, Universal Studios and Orange County Public Schools. Led FEMA programs in US Virgin Islands, Florida, Alabama, New York, Louisiana, North Carolina, New Mexico and Texas. Also managed COVID / CAREs in Florida, Kansas, Maine, Massachusetts, Missouri, New Jersey, North Carolina, and Rhode Island.",
      ],
    },
    {
      name: 'KURTIS BULLARD, MSEM',
      title: 'SME HMGP',
      image: '/shadow.webp',
      education: ['Master of Science, Environmental Management'],
      summary: [
        'A professional Project Manager and SME in HMGP and EHP, providing continued coordination with Federal and State agencies for projects ranging from drainage, back up/generator power, flood mitigation, elevations, acquisitions, Severe Weather Warning System, from application development, running BCAs through closeout.',
      ],
      achievements: [
        'Attained over fifteen (15) years of experience in providing grants management and disaster recovery support to states and municipalities for federally funded disaster recovery programs. He has worked with over 250 subrecipients in the State of New York, New Jersey, North Carolina and Mississippi. Has successfully designed and monitored programs for a variety of federal grants including FEMA, HUD and research grants.',
      ],
    },
    {
      name: 'DON SMITH, BSM',
      title: 'SME FEMA PA',
      image: '/don.webp',
      education: ['Bachelor of Science in Business Management'],
      summary: [
        'Recognized as a subject matter expert in FEMA PA policies, grants management, and cost recovery strategies, with a strong ability to lead teams, mentor staff, and liaise between applicants and federal agencies to ensure accurate and timely reimbursement.',
      ],
      achievements: [
        'Procured over seventeen (17) years of experience supporting FEMA Public Assistance (PA) programs and disaster recovery efforts across the United States. Led multi-million-dollar FEMA PA efforts; formulated and reviewed hundreds of project worksheets (PWs); recovered and tracked funding; engineered, managed and commissioned critical HVAC; and a trusted expert in FEMA audits and QA/QC reviews.  Also possesses over twenty-five (25) years of facilities engineering and construction experience.',
      ],
    },
    {
      name: 'PAULA BRADSHAW, BBM, SHRM',
      title: 'Recruitment Consultant',
      image: '/paula.webp',
      education: ['Bachelor of Business Management'],
      summary: [
        'Dynamic and results-driven Recruiter with proven track record of sourcing and placing high-performing candidates through strategic sourcing, networking, and data-driven recruitment strategies. Skilled in behavioral interviewing techniques to ensure the right fit for both candidates and clients. Committed to enhancing employer brand and delivering an exceptional candidate experience.',
      ],
      achievements: [
        'Successfully placed over 150 candidates in permanent and contract roles across IT, administrative, and healthcare sectors within a 12-month period, exceeding annual placement targets by 35%. Consistently meeting client needs ahead of schedule while maintaining a 92% candidate retention rate at the 6-month mark.',
      ],
    },
    {
      name: 'RENEE KANAMA, BS',
      title: 'Account Executive',
      image: '/renee.webp',
      education: ['Bachelor in Health Management Administration'],
      summary: [
        'Client-focused and performance-driven professional with experience managing key accounts and resolving client concerns. Known for building strong, long-term relationships through clear communication, proactive problem-solving and committed to delivering tailored solutions.',
      ],
      achievements: [
        'Successfully demonstrated over ten (10) years of experience managing key accounts and implementing a personalized account follow-up, resulting in increased client satisfaction and long-term loyalty.',
      ],
    },
    {
      name: 'SONALI NANDWANI, B.A',
      title: 'Marketing & Advertising',
      image: '/sonali.webp',
      education: ['Bachelor of Arts in Marketing'],
      summary: [
        'A skilled Marketing and Advertising professional with expertise in market research, content creation, social media strategy, and cross-functional collaboration. Passionate about delivering impactful messaging that resonates.',
      ],
      achievements: [
        "With over ten  (10) years' experience, Sonali developed and executed a targeted digital marketing campaign that increased candidate applications, resulting in a faster fill rate for staffing needs.",
      ],
    },
  ];

  return (
    <div>
      <div className="bg-white">
        <div className="pt-32 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-32">
              <h1 className="text-5xl font-bold text-secondary mb-6">
                About EMC Staffing
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-3xl font-bold text-secondary mb-12">
                Empowering Communities Through Expert Disaster Recovery
                Solutions
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <button
                  onClick={() => scrollToSection('what-sets-us-apart')}
                  className="text-lg font-semibold text-white bg-primary hover:bg-highlight transition-colors px-4 py-2 rounded flex items-center justify-between w-full md:w-auto shadow-sm hover:shadow-md"
                >
                  <span>What Sets Us Apart?</span>
                  <span className="text-white transform transition-transform group-hover:translate-y-1">
                    {' '}
                    ↓
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('mission')}
                  className="text-lg font-semibold text-white bg-primary hover:bg-highlight transition-colors px-4 py-2 rounded flex items-center justify-between w-full md:w-auto shadow-sm hover:shadow-md"
                >
                  <span>Mission</span>
                  <span className="text-white transform transition-transform group-hover:translate-y-1">
                    {' '}
                    ↓
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('vision')}
                  className="text-lg font-semibold text-white bg-primary hover:bg-highlight transition-colors px-4 py-2 rounded flex items-center justify-between w-full md:w-auto shadow-sm hover:shadow-md"
                >
                  <span>Vision</span>
                  <span className="text-white transform transition-transform group-hover:translate-y-1">
                    {' '}
                    ↓
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('core-values')}
                  className="text-lg font-semibold text-white bg-primary hover:bg-highlight transition-colors px-4 py-2 rounded flex items-center justify-between w-full md:w-auto shadow-sm hover:shadow-md"
                >
                  <span>Core Values</span>
                  <span className="text-white transform transition-transform group-hover:translate-y-1">
                    {' '}
                    ↓
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('leadership')}
                  className="text-lg font-semibold text-white bg-primary hover:bg-highlight transition-colors px-4 py-2 rounded flex items-center justify-between w-full md:w-auto shadow-sm hover:shadow-md"
                >
                  <span>Leadership</span>
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
            <div>
              <img
                src="/empowering.webp"
                alt="Emergency Management Team"
                className="rounded-lg shadow-2xl w-full h-auto"
                width={800}
                height={533}
                loading="lazy"
                decoding="async"
                onContextMenu={preventContextMenu}
                draggable="false"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-secondary mb-6">
                When disaster strikes, <strong>EMC Staffing</strong> is the
                partner communities trust to deliver results. We specialize in
                staff augmentation services, supporting disaster response,
                recovery operations, mitigation planning, and grant management
                with unmatched expertise.
                <br /> <br />
                Our elite team — bringing anywhere from one to over forty years
                of hands-on experience — have experience supporting Federal,
                State, and Local governments, Profit/Nonprofits and private
                sector organizations, across a wide range of FEMA programs,
                including Public Assistance (PA), Hazard Mitigation Grant
                Program (HMGP), Individual Assistance (IA), Planning and
                Disaster Recovery Reform Act (DRRA) Section 1206, among others.
                <br /> <br />
                At EMC Staffing, we don’t just fill roles — we empower
                organizations to maximize funding, accelerate reimbursement, and
                build stronger, more resilient communities.{' '}
                <strong>
                  When every second counts, EMC Staffing delivers the expertise
                  you need.
                </strong>
              </p>
              <p className="text-lg text-secondary"></p>
            </div>
          </div>
        </div>

        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div id="what-sets-us-apart" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
                What Sets Us Apart?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:-rotate-2 p-6 group">
                  <div className="flex justify-center mb-6">
                    <Award className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:rotate-12 md:animate-fadeIn md:animate-pulse-slow" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                    Expertise in FEMA & Federal Grant Programs
                  </h3>
                  <p className="text-secondary">
                    Our team members have successfully managed response and
                    recovery projects across all 50 states and its territories,
                    providing technical assistance and compliance guidance to
                    help applicants and subrecipients secure critical funding.
                  </p>
                </div>

                <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:rotate-2 p-6 group">
                  <div className="flex justify-center mb-6">
                    <Users className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:-rotate-12 md:animate-fadeIn md:animate-pulse-slow animation-delay-200" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                    Seamless Integration with Your Team
                  </h3>
                  <p className="text-secondary">
                    We provide specialized staffing solutions that allow your
                    emergency management team to focus on essential operations
                    while ensuring that every decision aligns with federal and
                    state requirements.
                  </p>
                </div>

                <div className="bg-light rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:-rotate-2 p-6 group">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:rotate-12 md:animate-fadeIn md:animate-pulse-slow animation-delay-400" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                    Proven Track Record
                  </h3>
                  <p className="text-secondary">
                    With extensive experience in Individual Assistance, FEMA PA,
                    HMGP, and other federal programs, our consultants guide
                    clients through the complexities of funding applications,
                    program management, and regulatory compliance—reducing risk
                    and maximizing reimbursements.
                  </p>
                </div>
              </div>
            </div>

            <div id="mission" className="mb-20 scroll-mt-24">
              <div className="bg-light rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative">
                  <div className="w-full h-32 bg-highlight"></div>
                  <h2 className="absolute bottom-0 left-0 text-4xl font-bold text-white p-8">
                    Our Mission
                  </h2>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fadeInUp">
                      <h3 className="text-xl font-bold text-secondary mb-4">
                        Empowering Recovery
                      </h3>
                      <p className="text-secondary">
                        To provide exceptional emergency management staffing
                        solutions that empower communities to effectively
                        respond, recover, and build resilience in the face of
                        disasters.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fadeInUp animation-delay-200">
                      <h3 className="text-xl font-bold text-secondary mb-4">
                        Delivering Excellence
                      </h3>
                      <p className="text-secondary">
                        Through our commitment to excellence, we connect skilled
                        professionals with organizations to optimize disaster
                        recovery efforts and maximize federal funding
                        opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-3xl font-bold text-secondary mb-8 text-center">
                      Our Commitment
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:-rotate-2 p-6 group">
                        <div className="flex justify-center mb-6">
                          <Rocket className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:rotate-12 md:animate-fadeIn md:animate-pulse-slow" />
                        </div>
                        <h4 className="text-xl font-bold text-secondary text-center mb-4">
                          Providing rapid deployment of qualified emergency
                          management professionals
                        </h4>
                      </div>

                      <div className="bg-white rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:rotate-2 p-6 group">
                        <div className="flex justify-center mb-6">
                          <Shield2 className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:-rotate-12 md:animate-fadeIn md:animate-pulse-slow animation-delay-200" />
                        </div>
                        <h4 className="text-xl font-bold text-secondary text-center mb-4">
                          Ensuring compliance with federal and state regulations
                        </h4>
                      </div>

                      <div className="bg-white rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:-rotate-2 p-6 group">
                        <div className="flex justify-center mb-6">
                          <Clock className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:rotate-12 md:animate-fadeIn md:animate-pulse-slow animation-delay-400" />
                        </div>
                        <h4 className="text-xl font-bold text-secondary text-center mb-4">
                          Supporting communities through all phases of disaster
                          recovery
                        </h4>
                      </div>

                      <div className="bg-white rounded-lg overflow-hidden transition-all duration-500 md:hover:scale-110 md:hover:rotate-2 p-6 group">
                        <div className="flex justify-center mb-6">
                          <Target className="w-16 h-16 text-primary md:transition-all md:duration-500 md:group-hover:scale-125 md:group-hover:-rotate-12 md:animate-fadeIn md:animate-pulse-slow animation-delay-600" />
                        </div>
                        <h4 className="text-xl font-bold text-secondary text-center mb-4">
                          Fostering long-term resilience through expert guidance
                          and support
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="vision" className="mb-20 scroll-mt-24">
              <div className="bg-light rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative">
                  <div className="w-full h-32 bg-highlight"></div>
                  <h2 className="absolute bottom-0 left-0 text-4xl font-bold text-white p-8">
                    Our Vision
                  </h2>
                </div>
                <div className="p-8">
                  <div className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fadeInUp">
                    <p className="text-xl text-secondary leading-relaxed">
                      To foster strong partnerships with clients and
                      consultants, building long-term professional relationships
                      that drive disaster resilience and community recovery. We
                      envision a future where communities are better prepared,
                      more resilient, and equipped with the expertise needed to
                      navigate any disaster recovery challenge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="core-values"
              className="bg-light rounded-lg overflow-hidden shadow-2xl mb-20 scroll-mt-24 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              <div className="relative">
                <div className="w-full h-32 bg-highlight"></div>
                <h2 className="absolute bottom-0 left-0 text-4xl font-bold text-white p-8">
                  Core Values
                </h2>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fadeInUp">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-primary mr-4">
                        T
                      </span>
                      <h3 className="text-2xl font-bold text-secondary">
                        rustworthy
                      </h3>
                    </div>
                    <p className="text-secondary">
                      We build lasting relationships through integrity,
                      transparency, and consistent delivery of exceptional
                      service. Our commitment to trustworthiness is the
                      foundation of every client interaction and project
                      engagement.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fadeInUp animation-delay-200">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-primary mr-4">
                        E
                      </span>
                      <h3 className="text-2xl font-bold text-secondary">
                        xperience
                      </h3>
                    </div>
                    <p className="text-secondary">
                      Our network comprises seasoned professionals with decades
                      of specialized disaster recovery expertise. We leverage
                      this deep experience to deliver optimal solutions for
                      every challenge.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fadeInUp animation-delay-400">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-primary mr-4">
                        A
                      </span>
                      <h3 className="text-2xl font-bold text-secondary">
                        ccountability
                      </h3>
                    </div>
                    <p className="text-secondary">
                      We take ownership of our commitments and deliver results.
                      Our team maintains the highest standards of professional
                      responsibility and dedication to achieving project
                      objectives.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fadeInUp animation-delay-600">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-primary mr-4">
                        M
                      </span>
                      <h3 className="text-2xl font-bold text-secondary">
                        eticulous
                      </h3>
                    </div>
                    <p className="text-secondary">
                      Our attention to detail ensures compliance, maximizes
                      funding opportunities, and delivers successful project
                      outcomes. We approach every task with precision and
                      thoroughness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="leadership"
              className="bg-white rounded-lg overflow-hidden shadow-2xl scroll-mt-24 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/red-cropped.jpg"
                  alt="Leadership Background"
                  className="w-full h-full object-cover object-top"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  onContextMenu={preventContextMenu}
                  draggable="false"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <h2 className="absolute bottom-0 left-0 text-4xl font-bold text-white p-8">
                  Our Leadership
                </h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {leadershipProfiles.map((profile, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                      onClick={() => setSelectedLeader(profile)}
                    >
                      <div className="w-32 h-32 mx-auto mt-4 overflow-hidden">
                        <img
                          src={profile.image}
                          alt={profile.name}
                          className="w-full h-full object-cover rounded-full"
                          loading="lazy"
                          decoding="async"
                          onContextMenu={preventContextMenu}
                          draggable="false"
                        />
                      </div>
                      <div className="p-3 text-center">
                        <h3 className="text-xs font-bold text-secondary">
                          {profile.name}
                        </h3>
                        <p className="text-[10px] text-primary mt-1">
                          {profile.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {selectedLeader && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="relative">
                    <button
                      onClick={() => setSelectedLeader(null)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className="w-48 h-48 mx-auto overflow-hidden">
                            <img
                              src={selectedLeader.image}
                              alt={selectedLeader.name}
                              className="w-full h-full object-cover rounded-full shadow-lg"
                              onContextMenu={preventContextMenu}
                              draggable="false"
                            />
                          </div>
                        </div>

                        <div className="md:w-2/3">
                          <h3 className="text-2xl font-bold text-secondary mb-1">
                            {selectedLeader.name}
                          </h3>
                          <p className="text-lg text-primary mb-6">
                            {selectedLeader.title}
                          </p>

                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-bold text-secondary uppercase tracking-wider mb-3">
                                Education
                              </h4>
                              <ul className="space-y-2">
                                {selectedLeader.education.map((item, index) => (
                                  <li key={index} className="text-secondary">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-bold text-secondary uppercase tracking-wider mb-3">
                                Professional Summary
                              </h4>
                              <ul className="space-y-2">
                                {selectedLeader.summary.map((item, index) => (
                                  <li key={index} className="text-secondary">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-bold text-secondary uppercase tracking-wider mb-3">
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {selectedLeader.achievements.map(
                                  (item, index) => (
                                    <li key={index} className="text-secondary">
                                      {item}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
