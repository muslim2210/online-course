import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import { bgWave } from "./assets/images";
import Sponsor from "./components/Sponsor";
import Service from "./sections/Service";
import About from "./sections/About";
import Classroom from "./sections/Classroom";
import Features from "./sections/Features";
import Teachers from "./sections/Teachers";
import Assesments from "./sections/Assesments";
import Gradebook from "./sections/Gradebook";
import Discussions from "./sections/Discussions";
import ButtonFeaturesSection from "./sections/ButtonFeaturesSection";
import Intregations from "./sections/Intregations";
import Testimonial from "./sections/Testimonial";
import Blog from "./sections/Blog";
import Footer from "./sections/Footer";

function App() {
  return (
    <main>
      <section className="bg-none lg:bg-[#FFF2E1] lg:h-[700px]">
        <Nav />
        <Hero />
        <div className="hidden lg:block z-10 lg:translate-y-[-200px] 2xl:translate-y-[-240px]">
          <img src={bgWave} alt="" />
        </div>
      </section>
      <Sponsor />
      <Service />
      <About />
      <Classroom />
      <Features />
      <Teachers />
      <Assesments />
      <Gradebook />
      <Discussions />
      <ButtonFeaturesSection />
      <Intregations />
      <Testimonial />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
