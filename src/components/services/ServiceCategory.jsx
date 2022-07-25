import Service from "./Service";
const ServiceCategory = ({ img, name }) => {
  return (
    <div className="service-category">
      <div className="title">
        <h1>{name}</h1>
      </div>
      <div className="category-content">
        <div className="services-container">
            <Service service={{price: 100, name: "Combo", detail: "Gói này hỗ trợ phần trăm khá là nhỏ"}}  />
            <Service service={{price: 100, name: "Combo", detail: "Gói này hỗ trợ phần trăm khá là nhỏ"}}  />
            <Service service={{price: 100, name: "Combo", detail: "Gói này hỗ trợ phần trăm khá là nhỏ"}}  />
            <Service service={{price: 100, name: "Combo", detail: "Gói này hỗ trợ phần trăm khá là nhỏ"}}  />
            <Service service={{price: 100, name: "Combo", detail: "Gói này hỗ trợ phần trăm khá là nhỏ"}}  />
         
          
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ServiceCategory;