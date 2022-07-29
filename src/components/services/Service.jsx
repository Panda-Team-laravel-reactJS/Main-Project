const Service = ({ service }) => {
    return (
      <div className="service">
        <div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>{service.price}</p>
        </div>
        <div className="service-btn">
          <button className="btn-book-now">Book Now</button>
        </div>
      </div>
    );
  };
  export default Service;