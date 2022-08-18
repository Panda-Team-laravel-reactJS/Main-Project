import { Link } from "react-router-dom";

const AllServices = () => {
  return (
    <div className="all-services-description">
      <div>Hãy cho bản thân bạn, và làm trẻ hoá làn tâm trí & tâm hồn của bạn</div>
      <hr />
      <p>Nơi thiên nhiên gặp hạnh phúc</p>
      <Link to="/Services">Khám phá tất cả dịch vụ</Link>
    </div>
  );
};
export default AllServices;
