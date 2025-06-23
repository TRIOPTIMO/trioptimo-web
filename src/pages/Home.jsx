import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Statitics from '../components/Statitics';
import { useTranslation } from 'react-i18next';
import { useMetaTags } from "../services/useMetaTags";

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
      <Hero />
      <Statitics />
      <Services />
      <WhyChooseUs />
    </>
  );
}