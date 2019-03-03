import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllBriefs } from "../actionCreators";
import { getProductName } from "../selectors";

import List from "./List";

//  Brief form container
class ListContainer extends Component {
  componentDidMount = () => {
    //fetch briefs at start
    this.props.fetchAllBriefs();
  };

  render() {
    const { briefs, isFetchingBriefs } = this.props;

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
        {isFetchingBriefs ? "Loading..." : briefsList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isFetchingBriefs } = state.briefsList;
  return { briefs: getProductName(state), isFetchingBriefs };
}

export default connect(
  mapStateToProps,
  { fetchAllBriefs }
)(ListContainer);