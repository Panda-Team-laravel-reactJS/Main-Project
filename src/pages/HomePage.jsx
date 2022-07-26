import { AllServices, Banner, Outstanding, Reason, ServicesPrice } from "../components/home";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ServicesPrice />
      <Outstanding/>
      <AllServices/>
      <Reason/>
    </>
  );
};
export default HomePage;
