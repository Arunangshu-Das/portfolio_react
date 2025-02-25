import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/container/About/About";
import Contact from "./components/container/Contact/Contact";
import Footer from "./components/container/Footer/Footer";
import Home from "./components/container/Home/Home";
import Portfolio from "./components/container/Portfolio/Portfolio";
import Skills from "./components/container/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import NewsLetter from "./components/container/NewsLetter/NewsLetter";
import Particle from "./components/Particle";
import { Helmet } from "react-helmet";
import { initGA, logPageView } from "./analytics";
import { measurementID } from "./Data";

const App = () => {
  useEffect(() => {
    initGA(measurementID); // Replace with your Measurement ID
    logPageView();

    const handleContextMenu = (event) => {
      event.preventDefault();
      // Additional logic if needed
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const [pageTitle, setPageTitle] = useState("Dynamic Title");
  const [pageDescription, setPageDescription] = useState("Dynamic Description");

  useEffect(() => {
    // Fetch data or perform operations to set dynamic content
    setPageTitle("Arunangshu Das Portfollio");
    setPageDescription(
      "Meet Arunangshu Das: a versatile web developer, 5-star problem solver, and seasoned expert in machine learning, blockchain technology, and Spring Boot. With a rich portfolio spanning dynamic website creation, robust problem-solving skills, and a deep understanding of cutting-edge technologies, Arunangshu excels in delivering innovative solutions. His expertise extends across multiple domains, from crafting user-friendly websites to implementing complex machine learning algorithms and blockchain solutions. Explore how Arunangshu's experience and mastery can elevate your projects and bring innovative solutions to your technological challenges."
    );
    const keywords =
      "software developer, ML engineer, Spring developer, Full Stack web developer, Ml developer, Deep learning engineer, problem solving, 5 star coder, coder, React Developer, Web Development Expert, Machine Learning Solutions, Blockchain Technology Specialist, Spring Boot Development, Dynamic Website Creation, Robust Problem-solving Skills, Cutting-edge Technology Solutions, User-friendly Website Design, Complex Machine Learning Algorithms, Blockchain Implementation Services, Innovative Technological Solutions, computer engineer, computer scientist"; // Add relevant keywords
    document
      .querySelector('meta[name="keywords"]')
      .setAttribute("content", keywords);

    const personSchema = {
      "@context": "https://schema.org/",
      "@type": "Person",
      name: "Arunangshu Das",
      jobTitle: "Software Developer",
      url: "https://arunangshudas.com/",
      // Add more properties as needed
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(personSchema);
    document.head.appendChild(script);
  }, []);


const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I find blogs on software development and AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you're looking for practical insights on software development, AI, and industry trends, check out my blog at <a href='https://blog.arunangshudas.com/'>blog.arunangshudas.com</a>. I write about real-world challenges, coding strategies, and things that actually matter to developers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you write in-depth technical articles beyond just blogs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! If you’re looks into technical content that breaks down complex topics in a way that makes sense, head over to <a href='https://article.arunangshudas.com/'>article.arunangshudas.com</a>. It’s where I go beyond the basics and explore software architecture, cloud computing, AI, and more."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reach out to Arunangshu Das for a question or collaboration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you have a question, an idea, or just want to chat, feel free to reach out via my contact page: <a href='https://contact.arunangshudas.com/'>contact.arunangshudas.com</a>. Always happy to connect!"
        }
      },
      {
        "@type": "Question",
        "name": "Do you have a newsletter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! I send out a newsletter packed with insights, practical coding tips, and industry trends before they go public. If you’d like to get early access, subscribe at <a href='https://newsletter.arunangshudas.com/'>newsletter.arunangshudas.com</a>. No spam, just useful content!"
        }
      },
      {
        "@type": "Question",
        "name": "Who is Arunangshu Das and what do you do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I’m a software developer who writes about adaptive software development, AI, cloud computing, and tech for businesses. I love sharing knowledge through my blogs and articles. If you’d like to know more about my journey, visit <a href='https://www.arunangshudas.com/#about'>arunangshudas.com</a>."
        }
      }
    ]
  };

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
        <title>Arunangshu Das</title>
        <meta name="description" content="Arunangshu Das" />
        <link rel="canonical" href="https://arunangshudas.com/index.html" />
        <meta
          name="keywords"
          content="Arunangshu Das, Web Development, Problem Solver, Machine Learning Engineer, Blockchain Expert, Spring Boot, Experienced Developer, 5-star Problem Solver, Front-end Development, Back-end Development, TensorFlow, Blockchain Technology, DApp Development, Java Development, Software Engineer,React Developer, Web Development Expert, Machine Learning Solutions, Blockchain Technology Specialist, Spring Boot Development, Dynamic Website Creation, Robust Problem-solving Skills, Cutting-edge Technology Solutions, User-friendly Website Design, Complex Machine Learning Algorithms, Blockchain Implementation Services, Innovative Technological Solutions, computer engineer, computer scientist"
        />
        <meta property="og:title" content="Arunangshu Das" />
        <meta
          property="og:description"
          content="Arunangshu Das, Web Developer, Problem Solver, ML Engineer, Blockchain Expert, Spring Boot Expert | Experienced in crafting innovative solutions across multiple domains."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpmu1oy8z/image/upload/v1703174710/WhatsApp_Image_2023-12-21_at_21.34.33_c918fb25_efhxqa.jpg"
        />
        <meta property="og:url" content="https://arunangshudas.com/" />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="Arunangshu Das | LinkedIn Profile" />
        <meta
          property="og:description"
          content="Arunangshu Das, Web Developer, Problem Solver, ML Engineer, Blockchain Expert, Spring Boot Expert | Check out Arunangshu Das's profile on LinkedIn."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpmu1oy8z/image/upload/v1703174710/WhatsApp_Image_2023-12-21_at_21.34.33_c918fb25_efhxqa.jpg"
        />
        <meta
          property="og:url"
          content="https://www.linkedin.com/in/arunangshu-das/"
        />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Arunangshu" />
        <meta property="profile:last_name" content="Das" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@real_arunangshu" />
        <meta name="twitter:title" content="Arunangshu" />
        <meta
          name="twitter:description"
          content="Arunangshu Das, Web Developer, Problem Solver, ML Engineer, Blockchain Expert, Spring Boot Expert | Experienced in crafting innovative solutions across multiple domains."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dpmu1oy8z/image/upload/v1703174710/WhatsApp_Image_2023-12-21_at_21.34.33_c918fb25_efhxqa.jpg"
        />
      </Helmet>
      <Particle />
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      <Contact />
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
};

export default App;
