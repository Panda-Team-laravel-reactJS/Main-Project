import { AllServices, Banner, BookingForm, Outstanding, Reason, ServicesPrice } from "../components/home";

const HomePage = () => {
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
