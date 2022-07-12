import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./action";

export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("https://prayuj.bytechcare.com/api/homepage")
      .then((response) => {
        console.log("response", response?.data);
        dispatch(fetchDataSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
}
