import FAQs from "../../components/FAQs";

import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Testimonials from "../../components/Testimonials";
import Values from "../../components/Values";
import Banner from "../../components/Banner";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </div>
  );
};

export default Home;
