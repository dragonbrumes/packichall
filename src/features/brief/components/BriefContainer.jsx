import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { compose } from "recompose";
import { fetchAllProducts, fetchAllBriefs, addBrief } from "../actionCreators";

import Brief from "./Brief";

//  Brief form container
class BriefContainer extends Component {
  componentDidMount = () => {
    //fetch products & briefs at start
    this.props.fetchAllProducts();
    this.props.fetchAllBriefs();
  };

  // submiting to middleware -> Api
  submitForm = formValues => {
    console.log("submitting Form: ", formValues);
    this.props.addBrief(formValues);
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
    { fetchAllProducts, fetchAllBriefs, addBrief }
  ),
  reduxForm({ form: "brief" })
)(BriefContainer);
