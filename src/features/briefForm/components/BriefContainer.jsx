import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, reset } from "redux-form";
import { compose } from "recompose";
import { fetchAllProducts, addBrief } from "../actionCreators";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Brief from "./Brief";

const styles = {
  root: {
    width: "100%",
    maxWidth: 500
  }
};

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
        <Typography variant="h4" gutterBottom>
          Enter your brief
        </Typography>
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
  withStyles(styles),
  reduxForm({ form: "brief" })
)(BriefContainer);
