import NumberHelper from "../../utils/NumberHelper";

const Service = ({ service }) => {
    return (
      <div className="service">
        <div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>{NumberHelper.formatWithComma(service.price)} VNĐ</p>
        </div>
        <div className="service-btn">
          <button className="btn-book-now">Đặt ngay</button>
        </div>
      </div>
    );
  };
  export default Service;