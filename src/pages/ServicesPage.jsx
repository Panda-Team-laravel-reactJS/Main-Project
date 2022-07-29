import axios from "axios";
import { useEffect, useState } from "react";
import { ServiceCategory } from "../components/services";
import { BASE_API_URL, CATEGORIES } from "../utils/constants";

const ServicesPage = () => {
  const [cateList, setCateList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(BASE_API_URL + CATEGORIES);
      setCateList(res.data.data);
    };
    getData();
  }, []);

  return cateList.map((cate) => (
    <ServiceCategory
      key={cate.id}
      img="https://cdn.diemnhangroup.com/seoulacademy/spa-co-nhung-dich-vu-gi-1.jpg"
      name={cate.name}
      list={cate.serviceList.data}
    />
  ));
};
export default ServicesPage;
