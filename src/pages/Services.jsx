import React from "react";
import SEO from "../components/SEO";
const WebsiteHeader = React.lazy(() => import("../components/website/WebsiteHeader"));
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));
const AllServices = React.lazy(() => import("../components/website/AllServices"));
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() => import("../components/JoinHappyCustomers"));
const WebsiteFooter = React.lazy(() => import("../components/website/WebsiteFooter"));

const Services = () => {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Advance Data Hub Services",
    "description": "Comprehensive IT services including AI development, web development, app development, data science, machine learning, NLP, and blockchain solutions.",
    "url": "https://www.advancedatahub.com/services",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Web Development",
        "description": "Custom websites and web applications tailored to business needs"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "App Development",
        "name": "Mobile app development for iOS, Android, and cross-platform solutions"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "AI Development",
        "description": "Custom AI systems and intelligent automation solutions"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Machine Learning Services",
        "description": "ML models for predictive analysis and data insights"
      },
      {
        "@type": "Service",
        "position": 5,
        "name": "Data Science Services",
        "description": "Data analysis, visualization, and predictive modeling"
      },
      {
        "@type": "Service",
        "position": 6,
        "name": "NLP Services",
        "description": "Natural Language Processing solutions and chatbots"
      },
      {
        "@type": "Service",
        "position": 7,
        "name": "Blockchain Development",
        "description": "Secure blockchain solutions and smart contracts"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Our Services - AI, Web & App Development Solutions"
        description="Comprehensive IT services including AI development, web development, app development, data science, machine learning, NLP, and blockchain solutions. Custom software development tailored to your business needs."
        keywords="IT services, AI development, web development, app development, data science, machine learning, blockchain, NLP, custom software, mobile apps, e-commerce, data analytics"
        canonical="/services"
        structuredData={servicesStructuredData}
      />
      <WebsiteHeader />
      <PageBanner
        title="Our Services"
      />
      <AllServices />
      <OurValue />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <WebsiteFooter />
    </>
  );
};

export default Services;
