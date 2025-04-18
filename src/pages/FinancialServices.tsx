import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, ArrowRight, Check, BarChart2, Users, FileText, ShieldCheck, Clock, Briefcase, LineChart, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrochureModal from '../components/BrochureModal';

const FinancialServices = () => {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const openBrochureModal = () => {
    setIsBrochureModalOpen(true);
  };

  const closeBrochureModal = () => {
    setIsBrochureModalOpen(false);
  };

  const ethosList = [
    {
      title: "Equal existence",
      description: "We believe wealth creation must be everyone's right, ensuring that it is not a privilege limited to a few but a possibility for every individual."
    },
    {
      title: "Innovation",
      description: "We believe in moving ahead of time, so we've built an in-house Quant Engine using 300+ Smart Algorithms that help us arrive at the right stock recommendations for our customers."
    },
    {
      title: "Humility",
      description: "We believe in becoming better each day. We value the feedback from our precious customers, competitors, and the market to evolve."
    },
    {
      title: "Honesty",
      description: "We prioritize transparency, integrity, and truthfulness in all our interactions with customers, stakeholders, and the public."
    },
    {
      title: "Thinking big",
      description: "We dream beyond the conventional, and embrace innovation and change."
    },
    {
      title: "Collaboration",
      description: "Our customer's success is our success! We recognize the value of working with others to achieve common objectives, enhance capabilities, and create mutually beneficial outcomes."
    },
    {
      title: "Impact",
      description: "We aspire to make a difference in the industry and investor community, becoming a driving force for positive change."
    },
    {
      title: "Integrity",
      description: "We are dedicated to always being honest, transparent, and ethical in everything we do."
    }
  ];

  const servicesIcons = [
    { id: "01", title: "Portfolio Services", icon: LayoutGrid },
    { id: "02", title: "Client-Focused Approach", icon: Users },
    { id: "03", title: "Future-Ready Infrastructure", icon: BarChart2 },
    { id: "04", title: "Core Team", icon: Briefcase },
    { id: "05", title: "Strong Financials", icon: LineChart },
    { id: "06", title: "Ethos & Values", icon: ShieldCheck },
    { id: "07", title: "Algo Trading", icon: FileText },
  ];

  const buffetRules = [
    {
      id: "01",
      title: "Reinvest your profits",
      description: "When you first make money you may be tempted to spend it. Don't instead reinvest the profits. Buffet learnt this early on. In high school he and Pal bought a pinball machine to put in a Berbershop With the money they had eight in different stores. When the friends sold the venture, Buffet used the proceeds to buy the stocks and to start another small business."
    },
    {
      id: "02",
      title: "Willing to be different",
      description: "Be willing to be different than others when the situation warrants it. Don't simply follow the crowd."
    },
    {
      id: "03",
      title: "Never suck your thumb",
      description: "Gather information, analyze it thoroughly, but then make a decision without unnecessary delay."
    },
    {
      id: "04",
      title: "Spell out the deal before you start",
      description: "Make sure all parties involved understand what they're agreeing to before beginning a venture."
    },
    {
      id: "05",
      title: "Watch small expences",
      description: "Be vigilant about costs, as small expenses can add up quickly and erode profits."
    },
    {
      id: "06",
      title: "Limit what you borrow",
      description: "Avoid excessive debt and maintain a conservative approach to leverage."
    },
    {
      id: "07",
      title: "Tenacity and integrity",
      description: "Persistence in your principles and honesty in all dealings are essential qualities."
    },
    {
      id: "08",
      title: "Know when to quest",
      description: "Understand when to stop pursuing a venture that isn't working and move on."
    }
  ];

  const promiseItems = [
    { title: "Professionalism and Skills", icon: Users },
    { title: "Attitudes and Behaviours", icon: Check },
    { title: "Accessibility and Flexibility", icon: Clock },
    { title: "Reliability and Trustworthiness", icon: ShieldCheck },
    { title: "Service Recover", icon: BarChart2 },
    { title: "Services Cape", icon: LineChart },
    { title: "Reputation and Credibility", icon: FileText }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-green-600 to-green-400">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            alt="Financial Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              MAHASAMVIT FINANCIAL SERVICES LIMITED
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Financial Services
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Uniqueness of financial services
            </p>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-full hover:bg-green-50 transition-colors shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              It is with our years of experience and knowledge about the category that we have been able to distinguish what will work and what may not. It is this ability and our perspective that our clients value us for. We believe our wealth is in the people, the knowledge and the experience. What we share is our wisdom to 'power our client's financial growth'
            </p>
            <h2 className="text-3xl font-bold text-green-900 mb-8">
              A PROLONGED PROMISE REGARDING FINANCIAL SERVICES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {ethosList.slice(0, 4).map((item, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {ethosList.slice(4).map((item, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Icons Section */}
      <section className="py-16 bg-green-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {servicesIcons.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-full bg-green-200 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-green-900 font-bold mr-2">{service.id}</span>
                </div>
                <h3 className="text-lg font-semibold text-green-900">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warren Buffet Rules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Rules of Warren Buffet</h2>
            <p className="text-gray-700 text-lg italic max-w-3xl mx-auto">
              "I want to be able to explain my mistakes" — this means I do only the things that I completely understand he says.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buffetRules.map((rule) => (
              <motion.div
                key={rule.id}
                whileHover={{ y: -5 }}
                className="bg-green-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-green-600 mr-2">{rule.id}.</span>
                  <h3 className="text-xl font-semibold text-green-900">{rule.title}</h3>
                </div>
                <p className="text-gray-700">
                  {rule.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">We Promise to Provide Best Services to Make Huge Money.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {promiseItems.map((item, index) => (
              <div key={index} className="bg-green-700 p-6 rounded-lg hover:bg-green-800 transition-colors">
                <div className="flex items-center mb-4">
                  <item.icon className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">
                MAHASAMVIT Financial Services
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  It will be advisory broking company of equity, commodity, currency, bond and mutual fund market and unique wealth creation through modest strategy-based operation for the customers.
                </p>
                <p>
                  We believe that life is all about growth, we believe in growing together with our clients, teams, business partners and associates.
                </p>
                <p>
                  Some of our key focus areas and strengths is research, advisory and not giving only tips to the customers, giving best strategies of making money to the customers, as WARRAN BUFFET SAID that TIPS DOES NOT MAKE MONEY ONLY proper STRATEGY CAN MAKE MONEY. And to share education of finance market which we believe, holds the creation of wealth, we will keep our clients updated on the financial market though regular research reports and newsletters via emails, SMS, chats, post popup etc.
                </p>
                <p>
                  Over the longer term, equities have created more wealth and delivered more returns than any other asset class. we will provide an arrangement so that u can simplify the world of equities and unleash their power, so that client's investment may grow faster.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                alt="Financial Services Office"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Mission & Vision</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              MAHASAMVIT FINANCIAL SERVICES LIMITED –(MFSL)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Mission</h3>
              <div className="text-gray-700 space-y-3">
                <p>
                  Our mission is to provide personal financial services of a superior quality to the members/owners; our chief concern being their financial well-being. We desire to be the primary financial institution of our members. We will use automation and technology to support a highly trained group of volunteers and staff.
                </p>
                <p>
                  Professional managers will be accountable for the quality of service and will be given sufficient flexibility in implementing policy to ensure that the member perceives the highest degree of excellence in every contact. Professional marketing will provide aggressive programs to sustain and increase growth.
                </p>
                <p>
                  We will seek our growth both from new members and by serving the financial needs of present members in a more complete manner. We will not sacrifice quality of present services to seek growth. In order to provide quality member services, the credit union must remain financially sound and secure.
                </p>
                <p>
                  Adequate operating controls, capital reserves and liquidity will be maintained at all times. We will be sales oriented in our approach to members, but traditional credit union philosophy will remain our guiding principle.
                </p>
                <p>
                  Among financial institutions, this credit union is a unique organization with deep and abiding human values. Our goal is to maintain those qualities. To innovate not only our products but also how we service and communicate to our shareholders. We intend to provide transparency to ensure products are appropriately valued and traded in the market, and offer a diversified selection of investment strategies to facilitate what we believe to be true diversification for our shareholders.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Vision</h3>
              <p className="text-gray-700 mb-8">
                To distinguish assiduous as an admired multinational financial services leader, trusted partner, and provider of innovative solutions for growing and protecting wealth.
              </p>

              <h3 className="text-2xl font-bold text-green-900 mb-4">Values</h3>
              <p className="text-gray-700 mb-8">
                We strive to create value for our clients and employees while adhering to principles of excellence and trust.
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-900">125600+</p>
                  <p className="text-gray-700">Students enrolled</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-900">200+</p>
                  <p className="text-gray-700">Registered instructors</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-900">100%</p>
                  <p className="text-gray-700">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to learn more about our financial services and how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-green-900 rounded-full hover:bg-green-100 transition-colors"
            >
              Contact Us <ChevronRight className="ml-2" />
            </Link>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-green-800 text-white rounded-full hover:bg-green-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Financial Services Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Brochure Modal */}
      <BrochureModal isOpen={isBrochureModalOpen} onClose={closeBrochureModal} category="financial-services" />
    </motion.div>
  );
};

export default FinancialServices;
