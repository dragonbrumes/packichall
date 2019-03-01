import React from "react";

const List = ({ id, title, comment, productName }) => (
  <div>
    <div>Title: {title}</div>
    <div>Comment: {comment}</div>
    <div>Product: {productName}</div>
    <hr />
  </div>
);

export default List;
