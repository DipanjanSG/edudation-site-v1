import { motion } from 'framer-motion';
import { Users, Target, Award, Briefcase, Heart, Star, Shield, BookOpen, Globe, Zap, Coffee } from 'lucide-react';

const statsData = [
  { icon: Users, value: "300+", label: "Successful Clients" },
  { icon: Briefcase, value: "340+", label: "Cups Coffee" },
  { icon: Star, value: "240+", label: "Users" },
  { icon: Shield, value: "20+", label: "Years Experience" }
];

const teamMembers = [
  {
    name: "BISWAJIT BHATTACHARYA",
    role: "CHAIRMAN AND MANAGING DIRECTOR",
    location: "KOLKATA (WEST BENGAL)",
    qualifications: [
      "M.COM From Calcutta University",
      "CFA (Chartered financial analyst – international)",
      "CMT (Chartered market technician USA)",
      "MBA FINANCE (Georgetown university USA)",
      "PHD (from North central university USA)"
    ],
    specialization: "Emerging and innovative business projects and its global potentiality",
    additionalInfo: "Wealth manager by profession and veteran professor."
  },
  {
    name: "VIDYACHARAN CHIVUKULA",
    role: "DIRECTOR",
    location: "BENGALURU (KARNATAKA)",
    qualifications: [
      "CMA (COST AND MANAGEMENT ACCOUNTANT)",
      "CS (COMPANY SECRETERY)"
    ],
    specialization: "Financial management and accounting",
    additionalInfo: "Have vast working experience as CFO (Chief financial officer) of various companies."
  },
  {
    name: "HARIPRIYA REDDY",
    role: "DIRECTOR",
    location: "CHENNAI (TAMIL NADU)",
    qualifications: [
      "MSC MPHIL PhD",
      "Nutritionist",
      "National Invitee President ALL INDIA CONSUMER WELFARE ASSOCIATION AICWC",
      "Women wing President INDIAN DIETETIC ASSOCIATION PUDUCHERRY CHAPTER"
    ],
    specialization: "Nutrition and healthcare management",
    additionalInfo: "CONVENER NETPROFAN PUDUCHERRY CHAPTER. Working as chief dietitian in Cygnus hospital. CONVENER HEALTH CARE AND NUTRITION REDCROSS HYDERABAD Branch. Working with DIOSIV FOODS PVT LTD, NEWDELHI. Worked with AVALEHA FOOD PRODUCTS Hyderabad, WORKING WITH WHO also."
  },
  {
    name: "SUMAN BANERJEE",
    role: "SHAREHOLDER AND CONSULTANT",
    location: "KOLKATA (WEST BENGAL)",
    qualifications: [
      "MSC (PHYSICS)",
      "PHD(USA)",
      "POST DOCTORATE"
    ],
    specialization: "Research and development",
    additionalInfo: ""
  },
  {
    name: "TAPAS KUMAR MAITY",
    role: "SHAREHOLDER AND MARKETING EXECUTIVE",
    location: "",
    qualifications: [],
    specialization: "Marketing and business development",
    additionalInfo: ""
  }
];

const advisorsConsultants = [
  {
    name: "SUBODH MATHUR",
    role: "EX DEAN (ECONOMICS) OF MIT",
    location: "Massachusetts Institute of Technology",
    qualifications: []
  },
  {
    name: "RUDRA PRATAP DUTTA",
    role: "CS, ICWA",
    location: "",
    qualifications: []
  },
  {
    name: "DR. PRAVAS MITRA",
    role: "LLD",
    location: "",
    qualifications: []
  },
  {
    name: "DR SUSHIL CHATURVEDI",
    role: "AGRICULTURAL SCIENTIST",
    location: "",
    qualifications: []
  }
];

const internationalConsultants = [
  {
    name: "Jerry Weygandt",
    role: "CFA, CMT",
    location: "",
    qualifications: []
  },
  {
    name: "Terry Warfield",
    role: "CFA, MBA (FINANCE)",
    location: "",
    qualifications: []
  },
  {
    name: "Donald Kieso",
    role: "ACCA",
    location: "",
    qualifications: []
  },
  {
    name: "Paul Kimmel",
    role: "CIMA",
    location: "",
    qualifications: []
  },
  {
    name: "Pam Smith",
    role: "CPA",
    location: "",
    qualifications: []
  },
  {
    name: "Monte Swain",
    role: "CMT",
    location: "",
    qualifications: []
  },
  {
    name: "Peter Olinto",
    role: "CFA",
    location: "",
    qualifications: []
  },
  {
    name: "John Grable",
    role: "CFP",
    location: "",
    qualifications: []
  }
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-400"
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Business Meeting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              About Mahasamvit
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white max-w-3xl mx-auto"
            >
              Leading the way in global financial excellence and innovation
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h2>
              <p className="text-gray-600">
                To provide innovative financial solutions that drive global economic growth and create lasting value for our clients through excellence in service and expertise.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h2>
              <p className="text-gray-600">
                To be the global leader in financial services and research, setting new standards in innovation and client success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900">Our Core Values</h2>
            <p className="text-gray-600 mt-4">The principles that guide everything we do</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Integrity",
                description: "At MAHASAMVIT Group, integrity is the key to the way we work, interact and deliver. Adherence to ethical practices takes precedence over all other considerations."
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "We continuously strive to innovate and improve our services, embracing new technologies and methodologies to better serve our clients."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnership, working closely with our clients to achieve their goals."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-blue-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-blue-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900">Our Leadership Team</h2>
            <p className="text-gray-600 mt-4">Meet the experts behind our success</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-blue-50 p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                {member.location && <p className="text-gray-600 mb-4">{member.location}</p>}
                {member.qualifications.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {member.qualifications.map((qual, idx) => (
                      <div key={idx} className="flex items-center">
                        <BookOpen className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-gray-600">{qual}</span>
                      </div>
                    ))}
                  </div>
                )}
                {member.specialization && <p className="mt-2 text-gray-600">{member.specialization}</p>}
                {member.additionalInfo && <p className="mt-2 text-gray-600 italic">{member.additionalInfo}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Advisors & Consultants Section */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900">Advisors & Consultants</h2>
            <p className="text-gray-600 mt-4">Our expert advisors and partners</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {advisorsConsultants.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">{advisor.name}</h3>
                <p className="text-blue-600 mb-2">{advisor.role}</p>
                {advisor.location && <p className="text-gray-600">{advisor.location}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* International Consultants Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900">International Finance Consultants</h2>
            <p className="text-gray-600 mt-4">Our global network of finance professionals</p>
          </motion.div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {internationalConsultants.map((consultant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-bold text-blue-900 mb-2">{consultant.name}</h3>
                <p className="text-blue-600">{consultant.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Structure Section */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900">Corporate Structure</h2>
            <p className="text-gray-600 mt-4">Our organizational framework</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">MAHASAMVIT INTERNATIONAL LIMITED</h3>
                <p className="text-gray-600">Corporate Identity Number: U85499KA2024PLC186653</p>
                <p className="text-gray-600">PAN: AARCM9402C</p>
                <p className="text-gray-600">TAN: BLRM47275E</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Subsidiary Companies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>MAHASAMVIT FINANCIAL SERVICES – ON PROCESS</li>
                    <li>MAHASAMVIT AGROTECH LIMITED – ON PROCESS</li>
                    <li>MAHASAMVIT MEDIA AND ENTERTAINMENT PVT. LTD. – ON PROCESS</li>
                  </ul>
                </div>
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Key Initiatives</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>International Institute of Commerce and Finance (IICF)</li>
                    <li>Global Financial Services</li>
                    <li>Research & Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}