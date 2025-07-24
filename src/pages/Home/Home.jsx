import Hero from "./components/Hero/Hero";
import Services from "../Services/Services";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import AboutUs from "../About/AboutUs";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import React from "react";

export default function Home() {

  return (
    <React.Fragment>
      <Hero id="home" />
      <Services id="services" />
      <WhyChooseUs />
      <Faq id="faq"/>
      <AboutUs id="aboutus" />
      <Contact id="contact" />
    </React.Fragment>
  );
}