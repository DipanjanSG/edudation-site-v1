import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  content: string;
}

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const blogPosts: Blog[] = [
    {
      id: 1,
      title: "The Future of Global Finance: Trends to Watch in 2025",
      category: "Global Finance",
      date: "April 2, 2025",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop",
      summary: "Explore the emerging trends that are shaping the future of global finance in 2025 and beyond.",
      content: `
        <p class="mb-4">The global financial landscape is evolving at an unprecedented pace, driven by technological innovation, changing consumer preferences, and shifting regulatory frameworks. As we navigate through 2025, several key trends are emerging that will fundamentally reshape how financial services are delivered and consumed.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Digital Currencies Go Mainstream</h3>
        <p class="mb-4">Central Bank Digital Currencies (CBDCs) are gaining significant traction, with over 30 countries now in advanced stages of implementation. These government-backed digital currencies are bridging the gap between traditional finance and the crypto economy, offering the benefits of blockchain technology with the stability and trust of central bank backing.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Embedded Finance Revolution</h3>
        <p class="mb-4">Financial services are increasingly being embedded into non-financial platforms and applications, creating seamless user experiences. From ride-sharing apps offering payment and insurance services to e-commerce platforms providing instant credit, the boundaries between financial and non-financial services are blurring.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Sustainability-Driven Investments</h3>
        <p class="mb-4">Environmental, Social, and Governance (ESG) considerations are now mainstream in investment decision-making. Asset managers are developing increasingly sophisticated tools to evaluate and report on the sustainability impact of their portfolios, responding to growing demand from both institutional and retail investors.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">AI-Powered Financial Advice</h3>
        <p class="mb-4">Artificial intelligence is democratizing access to high-quality financial advice. Advanced algorithms now provide personalized investment recommendations, retirement planning, and budgeting guidance at a fraction of the cost of traditional financial advisors.</p>

        <p class="mt-6 text-blue-500 font-medium">The financial industry is at a pivotal moment of transformation. Organizations that embrace these trends and adapt their business models accordingly will be well-positioned to thrive in this new era of global finance.</p>
      `
    },
    {
      id: 2,
      title: "Sustainable Agriculture: Innovations Transforming Food Production",
      category: "Agro Projects",
      date: "March 28, 2025",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop",
      summary: "Discover how technological innovations are making agriculture more sustainable and efficient.",
      content: `
        <p class="mb-4">The agricultural sector is undergoing a significant transformation as farmers, researchers, and technology companies collaborate to develop more sustainable and efficient food production methods. These innovations are crucial for feeding a growing global population while minimizing environmental impact.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Precision Agriculture</h3>
        <p class="mb-4">Advanced sensors, drones, and satellite imaging are enabling farmers to monitor crop health, soil conditions, and water usage with unprecedented precision. This data-driven approach allows for targeted application of water, fertilizers, and pesticides, reducing waste and environmental impact while improving yields.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Vertical Farming</h3>
        <p class="mb-4">Urban vertical farms are revolutionizing how we grow fresh produce in space-constrained environments. By stacking growth platforms vertically and using controlled environment agriculture techniques, these farms can produce high yields year-round with significantly less water and no pesticides, bringing food production closer to urban consumers.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Biotechnology Advancements</h3>
        <p class="mb-4">Genetic editing tools like CRISPR are being used to develop crop varieties that are more resistant to diseases, pests, and extreme weather conditions. These innovations reduce the need for chemical interventions and help crops adapt to changing climate conditions.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Regenerative Agriculture Practices</h3>
        <p class="mb-4">Farmers are increasingly adopting regenerative practices that focus on soil health, biodiversity, and ecosystem services. Techniques such as cover cropping, reduced tillage, and integrated livestock management help sequester carbon, enhance water retention, and build long-term soil fertility.</p>

        <p class="mt-6 text-blue-500 font-medium">As these innovations continue to develop and scale, they promise to make agriculture more resilient, productive, and environmentally sustainable, contributing to both food security and climate change mitigation.</p>
      `
    },
    {
      id: 3,
      title: "The Changing Landscape of Business Consultancy in the Digital Age",
      category: "Business Consultancy",
      date: "March 20, 2025",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2874&auto=format&fit=crop",
      summary: "How digital transformation is reshaping business consultancy services and client expectations.",
      content: `
        <p class="mb-4">Business consultancy is evolving rapidly in response to digital transformation, changing client expectations, and new ways of working. Traditional consulting approaches are being complemented and sometimes replaced by more agile, data-driven methodologies.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">From Projects to Products</h3>
        <p class="mb-4">Many consulting firms are shifting from a project-based delivery model to a continuous product-based approach. Instead of delivering one-off solutions, consultants are creating adaptable digital products and platforms that can evolve with client needs and market conditions.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Data-Driven Decision Making</h3>
        <p class="mb-4">Advanced analytics and artificial intelligence are transforming how consultants generate insights and recommendations. By leveraging vast amounts of structured and unstructured data, consultants can identify patterns, predict outcomes, and quantify the impact of different strategic options with greater precision.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Remote and Hybrid Consulting Models</h3>
        <p class="mb-4">The pandemic accelerated the adoption of remote consulting practices, and many of these changes are here to stay. Virtual collaboration tools, digital workshops, and hybrid delivery models are reducing travel requirements while expanding access to global expertise.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Ecosystem Orchestration</h3>
        <p class="mb-4">Consultants are increasingly acting as ecosystem orchestrators, bringing together diverse partners, technologies, and capabilities to solve complex client challenges. This collaborative approach enables more comprehensive solutions and accelerates implementation.</p>

        <p class="mt-6 text-blue-500 font-medium">As the business environment continues to evolve at an accelerating pace, consultants who embrace digital tools, data-driven approaches, and ecosystem thinking will be best positioned to deliver value to their clients in the digital age.</p>
      `
    },
    {
      id: 4,
      title: "Career Development Strategies for the New Economy",
      category: "Job Consultancy",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
      summary: "Essential strategies for professional growth and career advancement in a rapidly changing job market.",
      content: `
        <p class="mb-4">The job market is undergoing profound changes due to automation, remote work, and evolving skill requirements. Professionals need new approaches to career development to thrive in this dynamic environment.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Skills-Based Career Planning</h3>
        <p class="mb-4">Rather than focusing solely on job titles or linear career paths, successful professionals are adopting a skills-based approach to career development. This involves identifying emerging skills in your field, developing a learning roadmap, and continuously expanding your capabilities through formal and informal learning opportunities.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Digital Portfolio Building</h3>
        <p class="mb-4">Traditional resumes are being supplemented or replaced by digital portfolios that showcase your work, projects, and contributions. Platforms like GitHub, Behance, or personal websites allow professionals to demonstrate their capabilities more effectively than a list of qualifications.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Strategic Networking in Virtual Environments</h3>
        <p class="mb-4">With remote work becoming commonplace, networking strategies need to adapt. Professionals are leveraging virtual industry events, online communities, and digital platforms to build relationships and increase visibility, regardless of geographic location.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Career Experimentation</h3>
        <p class="mb-4">The concept of a single, linear career path is becoming obsolete. More professionals are engaging in career experimentation through side projects, freelance work, and cross-functional assignments to explore new directions, build diverse skills, and create multiple income streams.</p>

        <p class="mt-6 text-blue-500 font-medium">By embracing these strategies, professionals can navigate the uncertainties of the new economy and create fulfilling, resilient careers that adapt to changing market conditions and personal goals.</p>
      `
    },
    {
      id: 5,
      title: "The Rise of Sustainable Finance: Investment Strategies for a Changing World",
      category: "Financial Research",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2940&auto=format&fit=crop",
      summary: "How sustainability considerations are transforming investment strategies and financial markets.",
      content: `
        <p class="mb-4">Sustainable finance has evolved from a niche concern to a central consideration in investment decision-making. As climate change, resource scarcity, and social inequalities pose increasing risks to long-term financial performance, investors are developing new approaches to incorporate sustainability factors into their strategies.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">ESG Integration</h3>
        <p class="mb-4">Environmental, Social, and Governance (ESG) factors are becoming fundamental components of investment analysis across asset classes. Advanced data analytics tools are enabling investors to assess how companies manage sustainability risks and opportunities with increasing sophistication.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Impact Investing Goes Mainstream</h3>
        <p class="mb-4">Impact investing, which aims to generate positive social and environmental outcomes alongside financial returns, is attracting significant capital from institutional and retail investors. The development of standardized impact measurement frameworks is helping to bring rigor and transparency to this growing field.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Climate Finance Innovation</h3>
        <p class="mb-4">New financial instruments are emerging to address climate change, including blue bonds, sustainability-linked loans, and climate risk insurance. These innovations are channeling capital toward climate solutions while helping companies and investors manage transition risks.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Long-Term Value Creation</h3>
        <p class="mb-4">Investors are increasingly recognizing that sustainable business practices contribute to long-term value creation. Companies that effectively manage ESG risks and capitalize on sustainability opportunities often demonstrate stronger operational performance, innovation capacity, and stakeholder relationships.</p>

        <p class="mt-6 text-blue-500 font-medium">As sustainable finance continues to evolve, it represents not just a shift in how we assess investments but a fundamental reimagining of the purpose of finance in society—aligning capital allocation with broader social and environmental goals.</p>
      `
    },
    {
      id: 6,
      title: "Digital Transformation in Media and Entertainment: New Business Models",
      category: "Media & Entertainment",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?q=80&w=2942&auto=format&fit=crop",
      summary: "Exploring how digital technologies are creating new business models in the media and entertainment industry.",
      content: `
        <p class="mb-4">The media and entertainment industry continues to undergo dramatic transformation as digital technologies reshape content creation, distribution, and monetization. These changes are giving rise to innovative business models that are redefining how value is created and captured in the industry.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Creator Economy Expansion</h3>
        <p class="mb-4">Individual creators now have unprecedented opportunities to build audiences and monetize content directly. Platforms offering subscription services, tipping, merchandise sales, and brand partnerships are enabling creators to develop diversified revenue streams outside traditional media structures.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Immersive Entertainment Experiences</h3>
        <p class="mb-4">Virtual reality, augmented reality, and mixed reality technologies are creating new forms of immersive entertainment. From virtual concerts and interactive storytelling to augmented retail experiences, these technologies are blurring the lines between physical and digital entertainment.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">AI-Powered Content Creation</h3>
        <p class="mb-4">Artificial intelligence is transforming content production, enabling automated generation of news articles, personalized content recommendations, and even creative works. These technologies are reducing production costs and enabling more personalized content experiences.</p>

        <h3 class="text-xl font-semibold mb-2 text-blue-600">Hybrid Distribution Models</h3>
        <p class="mb-4">Media companies are experimenting with flexible release strategies that combine theatrical, streaming, and other distribution channels. These approaches allow content to reach different audience segments through their preferred platforms while maximizing overall revenue potential.</p>

        <p class="mt-6 text-blue-500 font-medium">As these new business models continue to evolve, they are creating both challenges and opportunities for industry participants. Companies that can adapt quickly, experiment with new approaches, and build direct relationships with audiences will be best positioned to thrive in this dynamic environment.</p>
      `
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Latest Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert analysis, industry trends, and thoughtful perspectives on the evolving landscape
            of finance, business, and beyond.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">
                  {blog.summary}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedBlog(blog)}
                  className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-blue-50 rounded-xl p-8 mt-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated with Our Latest Insights</h2>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter and never miss an update on industry trends, market analysis, and expert opinions.</p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white font-medium px-6 py-3 rounded-lg sm:rounded-l-none hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Blog Content Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-64 sm:h-80 overflow-hidden">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-2 py-1 rounded">
                    {selectedBlog.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">{selectedBlog.date}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{selectedBlog.title}</h2>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">4.9 (28 reviews)</span>
                    </div>
                    <div className="flex space-x-4">
                      <button className="text-gray-600 hover:text-blue-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                      <button className="text-gray-600 hover:text-blue-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}