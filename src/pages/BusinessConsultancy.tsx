import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BarChart, TrendingUp, Users, Globe, Target, LineChart, ArrowRight, Download, CheckCircle, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrochureModal from '../components/BrochureModal';

const BusinessConsultancy = () => {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const openBrochureModal = () => {
    setIsBrochureModalOpen(true);
  };

  const closeBrochureModal = () => {
    setIsBrochureModalOpen(false);
  };

  const industriesServed = [
    { id: "01", title: "Food, Bakery, Agro Processing" },
    { id: "02", title: "Plastic, PVC, PET, HDPE / LDPE etc." },
    { id: "03", title: "Chemicals (Organic and Inorganic)" },
    { id: "04", title: "Rubber Chemicals and Rubber Goods" },
    { id: "05", title: "Textiles and Garments" },
    { id: "06", title: "Paints, Varnish and Lacquer" }
  ];

  const projectReportContent = [
    {
      id: "01",
      title: "Beginning",
      description: "Project introduction, brief history of the product, properties, BIS(bureau of Indian standards) specification and requirements, uses and applications."
    },
    {
      id: "02",
      title: "Market Survey",
      description: "Comprehensive market analysis including demand assessment, competitor analysis, and target market evaluation."
    },
    {
      id: "03",
      title: "Plant and Machinery",
      description: "Detailed specifications of required equipment, technology assessment, and infrastructure planning."
    },
    {
      id: "04",
      title: "Raw Material",
      description: "Analysis of material requirements, sourcing options, quality standards, and supply chain considerations."
    },
    {
      id: "05",
      title: "Manufacturing Techniques",
      description: "Description of production processes, quality control measures, and manufacturing best practices."
    },
    {
      id: "06",
      title: "Personnel Requirements",
      description: "Staffing needs assessment, organizational structure, and human resource planning."
    },
    {
      id: "07",
      title: "Land and Buildings",
      description: "Facility requirements, location analysis, and infrastructure considerations for the project."
    },
    {
      id: "08",
      title: "Financial Aspects",
      description: "Cost analysis, investment requirements, ROI projections, and funding options for the project."
    }
  ];

  const systematicApproach = [
    "Analysis the Project",
    "Requirement Collection",
    "Logistical Requirement",
    "Economic Feasibility",
    "Profile Analysis",
    "Market Research",
    "Funding Analysis",
    "Market Study"
  ];

  const specializedServices = [
    "Project Identification",
    "Detailed Project Reports/Pre-feasibility Reports",
    "Detailed Project Reports/Pre-feasibility Reports on PEN DRIVE",
    "Market Survey Studies/Reports/Research",
    "Technology Books and Directory",
    "Databases on CHIPS",
    "Laboratory Facility",
    "Turnkey Project Consultancy/Solutions",
    "GLOBAL ENTERPRISING (An Industrial Monthly Journal)"
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
            src="https://static.vecteezy.com/system/resources/previews/012/567/326/non_2x/scene-of-industrial-engineers-discussion-construction-architect-with-huge-industry-as-a-background-concept-of-engineer-project-planning-professional-teamwork-selective-focused-free-photo.jpg"
            alt="Business Consultancy"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Business Consultancy
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Strategic advisory services to optimize your business performance and drive sustainable growth
            </p>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Business Consultancy Brochures
            </button>
          </div>
        </div>
      </div>

      {/* About MAHASAMVIT Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Some Words About MAHASAMVIT Global Business Industry and Project Consultancy</h2>
              <p className="text-gray-700 mb-6">
                MAHASAMVIT Global Business Industry and Project Consultancy is an esteemed organization and provides integrated technical and financial consultancy service. The institute offers discreet information and counseling concerning a business to solve its recurring and potential business issues. EIRI supports clients to deal with various business practices to effectively run projects.
              </p>
              <p className="text-gray-700 mb-6">
                EIRI has been initiated with the aim of removing lack of information so that a project gets started and runs smoothly. Being a consultant, it always makes available (detailed project reports), market survey studies and research. It prides for an advanced Industrial, Business and Commercial Database to support businesses to easily deal with anything of intense nature.
              </p>
              <p className="text-gray-700 mb-6">
                EIRI always moves along with quality standards, resulting in customer appreciation and further need generation for projects and reports to deal with business and its related aspects. It has consistently been delivering integrated technical consultancy service, thus enabling a brand formation and reliability. Due diligence reports are prepared to let buyers and sellers meet up their needs and demands on a regular basis.
              </p>
              <div className="flex items-center text-blue-600">
                <Briefcase className="w-6 h-6 mr-2" />
                <span className="font-semibold">Tailored solutions for business success</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://www.constructconnect.com/hubfs/assets/2025%20Redesign/Supporting%20Graphics/Sitemap/hero%20image%20home%20final.png"
                alt="Business Consulting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Cater To */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Industries We Cater To</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our wide expertise in different industries allow us to cater our services throughout the country. Some of the sectors to which our services catered to includes the following
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industriesServed.map((industry) => (
              <div key={industry.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                    <span className="w-8 h-8 flex items-center justify-center text-blue-600 font-bold">
                      {industry.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">{industry.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Report Contents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Detailed Project Report Contains</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectReportContent.map((content) => (
              <div key={content.id} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-900 flex items-center">
                  <span className="mr-2">{content.id}.</span>
                  {content.title}
                </h3>
                <p className="text-gray-700">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systematic Approach */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our Systematic Approach Includes</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {systematicApproach.map((approach, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-md">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{index + 1}</div>
                <h3 className="text-lg font-semibold text-blue-900">{approach}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.stockcake.com/public/7/1/9/7198600f-8a5b-4fc5-9b8e-3285089a98b4_large/industrial-food-production-stockcake.jpg"
                alt="Industrial Manufacturing"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Management</h2>
              <p className="text-gray-700 mb-4">
                We have expertise in Industrial Project Consultancy, Technology Publications on various profitable Industries, Multiple Project Reports in CD-Roms, Over thousands satisfied entrepreneurs and well established Industrialists have been benefited from us.
              </p>
              <p className="text-gray-700 mb-4">
                Marketing all books throughout the World through e-books (in Cd and pdf format). Over 10,000 varied satisfied clienteles have been benefited from EIRI till date by getting Project Profiles, Market Survey, Market Survey Cum Detailed Techno Economic Feasibility Reports (Fully Computerised), Consultancy (Technical and Financial) and Technology Books on Profitable Industries.
              </p>
              <h3 className="text-xl font-semibold text-blue-900 mb-4 mt-8">Services Offered</h3>
              <p className="text-gray-700">
                We offer a wide assortment of services to our clients which range from consultancy to project reports and from market study to feasibility reports for our clients. Our comprehensive range of services comprises of Industrial Consultancy, rubber industry projects, IT industry projects, Project Management Consultancy, Hi – Tech Projects Industrial Research, Detailed Feasibility Reports, New Project Identification, Project Feasibility and Market Study, Lucrative Industrial Project, Preparation of Project Profiles, Market Surveys / Studies, Techno-Economic Feasibility Reports, Project Reports in CD Roms and Identification of Plant /Process/Machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Specialized Services</h2>
            <p className="text-blue-200 mt-4">
              We are engaged in providing wide range of services to the leading Indian as well as overseas organizations. Our provided services are:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg hover:bg-blue-700 transition-colors">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="font-medium">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
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
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our consultancy team today to discuss how we can help your business achieve its full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Schedule a Consultation <ArrowRight className="ml-2" />
            </Link>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Business Resources
            </button>
          </div>
        </div>
      </section>

      {/* Brochure Modal */}
      <BrochureModal isOpen={isBrochureModalOpen} onClose={closeBrochureModal} category="business-consultancy" />
    </motion.div>
  );
};

export default BusinessConsultancy;
