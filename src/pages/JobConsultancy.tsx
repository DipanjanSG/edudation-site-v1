import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, GraduationCap, Target, Search, LineChart, Building, ArrowRight, Download, Check, Globe, ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrochureModal from '../components/BrochureModal';

const JobConsultancy = () => {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const openBrochureModal = () => {
    setIsBrochureModalOpen(true);
  };

  const closeBrochureModal = () => {
    setIsBrochureModalOpen(false);
  };

  const financialSectors = [
    { id: "01", title: "Financial Consulting" },
    { id: "02", title: "Broking" },
    { id: "03", title: "Private Equity" },
    { id: "04", title: "Insurance" },
    { id: "05", title: "Law Firms" },
    { id: "06", title: "NBFC" },
  ];

  const marketServices = [
    {
      id: "01",
      title: "Talent Mapping",
      description: "Talent Mapping is a process of collecting market information of prospective candidates within defined target organisations."
    },
    {
      id: "02",
      title: "Compensation Survey",
      description: "Comprehensive analysis of salary ranges, benefits, and compensation trends across industries and positions."
    },
    {
      id: "03",
      title: "Independent Reference Check",
      description: "Thorough verification process to validate candidate credentials, work history, and professional reputation."
    }
  ];

  const industryPractices = [
    "Education",
    "Financial Service",
    "FMCG",
    "Retail",
    "Media and Entertainment",
    "Service Industry",
    "Technology",
    "Agricultural Technology"
  ];

  const companyValues = [
    {
      title: "Integrity",
      description: "We embrace and uphold the highest standards of personal and professional ethics, honesty and trust."
    },
    {
      title: "Responsibility",
      description: "We are responsible to fulfil our commitments to our people, clients, partners and all our stakeholders with a clear understanding of the urgency and accountability inherent in those commitments."
    },
    {
      title: "Passion for Excellence",
      description: "We are committed to delivering superior services with integrity, trust and appreciation to maintain our customer loyalty. We promise that we will deliver exceptional business results while making a positive contribution to our client's organization."
    },
    {
      title: "Empowerment",
      description: "We are empowered to deliver operational excellence through innovation and leadership at all levels."
    },
    {
      title: "Collaboration",
      description: "We work as a team and share knowledge for continuous improvement, learning and innovation."
    },
    {
      title: "Respect",
      description: "We treat everyone with uncompromising respect, civility and fairness. And we always welcome diversity and differences of opinion."
    }
  ];

  const interimBenefits = [
    "Sudden exit/loss of a senior executive.",
    "A sudden increase in workload.",
    "To guide management and staff through new methods or processes.",
    "Setting up a business.",
    "Closing down a business.",
    "Cost effectiveness.",
    "Managing acquisitions and mergers."
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="absolute inset-0">
          <img
            src="https://3.files.edl.io/c0b4/24/07/11/173611-a937d5ac-c196-4b43-9416-3781c9ee15b4.png"
            alt="Job Consultancy"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              JOB CONSULTANCY AND HUMAN RESOURCES MANAGEMENT
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Expert guidance for career development, job placement, and professional growth
            </p>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Career Resources
            </button>
          </div>
        </div>
      </div>

      {/* Global Sourcing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQGdEFPpQ8eR_w/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733522992326?e=2147483647&v=beta&t=7wFaAGPOmUbqXDcxCgd1hBfa-YhVAauH14EZ7b65qU0"
                alt="Job Consultancy Services"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Some Words About Global Sourcing</h2>
              <p className="text-gray-700 mb-6">
                Global Sourcing is a specialist service that has been developed to address the needs of global businesses looking at employing Indian & Expatriate talent at leadership / senior and middle management levels outside India. Mandates are delivered through an expert consultant team, which focuses only on such assignments. With our research driven methodology, strong linkages within the Indian & global talent pool and our sourcing skills, we would be in a position to add significant value to your hiring process.
              </p>
              <p className="text-gray-700 mb-6">
                Global Companies are looking at hiring talent from India, knowing the versatility and professional competence of Indian talent that has been demonstrated and proven, beyond doubt in the recent years. Domain knowledge, multi -tasking, ability to adapt and experience of having worked in a complex Indian market are the factors that prompt global organisations to look for Indian talent. SATISFIEDJOB.COM is well positioned to cater to the needs of this segment given its pioneering and dominating presence in Executive Search & Selection in India.
              </p>
              <div className="flex items-center text-blue-600">
                <Globe className="w-6 h-6 mr-2" />
                <span className="font-semibold">Global reach with local expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Sectors */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Sectors</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We specialize in providing job consultancy services across key financial sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {financialSectors.map((sector) => (
              <div key={sector.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                    <span className="w-8 h-8 flex items-center justify-center text-blue-600 font-bold">
                      {sector.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">{sector.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Intelligence Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Market Intelligence Services</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Market Intelligence services comprise of tools that will enable organizations take informed decisions. The objective is to provide accurate and comprehensive market data given our strong network and track record built over the past four decades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketServices.map((service) => (
              <div key={service.id} className="bg-blue-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900 flex items-center">
                  <span className="mr-2">{service.id}.</span>
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Practices */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Industry Practices</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryPractices.map((practice, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg text-center shadow-md"
              >
                <p className="font-medium text-blue-900">{practice}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Road Ahead */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Road Ahead</h2>
              <p className="text-gray-700 mb-6">
                India is expected to achieve the ambitious goal of doubling farm income by 2022. The agriculture sector in India is expected to generate better momentum in the next few years due to increased investment in agricultural infrastructure such as irrigation facilities, warehousing and cold storage. Furthermore, the growing use of genetically modified crops will likely improve the yield for Indian farmers. India is expected to be self-sufficient in pulses in the coming few years due to concerted effort of scientists to get early maturing varieties of pulses and the increase in minimum support price. In the next five years, the central government will aim US$ 9 billion in investments in the fisheries sector under PM Matsya Sampada Yojana. The government is targeting to raise fish production to 220 lakh tonnes by 2024-25.
              </p>
              <p className="text-gray-700 mb-6">
                Going forward, the adoption of food safety and quality assurance mechanisms such as Total Quality Management (TQM) including ISO 9000, ISO 22000, Hazard Analysis and Critical Control Points (HACCP), Good Manufacturing Practices (GMP) and Good Hygienic Practices (GHP) by the food processing industry will offer several benefits. The agri export from India is likely to reach the target of US$ 60 billion by the year 2022.
              </p>
              <p className="text-gray-700 mb-6">
                Agricultural and Processed Food Products Export Development Authority (APEDA), Department of Commerce and Industry, Union Budget 2021-22, Press Information Bureau, Ministry of Statistics and Programme Implementation, Press Releases, Media Reports, Ministry of Agriculture and Farmers Welfare, Crisil
              </p>
            </div>
            <div className="relative">
              <img
                src="https://www.fsg.org/wp-content/uploads/2023/12/Social-Impact-Trends-in-2024.jpg"
                alt="Agricultural Technology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-blue-100">
                Our Vision is to become one of the leading human resources consulting firms operating globally by maintaining our uncompromising principles and create value for all our stakeholders.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-blue-100">
                Our Mission to develop long-term and strategic partnerships with our clients, and help them to transform today's challenges into tomorrow's successes. And we are committed to meeting and exceeding the expectations in providing excellent service, unexpected quality and outstanding value to our people, clients and partners.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">SATISFIEDJOB.COM</h3>
              <p className="text-blue-100">
                We are committed to meeting and exceeding the expectations in providing excellent service, unexpected quality and outstanding value to our people, clients and partners while maintaining our uncompromising principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interim Management */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Interim Management</h2>
              <p className="text-gray-700 mb-6">
                Interim Management is the provision of senior executives to manage change or transition on a short term basis. The concept is prevalent in mature economies and is upcoming in India. More and more professionals today are open to exploring short-term high level engagements rather than committing themselves to one organization.
              </p>
              <p className="text-gray-700 mb-6">
                Short term professionals are highly skilled and can help corporates to deal with any kind of business challenge including:
              </p>
              <ul className="space-y-3 text-gray-700">
                {interimBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mt-6">
                Interim Management recruitment process is no different to traditional recruitment.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://sanegenc.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-29-at-5.31.47-PM.jpeg"
                alt="Interim Management"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">125,600+</p>
              <p className="text-gray-700 font-medium">Students enrolled</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">200+</p>
              <p className="text-gray-700 font-medium">Registered instructors</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-gray-700 font-medium">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Take the Next Step in Your Career</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how our job consultancy services can help you achieve your professional goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Schedule a Career Consultation <ArrowRight className="ml-2" />
            </Link>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Career Guides
            </button>
          </div>
        </div>
      </section>

      {/* Brochure Modal */}
      <BrochureModal isOpen={isBrochureModalOpen} onClose={closeBrochureModal} category="job-consultancy" />
    </motion.div>
  );
};

export default JobConsultancy;
