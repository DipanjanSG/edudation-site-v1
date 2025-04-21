import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Briefcase, LineChart, BarChart, Shield, ArrowRight, Download, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrochureModal from '../components/BrochureModal';

const MoneyResearch = () => {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const openBrochureModal = () => {
    setIsBrochureModalOpen(true);
  };

  const closeBrochureModal = () => {
    setIsBrochureModalOpen(false);
  };

  const features = [
    { id: "01", title: "Commodity Tips" },
    { id: "02", title: "Equity Tips" },
    { id: "03", title: "Stock Tips" },
    { id: "04", title: "Intra-Day Tips" },
    { id: "05", title: "Nifty Tips" },
    { id: "06", title: "Stock Cash Tips" }
  ];

  const tradingStrategies = [
    {
      id: "01",
      title: "Day Trading",
      description: "Day traders open and close their trades inside regular market hours. Day traders avoid the risk of overnight gaps but can only profit from intraday price moves. They close their positions by the end of the trading day and go out flat."
    },
    {
      id: "02",
      title: "Break Out Trading",
      description: "Breakout trading aims to enter a position at the early stages of a trend. Traders identify key price levels and enter when price breaks through these levels, anticipating continued momentum in that direction."
    },
    {
      id: "03",
      title: "Reversal Trading Strategy",
      description: "Reversal traders look for signs that a current trend is weakening and may reverse. They identify potential turning points using technical indicators and chart patterns to capture profits from price reversals."
    },
    {
      id: "04",
      title: "Momentum Trading",
      description: "Momentum trading focuses on stocks showing strong upward or downward movement backed by high volume. Traders aim to ride the momentum until there are signs of reversal or slowdown."
    },
    {
      id: "05",
      title: "Trend Following",
      description: "Trend following involves identifying and trading in the direction of established market trends. Traders use technical indicators to confirm trend direction and strength for entry and exit points."
    },
    {
      id: "06",
      title: "Trend Trading",
      description: "Trend trading strategies capitalize on upward or downward market momentum. Traders use moving averages, trendlines, and other indicators to identify the direction and strength of trends."
    },
    {
      id: "07",
      title: "Option Trading Strategy",
      description: "Options trading strategies involve buying or selling options contracts to profit from price movements while managing risk. Strategies include covered calls, protective puts, spreads, and straddles."
    },
    {
      id: "08",
      title: "Future Trading",
      description: "Futures trading involves contracts to buy or sell assets at predetermined future dates and prices. Traders use futures for leverage, hedging, and to gain exposure to different markets."
    }
  ];

  const securityAnalysisApproaches = [
    { title: "Introduction", description: "An overview of methodologies for evaluating securities and investments." },
    { title: "Fundamental Analysis", description: "Evaluating securities by examining related economic, financial, and other qualitative and quantitative factors." },
    { title: "Understanding the Business", description: "Comprehensive research on a company's business model, competitive advantages, and industry position." },
    { title: "Financial Ratios", description: "Using key performance indicators to assess a company's financial health and valuation." },
    { title: "Past Financial Results", description: "Analyzing historical data to identify trends and predict future performance." },
    { title: "Competitors Analysis", description: "Comparative evaluation of competitors to understand market positioning and growth potential." },
    { title: "Debt of The Company", description: "Assessing a company's liabilities and debt structure to evaluate financial risk." }
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
            src="https://images.stockcake.com/public/0/b/7/0b7fcf66-46ac-4b30-a9c6-22363c54c71e_large/markets-never-sleep-stockcake.jpg"
            alt="Money Research"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Money Research
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Strategic insights for optimal financial decision-making and wealth management
            </p>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Money Research Materials
            </button>
          </div>
        </div>
      </div>

      {/* About MAHASAMVIT Money Research */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Some Words About Money Research</h2>
              <p className="text-gray-700 mb-4">
                MAHASAMVIT is an emerging Global Business Conglomerate incorporated by the Proficient Stock Market veterans after huge success in many different models of technical analysis. Alliance Research is well known for its vast experience in technical Analysis for many years now has succeeded exceptionally well in all fields of Long Term and Short term trading. We are a reputed Indian Trading Analysis Providing company. Our Strength lies in the expert human resource who understands the basics of trading very well. Thus we are able to provide the Best Analysis.
              </p>
              <p className="text-gray-700 mb-4">
                We understand very well about the complexities a trader faces right from receiving the expert advice till the execution of the trade.
              </p>
              <p className="text-gray-700 mb-4">
                MAHASAMVIT money research very well understands the importance of Speed, Accuracy and consistency at which message is to be passed to the trader in order to maximize the benefits.
              </p>
              <p className="text-gray-700 mb-4">
                MAHASAMVIT money research is a professionally run company with a long term goal to provide maximum return on investment (ROI) on every investors money.
              </p>
              <div className="flex items-center text-blue-600 mt-6">
                <TrendingUp className="w-6 h-6 mr-2" />
                <span className="font-semibold">Actionable insights for financial growth</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.stockcake.com/public/b/4/5/b458f39b-3d9f-46bf-814a-86b3728e1b93_large/stock-market-analysis-stockcake.jpg"
                alt="Money Research Analysis"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive trading advice and market insights for investors of all levels
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                    <span className="w-8 h-8 flex items-center justify-center text-blue-600 font-bold">
                      {feature.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Strategies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">List of Trading Strategies</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Used by different types of traders to Make Money in the markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tradingStrategies.map((strategy) => (
              <div key={strategy.id} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-900 flex items-center">
                  <span className="mr-2">{strategy.id}.</span>
                  {strategy.title}
                </h3>
                <p className="text-gray-700">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Analysis Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Approaches to Security Analysis</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://c8.alamy.com/comp/2ANTAT9/professional-technical-analysis-on-the-monitor-of-a-computer-fundamental-and-technical-analysis-concept-stock-trading-crypto-currency-background-2ANTAT9.jpg"
                alt="Security Analysis"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4">
              {securityAnalysisApproaches.map((approach, index) => (
                <div key={index} className="border-b border-blue-200 pb-4 last:border-0">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{approach.title}</h3>
                  <p className="text-gray-600">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ETF Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">ETF</h2>
            <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Exchange Traded Funds</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">ETF Meaning:</span> ETFs are a sort of investment fund that combines the best features of two popular assets: They combine the diversification benefits of mutual funds with the simplicity with which equities may be exchanged.
              </p>

              <h4 className="text-xl font-semibold text-blue-900 mb-3">What is an ETF?</h4>
              <p className="text-gray-700 mb-4">
                An exchange-traded fund (ETF) is a collection of investments such as equities or bonds. ETFs will let you invest in a large number of securities at once, and they often have cheaper fees than other types of funds. ETFs are also more easily traded.
              </p>
              <p className="text-gray-700 mb-4">
                However, ETFs, like any other financial product, is not a one-size-fits-all solution. Examine them on their own merits, including management charges and commission fees, ease of purchase and sale, fit into your existing portfolio, and investment quality.
              </p>

              <h4 className="text-xl font-semibold text-blue-900 mb-3">How do ETFs Work?</h4>
              <p className="text-gray-700 mb-4">
                The assets that are underlying are owned by the fund provider, who then forms a fund to track the performance and offers shares in that fund to investors. Shareholders own a part of an ETF but not the fund's assets.
              </p>
              <p className="text-gray-700">
                Investors in an ETF that tracks a stock index may get lump dividend payments or reinvestments for the index's constituent firms.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://www.investopedia.com/thmb/_uAQGkkLGdgz3ktVgvGcwDOi0VA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EFT_final-45a9ca8cf7e948608a3b8dae38b66393.png"
                alt="ETF Exchange Traded Funds"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-blue-100 mb-4">
                We view our mission in reliable-efficient responsible delivery of financial research to our consumers and help them create wealth out of their savings.to empower business leaders and our brand partners by inventing the solutions, knowledge and connections they need to thrive in a transforming world.
              </p>
              <p className="text-blue-100">
                We do this through deep, smart, global reporting of the world of business, powered by unmatched data and the world's largest newsroom.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-blue-100">
                Our pursuit of 'innovation' and 'responsible approach' will help to make us, one of the most admired* financial research and consulting brand.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Values</h3>
              <ul className="text-blue-100 space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-300 mt-0.5 mr-1 flex-shrink-0" />
                  <span>Respect every Individual</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-300 mt-0.5 mr-1 flex-shrink-0" />
                  <span>Bring Passion to Work</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-300 mt-0.5 mr-1 flex-shrink-0" />
                  <span>Be Disciplined, Committed & Transparent</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-300 mt-0.5 mr-1 flex-shrink-0" />
                  <span>Demand Excellence from Self & Others</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-300 mt-0.5 mr-1 flex-shrink-0" />
                  <span>What's Right than Who's Right</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-300 mt-0.5 mr-1 flex-shrink-0" />
                  <span>Have Fun@ Work</span>
                </li>
              </ul>
            </div>
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
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Transform Your Financial Approach?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our money research team today to discuss how our insights can help you achieve your financial objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Expert Financial Insights <ArrowRight className="ml-2" />
            </Link>
            <button
              onClick={openBrochureModal}
              className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Research Material
            </button>
          </div>
        </div>
      </section>

      {/* Brochure Modal */}
      <BrochureModal isOpen={isBrochureModalOpen} onClose={closeBrochureModal} category="money-research" />
    </motion.div>
  );
};

export default MoneyResearch;
