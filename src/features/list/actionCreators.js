import * as types from "../../shared/constants/ActionTypes";
import axios from "axios";

// api fetch status
export const isFetchingBriefs = () => ({
  type: types.IS_FETCHING_BRIEFS
});

// sending briefs data to store
export const receivedBriefs = briefs => ({
  type: types.RECEIVED_BRIEFS,
  briefs: briefs
});

// fetch the briefs
export const fetchAllBriefs = () => {
  return (dispatch, getState) => {
    // declare a api fetch in progress
    dispatch(isFetchingBriefs());
    // fetching datas
    return axios
      .get("http://localhost:3001/briefs")
      .then(response => {
        // find the product name by his id
        const findProductName = id => {
          let product = getState().briefForm.products.find(
            element => element.id === id
          );
          return product.name;
        };

        const results = response.data.map(elm => ({
          id: elm.id,
          title: elm.title,
          productName: findProductName(elm.productId),
          comment: elm.comment
        }));

        dispatch(receivedBriefs(results));
      })
      .catch(err => {
        // Do something for an error here
        console.log(err);
      });
  };
};
