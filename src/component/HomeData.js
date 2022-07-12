import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/action/fetchData";
import { useEffect } from "react";

const HomeData = () => {
  const data = useSelector((state) => state?.products?.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());

    console.log("data IS HERE", data);
  }, [dispatch]);

  return (
    <div>
      learn React
      <div>
        {" "}
        about Description ={" "}
        {data ? data?.about?.about_descriptions : "  commingSoon"}
      </div>
    </div>
  );
};

export default HomeData;
