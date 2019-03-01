import * as types from "../../shared/constants/ActionTypes";
import axios from "axios";

// api fetch status
export const is_fetching = () => ({
  type: types.IS_FETCHING
});

// sending datas to store
export const received_data = products => ({
  type: types.RECEIVED_DATA,
  products: products
});

// fetch the datas
export const fetchProducts = () => {
  return dispatch => {
    // declare a api fetch in progress
    dispatch(is_fetching());
    // fetching datas
    return axios
      .get("http://localhost:3001/products")
      .then(response => {
        // console.log(response.data);
        dispatch(received_data(response.data));
      })
      .catch(err => {
        // Do something for an error here
        console.log(err);
      });
  };
};
