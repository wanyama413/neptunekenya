import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import CallToAction from "../CTA/CallToAction";
import Main from "../Main/Main";

import Stripe from "../Stripe/Stripe";
import About from "../About/About";
import Slider from "../Slider/Slider";
import Branches from "../Branches/Branches";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import Call from "../Call/Call";
const SharedLayout = () => {
  return (
    <div className="wrapper">
      <CallToAction />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
