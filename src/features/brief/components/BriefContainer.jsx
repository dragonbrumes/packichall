import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { compose } from "recompose";
import { fetchProducts } from "../actionCreators";

import Brief from "./Brief";

//  Brief form container
class BriefContainer extends Component {
  componentDidMount = () => {
    //fetch products at start
    this.props.fetchProducts();
  };

  // submiting to middleware -> Api
  submitForm = formValues => {
    console.log("submitting Form: ", formValues);
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { products, isFetching } = this.props;

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
          isFetching={isFetching}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { products, isFetching } = state.brief;
  return { products, isFetching };
}

export default compose(
  connect(
    mapStateToProps,
    { fetchProducts }
  ),
  reduxForm({ form: "brief" })
)(BriefContainer);
