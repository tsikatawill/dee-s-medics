import WhySection from "./components/WhySection";
import Header from "./components/Header";
import UseSection from "./components/UseSection";
import ExpertSection from "./components/ExpertSection";
import NewsSection from "./components/NewsSection";
import TestimonialSection from "./components/TestimonialSection";
import NewsletterSection from "./components/NewsletterSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App bg-gray-100">
      <Navbar />
      <Header />
      <WhySection />
      <UseSection />
      <ExpertSection />
      <NewsSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default App;
