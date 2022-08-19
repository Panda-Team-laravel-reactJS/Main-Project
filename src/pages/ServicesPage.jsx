import axios from "axios";
import { useEffect, useState } from "react";
import { ServiceCategory } from "../components/services";
import { CATEGORIES_API_URL, CONFIG_CORS } from "../utils/constants";

const ServicesPage = () => {
  const [cateList, setCateList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(CATEGORIES_API_URL, CONFIG_CORS);
      setCateList(res.data.data);
    };
    getData();
  }, []);

  return cateList.map((cate) => (
    <ServiceCategory
      key={cate.id}
      img={cate.image}
      name={cate.name}
      list={cate.serviceList.data}
    />
  ));
};
export default ServicesPage;
