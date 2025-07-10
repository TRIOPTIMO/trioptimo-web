import { useTranslation } from 'react-i18next';
import { useMetaTags } from "../../services/useMetaTags";

import Hero from "./components/Hero/Hero";
import Services from "../Services/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "../About/AboutUs";
import Contact from "../Contact/Contact";

export default function Home() {
  const { t, i18n } = useTranslation('home');

  useMetaTags({
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.description"),
    lang: i18n.language,
  });

  return (
    <>
      <Hero id="home" />
      <Services id="services" />
      <AboutUs id="aboutu" />
      <WhyChooseUs />
      <Contact id="contact" />
    </>
  );
}