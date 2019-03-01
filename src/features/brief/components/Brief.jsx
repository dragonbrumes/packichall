import React from "react";
import { Field } from "redux-form";

const Brief = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  onSubmit,
  products,
  isFetching
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Brief Title"
          />
        </div>
      </div>
      <div>
        <label>Comment</label>
        <div>
          <Field
            name="comment"
            component="textarea"
            type="text"
            placeholder="Comment"
          />
        </div>
      </div>
      <div>
        <label>Product Id</label>
        <div>
          {isFetching ? (
            "loading..."
          ) : (
            <Field name="productId" component="select">
              <option />
              {products.map(product => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </Field>
          )}
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default Brief;
