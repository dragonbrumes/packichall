// replace product id by product name
const findProductName = (state, id) => {
  let product = state.briefForm.products.find(element => element.id === id);
  return product.name;
};

export const getProductName = state => {
  if (state.briefsList.briefs.length > 0) {
    return state.briefsList.briefs.map(brief => ({
      id: brief.id,
      title: brief.title.charAt(0).toUpperCase() + brief.title.slice(1),
      comment: brief.comment,
      productName: findProductName(state, brief.productId)
    }));
  }
  return state.briefsList.briefs;
};
