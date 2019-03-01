import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, reset } from "redux-form";
import { compose } from "recompose";
import { fetchAllProducts, addBrief } from "../actionCreators";

import Brief from "./Brief";

//  Brief form container
class BriefContainer extends Component {
  componentDidMount = () => {
    //fetch products at start
    this.props.fetchAllProducts();
  };

  // submiting to middleware -> Api
  submitForm = formValues => {
    this.props.addBrief(formValues);
    // resetting the form
    this.props.reset("brief");
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { products, isFetchingProducts } = this.props;

    return (
      <div>
        <h2>Enter your brief</h2>
        <Brief
          onSubmit={this.submitForm}
          handleSubmit={handleSubmit}
          pristine={pristine}
          reset={reset}
          submitting={submitting}
          products={products}
          isFetching={isFetchingProducts}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { products, isFetchingProducts } = state.briefForm;
  return { products, isFetchingProducts };
}

export default compose(
  connect(
    mapStateToProps,
    { fetchAllProducts, addBrief, reset }
  ),
  reduxForm({ form: "brief" })
)(BriefContainer);
