import Header from "../litecomponents/Header";
import Footer from "../litecomponents/Footer";
import Banner from "../litecomponents/Banner";
import About from "./About";
import Glasses from "./Glasses";
import Shop from "./Shop";
import Client from "../litecomponents/Client";
import Contact from "./Contact";

export default function Homepage() {
  return (
    <div >
      <Header />
      <Banner />
      <About />
      <Glasses />
      <Shop />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
}
