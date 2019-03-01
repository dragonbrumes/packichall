import * as types from "../../shared/constants/ActionTypes";
import axios from "axios";

// api fetch status
export const isFetchingProducts = () => ({
  type: types.IS_FETCHING_PRODUCTS
});

// sending products data to store
export const receivedProducts = products => ({
  type: types.RECEIVED_PRODUCTS,
  products: products
});

// fetch the datas
export const fetchAllProducts = () => {
  return dispatch => {
    // declare a api fetch in progress
    dispatch(isFetchingProducts());
    // fetching datas
    return axios
      .get("http://localhost:3001/products")
      .then(response => {
        // console.log(response.data);
        dispatch(receivedProducts(response.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// add a brief to store
export const addNewBrief = values => ({
  type: types.ADD_BRIEF,
  briefValues: values
});

export const addBrief = values => {
  return (dispatch, getState) => {
    // make new id
    let newId = getState().briefsList.briefs.slice(-1)[0].id + 1;

    // store new datas to API
    return axios
      .post("http://localhost:3001/briefs", {
        id: newId,
        title: values.title,
        comment: values.comment,
        productId: parseInt(values.productId)
      })
      .then(response => {
        // find the product name by his id
        const findProductName = id => {
          let product = getState().briefForm.products.find(
            element => element.id === id
          );
          return product.name;
        };
        const results = {
          id: response.data.id,
          title: response.data.title,
          productName: findProductName(response.data.productId),
          comment: response.data.comment
        };
        // dispatch new brief to local store
        dispatch(addNewBrief(results));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
