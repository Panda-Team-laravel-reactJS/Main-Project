import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
const InforContact = () => {
    return (
      <><div className="container-infor-contact">
        <h1> May Spa</h1>
        <br />
        <h2> THÔNG TIN LIÊN HỆ</h2>

          <div className="infor-contact">
              <div id="info-box">
                <h2>ĐỊA CHỈ</h2>
                <FaLocationArrow className='icons-contact'/>
                <h3>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</h3>
              </div>

              <div id="info-box">
                <h2> ĐIỆN THOẠI </h2>
                <FaPhoneAlt className='icons-contact'/>
                <h3> 1900 636 648</h3>
                <h4>(Bấm 109 – Phòng kinh doanh</h4>
                <h4>Bấm 103 – Phòng kỹ thuật)</h4>

              </div>

              <div id="info-box">
                <h2>EMAIL</h2>
                <FaEnvelope className='icons-contact'/>
                <h3> demonhunterg@gmail.com</h3>
                <h4>mon@mona.media</h4>
              </div>
        </div>
        </div></>
    );
  };
  export default InforContact;