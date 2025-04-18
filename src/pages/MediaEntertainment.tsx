import { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Music, Radio, Video, Tv, Monitor, Camera, ArrowRight, Download, CheckCircle, TrendingUp, PieChart, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrochureModal from '../components/BrochureModal';

const MediaEntertainment = () => {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const openBrochureModal = () => {
    setIsBrochureModalOpen(true);
  };

  const closeBrochureModal = () => {
    setIsBrochureModalOpen(false);
  };

  const fastestGrowingSegments = [
    { id: "01", title: "Television", description: "Direct-to-home (DTH) broadcasting accounts for 37% of the total television subscribers in India and is estimated at ~ Rs 220 billion (US$ 3 billion) in FY21. In FY20, TV penetration in India stood at 69% driven by DTH market. In FY20, DTH registered a market share of 37% to the total TV market against 34% in FY19." },
    { id: "02", title: "Gaming and Digital Advertising", description: "The gaming industry is one of the fastest-growing segments with increasing monetization and user adoption driven by mobile gaming platforms and integrated advertising models." },
    { id: "03", title: "Advertising Revenues", description: "Digital advertising has seen unprecedented growth, transforming traditional ad spending and offering more targeted, measurable and immersive opportunities for brands." },
    { id: "04", title: "Kids Genre Viewership", description: "The children's content segment has witnessed significant growth in viewership with more tailored programming and dedicated channels emerging." },
    { id: "05", title: "Music industry", description: "The music industry has transformed through streaming platforms, changing how content is distributed, consumed, and monetized across global markets." }
  ];

  const notableTrends = [
    {
      id: "01",
      title: "Television",
      description: "Direct-to-home (DTH) broadcasting accounts for 37% of the total television subscribers in India and is estimated at ~ Rs 220 billion (US$ 3 billion) in FY21. In FY20, TV penetration in India stood at 69% driven by DTH market. In FY20, DTH registered a market share of 37% to the total TV market against 34% in FY19."
    },
    {
      id: "02",
      title: "Emerging Stakeholders in Cloud Gaming",
      description: "Cloud gaming is creating new business models and partnership opportunities with telecom providers, technology companies, and traditional game publishers collaborating on innovative platforms."
    },
    {
      id: "03",
      title: "Digital and OTT Video",
      description: "OTT platforms are revolutionizing content consumption with subscription-based models, original programming, and personalized viewing experiences across devices."
    },
    {
      id: "04",
      title: "Regional Language Streaming Services",
      description: "Growing demand for localized content has fueled the expansion of regional language streaming services, catering to diverse linguistic preferences across markets."
    }
  ];

  const entertainmentSectors = [
    "Television",
    "Online Gaming",
    "Animation and VFX",
    "Out of Home (OOH)",
    "Music",
    "Digital Media",
    "Live Events",
    "Films Entertainment",
    "Print",
    "Radio"
  ];

  const companyValues = [
    {
      title: "Respect",
      description: "We appreciate the different roles we have and show genuine interest in each other while being open to different views. We live up to our agreements."
    },
    {
      title: "Responsibility",
      description: "We have clear roles and tasks and take ownership to perform to the best of our ability. We share successes and learn from failures."
    },
    {
      title: "Passion",
      description: "We are passionate about creating and achieving the best as we work towards a common goal. We inspire others by involving them and showing our appreciation."
    },
    {
      title: "Challenge",
      description: "We ask questions to improve and innovate and invite others to share new perspectives."
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
      <div className="relative py-20 bg-gradient-to-r from-purple-600 to-purple-400">
        <div className="absolute inset-0">
          <img
            src="https://www.coolest-gadgets.com/wp-content/uploads/2024/10/Media-And-Entertainment-Industry-Statistics.webp"
            alt="Media & Entertainment"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Media & Entertainment
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Innovative solutions and strategic investments in the dynamic world of media and entertainment
            </p>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Media & Entertainment Brochures
            </button>
          </div>
        </div>
      </div>

      {/* Industry Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-900">Some Words About Media and Entertainment Industry</h2>
              <p className="text-gray-700 mb-6">
                India's media and entertainment industries have always been an important part of our national story. As a young nation born in an era where film and radio were in their infancy, we have seen our triumphs and tribulations reflected in the mass media from the very start. These industries have also become important contributors to Indian economic prosperity. In recognition of their importance, the Union government officially designated audiovisual services as one of 12 'champion service sectors' in 2018.
              </p>
              <p className="text-gray-700 mb-6">
                The sector is witnessing change at breakneck speed – developments in technology, notably the internet and over the top (OTT) content have indelibly changed the creation, distribution and consumption of content. The growing OTT ecosystem offers flexibility to creators and consumers, expands choice, and lowers distribution and search costs. Other developments such as strides in artificial intelligence, virtual reality and augmented reality, are opening up new possibilities in entertainment, creating entirely new categories of products. In its response to these changes, India could potentially propel the sector to new heights and make the country a global leader in entertainment.
              </p>
              <div className="flex items-center text-green-600">
                <TrendingUp className="w-6 h-6 mr-2" />
                <span className="font-semibold">Rapidly evolving digital landscape</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/12031249/AI-in-media-and-entertainment.png"
                alt="Media and Entertainment Industry"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fastest Growing Segments */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900">Largest and Fastest-Growing Segments</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Key segments driving growth in the media and entertainment industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {fastestGrowingSegments.map((segment) => (
              <div key={segment.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 rounded-full p-2 mr-4">
                    <span className="w-8 h-8 flex items-center justify-center text-purple-600 font-bold">
                      {segment.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-900">{segment.title}</h3>
                </div>
                {segment.id === "01" && (
                  <p className="mt-4 text-gray-700 text-sm">{segment.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Trends */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900">Notable trends in the Media and Entertainment Industry</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {notableTrends.map((trend) => (
              <div key={trend.id} className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-900 flex items-center">
                  <span className="mr-2">{trend.id}.</span>
                  {trend.title}
                </h3>
                <p className="text-gray-700">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment Sectors */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900">The Entertainment Sector Is Split Into Ten Segments</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {entertainmentSectors.map((sector, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-4 rounded-lg text-center shadow-md"
              >
                <p className="font-medium text-green-900">{sector}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Growth */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-900">Indian Media and Entertainment Industry is Growing Rapidly</h2>
              <p className="text-gray-700 mb-4">
                India's media and entertainment (M&E) industry is expected to expand at a CAGR of 3.24% between 2019-20 and 2021-22 to reach US$ 25.56 billion by 2021-22 due to acceleration of digital adoption among users across geographies.
              </p>
              <p className="text-gray-700 mb-4">
                In December 2020, Star Disney stated that the media & entertainment sector has the potential to increase to ~US$ 100 billion by 2030.
              </p>
              <p className="text-gray-700 mb-4">
                India's sustained economic growth and the universal acceleration of digital adoption by users across geographies are the two areas that offer encouragement.
              </p>
              <p className="text-gray-700 mb-4">
                India could be home to a billion digital users by 2028, instead of the earlier projected 2030 timeline, according to KPMG's revised estimates.
              </p>
              <p className="text-gray-700 mb-4">
                The M&E sector has been substantially affected, by the types of outdoor entertainment coming to a standstill, due to the extended lockdown and slowdown in media spending and supply chain of content. Therefore, it is expected that the M&E sector would contract in FY21 by 20 percentage points with segments such as television, films and print experiencing major declines.
              </p>
              <p className="text-gray-700 mb-4">
                On the other hand, extended lockdowns accelerated data usage and consumption. Segments such as digital and gaming are seeing rapid growth in user penetration and engagement levels. M&E sector is projected to bounce back in FY22, with the fastest-growing segments being gaming and digital.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://d17ocfn2f5o4rl.cloudfront.net/wp-content/uploads/2023/12/infographic-09.jpg"
                alt="Media Industry Growth"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-purple-100">
                Our key mission has always been to help people to escape everyday life and by giving them a moment to dream away. To bring people together by telling value stories and positive economic establishment and social reforms and spiritual upliftment aspects and providing exceptional experiences trough world class live entertainment Memories that last a lifetime.
              </p>
            </div>

            <div className="bg-purple-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-purple-100">
                Is to be the leading media company for our audience, our clients, and the colleagues with whom we work in every community we serve. The mission for the company is to gather the largest and most desirable audience with our broadcast and digital platforms and enable our clients and partners to effectively advance their business and strategic interests through our products.
              </p>
            </div>

            <div className="bg-purple-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <p className="text-purple-100 mb-4">
                Our company values guide our every-day behaviours, support the decisions we make and inform the way in which we work with one another. They are essential to creating a work environment that inspires our people to achieve our company's mission and their individual professional goals. It is important to us that our people and everyone we collaborate with know what we stand for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900">Our Values Are</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-green-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Streaming */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://d17ocfn2f5o4rl.cloudfront.net/wp-content/uploads/2023/12/infographic-07.jpg"
                alt="Media Streaming Platforms"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-green-900">The Transformation of Media Consumption</h2>
              <p className="text-gray-700 mb-6">
                The media landscape has evolved dramatically with streaming services now representing over 38.1% of total viewership, compared to traditional broadcasting at 24.7% and cable at 30.9%. This shift reflects changing consumer preferences toward on-demand, personalized content experiences across multiple devices.
              </p>
              <p className="text-gray-700 mb-6">
                Major platforms like YouTube, Netflix, Hulu, and Amazon Prime Video continue to reshape how content is produced, distributed and monetized, while creating new opportunities for content creators, advertisers and technology providers throughout the ecosystem.
              </p>
              <div className="flex items-center text-green-600">
                <PieChart className="w-6 h-6 mr-2" />
                <span className="font-semibold">Streaming dominance reshaping the industry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">125,330+</p>
              <p className="text-gray-700 font-medium">Students enrolled</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">199+</p>
              <p className="text-gray-700 font-medium">Registered instructors</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">99%</p>
              <p className="text-gray-700 font-medium">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Ready to Transform the Media Landscape?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our media and entertainment specialists today to discuss your project or investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Connect With Us <ArrowRight className="ml-2" />
            </Link>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Media Resources
            </button>
          </div>
        </div>
      </section>

      {/* Brochure Modal */}
      <BrochureModal isOpen={isBrochureModalOpen} onClose={closeBrochureModal} category="media-entertainment" />
    </motion.div>
  );
};

export default MediaEntertainment;
