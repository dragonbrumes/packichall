import React from "react";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";

// check if all fields are not empty
const required = value =>
  value || typeof value === "number" ? undefined : "Required";

// render the fields
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

// special render for Textarea field
const renderTextareaField = ({
  input,
  label,
  type,
  meta: { touched, error },
  children
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input}>{children}</textarea>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

// special render for Select field
const renderSelectField = ({
  input,
  label,
  type,
  meta: { touched, error },
  children
}) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>{children}</select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

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
            component={renderField}
            type="text"
            placeholder="Brief Title"
            validate={required}
          />
        </div>
      </div>
      <div>
        <label>Comment</label>
        <div>
          <Field
            name="comment"
            component={renderTextareaField}
            type="textarea"
            placeholder="Comment"
            validate={required}
          />
        </div>
      </div>
      <div>
        <label>Product Id</label>
        <div>
          {isFetching ? (
            "loading..."
          ) : (
            <Field
              name="productId"
              type="select"
              component={renderSelectField}
              validate={required}
            >
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </Button>
      </div>
    </form>
  );
};

export default Brief;
