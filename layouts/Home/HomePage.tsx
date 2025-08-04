import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import Appointment from "./Appointment";
// import Contact from "./Contact";
import Courses from "./Courses";
import Features from "./Features";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import ScrollSection from "@/components/ScrollSection";

const HomePage = () => {
  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="hero">
        <ScrollSection>
          <Hero />
        </ScrollSection>
      </section>

      <section id="featues">
        <ScrollSection>
          <Features />
        </ScrollSection>
      </section>

      <section id="courses">
        <ScrollSection>
          <Courses />
        </ScrollSection>
      </section>

      <section id="appointment">
        <ScrollSection>
          <Appointment />
        </ScrollSection>
      </section>

      <section id="testimonials">
        <ScrollSection>
          <Testimonials />
        </ScrollSection>
      </section>

      {/* <section id="contact">
        <ScrollSection>
          <Contact />
        </ScrollSection>
      </section> */}

      <section id="footer">
        <ScrollSection>
          <Footer />
        </ScrollSection>
      </section>
    </>
  );
};

export default HomePage;
