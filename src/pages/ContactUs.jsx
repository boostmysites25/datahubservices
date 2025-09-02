import React, { lazy } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { companyDetails } from "../constant";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
const WebsiteHeader = lazy(() => import("../components/website/WebsiteHeader"));
const PageBanner = lazy(() => import("../components/website/PageBanner"));
const WebsiteFooter = lazy(() => import("../components/website/WebsiteFooter"));
const LeadForm = lazy(() => import("../components/LeadForm"));

const MapComponent = lazy(() => import("../components/website/MapComponent"));

const ContactUs = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Advance Data Hub",
    "description": "Get in touch with our expert team for AI development, web development, app development, and other IT services. We're here to bring your digital vision to life.",
    "url": "https://www.advancedatahub.com/contact-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "Advance Data Hub",
      "url": "https://www.advancedatahub.com",
      "logo": "https://www.advancedatahub.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8630103782",
        "contactType": "customer service",
        "email": "advancedatahub@gmail.com",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "H.No-14, Bhairav Mandir Colony, Kankhal",
        "addressLocality": "Haridwar",
        "addressRegion": "Uttarakhand",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us - Get in Touch with Our Expert Team"
        description="Get in touch with our expert team for AI development, web development, app development, and other IT services. We're here to bring your digital vision to life."
        keywords="contact us, IT services, AI development, web development, app development, software development, consultation, support"
        canonical="/contact-us"
        structuredData={contactStructuredData}
      />
      <WebsiteHeader />
      <PageBanner title="Contact Us" />
      <div className="pt-[3rem]">
        <div className="wrapper">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mb-[3rem]">
            <div
              data-aos="fade-up"
              className="bg-primary/5 flex flex-col gap-3 text-primary items-center justify-center rounded-xl p-5"
            >
              <MapPin
                strokeWidth={2}
                size={40}
                className="text-primary inline min-w-5"
              />
              <span className="text-center font-medium">
                {companyDetails.address}
              </span>
            </div>
            <Link
              to={`mailto:${companyDetails.email}`}
              data-aos="fade-up"
              className="bg-primary/5 flex flex-col gap-3 text-primary items-center justify-center rounded-xl p-5"
            >
              <Mail strokeWidth={2} size={40} className="inline" />
              <span className="text-center font-medium">
                {companyDetails.email}
              </span>
            </Link>
            <Link
              to={`tel:${companyDetails.phone}`}
              data-aos="fade-up"
              className="bg-primary/5 flex flex-col gap-3 text-primary items-center justify-center rounded-xl p-5"
            >
              <Phone strokeWidth={2} size={40} className="inline" />
              <span className="text-center font-medium">
                {companyDetails.phone}
              </span>
            </Link>
          </div>
        </div>
        <LeadForm />
      </div>
      <div className="relative">
        <div
          // data-aos="fade-up"
          className="p-7 flex gap-2 bg-white absolute rounded-t-xl sm:rounded-t-none sm:rounded-b-xl right-1 sm:right-[1rem] bottom-0 sm:bottom-auto sm:top-0 z-10 text-primary_text min-w-[22rem] max-w-[22rem]"
        >
          <MapPin strokeWidth={1.5} size={20} className="inline min-w-5 mt-1" />{" "}
          <span className="">{companyDetails.address}</span>
        </div>
        <MapComponent />
      </div>
      <WebsiteFooter />
    </>
  );
};

export default ContactUs;
