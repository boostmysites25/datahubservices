import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";

// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/AI Development.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as allServiceIcon5 } from "./assets/svgs/services/Data analytics.svg";
import { ReactComponent as allServiceIcon6 } from "./assets/svgs/services/NLP.svg";
import { ReactComponent as allServiceIcon7 } from "./assets/svgs/services/Blockchain.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

export { logoImg };

export const companyDetails = {
  phone: "+91-8630103782",
  address: "H.No-14, Bhairav Mandir Colony, Kankhal, Haridwar, Uttarakhand",
  email: "abc@xyz.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "#",
    name: "Blogs",
    element: "",
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webServiceIcon1,
    description:
      "Empowering your online business with custom e-commerce solutions. Our platforms enhance customer engagement, streamline processes, and fuel revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webServiceIcon2,
    description:
      "Create custom social media websites that captivate your audience, boost growth, and foster brand loyalty effortlessly.",
  },
  {
    id: 3,
    title: "Landing Pages",
    icon: webServiceIcon3,
    description:
      "Designing high-converting landing pages that capture attention and drive action. Tailored designs that amplify your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webServiceIcon4,
    description:
      "Delivering bespoke websites tailored to your unique business needs. Our solutions blend creativity with functionality for an exceptional online presence.",
  },
];

// app development
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appServiceIcon1,
    description:
      "Our expert developers use Swift and Objective-C to build powerful, efficient iOS apps. We optimize for performance, speed, and seamless user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appServiceIcon2,
    description:
      "We design and develop custom Android apps that align with your goals. Proficient in Java and Kotlin, we ensure high performance and reliability.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appServiceIcon3,
    description:
      "Build cross-platform apps for both iOS and Android with Flutter. We leverage smart strategies to tackle challenges and ensure smooth performance across devices.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appServiceIcon4,
    description:
      "Creating robust hybrid apps that offer a seamless experience across iOS and Android. Tailored to meet your business needs with rich features and mobile optimization.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah L",
    position: "CEO, FinTech Innovators",
    img: require("./assets/images/testimonial3.png"),
    desc: "“Collaborating with Data Hub Services was a pivotal moment for our company. They helped us develop a blockchain solution that significantly improved security and transparency in our operations. The team's deep understanding of blockchain technology, along with their collaborative approach, allowed them to build a solution that was not only innovative but also aligned perfectly with our business goals.”",
  },
  {
    id: 2,
    name: "David P",
    position: "Director of Operations, Global Logistics",
    img: require("./assets/images/testimonial1.png"),
    desc: "“We approached Data Hub Services for a blockchain solution that would streamline our processes. They delivered beyond expectations, providing us with a secure and scalable platform. The team’s technical knowledge, combined with their ability to translate our needs into a concrete solution, made this project a success.”",
  },
  {
    id: 3,
    name: "Emily T",
    position: "Marketing Manager, Retail Solutions",
    img: require("./assets/images/testimonial2.png"),
    desc: "“Our app was a crucial part of our business, and Data Hub Services did an outstanding job bringing our vision to life. From the initial concept to final launch, their team demonstrated exceptional expertise. The app is user-friendly, performs seamlessly, and has helped us engage with our customers like never before.”",
  },
  {
    id: 4,
    name: "Michael R",
    position: "Founder, HealthTech Innovations",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "“We needed an app that would serve both our business and our customers, and Data Hub Services exceeded our expectations. They created a beautiful and functional app, and the ongoing support has been invaluable in ensuring the app continues to meet our growing needs.”",
  },
  {
    id: 5,
    name: "Alexandra M",
    position: "COO, Data Solutions Co",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "“With the help of Data Hub Services, we successfully integrated machine learning to optimize our operations. They developed a model that continuously learns from new data, providing us with actionable insights that help streamline our processes and improve efficiency.”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We craft high-performance websites that deliver exceptional digital experiences tailored to your business needs.",
    icon: allServiceIcon1,
    detailHeading: "Web Development: Build Websites That Work for You",
    detailContent: `<p>Your website is often the first impression customers have of your business. At Data Hub Services, we specialize in creating custom websites that are not only visually stunning but also highly functional and scalable. Our web development services include:</p>
    <br/>
    <ol>
      <li><b>Custom Website Design:</b><br/>We design and develop websites that reflect your brand identity and align with your business goals.</li>
      <br/>
      <li><b>Performance Optimization:</b> <br/>We ensure your website loads quickly, performs seamlessly, and is optimized for all devices.</li>
      <br/>
      <li><b>Scalable Solutions:</b><br/>Our websites are built to grow with your business, handling increased traffic and evolving needs effortlessly.</li>
    </ol>
    <br/>
    <br/>
    <p>From e-commerce platforms to corporate websites, we deliver solutions that drive engagement and results.</p>`,
  },
  {
    id: 2,
    title: "App Development",
    description:
      "We create intuitive, feature-rich mobile apps that solve real-world problems and deliver exceptional user experiences.",
    icon: allServiceIcon2,
    detailHeading: "App Development: Mobile Solutions That Make an Impact",
    detailContent: `<p>In today’s mobile-driven world, having a powerful app is essential. At Data Hub Services, we develop custom mobile applications that are user-friendly, feature-packed, and designed to meet your specific goals. Our app development services include:</p>
      <br/>
      <ol>
        <li><b>Native App Development:</b><br/>We build high-performance apps for iOS and Android, ensuring a seamless user experience on both platforms.</li>
        <br/>
        <li><b>Cross-Platform Apps:</b> <br/>Save time and resources with apps that work flawlessly across multiple platforms, all from a single codebase.</li>
        <br/>
        <li><b>Custom Features:</b><br/>From push notifications to in-app purchases, we integrate the features your app needs to succeed.</li>
      </ol>
      <br/>
      <br/>
      <p>We don’t just build apps—we create solutions that empower your business and delight your users.</p>`,
  },
  {
    id: 3,
    title: "AI Development",
    description:
      "We design intelligent AI systems that automate tasks, enhance decision-making, and drive innovation across industries.",
    icon: allServiceIcon3,
    detailHeading: "AI Development: Smarter Solutions for a Smarter Future",
    detailContent: `<p>Artificial Intelligence is transforming the way businesses operate. At Data Hub Services, we develop cutting-edge AI solutions that help you automate processes, make data-driven decisions, and stay ahead of the competition. Our AI development services include:</p>
      <br/>
      <ol>
        <li><b>Custom AI Models:</b><br/>We build AI systems tailored to your unique needs, from chatbots to predictive analytics tools.</li>
        <br/>
        <li><b>Process Automation:</b> <br/>Streamline workflows and reduce manual effort with AI-powered automation solutions.</li>
        <br/>
        <li><b>AI Integration:</b><br/>Seamlessly integrate AI capabilities into your existing systems to enhance functionality and efficiency.</li>
      </ol>
      <br/>
      <br/>
      <p>Our AI solutions are designed to help you unlock new opportunities and achieve your business goals.</p>`,
  },
  {
    id: 4,
    title: "ML Services",
    description:
      "We build machine learning models that turn data into actionable insights, helping you make smarter decisions and drive growth.",
    icon: allServiceIcon4,
    detailHeading:
      "Machine Learning Services: Data-Driven Solutions for Success",
    detailContent: `<p>Machine Learning is the key to unlocking the full potential of your data. At Data Hub Services, we develop ML models that help you automate processes, predict trends, and deliver personalized experiences. Our ML services include:</p>
      <br/>
      <ol>
        <li><b>Predictive Analysis:</b><br/>Predictive analytics leverages historical data, machine learning, and statistical algorithms to forecast future outcomes. In real-time projects, it enables businesses to make instant decisions by analyzing live data streams. Industries like finance, healthcare, and e-commerce use predictive models for fraud detection, patient risk assessment, and dynamic pricing.</li>
        <br/>
        <li><b>Automation:</b> <br/>Automation in real-time projects integrates AI, machine learning, IoT, and cloud computing to streamline operations, reduce manual effort, and enhance decision-making. It works by continuously collecting data from sensors, APIs, or user interactions, processing it instantly using algorithms, and executing predefined actions based on insights.<br/><br/>
        For example:<br/>
        <ul class='list-disc pl-5'>
          <li>Manufacturing: IoT-enabled predictive maintenance prevents equipment failures.</li>
          <li>Finance: Automated fraud detection systems analyze transactions in real time.</li>
          <li>Healthcare: AI-driven monitoring alerts doctors to critical conditions.</li>
          <li>E-commerce: Personalized recommendations and dynamic pricing adjust instantly.</li>
        </ul>
        By leveraging automation, businesses improve efficiency, reduce costs, and enhance accuracy in real-time applications.</li>
        <br/>
        <li><b>Personalization:</b><br/>Leveraging Personalization in Real-Time Using AI<br/>
        AI-driven real-time personalization enhances user experience by analyzing data instantly and delivering customized content, recommendations, and interactions. Here’s how it works:<br/><br/>
        1. Real-Time Data Collection<br/>
        AI collects user behavior data from websites, apps, IoT devices, and transactions in real time.<br/>
        2. AI-Powered Analysis & Prediction<br/>
        Machine learning models analyze user preferences, browsing history, and past interactions to predict interests.<br/>
        3. Dynamic Content & Recommendations<br/>
        <ul class='list-disc pl-5'>
          <li>E-commerce: Personalized product suggestions based on browsing history.</li>
          <li>Streaming Platforms: AI suggests movies or songs based on past watch/listen history.</li>
          <li>Finance: Tailored investment strategies based on real-time market analysis.</li>
        </ul>
        4. Adaptive User Experience<br/>
        <ul class='list-disc pl-5'>
          <li>AI modifies app interfaces, promotions, or messages dynamically.</li>
          <li>Chatbots and virtual assistants provide personalized responses.</li>
        </ul>
        5. Continuous Learning & Optimization<br/>
        Reinforcement learning enables AI to adapt and refine personalization strategies over time.<br/>
        By leveraging AI in real-time personalization, businesses can enhance engagement, improve customer satisfaction, and boost conversions.</li>
      </ol>
      <br/>
      <br/>
      <p>Our machine learning solutions empower you to make data-driven decisions and stay ahead in a competitive market.</p>`,
  },
  {
    id: 5,
    title: "Data Science Services",
    description:
      "We transform raw data into actionable insights, helping you make informed decisions and achieve your business objectives.",
    icon: allServiceIcon5,
    detailHeading: "Data Science Services: Turning Data into Opportunities",
    detailContent: `<p>Data is one of your most valuable assets. At Data Hub Services, we help you unlock its potential with advanced data science solutions. Our services include:</p>
      <br/>
      <ol>
        <li><b>Data Analysis:</b><br/>We analyze your data to uncover trends, patterns, and opportunities that inform your strategy.</li>
        <br/>
        <li><b>Data Visualization:</b> <br/>Transform complex data into clear, actionable insights with intuitive visualizations.</li>
        <br/>
        <li><b>Predictive Modeling:</b><br/>Use advanced analytics to forecast outcomes and optimize decision-making.</li>
      </ol>
      <br/>
      <br/>
      <p>Our data science services empower you to harness the power of your data and achieve measurable results.</p>`,
  },
  {
    id: 6,
    title: "NLP",
    description:
      "We develop Natural Language Processing solutions that help you analyze and understand human language for better decision-making.",
    icon: allServiceIcon6,
    detailHeading: "NLP: Unlocking the Power of Language",
    detailContent: `<p>Natural Language Processing (NLP) enables businesses to analyze and interpret text and speech data. At Data Hub Services, we develop NLP solutions that help you gain valuable insights from language data. Our services include:</p>
      <br/>
      <ol>
        <li><b>Text Analysis:</b><br/>Extract meaningful insights from unstructured text data, such as customer feedback and social media posts.</li>
        <br/>
        <li><b>Chatbots and Virtual Assistants:</b> <br/>Build intelligent conversational agents that enhance customer support and engagement.</li>
        <br/>
        <li><b>Sentiment Analysis:</b><br/>Understand customer sentiment and improve satisfaction with real-time feedback analysis.</li>
      </ol>
      <br/>
      <br/>
      <p>Our NLP solutions help you turn language data into actionable insights and better customer experiences.</p>`,
  },
  {
    id: 7,
    title: "Blockchain Development",
    description:
      "We build secure, decentralized blockchain solutions that enhance transparency, security, and efficiency in your business.",
    icon: allServiceIcon7,
    detailHeading:
      "Blockchain Development: Trust, Transparency, and Innovation",
    detailContent: `<p>Blockchain technology is revolutionizing industries by providing secure, transparent, and decentralized solutions. At Data Hub Services, we develop blockchain solutions that help you build trust and streamline operations. Our services include:</p>
      <br/>
      <ol>
        <li><b>Smart Contracts:</b><br/>Automate and enforce agreements with self-executing contracts that eliminate intermediaries.</li>
        <br/>
        <li><b>Decentralized Applications (DApps):</b> <br/>Build secure, scalable applications that run on blockchain networks.</li>
        <br/>
        <li><b>Blockchain Integration:</b><br/>Enhance your existing systems with blockchain technology for improved security and transparency.</li>
      </ol>
      <br/>
      <br/>
      <p>Our blockchain solutions are designed to help you innovate and stay ahead in a rapidly evolving digital landscape.</p>`,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/website projects/5ghomes.webp"),
    title: "5g Homes",
  },
  {
    id: 2,
    img: require("./assets/images/website projects/bayut.webp"),
    title: "Bayut",
  },
  {
    id: 3,
    img: require("./assets/images/website projects/cold creekcap.webp"),
    title: "Cold Creekcap",
  },
  {
    id: 4,
    img: require("./assets/images/website projects/emergency music .webp"),
    title: "Emergency Music",
  },
  {
    id: 5,
    img: require("./assets/images/website projects/flatiorn.webp"),
    title: "Flatiorn",
  },
  {
    id: 6,
    img: require("./assets/images/website projects/maven.webp"),
    title: "Maven",
  },
  {
    id: 7,
    img: require("./assets/images/website projects/menissa caterings.webp"),
    title: "Menissa Caterings",
  },
  {
    id: 8,
    img: require("./assets/images/website projects/methodist.webp"),
    title: "Methodist",
  },
  {
    id: 9,
    img: require("./assets/images/website projects/think reality.webp"),
    title: "Think Reality",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app projects/dubai travel guide.webp"),
    title: "Dubai Travel Guide",
  },
  {
    id: 2,
    img: require("./assets/images/app projects/elora hair palour.webp"),
    title: "Elora Hair Palour",
  },
  {
    id: 3,
    img: require("./assets/images/app projects/evans francis.webp"),
    title: "Evans Francis",
  },
  {
    id: 4,
    img: require("./assets/images/app projects/house of deliverence.webp"),
    title: "House of Deliverance",
  },
  {
    id: 5,
    img: require("./assets/images/app projects/mybitsshop.webp"),
    title: "Mybits Shop",
  },
  {
    id: 6,
    img: require("./assets/images/app projects/namaz.webp"),
    title: "Namaz",
  },
  {
    id: 7,
    img: require("./assets/images/app projects/potea.webp"),
    title: "Potea",
  },
  {
    id: 8,
    img: require("./assets/images/app projects/rentop bike and car.webp"),
    title: "Rentop Bike and Car",
  },
];
