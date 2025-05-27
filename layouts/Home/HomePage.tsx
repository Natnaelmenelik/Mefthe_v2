import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import Contact from "./Contact";
import Courses from "./Courses";
import Features from "./Features";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="hero">
        <Hero />
      </section>

      <section id="featues">
        <Features />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
