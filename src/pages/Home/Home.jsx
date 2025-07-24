import Services from "../Services/Services";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import AboutUs from "../About/AboutUs";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import React, { Suspense, Loader }  from 'react';;
export default function Home() {
  const Hero = React.lazy(() => import('./components/Hero/Hero'));


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero id="home" />
      </Suspense>
      <Services id="services" />
      <WhyChooseUs />
      <Faq id="faq" />
      <AboutUs id="aboutus" />
      <Contact id="contact" />
    </>
  );
}