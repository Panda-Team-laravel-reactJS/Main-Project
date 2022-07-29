import Service from "./Service";
const ServiceCategory = ({ img, name, list }) => {
  return (
    <div className="service-category">
      <div className="title">
        <h1>{name}</h1>
      </div>
      <div className="category-content">
        <div className="services-container">
          {list.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ServiceCategory;
