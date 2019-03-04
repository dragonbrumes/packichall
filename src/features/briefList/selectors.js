// filter by product
import { createSelector } from "reselect";

const state = state => state;
const briefsSelector = state => state.briefsList.briefs;
const briefsFilterSelector = state => state.briefsList.briefFilter;

// filter briefs by productId
export const productFiltered = createSelector(
  [briefsSelector, briefsFilterSelector],
  (briefs, filterBy) =>
    filterBy !== 0
      ? briefs.filter(items => items.productId === filterBy)
      : briefs
);

// replace product id by product name
const findProductName = (state, id) => {
  let product = state.briefForm.products.find(element => element.id === id);
  return product.name;
};

// as a selector
export const getBriefs = createSelector(
  [state, productFiltered],
  (state, productSelected) =>
    productSelected.map(brief => ({
      id: brief.id,
      title: brief.title.charAt(0).toUpperCase() + brief.title.slice(1),
      comment: brief.comment,
      productName: findProductName(state, brief.productId)
    }))
);
