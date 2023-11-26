import Main from "./components/Main/Main";
import Stripe from "./components/Stripe/Stripe";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import Call from "./components/Call/Call";
import Branches from "./components/Branches/Branches";
import ContactForm from "./components/ContactForm/ContactForm";

const All = () => {
  return (
    <>
      <Main />
      <Stripe title="WHO WE ARE" />
      <About />
      <Stripe title="WHAT WE OFFER YOU" />
      <Slider />
      <Call />
      <Branches />
      <ContactForm />
    </>
  );
};

export default All;
