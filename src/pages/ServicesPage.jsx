// // import "../../assets/scss/_ServicesPage.scss"
// import { ServiceCategory } from "../components/services"
// // import "../../assets/scss/_example.scss"

// const ServicesPage = () => {
//     return (
//         <ServiceCategory img="https://cdn.diemnhangroup.com/seoulacademy/spa-co-nhung-dich-vu-gi-1.jpg" name="Combo 1"   />
//     )
// }
// export default ServicesPage

import React from 'react';
import "../../assets/scss/_services.scss";
import MainContent from './components/services/Category';


function ServicesPage() {
  return (
     <div className="container">
      
      <MainContent/>
      
     </div>
  );
}

export default ServicesPage;
