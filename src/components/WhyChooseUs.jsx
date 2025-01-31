import React from "react";
import bgImg from "../assets/images/bg-img.jpg";
import bannerImg from "../assets/images/banner.webp";
import { ReactComponent as icon1 } from "../assets/svgs/Affordable & Time Efficient.svg";
import { ReactComponent as icon5 } from "../assets/svgs/End-to-End Solutions.svg";
import { ReactComponent as icon8 } from "../assets/svgs/SEO-Friendly.svg";
import { ReactComponent as icon2 } from "../assets/svgs/Mobile-First, Responsive Design.svg";

const content = [
  {
    icon: icon5,
    title: "Custom Development",
    desc: "We build websites from the ground up, tailoring each project to your unique business needs, delivering a solution that's both distinctive and high-performing.",
  },
  {
    icon: icon2,
    title: "Mobile-First, Responsive Design",
    desc: "With the rise of mobile users, we create websites that offer a seamless experience across all devices—smartphones, tablets, and desktops alike.",
  },
  {
    icon: icon1,
    title: "Fast, Secure, and Scalable",
    desc: "Performance and security are at the heart of our development. We ensure quick load times, robust data protection, and scalable websites that grow with your business.",
  },
  {
    icon: icon8,
    title: "SEO Optimized",
    desc: "Our websites are built with SEO in mind—clean code and strategic optimization to help you rank higher and attract a broader audience from day one.",
  },
];

const WhyChooseUs = () => {
  return (
    <div
      className="py-[5rem] relative bg-center bg-cover min-h-[50vh]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 w-full h-full bg-background/80"></div>
      <div data-aos="fade-up" className="max-w-7xl mx-auto">
        <div
          className="mx-5 rounded-xl overflow-hidden bg-center bg-cover relative"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="absolute top-0 w-full h-full bg-primary/5"></div>
          <div className="py-[3rem] px-5 bg-white/10 rounded-xl backdrop-blur-sm text-primary_text relative z-10">
            <h1
              data-aos="fade-up"
              className="heading-2_1 max-w-[60rem] mx-auto text-center"
            >
              Why Work With Us?
            </h1>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10"
            >
              {content.map((item, index) => (
                <div
                  key={index}
                  className="flex shadow-inner shadow-primary/40 flex-col group items-center gap-1 bg-background/70 rounded-xl p-5 transition-all duration-200"
                >
                  <item.icon className="w-[4.5rem] fill-primary h-[4.5rem] transition-all duration-200" />
                  <p className="text-center text-xl mt-2 font-semibold text-primary">
                    {item.title}
                  </p>
                  <p className="text-center leading-tight mt-2 desc">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
