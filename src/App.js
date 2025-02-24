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

  return (
    <div>
      <Helmet>
        <title>Arunangshu Das</title>
        <meta name="description" content="Portfolio of Arunangshu Das" />
        <link rel="canonical" href="https://arunangshudas.com/index.html" />
        <meta
          name="keywords"
          content="Web Development, Problem Solver, Machine Learning Engineer, Blockchain Expert, Spring Boot, Experienced Developer, 5-star Problem Solver, Front-end Development, Back-end Development, TensorFlow, Blockchain Technology, DApp Development, Java Development, Software Engineer,React Developer, Web Development Expert, Machine Learning Solutions, Blockchain Technology Specialist, Spring Boot Development, Dynamic Website Creation, Robust Problem-solving Skills, Cutting-edge Technology Solutions, User-friendly Website Design, Complex Machine Learning Algorithms, Blockchain Implementation Services, Innovative Technological Solutions, computer engineer, computer scientist"
        />
        <meta property="og:title" content="Arunangshu" />
        <meta
          property="og:description"
          content="Web Developer, Problem Solver, ML Engineer, Blockchain Expert, Spring Boot Expert | Experienced in crafting innovative solutions across multiple domains."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpmu1oy8z/image/upload/v1703174710/WhatsApp_Image_2023-12-21_at_21.34.33_c918fb25_efhxqa.jpg"
        />
        <meta property="og:url" content="https://arunangshudas.com/" />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="Arunangshu | LinkedIn Profile" />
        <meta
          property="og:description"
          content="Web Developer, Problem Solver, ML Engineer, Blockchain Expert, Spring Boot Expert | Check out Arunangshu Das's profile on LinkedIn."
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
          content="Web Developer, Problem Solver, ML Engineer, Blockchain Expert, Spring Boot Expert | Experienced in crafting innovative solutions across multiple domains."
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
