import React, { lazy } from "react";
import webBanner from "../assets/images/web-banner-landing.jpg";
import appBanner from "../assets/images/app-banner-landing.jpg";
import SubHeading from "../components/SubHeading";
import { appDevelopmentServices, webDevelopmentServices } from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/landingpage/app-dev-about.jpg";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.jpg";
import SEO from "../components/SEO";
import LeadForm from "../components/LeadForm";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  const isWebLanding = Boolean(page === "web-development");
  let services, banner;
  if (page === "web-development") {
    banner = webBanner;
    services = webDevelopmentServices;
  } else {
    banner = appBanner;
    services = appDevelopmentServices;
  }

  // Dynamic SEO data based on page type
  const getSEOData = () => {
    if (page === "web-development") {
      return {
        title:
          "Web Development Services - High-Impact Websites That Drive Results",
        description:
          "Cutting-Edge Web Solutions Built on Trust – Empowering Your Digital Growth. Custom websites, e-commerce platforms, and web applications tailored to your business needs.",
        keywords:
          "web development, custom websites, e-commerce websites, web applications, responsive design, SEO-friendly websites, landing pages",
        canonical: "/web-development",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Web Development Services",
          description:
            "Custom websites, e-commerce platforms, and web applications tailored to business needs",
          provider: {
            "@type": "Organization",
            name: "Advance Data Hub",
            url: "https://www.advancedatahub.com",
          },
          serviceType: "Web Development",
          areaServed: "Worldwide",
        },
      };
    } else {
      return {
        title: "App Development Services - Forward-Thinking Mobile Solutions",
        description:
          "Intelligent App Solutions with Strong Ethical Foundations – Innovating with Purpose. iOS, Android, and cross-platform mobile app development services.",
        keywords:
          "app development, mobile apps, iOS development, Android development, Flutter apps, hybrid apps, custom mobile applications",
        canonical: "/app-development",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "App Development Services",
          description:
            "iOS, Android, and cross-platform mobile app development services",
          provider: {
            "@type": "Organization",
            name: "Advance Data Hub",
            url: "https://www.advancedatahub.com",
          },
          serviceType: "App Development",
          areaServed: "Worldwide",
        },
      };
    }
  };

  const seoData = getSEOData();

  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />
      <LandingHeader />
      <section id="banner" className="h-screen relative text-primary_text">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background via-[#ffffffb5] to-background"></div>
        <img
          loading="lazy"
          src={banner}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          className="w-full h-full absolute -z-10 object-cover object-top"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
        >
          <p className="sub-heading">
            Welcome to{" "}
            <span className="text-primary font-semibold block sm:inline">
              Advance Data Hub
            </span>
          </p>
          <h1 className="heading text-transparent bg-gradient-to-r from-[#91851e] to-primary bg-clip-text">
            {isWebLanding
              ? "Creating High-Impact Websites That Drive Results"
              : "Forward-Thinking App Development Solutions That Accelerate Your Business"}
          </h1>
          <p className="sub-heading">
            {isWebLanding
              ? "Cutting-Edge Web Solutions Built on Trust – Empowering Your Digital Growth"
              : "Intelligent App Solutions with Strong Ethical Foundations – Innovating with Purpose"}
          </p>
        </div>
      </section>
      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={isWebLanding ? webDevAboutImg : appDevAboutImg}
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={isWebLanding ? "Web Development" : "App Development"}
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={isWebLanding ? webDevAboutImg : appDevAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                {isWebLanding
                  ? "Cutting-Edge Web Development Solutions for Progressive Brands"
                  : "Transforming Your Ideas into Seamless, High-Impact Apps"}
              </h2>
              <p className="desc">
                {isWebLanding
                  ? "Your website is more than just a digital presence—it's your brand’s identity. We craft websites that captivate, convert, and perform flawlessly. From sleek designs to responsive functionality, we deliver websites that not only look stunning but also achieve exceptional results. Whether it’s e-commerce or custom web applications, we build sites that reflect your brand and drive your business forward."
                  : "In a world powered by apps, we create those that make an impact. Whether native or cross-platform, we design apps tailored to your specific needs. Combining advanced technology with intuitive design, our apps offer smooth, reliable, and feature-rich experiences. Your app shouldn’t just exist—it should stand out. We craft mobile applications with sleek designs and powerful functionality, ensuring flawless performance across platforms and an exceptional user experience."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-7">
        <LeadForm />
      </div>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isWebLanding
              ? "Web Development Services"
              : "App Development Services"
          }
        />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          {isWebLanding
            ? "Empowering Brands with Captivating Web Experiences"
            : "Revolutionizing Brands with Cutting-Edge App Solutions"}
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              className="bg-primary/5 shadow-inner shadow-primary/30 items-center rounded-lg p-5 flex text-center flex-col"
            >
              <service.icon className="w-[5rem] h-[5rem] fill-primary" />
              <h6 className="text-xl font-medium mt-4">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <Portfolio page={page} />
      <WhyChooseUs />
      <ConnectWithUs />
      <Testimonials />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
