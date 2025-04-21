import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, FileText, BarChart, PieChart, LineChart, Users, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrochureModal from '../components/BrochureModal';

const FinancialResearch = () => {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const openBrochureModal = () => {
    setIsBrochureModalOpen(true);
  };

  const closeBrochureModal = () => {
    setIsBrochureModalOpen(false);
  };

  const researchServices = [
    {
      title: "Market Analysis",
      description: "Comprehensive analysis of market trends, opportunities, and risks across different sectors and regions.",
      icon: BarChart2
    },
    {
      title: "Investment Research",
      description: "Detailed research on investment opportunities, asset classes, and portfolio optimization strategies.",
      icon: TrendingUp
    },
    {
      title: "Financial Reporting",
      description: "In-depth analysis of financial statements, earnings reports, and corporate disclosures.",
      icon: FileText
    },
    {
      title: "Economic Research",
      description: "Analysis of macroeconomic indicators, policy developments, and their impact on financial markets.",
      icon: BarChart
    },
    {
      title: "Industry Research",
      description: "Sector-specific research reports covering trends, competitive landscape, and growth opportunities.",
      icon: PieChart
    },
    {
      title: "Quantitative Analysis",
      description: "Mathematical and statistical analysis of financial data to identify patterns and make predictions.",
      icon: LineChart
    }
  ];

  const clients = [
    "Investment Banks",
    "Asset Management Firms",
    "Corporate Finance Departments",
    "Private Equity Firms",
    "Hedge Funds",
    "Individual Investors",
    "Policy Makers"
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
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
            alt="Financial Research"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Financial Research Services
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Data-driven insights to inform your financial decisions and strategy
            </p>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Research Brochures
            </button>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Financial Research Team"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Research Approach</h2>
              <p className="text-gray-700 mb-6">
                At Mahasamvit, our financial research services combine rigorous analysis, industry expertise, and advanced analytical tools to deliver actionable insights for our clients.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of experienced analysts and researchers monitors global financial markets, economic trends, and sector developments to provide timely and accurate information that drives successful investment and business decisions.
              </p>
              <div className="flex items-center text-blue-600">
                <BarChart2 className="w-6 h-6 mr-2" />
                <span className="font-semibold">Data-driven insights for informed decisions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our Research Services</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Comprehensive financial research solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our Research Process</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A systematic approach to delivering valuable financial insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Data Collection & Analysis</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">1.</span>
                  <span>Gather data from multiple reliable sources including market feeds, financial statements, and economic reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">2.</span>
                  <span>Clean and process data using advanced statistical tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">3.</span>
                  <span>Apply quantitative and qualitative analysis methodologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">4.</span>
                  <span>Identify patterns, trends, and anomalies in the data</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Insights & Recommendations</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">1.</span>
                  <span>Interpret analysis results in the context of market conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">2.</span>
                  <span>Develop actionable insights based on research findings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">3.</span>
                  <span>Formulate strategic recommendations aligned with client objectives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">4.</span>
                  <span>Present findings in clear, concise reports with visualizations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Who We Serve</h2>
            <p className="text-blue-200 mt-4">Our research services cater to a diverse range of financial stakeholders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg text-center">
                <Users className="w-8 h-8 mx-auto mb-3" />
                <p className="font-medium">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Make Data-Driven Financial Decisions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our research team today to discuss how our financial research services can support your objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Request Research Services <ArrowRight className="ml-2" />
            </Link>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Research Materials
            </button>
          </div>
        </div>
      </section>

      {/* Brochure Modal */}
      <BrochureModal isOpen={isBrochureModalOpen} onClose={closeBrochureModal} category="financial-research" />
    </motion.div>
  );
};

export default FinancialResearch;
