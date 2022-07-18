import "../../assets/scss/Service.scss";

import $ from "jquery";

const Services = () => {
  return (
    <div className="container">
      <div className="left-content">
        <h1>Spa May</h1>
        <h5>Bảng giá dịch vụ </h5>
        <div className="combo">
          <img
            src="http://mauweb.monamedia.net/helenspa/wp-content/uploads/2019/07/Procedure-11-150x150.jpg"
            alt=""
          />
          <p>
            Hot Stone Massage <br />
            20 phút Phục hồi da mặt
          </p>
          <p>$30.00</p>
        </div>
        <br />
        <div className="combo">
          <img
            src="http://mauweb.monamedia.net/helenspa/wp-content/uploads/2019/07/Procedure-11-150x150.jpg"
            alt=""
          />
          <p>
            Hot Stone Massage <br />
            20 phút Phục hồi da mặt
          </p>
          <p>$30.00</p>
        </div>
        <br />
        <div className="combo">
          <img
            src="http://mauweb.monamedia.net/helenspa/wp-content/uploads/2019/07/Procedure-11-150x150.jpg"
            alt=""
          />
          <p>
            Hot Stone Massage <br />
            20 phút Phục hồi da mặt
          </p>
          <p>$30.00</p>
        </div>
      </div>
      <div className="right-content">
        <div className="cont">
          <h1>Spa May</h1>
          <h1>Hãy để chúng tôi phục vụ bạn</h1>
          <button className="btn">Đặt dịch vụ </button>
        </div>
      </div>
    </div>
  );
};
export default Services;
