import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import { bgWave } from "./assets/images";
import Sponsor from "./components/Sponsor";
import Service from "./sections/Service";

function App() {
  return (
    <main>
      <section className="bg-none lg:bg-[#FFF2E1] lg:h-[700px]">
        <Nav />
        <Hero />
        <div className="hidden lg:block z-10 lg:translate-y-[-140px] xl:translate-y-[-210px]">
          <img src={bgWave} alt="" />
        </div>
      </section>
      <Sponsor />
      <Service />
      <div className="h-[4000px]"></div>
    </main>
  );
}

export default App;
