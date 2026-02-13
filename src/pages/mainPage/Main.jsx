import Hero from "./sections/hero/Hero";
import Values from "./sections/values/Values";
import Process from "./sections/process/Process";
import Phylosophy from "./sections/phylosophy/Phylosophy";
import Team from "./sections/team/Team";
import Stories from "./sections/stories/Stories";
import Contact from "./sections/contact/Contact";

export default function MainPage({ mode }) {
  return (
    <>
      <Hero mode={mode} />
      <Values mode={mode}/>
      <Process mode={mode} />
      <Phylosophy mode={mode}/>
      <Team mode={mode} />
      <Stories mode={mode} />
      <Contact mode={mode}/>
    </>
  );
}
