import { useState } from 'react';
import { X, FileText } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

const BrochureModal = ({ isOpen, onClose, category = 'default' }: BrochureModalProps) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [downloadingTitle, setDownloadingTitle] = useState('');

  // Global Finance Education brochures
  const globalFinanceBrochures = [
    {
      id: 'Annexure-1-CHARTERED-ACCOUNTANCY',
      title: 'Annexure-1-CHARTERED-ACCOUNTANCY',
      fileSize: '2.56 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-1-CHARTERED-ACCOUNTANCY.pdf',
      available: true
    },
    {
      id: 'Annexure-2-COMPANY-SECRETARY',
      title: 'Annexure-2-COMPANY-SECRETARY',
      fileSize: '1.45 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-2-COMPANY-SECRETARY.pdf',
      available: true
    },
    {
      id: 'Annexure-4-CFA',
      title: 'Annexure-4-CFA',
      fileSize: '1.45 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-4-CFA.pdf',
      available: true
    },
    {
      id: 'Annexure-5-CMT',
      title: 'Annexure-5-CMT',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-5-CMT.pdf',
      available: true
    },
    {
      id: 'Annexure-6-CFP',
      title: 'Annexure-6-CFP',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-6-CFP.pdf',
      available: true
    },
    {
      id: 'Annexure-7-CAIA',
      title: 'Annexure-7-CAIA',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-7-CAIA.pdf',
      available: true
    },
    {
      id: 'Annexure-8-CQF',
      title: 'Annexure-8-CQF',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-8-CQF.pdf',
      available: true
    },
    {
      id: 'Annexure-9-EPAT',
      title: 'Annexure-9-EPAT',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-9-EPAT.pdf',
      available: true
    },
    {
      id: 'Annexure-10-FRM',
      title: 'Annexure-10-FRM',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-10-FRM.pdf',
      available: true
    },
    {
      id: 'Annexure-11-CPA',
      title: 'Annexure-11-CPA',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-11-CPA.pdf',
      available: true
    },
    {
      id: 'Annexure-12-advanced-quantitive-and-algorithm-trading',
      title: 'Annexure-12-advanced-quantitive-and-algorithm-trading',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-12-advanced-quantitive-and-algorithm-trading.pdf',
      available: true
    },
    {
      id: 'Annexure-13-CIA',
      title: 'Annexure-13-CIA',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-13-CIA',
      available: true
    },
    {
      id: 'Annexure-14-CIMA',
      title: 'Annexure-14-CIMA',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-14-CIMA.pdf',
      available: true
    },
    {
      id: 'Annexure-15-ACCA',
      title: 'Annexure-15-ACCA',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-15-ACCA.pdf',
      available: true
    },
    {
      id: 'Annexure-16-CIIA',
      title: 'Annexure-16-CIIA',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-16-CIIA.pdf',
      available: true
    },
    {
      id: 'Annexure-17-CPM',
      title: 'Annexure-17-CPM',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-17-CPM.pdf',
      available: true
    },
    {
      id: 'Annexure-18-CTM',
      title: 'Annexure-18-CTM',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-18-CTM.pdf',
      available: true
    },
    {
      id: 'Annexure-19-INVESTMENT-BANKING',
      title: 'Annexure-19-INVESTMENT-BANKING',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-19-INVESTMENT-BANKING.pdf',
      available: true
    },
    {
      id: 'Annexure-20-CAIIB',
      title: 'Annexure-20-CAIIB',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-20-CAIIB.pdf',
      available: true
    },
    {
      id: 'Annexure-21-IFTA',
      title: 'Annexure-21-IFTA',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-21-IFTA.pdf',
      available: true
    },
    {
      id: 'Annexure-22-NYIF',
      title: 'Annexure-22-NYIF',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-22-NYIF.pdf',
      available: true
    },
    {
      id: 'Annexure-23-CFI',
      title: 'Annexure-23-CFI',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-23-CFI.pdf',
      available: true
    },
    {
      id: 'Annexure-24-INVESTOPEDIA',
      title: 'Annexure-24-INVESTOPEDIA',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-24-INVESTOPEDIA.pdf',
      available: true
    },
    {
      id: 'Annexure-25-26-27-AAFM',
      title: 'Annexure-25-26-27-AAFM',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-25-26-27-AAFM.pdf',
      available: true
    },
    {
      id: 'Annexure-28-NCFM',
      title: 'Annexure-28-NCFM',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-28-NCFM.pdf',
      available: true
    },
    {
      id: 'Annexure-30-NCDEX-NICR',
      title: 'Annexure-30-NCDEX-NICR',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-30-NCDEX-NICR.pdf',
      available: true
    },
    {
      id: 'Annexure-31-MCX-MCCP',
      title: 'Annexure-31-MCX-MCCP',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-31-MCX-MCCP.pdf',
      available: true
    },
    {
      id: 'Annexure-32-NSE-ACADEMY',
      title: 'Annexure-32-NSE-ACADEMY',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-32-NSE-ACADEMY.pdf',
      available: true
    },
    {
      id: 'Annexure-33-BSE-COURSES',
      title: 'Annexure-33-BSE-COURSES',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-33-BSE-COURSES.pdf',
      available: true
    },
    {
      id: 'Annexure-34-legal-study-of-finance',
      title: 'Annexure-34-legal-study-of-finance',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-34-legal-study-of-finance.pdf',
      available: true
    },
    {
      id: 'Annexure-35-govt.-jobs-for-commerce-students',
      title: 'Annexure-35-govt.-jobs-for-commerce-students',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-35-govt.-jobs-for-commerce-students.pdf',
      available: true
    },
    {
      id: 'Annexure-36-masters-in-acturial-science',
      title: 'Annexure-36-masters-in-acturial-science',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-36-masters-in-acturial-science.pdf',
      available: true
    },
    {
      id: 'Annexure-38-tally-gst-tdsexcel-income-tax',
      title: 'Annexure-38-tally-gst-tdsexcel-income-tax',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-38-tally-gst-tdsexcel-income-tax.pdf',
      available: true
    },
    {
      id: 'Annexure-40-other-masters-and-phd-programs-in-finance',
      title: 'Annexure-40-other-masters-and-phd-programs-in-finance',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-40-other-masters-and-phd-programs-in-finance.pdf',
      available: true
    },
    {
      id: 'Annexure-40-other-masters-and-phd-programs-in-finance',
      title: 'Annexure-40-other-masters-and-phd-programs-in-finance',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-40-other-masters-and-phd-programs-in-finance.pdf',
      available: true
    },
    {
      id: 'Annexure-41-JUDICIARY-AND-OTHER-LEGAL-STUDIES',
      title: 'Annexure-41-JUDICIARY-AND-OTHER-LEGAL-STUDIES',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-41-JUDICIARY-AND-OTHER-LEGAL-STUDIES.pdf',
      available: true
    },
    {
      id: 'Annexure-42-ENGLISH-LANGUAGE',
      title: 'Annexure-42-ENGLISH-LANGUAGE',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-42-ENGLISH-LANGUAGE.pdf',
      available: true
    },
    {
      id: 'Annexure-43-BANKING-AND-INSURANCE-PROFESSIONAL',
      title: 'Annexure-43-BANKING-AND-INSURANCE-PROFESSIONAL',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-43-BANKING-AND-INSURANCE-PROFESSIONAL.pdf',
      available: true
    },
    {
      id: 'Annexure-44-LEGAL-STUDY-COMPREHENSIVE',
      title: 'Annexure-44-LEGAL-STUDY-COMPREHENSIVE',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-44-LEGAL-STUDY-COMPREHENSIVE.pdf',
      available: true
    },
    {
      id: 'Annexure-46-GOVT.-JOBS',
      title: 'Annexure-46-GOVT.-JOBS',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-46-GOVT.-JOBS.pdf',
      available: true
    },
    {
      id: 'Annexure-47-ACCOUNTS-AND-TAX-PROFESSIONAL',
      title: 'Annexure-47-ACCOUNTS-AND-TAX-PROFESSIONAL',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-47-ACCOUNTS-AND-TAX-PROFESSIONAL.pdf',
      available: true
    },
    {
      id: 'Annexure-48-international-quality-professional',
      title: 'Annexure-48-international-quality-professional',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-48-international-quality-professional.pdf',
      available: true
    },
    {
      id: 'Annexure-49-academic',
      title: 'Annexure-49-academic',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-49-academic.pdf',
      available: true
    },
    {
      id: 'Annexure-50-Dual-degree-for',
      title: 'Annexure-50-Dual-degree-for',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annexure-50-Dual-degree-for.pdf',
      available: true
    },
    {
      id: 'Annnexure-3-CMA',
      title: 'Annnexure-3-CMA',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/Annnexure-3-CMA.pdf',
      available: true
    },
    {
      id: 'COMPREHENSIVE-FINANCE-EDUCATION',
      title: 'COMPREHENSIVE-FINANCE-EDUCATION',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/COMPREHENSIVE-FINANCE-EDUCATION.pdf',
      available: true
    },
    {
      id: 'The-future-of-finance-skills-and-technologies-3',
      title: 'The-future-of-finance-skills-and-technologies-3',
      fileSize: '1.9 MB',
      path: '/brochures/mahasambhitclinetpdfs/globalfinanceeducationintiative/The-future-of-finance-skills-and-technologies-3.pdf',
      available: true
    },
  ];
  

  // Financial Services brochures
  const financialServicesBrochures = [
    {
      id: 'POWER-POINT-PRESENTATION-FINANCIAL-SERVICES',
      title: 'MAHASAMVIT Financial Services Overview',
      path: '/brochures/mahasambhitclinetpdfs/financialservices-wealthmanagement/POWER-POINT-PRESENTATION-FINANCIAL-SERVICES.pdf',
      available: true
    },
    
  ];

  // Money Research brochures
  const moneyResearchBrochures = [
    {
      id: 'KeyGlobalEconomicIndicators-1-1',
      title: 'KeyGlobalEconomicIndicators-1-1',
      path: '/brochures/mahasambhitclinetpdfs/moneyreserach/KeyGlobalEconomicIndicators-1-1.pdf',
      available: true
    },
    {
      id: 'POWER-POINT-PRESENTATION-MONEY-RESEARCH.pdf',
      title: 'POWER-POINT-PRESENTATION-MONEY-RESEARCH',
      path: '/brochures/mahasambhitclinetpdfs/moneyreserach/POWER-POINT-PRESENTATION-MONEY-RESEARCH.pdf',
      available: true
    },
  ];

  // Financial Research brochures
  const financialResearchBrochures = [
    {
      id: 'financial-research-services',
      title: 'Financial Research Services Guide',
      path: '/brochures/financial-research-services.pdf',
      available: true
    }
    // {
    //   id: 'equity-research-handbook',
    //   title: 'Equity Research Handbook',
    //   path: '/brochures/equity-research-handbook.pdf',
    //   available: true
    // },
    // {
    //   id: 'economic-analysis-framework',
    //   title: 'Economic Analysis Framework',
    //   path: '/brochures/economic-analysis-framework.pdf',
    //   available: true
    // }
  ];

  // Business Consultancy brochures
  const businessConsultancyBrochures = [
    {
      id: 'complete-list-of-project-report-1.pdf',
      title: 'complete-list-of-project-report-1.pdf',
      path: '/brochures/mahasambhitclinetpdfs/globalbusinessindustryandprojects/complete-list-of-project-report-1.pdf',
      available: true
    },
    {
      id: 'E-Commerce-Projects-2.pdf',
      title: 'E-Commerce-Projects-2.pdf',
      path: '/brochures/mahasambhitclinetpdfs/globalbusinessindustryandprojects/E-Commerce-Projects-2.pdf',
      available: true
    },
    {
      id: 'sez.pdf',
      title: 'sez.pdf',
      path: '/brochures/mahasambhitclinetpdfs/globalbusinessindustryandprojects/sez.pdf',
      available: true
    }
  ];

  // Job Consultancy brochures
  const jobConsultancyBrochures = [
    {
      id: 'Immigration-Service-1',
      title: 'Immigration-Service-1',
      path: '/brochures/mahasambhitclinetpdfs/jobconsultancyandhumanresources/Immigration-Service-1.pdf',
      available: true
    },
    {
      id: 'satisfied-job-2',
      title: 'satisfied-job-2',
      path: '/brochures/mahasambhitclinetpdfs/jobconsultancyandhumanresources/satisfied-job-2.pdf',
      available: true
    },
   
  ];

  // Agro Projects brochures
  const agroProjectsBrochures = [
    {
      id: '1.-A-Project-Report-on-Agri-input-supply-centre-1-5',
      title: '1.-A-Project-Report-on-Agri-input-supply-centre-1-5',
      path: '/brochures/mahasambhitclinetpdfs/agroprojects/1.-A-Project-Report-on-Agri-input-supply-centre-1-5.pdf',
      available: true
    },
    {
      id: '2.-Processing-Of-Cocoa-and-Products-of-cocoa-1-2',
      title: '2.-Processing-Of-Cocoa-and-Products-of-cocoa-1-2',
      path: '/brochures/mahasambhitclinetpdfs/agroprojects/2.-Processing-Of-Cocoa-and-Products-of-cocoa-1-2.pdf',
      available: true
    },
    {
      id: 'agri-projects-details',
      title: 'agri-projects-details',
      path: '/brochures/mahasambhitclinetpdfs/agroprojects/agri-projects-details.pdf',
      available: true
    },
    {
      id: 'AGROTECH-PROJECTS-1',
      title: 'AGROTECH-PROJECTS-1',
      path: '/brochures/mahasambhitclinetpdfs/agroprojects/AGROTECH-PROJECTS-1.pdf',
      available: true
    },
    {
      id: 'Millets-1',
      title: 'Millets-1',
      path: '/brochures/mahasambhitclinetpdfs/agroprojects/Millets-1.pdf',
      available: true
    },
    {
      id: 'Soya-Paneer-1-1',
      title: 'Soya-Paneer-1-1',
      path: '/brochures/mahasambhitclinetpdfs/agroprojects/Soya-Paneer-1-1.pdf',
      available: true
    },
    {
      id: 'VEGAN-RECIPES-2-1',
      title: 'VEGAN-RECIPES-2-1',
      path: '/brochures/mahasambhitclinetpdfs/agroprojects/VEGAN-RECIPES-2-1.pdf',
      available: true
    },
   
  ];

  // Media & Entertainment brochures
  const mediaEntertainmentBrochures = [
    {
      id: 'MEDIA-AND-ENTERTAINMENT-PROJECTS-1-1-2',
      title: 'MEDIA-AND-ENTERTAINMENT-PROJECTS-1-1-2',
      path: '/brochures/mahasambhitclinetpdfs/mediaand-enmtertaitment/MEDIA-AND-ENTERTAINMENT-PROJECTS-1-1-2.pdf',
      available: true
    },
   
  ];

  // Default brochures
  const defaultBrochures = [
    {
      id: 'dual-degree-professionals',
      title: 'Dual Degree for Highly Skilled Professionals',
      path: '/brochures/dual-degree-professionals.pdf',
      available: true
    },
    {
      id: 'finance-courses',
      title: 'Finance Courses Brochure',
      path: '#',
      available: false
    },
    {
      id: 'accounting-programs',
      title: 'Accounting Programs Brochure',
      path: '#',
      available: false
    },
    {
      id: 'banking-courses',
      title: 'Banking and Insurance Programs',
      path: '#',
      available: false
    },
    {
      id: 'phd-programs',
      title: 'PhD and Research Programs',
      path: '#',
      available: false
    }
  ];

  // Select which brochures to display based on category
  const getBrochuresByCategory = () => {
    switch (category) {
      case 'global-finance':
        return globalFinanceBrochures;
      case 'financial-services':
        return financialServicesBrochures;
      case 'money-research':
        return moneyResearchBrochures;
      case 'financial-research':
        return financialResearchBrochures;
      case 'business-consultancy':
        return businessConsultancyBrochures;
      case 'job-consultancy':
        return jobConsultancyBrochures;
      case 'agro-projects':
        return agroProjectsBrochures;
      case 'media-entertainment':
        return mediaEntertainmentBrochures;
      default:
        return defaultBrochures;
    }
  };

  const brochures = getBrochuresByCategory();

  const handleBrochureClick = (brochure: any) => {
    if (brochure.available) {
      setDownloadingTitle(brochure.title);
      
      // Create and trigger download
      const link = document.createElement('a');
      link.href = brochure.path;
      link.download = `${brochure.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message
      setShowSuccessMessage(true);

      // Hide success message after 2 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
        onClose();
      }, 2000);
    } else {
      // For unavailable brochures
      alert(`The ${brochure.title} will be available soon!`);
    }
  };

  if (!isOpen) return null;

  if (showSuccessMessage) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-4">{downloadingTitle} is downloading now.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-green-900">Download Brochure</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-3">
            {brochures.map((brochure) => (
              <div
                key={brochure.id}
                className={`p-3 border rounded-lg cursor-pointer flex items-center ${
                  brochure.available
                    ? 'border-gray-200 hover:bg-gray-50'
                    : 'border-gray-200 opacity-75'
                }`}
                onClick={() => handleBrochureClick(brochure)}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-500">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="font-medium text-gray-800">{brochure.title}</p>
                  <p className="text-sm text-gray-500">
                    {!brochure.available && <span className="text-green-500">Coming Soon</span>}
                    {brochure.available && <span className="text-green-500">Available</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;