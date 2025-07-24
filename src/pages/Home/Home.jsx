import { useTranslation } from 'react-i18next';
import { useMetaTags } from "../../services/useMetaTags";

import Hero from "./components/Hero/Hero";
import Services from "../Services/Services";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import AboutUs from "../About/AboutUs";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";

export default function Home() {

  return (
    <>
      <Hero id="home" />
      <Services id="services" />
      <WhyChooseUs />
      <Faq id="faq"/>
      <AboutUs id="aboutus" />
      <Contact id="contact" />
    </>
  );
}