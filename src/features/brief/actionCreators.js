import * as types from "../../shared/constants/ActionTypes";
import axios from "axios";

// api fetch status
export const isFetching = () => ({
  type: types.IS_FETCHING
});

// sending products data to store
export const receivedProducts = products => ({
  type: types.RECEIVED_PRODUCTS,
  products: products
});
// sending briefs data to store
export const receivedBriefs = briefs => ({
  type: types.RECEIVED_BRIEFS,
  briefs: briefs
});

// fetch the datas
export const fetchAllProducts = () => {
  return dispatch => {
    // declare a api fetch in progress
    dispatch(isFetching());
    // fetching datas
    return axios
      .get("http://localhost:3001/products")
      .then(response => {
        // console.log(response.data);
        dispatch(receivedProducts(response.data));
      })
      .catch(err => {
        // Do something for an error here
        console.log(err);
      });
  };
};

// fetch the briefs
export const fetchAllBriefs = () => {
  return dispatch => {
    // declare a api fetch in progress
    dispatch(isFetching());
    // fetching datas
    return axios
      .get("http://localhost:3001/briefs")
      .then(response => {
        // console.log(response.data);
        dispatch(receivedBriefs(response.data));
      })
      .catch(err => {
        // Do something for an error here
        console.log(err);
      });
  };
};

// add a brief to store
// export const addBrief = values => ({
//   type: types.ADD_BRIEF,
//   briefValues: values
// });

export const addBrief = values => {
  return (dispatch, getState) => {
    // make new id
    // console.log(getState().brief.briefs.pop().id);
    // console.log(typeof getState().brief.briefs.pop().id);
    let newId = getState().brief.briefs.pop().id + 1;
    console.log(newId);

    // store new datas

    return axios
      .post("http://localhost:3001/briefs", {
        id: newId,
        title: values.title,
        comment: values.comment,
        productId: values.productId
      })
      .then(response => {
        // console.log(response.data);
        dispatch(fetchAllBriefs(response.data));
      })
      .catch(err => {
        // Do something for an error here
        console.log(err);
      });
  };
  // fetch all briefs
  // store to store
};
