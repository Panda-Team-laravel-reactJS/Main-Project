// import "../../assets/scss/_services.scss";
// import Service from "./Service";
// const ServiceCategory = ({ img, name }) => {
//   return (
//     <div className="service-category">
//       <div className="title">
//         <h1>{name}</h1>
//       </div>
//       <div className="category-content">
//         <div className="services-container">
//           <Service service={{price: 100, name: "Combo", detail: "Gói này hỗ trợ phần trăm khá là nhỏ"}} />
//           <Service service={{price: 100, name: "Combo", detail: "Gói này hỗ trợ phần trăm khá là nhỏ"}} />
//           <Service service={{price: 100, name: "Combo", detail: "Gói này hỗ trợ phần trăm khá là nhỏ"}} />
//           <Service service={{price: 100, name: "Combo", detail: "Gói này hỗ trợ phần trăm khá là nhỏ"}} />
//         </div>
//         <img src={img} alt="" />
//       </div>
//     </div>
//   );
// };

// export default ServiceCategory;

import React from 'react'
import "../../assets/scss/_services.scss";
import product_card from "../data/product_data";

const MainContent =() =>{
    console.log(product_card);
    const listItems = product_card.map((item) =>
     <div className="card" key ={item.id}>
        <div className="card_img">
            <img src={item.thumb} /> 
        </div>
        <div className="card_header">
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
            <p className="price"> {item.price}<span>{item.current}</span></p>
            <div className="btn">Đặt ngay</div>
        </div>
    </div>

);
return (
    <><div className="Title_category">
        <h1>ComBo</h1>
    </div>
        <div className="main_content">
        {/* <h1> Combo</h1> */}
        {/* <h3> May spa</h3> */}
        {listItems}
    </div></>
       
    )
}

export default MainContent;
  

