import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoticeProvider from './components/NoticeProvider';
// import NoticeTest from './components/NoticeTest';
import Home from './pages/Home';
import About from './pages/About';
import GlobalFinance from './pages/GlobalFinance';
import FinancialResearch from './pages/FinancialResearch';
import FinancialServices from './pages/FinancialServices';
import MoneyResearch from './pages/MoneyResearch';
import BusinessConsultancy from './pages/BusinessConsultancy';
import JobConsultancy from './pages/JobConsultancy';
import MediaEntertainment from './pages/MediaEntertainment';
import AgroProjects from './pages/AgroProjects';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs'; // Added import for Blogs
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <NoticeProvider>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/global-finance" element={<GlobalFinance />} />
                <Route path="/financial-research" element={<FinancialResearch />} />
                <Route path="/financial-services" element={<FinancialServices />} />
                <Route path="/money-research" element={<MoneyResearch />} />
                <Route path="/business-consultancy" element={<BusinessConsultancy />} />
                <Route path="/job-consultancy" element={<JobConsultancy />} />
                <Route path="/agro-projects" element={<AgroProjects />} />
                <Route path="/media-entertainment" element={<MediaEntertainment />} />
                <Route path="/blogs" element={<Blogs />} /> {/* Added new route for Blogs */}
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
                borderRadius: '12px',
                padding: '16px',
                fontSize: '14px',
                fontWeight: '500',
              },
              success: {
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#fff',
                },
                style: {
                  background: '#10B981',
                  color: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#fff',
                },
                style: {
                  background: '#EF4444',
                  color: '#fff',
                },
              },
            }}
          />
        </div>
        {/* {import.meta.env.DEV && <NoticeTest />} */}
      </NoticeProvider>
    </Router>
  );
}

export default App;
