import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { compose } from "recompose";
import { fetchAllBriefs, filteredByProduct } from "../actionCreators";
import { getBriefs } from "../selectors";

import List from "./List";

//  Brief form container
class ListContainer extends Component {
  componentDidMount = () => {
    //fetch briefs at start
    this.props.fetchAllBriefs();
  };

  onFilterChange = event => {
    this.props.filteredByProduct(parseInt(event.target.value));
  };

  render() {
    const { briefs, isFetchingBriefs, products } = this.props;
    const { handleSubmit } = this.props;
    const briefsList = briefs.map(brief => (
      <List
        key={brief.id}
        title={brief.title}
        comment={brief.comment}
        productName={brief.productName}
      />
    ));

    return (
      <div>
        <h2>Brief List</h2>
        <div>
          <form onSubmit={handleSubmit} onChange={this.onFilterChange}>
            <label>Filter by product</label>
            <div>
              <Field name="filter" component="select">
                <option value={0} />
                {products.map(product => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </Field>
            </div>
          </form>
        </div>
        {isFetchingBriefs ? "Loading..." : briefsList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isFetchingBriefs } = state.briefsList;
  const { products } = state.briefForm;
  return { briefs: getBriefs(state), isFetchingBriefs, products };
}

export default compose(
  connect(
    mapStateToProps,
    { fetchAllBriefs, filteredByProduct }
  ),
  reduxForm({ form: "briefFilter" })
)(ListContainer);
