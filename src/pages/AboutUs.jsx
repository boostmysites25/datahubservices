import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
import SEO from "../components/SEO";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Advance Data Hub",
    "description": "Bringing Your Vision to Life with Technology. Expert team of developers, designers, and strategists transforming digital ideas into dynamic online presence.",
    "url": "https://www.advancedatahub.com/about-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "Advance Data Hub",
      "description": "We bring your digital ideas to life with expert development, design, and strategy services.",
      "url": "https://www.advancedatahub.com",
      "logo": "https://www.advancedatahub.com/logo.png",
      "foundingDate": "2023",
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
        title="About Us - Bringing Your Vision to Life with Technology"
        description="At Advance Data Hub, we bring your digital ideas to life. Expert team of developers, designers, and strategists transforming your vision into dynamic online presence."
        keywords="about us, digital transformation, custom development, web design, app development, IT services, software development company"
        canonical="/about-us"
        structuredData={aboutStructuredData}
      />
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-primary_text wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Bringing Your Vision to Life with Technology
              </h2>
              <p className="desc">
                At{" "}
                <span className="font-semibold text-primary">
                  Advance Data Hub
                </span>
                , we bring your digital ideas to life. Whether you're a thriving
                startup or a well-established enterprise, our expert team of
                developers, designers, and strategists is here to transform your
                vision into a dynamic and impactful online presence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <TrustWorthySection />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
