import { motion } from 'framer-motion';
import { BookOpen, Award, Globe, BarChart, Users, Clock, ArrowRight, Check, Briefcase, BarChart2, HelpCircle, Lightbulb, Handshake, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BrochureModal from '../components/BrochureModal';

const GlobalFinance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Core principles of IICF
  const corePrinciples = [
    {
      name: "Integrity",
      description: "Maintaining the highest ethical standards in all our educational practices and business relationships.",
      icon: Award
    },
    {
      name: "Knowledge",
      description: "Delivering cutting-edge financial education and fostering intellectual growth in our students.",
      icon: BookOpen
    },
    {
      name: "Support",
      description: "Providing comprehensive assistance to students throughout their educational journey and beyond.",
      icon: Handshake
    },
    {
      name: "Opportunity",
      description: "Creating pathways for career advancement and professional development in global finance.",
      icon: Briefcase
    },
    {
      name: "Results",
      description: "Focusing on measurable outcomes and success for all our students and stakeholders.",
      icon: BarChart2
    }
  ];

  // Career opportunities
  const careerOpportunities = [
    {
      title: "Accounts",
      description: "Accountants and tax professional",
      icon: BarChart
    },
    {
      title: "Banking",
      description: "Banking and insurance professional",
      icon: Globe
    },
    {
      title: "Dual Degree",
      description: "Dual degree for highly skilled professionals",
      icon: Award
    },
    {
      title: "Quality Professional",
      description: "International quality professional- (fund/ wealth manager)",
      icon: Users
    },
    {
      title: "Career",
      description: "Career opportunities as govt job SEBI RBI NABARD IAAS/CAG",
      icon: Briefcase
    },
    {
      title: "Finance",
      description: "Emerging roles in the new finance",
      icon: BarChart2
    },
    {
      title: "Legal",
      description: "Legal study opportunities",
      icon: BookOpen
    },
    {
      title: "Stock",
      description: "Career opportunities in share, commodity and currency markets",
      icon: Globe
    }
  ];

  // PhD career options
  const phdCareerOptions = [
    {
      id: "01",
      title: "Academia",
      description: "Pursue teaching and research positions at universities and colleges"
    },
    {
      id: "02",
      title: "Research",
      description: "Conduct advanced financial research at institutions and think tanks"
    },
    {
      id: "03",
      title: "Financial Services",
      description: "Work in specialized roles at investment banks and financial institutions"
    },
    {
      id: "04",
      title: "Consulting",
      description: "Provide expert consulting services to organizations on complex financial matters"
    },
    {
      id: "05",
      title: "Policymaking and government",
      description: "Shape financial policy at regulatory bodies and government agencies"
    },
    {
      id: "06",
      title: "Corporate Finance",
      description: "Lead financial strategy in corporate settings at executive levels"
    },
    {
      id: "07",
      title: "Entrepreneurship and Innovation",
      description: "Create innovative financial solutions and start fintech ventures"
    }
  ];

  // Teaching strategies
  const teachingStrategies = [
    {
      name: "Visualization",
      description: "Using visual aids and graphics to help students understand complex financial concepts."
    },
    {
      name: "Cooperative learning",
      description: "Encouraging collaboration among students to solve financial problems together."
    },
    {
      name: "Inquiry-based instruction",
      description: "Prompting students to ask questions and discover financial principles on their own."
    },
    {
      name: "Differentiation",
      description: "Tailoring teaching methods to accommodate different learning styles and abilities."
    },
    {
      name: "Technology in the classroom",
      description: "Leveraging digital tools and software to enhance the learning experience."
    },
    {
      name: "Behavior management",
      description: "Creating a structured environment conducive to focused learning."
    },
    {
      name: "Professional development",
      description: "Continuous improvement of teaching methodologies and subject knowledge."
    }
  ];

  // Online library benefits
  const libraryBenefits = [
    "Choice of flexible ways to study to suit changing lifestyles.",
    "Experienced tutors, assessors and support staff.",
    "Dedicated support through every step of your studies.",
    "Pass rates that consistently exceed national averages.",
    "Quality learning materials written by specialists who teach our courses.",
    "Our mission is to help individuals achieve their goals.",
    "Find out more about our qualifications and courses."
  ];

  // Success stats
  const successStats = [
    {
      count: "125600+",
      label: "Students enrolled"
    },
    {
      count: "200+",
      label: "Registered instructors"
    },
    {
      count: "100%",
      label: "Success Rate"
    }
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
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            alt="Global Finance"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Global Finance Education
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Empowering professionals with comprehensive knowledge of international financial systems and practices
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
            >
              Download Brochure <Download className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* IICF Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                INTERNATIONAL INSTITUTE OF COMMERCE AND FINANCE (IICF)
              </h2>
              <p className="text-gray-700 mb-6">
                IICF will be India's as well as global leading provider of diverse education and training programs which include professional accountancy and financial training, financial markets, postgraduate and undergraduate degrees. Over the years AIIF WILL BE expanded both geographically in terms of set-up in 100+ locations pan-India as well as product wise where it caters to domestic courses – CA, CS, CMA and® integrating it globally with international courses – CFA, FRM, ACCA, CPA.
              </p>
              <p className="text-gray-700 mb-6">
                Faculties at AIIF take teaching very seriously and follow a structured pattern throughout the weeks of scheduled coaching enabling timely completion of the course along with regular discussion classes.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">IICF's core and value system stands on the 5 principles</h3>
            </div>
            <div className="relative">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E12AQH7z7bMu6x-OA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1728992400480?e=2147483647&v=beta&t=VZ1JScQwyOWC5MSVAwj_uz51LXE8MlxBg7T-GIIkawM"
                alt="Finance Education"
                className="rounded-lg shadow-xl mb-6"
              />
              <img
                src="https://investedindiana.org/media/group-of-four-students-giving-high-fives-while-studying-in-the-library.jpg"
                alt="Students Studying"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Core Principles */}
          <div className="grid md:grid-cols-5 gap-6 mt-10">
            {corePrinciples.map((principle, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
              >
                <principle.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{principle.name}</h3>
                <p className="text-sm text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Career Opportunities</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore diverse career paths in finance, accounting, and business
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {careerOpportunities.map((career, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <career.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{career.title}</h3>
                <p className="text-gray-600">{career.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PhD Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Masters and PhD (International)</h2>
              <p className="text-xl font-semibold mb-4 text-blue-700">What is PhD in Finance?</p>
              <p className="text-gray-700 mb-6">
                A PhD in Finance is a doctoral-level academic degree program in finance that focuses on advanced research and theoretical study. It is intended for people who want to work in academia, research, or advanced positions in the financial industry.
              </p>
              <p className="text-xl font-semibold mb-4 text-blue-700">What can you do with a PhD in Finance?</p>
              <p className="text-gray-700 mb-6">
                A PhD in Finance can lead to a variety of professional prospects in a variety of fields. Individuals with a PhD in Finance may pursue the following professional paths:
              </p>
            </div>
            <div className="relative">
              <img
                src="https://www.hks.harvard.edu/sites/default/files/styles/hero_small_breakpoint/public/medium-hero-image/HKS_1022_118_edit_2560x1440.jpg?itok=ZwCs9tTi"
                alt="PhD Professor Teaching"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* PhD Career Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {phdCareerOptions.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-lg shadow-md"
              >
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {option.id}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Strategies Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Effective Teaching Strategies for the Classroom</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our innovative approaches to financial education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 gap-4">
              {teachingStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="bg-white p-4 rounded-lg shadow flex items-start"
                >
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">{strategy.name}</h3>
                    <p className="text-sm text-gray-600">{strategy.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div>
              <img
                src="https://www.terry.uga.edu/wp-content/uploads/20250217_bp_ftmba_005-1024x683.jpg"
                alt="Professor Teaching"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Online Library Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Online Library</h2>
              <p className="text-gray-700 mb-6">
                Students today hardly have the time to sit down and read a paperback novel. They read everything on their laptop or smartphone or any internet-enabled device. This is because everything is available online at the tap of a few buttons.
              </p>
              <p className="text-gray-700 mb-6">
                The online library is another profitable education business ideas that can help to restore people's habit of reading. The platform can offer books from different genres and let people learn different subjects from anywhere and at any time.
              </p>
              <p className="text-gray-700 mb-6">
                With the help of the internet, people from various parts of the world can register in the online library. They can also choose to share their collection of books online in PDF format for other readers to enjoy.
              </p>
            </div>
            <div>
              <img
                src="https://back.3blmedia.com/sites/default/files/inline-images/studentscholarship_USBank_020223.jpg"
                alt="Student using online library"
                className="rounded-lg shadow-xl mb-6"
              />
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Library Benefits</h3>
                <ul className="space-y-3">
                  {libraryBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our Students Success Story</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Passive earning with learning method for students
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <p className="text-gray-700 mb-4 text-lg">
              Only in AIIF there is an opportunity to make money without any personal effort of students or guardians of students. The students who will pay total fees Rs 200000 (two lacs) for his entire career studies to professional accomplishment, Rs 30000 (thirty thousand only) will be maintained by us in our wealth management program through highly qualified and experienced wealth managers of our organization targeting 100 percent growth of money in one year.
            </p>
            <p className="text-gray-700 text-lg font-semibold">
              So, for long term relationship with the students, students can earn money immensely without any extra efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.count}</h3>
                <p className="text-xl text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Begin Your Journey in Global Finance?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our next cohort and gain the knowledge and skills needed to excel in the international financial landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact Us Today <ArrowRight className="ml-2" />
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
            >
              Download Brochure <Download className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Brochure Modal */}
      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} category="global-finance" />

    </motion.div>
  );
};

export default GlobalFinance;
