import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AllServices, Banner, BookingForm, Outstanding, Reason, ServicesPrice } from "../components/home";

const HomePage = () => {
  const location = useLocation()
  useEffect(() => {
    if (location.state) {
      document.getElementById(location.state.hash).scrollIntoView()
    }
  }, [location])
  return (
    <section className="home_section">
      <Banner />
      <ServicesPrice />
      <Outstanding/>
      <AllServices/>
      <Reason/>
      <BookingForm />
    </section>
  );
};
export default HomePage;
