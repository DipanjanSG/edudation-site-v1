import { ArrowRight, BarChart, Globe, DollarSign, BookOpen, Users, Target, Award, Briefcase, Heart, Star, Shield, Clock, Check, Leaf, Mail, Phone, MapPin, Droplets, Coffee, UserCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageCarousel from '../components/ImageCarousel';
import { useState } from 'react';

export default function Home() {
  const agroImages = [
    {
      url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
      alt: "Sustainable Farming"
    },
    {
      url: "https://content.jdmagicbox.com/comp/def_content/organic-food-retailers/organic-food-retailers8-organic-food-retailers-8-ht6qi.jpg",
      alt: "Organic Produce"
    },
    {
      url: "https://freeeway.com/wp-content/uploads/2023/04/IoT-in-agriculture-%E2%80%93-6-smart-farming-examples-1.png",
      alt: "Smart Agriculture"
    },
    {
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
      alt: "Hydroponic Farming"
    },
    {
      url: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17",
      alt: "Modern Agriculture"
    },
    {
      url: "https://higronics.com/assets/front/higronics/images/res-banner/res-hydroponic-vertical-farming-banner.jpg",
      alt: "Vertical Farming"
    }
  ];

  const csrImages = [
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
      alt: "Community Support"
    },
    {
      url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a",
      alt: "Environmental Initiative"
    },
    {
      url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
      alt: "Educational Programs"
    },
    {
      url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
      alt: "Healthcare Initiatives"
    },
    {
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      alt: "Rural Development"
    },
    {
      url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
      alt: "Youth Empowerment"
    }
  ];

  const specialtyProjects = [
    {
      title: "Soya Milk",
      description: "Soy beverages are consumed because of the increased availability of soy, and the scientific facts that prove the many health benefits of the beans; including lowering blood cholesterol and reducing the risk of certain cancers.",
      image: "https://images.unsplash.com/photo-1559722585-2ba4cb99dbae?auto=format&fit=crop&q=80"
    },
    {
      title: "Millets",
      description: "India produces all the nine commonly known millets and is the largest producer and the second largest exporter of millets in the world. Millets are termed as Nutri-cereals because of their high nutritional qualities and also a crop suited for the changing climate.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e8c6?auto=format&fit=crop&q=80"
    },
    {
      title: "Vegan",
      description: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
    },
    {
      title: "Stevia Farming",
      description: "Stevia as the healthiest sweetener with many medicinal properties is a wonderful gift from nature. Its true potential was discovered by the ancient wisdom of a warrior race living in the rain forests of South America. Modern science brought the benefits of Stevia to the common people.",
      image: "https://images.unsplash.com/photo-1621955542498-031dff490acc?auto=format&fit=crop&q=80"
    }
  ];

  const whyChooseUsContent = [
    {
      icon: Star,
      title: "Industry Expertise",
      description: "Over 20 years of experience in global finance and education, serving clients worldwide."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified processes and internationally recognized educational standards."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry veterans with decades of practical experience."
    },
    {
      icon: Target,
      title: "Focused Approach",
      description: "Customized learning paths designed for individual career goals."
    },
    {
      icon: Award,
      title: "Global Recognition",
      description: "Certificates and programs recognized by leading institutions worldwide."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Study at your own pace with our hybrid learning model."
    }
  ];

  const inspirationalQuotes = [
    "There are no secrets to success. It is the result of preparation, hard work, dedication and learning from failure.",
    "Opportunities don't happen. You create them.",
    "What we fear doing most is usually what we most need to do",
    "All our dreams can come true, if we have the courage to pursue them.",
    "The true test of leadership is how well you function in a crisis.",
    "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
    "Strive not to be a success, but rather to be of value.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    "Self-belief and hard work will always earn you success.",
    "An Investment in knowledge pays the best interest"
  ];

  const csrStats = [
    {
      number: "82",
      label: "Trained Interns 2023",
      subtitle: "Youth Empowerment"
    },
    {
      number: "152",
      label: "Blood Donors 2023",
      subtitle: "Corporate Community Service"
    },
    {
      number: "80,000",
      label: "Charity Run Participants 2023",
      subtitle: "Community Investment"
    }
  ];

  const companyStats = [
    {
      number: "300+",
      label: "Successful Clients",
      icon: UserCheck
    },
    {
      number: "340+",
      label: "Cups Coffee",
      icon: Coffee
    },
    {
      number: "240+",
      label: "Users",
      icon: Users
    },
    {
      number: "20+",
      label: "Years Experience",
      icon: Clock
    }
  ];

  const careerServices = [
    "Career Opportunities As Govt Job",
    "Accountants And Tax Professional",
    "International Quality Professional",
    "Stock Commodity Currency Career"
  ];

  const serviceQualityFactors = [
    "Professionalism and Skills",
    "Attitudes and Behaviours",
    "Accessibility and Flexibility",
    "Reliability and Trustworthiness",
    "Service Recovery",
    "Services Cape",
    "Reputation and Credibility"
  ];

  // Add state for FAQ expansion
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "What makes Mahasamvit special in the education sector?",
      answer: "Mahasamvit combines traditional wisdom with modern educational techniques, offering specialized courses in finance, commerce, and business that are tailored to current industry needs. Our faculty consists of industry professionals with decades of practical experience who provide real-world insights alongside theoretical knowledge."
    },
    {
      question: "How does Mahasamvit support agricultural innovation?",
      answer: "Our agro projects utilize cutting-edge technology like AI, machine learning, and remote sensing to create intelligent farming solutions. We help organizations digitize their agricultural operations from farm to fork, providing real-time data and actionable insights for improved productivity and sustainability."
    },
    {
      question: "What financial research services does Mahasamvit offer?",
      answer: "Mahasamvit Global Money Research specializes in equity, commodity, and currency markets including USA markets and DGCX (Dubai). Our research is systematic, data-driven, and rules-based, offering investment strategies that combine deep insights with state-of-the-art quantitative techniques for superior wealth creation."
    },
    {
      question: "How does Mahasamvit contribute to corporate social responsibility?",
      answer: "We undertake CSR activities in accordance with Section 135 of the Companies Act, 2013, focusing on education, environmental sustainability, sports development, and poverty eradication. Our initiatives aim to create sustainable, long-term change with measurable goals aligned with our corporate philosophy."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - New blue Background Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-xl z-10 border-l-4 border-blue-500">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  BEST COMMERCE, FINANCE AND LEGAL STUDY WITH GLOBAL ASPECTS
                </h1>
                <p className="text-gray-700 mb-6">
                  From basic that is from class 10 or 12, to world's most advances level commerce, finance, legal professional courses, with unique teaching method, advance study model, passive earning with learning and many more, and with top satisfied jobs potentiality, and with Being ahead in development, knowledge, progress, etc. advanced studies.
                </p>
                <p className="text-gray-700 mb-6">
                  Applying latest case study and research study of the topic from prime economic and finance research organization, such as MCKINSEY, PWC, BLOOMBERG, PM, etc. Having reached a comparatively late stage earlier so that the actual curriculum will be very easy for the easy for the students, and with full confidence they will pass with good scores whatever be the harder course may be. Details putted in downloads section.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Know More <ArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
            <div className="flex space-x-4">
              <div className="relative w-full h-80">
                <img
                  src="/brochures/mahasambhitclinetpdfs/homepageimages/slide-1-small.png"
                  alt="Students in Library"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative w-full h-80 mt-12">
                <img
                  src="/brochures/mahasambhitclinetpdfs/homepageimages/slide-1.png"
                  alt="Students Learning"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Education</h2>
              <p className="text-gray-700 mb-8">
                Cramming for a big exam can put you under a lot of pressure. This practice can also increase your chances of forgetting almost everything you have studied the night before, especially when you fail to have enough sleep.
              </p>
              <p className="text-gray-700 mb-8">
                This only means that you must change your study habits and focus on what really matters – preparing before exams. Aside from organizing your preparations for the exam, it would help if you remained consistent with your study time and habits. No matter how busy you are as a student, spending time preparing for important tests is a must!
              </p>

              <h3 className="text-2xl font-bold mb-6 text-blue-800">Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {careerServices.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h4 className="font-semibold text-blue-700">{service}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                alt="Education"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900">MAHASAMVIT FINANCIAL SERVICES</h2>
            <p className="text-gray-600 mt-4">Comprehensive financial solutions for your success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">Research Desk</h3>
                  <p className="text-gray-700">
                    Our research is known to be the best in the Indian financial industry. The Research Desk is comprised of dedicated teams for technical and fundamental research, conducting painstaking research to beat the market time and again. The lab has internally developed analytical tools and models that have consistently provided clients an edge over the market. The findings of the research team take shape in the form of our various daily, monthly and quarterly; fundamental & technical research reports.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=150&h=150"
                  alt="Research Desk"
                  className="w-24 h-24 ml-4 rounded-lg object-cover flex-shrink-0"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">Customer Connect Cell</h3>
                    <p className="text-gray-700">
                      The PL Customer Connect Cell is a 24×7, one stop place for clients to address all operational issues. It has been set up with the aim of streamlining all our processes and to ensure that we satisfy all the requirements of our clients.
                    </p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=100&h=100"
                    alt="Customer Connect"
                    className="w-16 h-16 ml-4 rounded-lg object-cover flex-shrink-0"
                  />
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <h3 className="text-xl font-semibold text-blue-800">Multiple Trading Modes</h3>
                  <img
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=100&h=100"
                    alt="Trading"
                    className="w-16 h-16 ml-4 rounded-lg object-cover flex-shrink-0"
                  />
                </div>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold text-blue-700">Offline Trading:</p>
                    <p className="text-gray-700">Will offer soon trading through its widespread network of franchisees and partners across the length and breadth of the country. A dedicated advisory desk is constantly involved in addressing clients' queries pertaining to the entire gamut products and solutions that we offer. This is backed by state-of-the-art technological infrastructure at all our branches.</p>
                  </li>
                  <li>
                    <p className="font-semibold text-blue-700">Online Trading:</p>
                    <p className="text-gray-700">A complete platform offering online trading in Equity, Derivatives, Commodity, Currency, & IPO's, ready with various tools that empower you to closely monitor your financial growth.</p>
                  </li>
                  <li>
                    <p className="font-semibold text-blue-700">Mobile Trading:</p>
                    <p className="text-gray-700">We offer its customers the convenience of mobile trading which allows you to take decisions on buying and selling of your equity on the move. It offers a host of other features like instant access to Net Position report, Live Advice and Top Gainers/Losers. You can also synchronise your transactions with other media also.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">Industry Experts</h3>
                  <p className="text-gray-700">
                    All of our offerings are initiated, conceptualized and executed by an experienced and dedicated team of experts. This team is comprised of professionals that come from diverse financial backgrounds and are continuously striving to power the clients' financial growth.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Industry Experts"
                  className="w-16 h-16 ml-4 rounded-lg object-cover flex-shrink-0"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">Cutting Edge Technology</h3>
                  <p className="text-gray-700">
                    All of our offerings and operations are backed by its excellent technical infrastructure which is the best in the industry – ensuring speed, accuracy, security and 24×7 service and support to clients.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Technology"
                  className="w-16 h-16 ml-4 rounded-lg object-cover flex-shrink-0"
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">Determinants of good service quality</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceQualityFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow border border-blue-200 text-center"
                >
                  <p className="font-medium text-blue-700">{factor}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900">Why Choose Us</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              About Us
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
              <p className="text-gray-700">
                Mahāsaṃvid/ mahasamvit – Sanskrit ward (महासंविद्) refers to the "great consciousness", according to the Jayadrathayāmala: one of the earliest and most extensive Tantric sources of the Kālīkrama system.
              </p>
              <p className="text-gray-700 mt-4">
                Accordingly, as Bhairava teaches the Goddess about his inner state: "Established in the supreme state, I was penetrated by powerful meditation. Then (when this was happening) my supreme energy was awakened [i.e., prabodhitā] from the Root Wheel (kandacakra). Her nature the Great Consciousness [i.e., mahāsaṃvid-svarūpā] and delighting in bliss endowed with consciousness, she entered into the reality in the centre within the foundation, which is the Void of the Pulsing Union (saṃghaṭṭa).
              </p>
              <p className="text-gray-700 mt-4">
                There in the centre, O daughter of the mountains, is the supreme light between the two, being and non-being. […]". conquer against all odds, financial, social, political, spiritual and to achieve ultimate success/salvation/moksha.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUsContent.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-lg shadow-lg"
              >
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* FAQ Style Expandable Content */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-blue-800">Frequently Asked Questions</h3>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-100 transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-blue-900">{faq.question}</h4>
                    {expandedFaqs.includes(index) ?
                      <ChevronUp className="text-blue-600 flex-shrink-0" /> :
                      <ChevronDown className="text-blue-600 flex-shrink-0" />
                    }
                  </button>

                  {expandedFaqs.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 py-4 bg-white border-t border-blue-100"
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/about" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Watch The Video <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* IICF Vision Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 text-xl font-semibold mb-6">INTERNATIONAL INSTITUTE OF COMMERCE FINANCE (IICF)</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Mission</h3>
                <p className="text-gray-700 mb-4">
                  Through excellent coaching and innovative teaching strategy and by generating value for investment management professionals and engaging with the investment industry to advance ethics, market integrity, and professional standards of practice, which collectively contributes value to society. And also, to provide best English and our sanatan traditional values teaching, so that students can compete and lead globally.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Vision</h3>
                <p className="text-gray-700 mb-4">
                  Empowering the investment and finance and accounts, taxation industry to realize the world's greatest possibilities.
                </p>
                <p className="text-gray-700">
                  Financial technology, consolidation, and fee compression continue to disrupt the financial industry. New technology, business models, and learning preferences are changing what is required of the profession. And society as a whole faces long-term challenges such as economic dislocation, climate change, geopolitical conflicts, inequality, and so much more.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
              <p className="text-gray-700 mb-4">
                As we continue to deliver the highest standards of excellence, ethics, and education, we seek to look beyond what we do for our constituents today to better meet their current needs and to anticipate what they will need tomorrow – and contributing to ultimately benefitting society.
              </p>
              <p className="text-gray-700 mb-4">
                With cutting-edge thought leadership, we drive how the industry thinks and what it does. Through our professional standards and advocacy, we bolster a more principled industry. Expanding our suite of educational products will support new workplace dynamics and professional development from career entry to exit.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Values</h3>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-6">
                  We believe that financial markets and services should operate in the following ways:
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Investment professionals contribute to the ultimate benefit of society through the sustainable value generated by efficient financial markets and by effective investment institutions.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Good stewardship and high ethical standards are necessary for trust and confidence to be secured and for society to be served. Financial markets should afford every investor the opportunity to earn a fair return.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Financial markets are more effective with knowledgeable, diverse participants.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                    <span>High ethical principles and professional standards are essential to positive outcomes; rules and regulations, while necessary, are not sufficient by themselves.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Vision</h3>
                <div className="w-12 h-1 bg-blue-500 mx-auto mb-2"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Mission</h3>
                <div className="w-12 h-1 bg-blue-500 mx-auto mb-2"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Core Values</h3>
                <div className="w-12 h-1 bg-blue-500 mx-auto mb-2"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agro Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900">Agro Projects</h2>
              <p className="text-gray-600 mt-4">Innovating agriculture for a sustainable future</p>
            </div>

            <ImageCarousel images={agroImages} delayMs={1000} />

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-6">
                {specialtyProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-blue-50 p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-blue-800">{project.title}</h3>
                    <p className="text-gray-700 text-sm line-clamp-3">{project.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="space-y-4">
                  {inspirationalQuotes.slice(0, 5).map((quote, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-sm">
                      <p className="text-gray-700 italic">&ldquo;{quote}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Money Research Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-900">Money Research</h2>
                <p className="text-gray-700 mb-6">
                  MAHASAMVIT GLOBAL MONEY RESEARCH – A pioneer in equity, commodity, currency and also in USA market and DGCX (DUBAI). Today we offer innovative investment strategies, that combine deep research insights, cutting Edge technology, and state of the art – quantitative techniques, for a superior wealth creation experiences.
                </p>
                <p className="text-gray-700">
                  Our strategies are systematic, dynamic, data driven, rules based, and unbiased. Our focus is ensuring, sustainable, and repeatable investment success for investors across market cycles.
                </p>
              </motion.div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Financial Research"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Business Industry & Projects Consultancy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Global Business Industry & Projects Consultancy</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Vision</h3>
                <p className="text-gray-700 mb-4">
                  To be the most preferred Consulting Company for providing end-to-end, result oriented Consultancy Services and Solutions to Government Organizations, Banks, Corporates, Overseas Investors and MSMEs at a reasonable cost.
                </p>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Mission</h3>
                <p className="text-gray-700 mb-4">
                  To excel as a competent, credible and reliable player capable of meeting diverse consultancy needs of our Stakeholders.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Industries We Cater To</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Chemicals (Organic and Inorganic)",
                  "Food, Bakery, Agro Processing",
                  "Plastic, PVC, PET, HDPE/LDPE etc.",
                  "Rubber Chemicals and Rubber Goods",
                  "Textiles and Garments"
                ].map((industry, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-50 p-6 rounded-lg shadow-md"
                  >
                    <p className="font-medium text-gray-700">{industry}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Consultancy Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900">Job Consultancy & Human Resources Company</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Exclusive and Retained, our Executive Search Practice is primarily focused on Board and CXO level leadership hiring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-6">
                Our goal is to deliver value to each client we serve and to help you attract top talent and to build adaptive, diverse people organizations that are prepared to fulfill strategic business objectives. We seek to understand each client's strategic goals, the specific leadership roles and competencies needed to meet those goals, and the culture that new executives need to embody.
              </p>
              <p className="text-gray-700">
                Our executive recruiting consultants possess the expertise and contacts to best support our search. We draw on our high-level professional networks, industry knowledge and internal research resources to identify the right people. To stay on the cutting edge of talent strategy, we constantly track key trends in the global market for talent, and continually innovate our services and approach
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Industry Practices</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Education",
                  "Financial Service",
                  "FMCG",
                  "Retail",
                  "Media And Entertainment",
                  "Service Industry",
                  "Technology",
                  "Media & Entertainment Projects"
                ].map((practice, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <p className="font-medium text-blue-700">{practice}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Entertainment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Media & Entertainment Projects</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                India's media and entertainment industries have always been an important part of our national story. As a young nation born in an era where film and radio were in their infancy, we have seen our triumphs and tribulations reflected in the mass media from the very start. These industries have also become important contributors to Indian economic prosperity. In recognition of their importance, the Union government officially designated audiovisual services as one of 12 'champion service sectors' in 2018.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                "Executive Summary",
                "Digital and OTT",
                "Fast-growing Gaming Industry",
                "Largest Broadcasting Markets"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
                >
                  <p className="font-medium text-blue-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-4xl font-bold mb-2 text-blue-100">{stat.number}</h3>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900">Corporate Social Responsibility</h2>
              <p className="text-gray-600 mt-4">Creating positive impact through sustainable initiatives</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {csrStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-50 p-8 rounded-lg shadow-lg text-center"
                >
                  <h3 className="text-4xl font-bold mb-2 text-blue-600">{stat.number}</h3>
                  <p className="text-xl text-gray-700 mb-2">{stat.label}</p>
                  <p className="text-sm text-blue-500">{stat.subtitle}</p>
                </motion.div>
              ))}
            </div>

            <ImageCarousel images={csrImages} delayMs={1000} />

            <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Corporate Social Responsibility Policy (MAHASAMVIT GROUP)</h3>

              <h4 className="text-xl font-semibold mb-4 text-blue-700">Introduction</h4>
              <p className="text-gray-700 mb-6">
                MAHASAMVIT CORPORATES philosophy is to be a professional organization and we aim to be one of the most respected companies, delivering superior and sustainable value with a commitment to its stakeholders to conduct business in an economically, socially and environmentally sustainable manner that is transparent and ethical.
              </p>
              <p className="text-gray-700 mb-6">
                MAHASAMVIT is committed to undertake Corporate Social Responsibility ("CSR") activities in accordance with the provisions of Section 135 of the Companies Act, 2013 and related Rules. Aparajitha believes that corporate development has to be inclusive and every corporate has to be responsible for the development of a just and humane society that can build a national enterprise. Aparajitha commits itself to contribute to the society in ways possible for the organization and has set up Aparajitha Foundations, its core CSR team, as a means for fulfilling this commitment.
              </p>

              <h4 className="text-xl font-semibold mb-4 text-blue-700">Objective</h4>
              <p className="text-gray-700 mb-4">
                The objective of the CSR Policy ("Policy") is to lay down the guiding principles in undertaking various programs and projects by or on behalf of the company relating to Corporate Social Responsibility ("CSR") within the meaning of section 135 of the Companies Act, 2013 read with Schedule VII of the Act and the CSR Policy Rules 2014("Rules").
              </p>

              <ul className="space-y-3 text-gray-700 list-disc pl-6 mb-6">
                <li>To develop a long-term vision and strategy for MAHASAMVIT's CSR objectives.</li>
                <li>Establish relevance of potential CSR activities to MAHASAMVIT's core business and create an overview of activities to be undertaken, in line with Schedule VII of the Companies Act, 2013.</li>
                <li>MAHASAMVIT shall promote projects that are: (a) Sustainable and create a long-term change; (b) Have specific and measurable goals in alignment with MAHASAMVIT philosophy; (c) Address the most deserving cause or beneficiaries.</li>
                <li>To establish process and mechanism for the implementation and monitoring of the CSR activities for MAHASAMVIT.</li>
              </ul>

              <p className="text-gray-700 mb-4">
                MAHASAMVIT shall promote CSR activities/Projects in the field of:
              </p>
              <ul className="space-y-3 text-gray-700 list-disc pl-6">
                <li>Promotion of Education: including life skill education and employment enhancing vocation skills especially among adolescent school and college students.</li>
                <li>Environment: ensuring environmental sustainability, ecological balance, protection of flora and fauna, animal welfare, agroforestry, conservation of natural resources and maintaining of quality of soil, air and water.</li>
                <li>Sports: Training to promote rural sports, nationally recognized sports, para-olympic sports and Olympic sports.</li>
                <li>Eradicating extreme hunger and poverty and malnutrition, promoting preventive healthcare and sanitation and making available safe drinking water;</li>
                <li>MAHASAMVIT may also undertake other CSR activities in line with Schedule VII.</li>
                <li>The CSR activities shall be undertaken in locations within India.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
