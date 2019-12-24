import React from "react";
import Helmet from "react-helmet";
import { Formik, Field, Form } from "formik";
import Layout from "../layout";
import ali from "../images/texas.jpeg";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1 style={{ textAlign: "center" }} className="caption">
          contact me{" "}
        </h1>
        <div className="contact">
          <img src={ali} style={{ height: "450px" }} alt="Ali Ahsan" />
          <div style={{ width: "33%" }}>
            <Formik
              initialValues={{ email: "", name: "", message: "" }}
              validate={values => {
                const errors = {};
                // if (
                //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                // ) {
                //   errors.email = "Invalid email address";
                // }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                fetch("/?no-cache=1", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  body: encode({
                    "form-name": "contact",
                    ...values
                  })
                })
                  .then(() => {
                    setSubmitting(false);
                    resetForm();
                  })
                  .catch(error => {
                    setSubmitting(false);
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
                /* and other goodies */
              }) => (
                <form
                  onSubmit={handleSubmit}
                  data-netlify="true"
                  name="contact"
                  data-netlify-honeypot="bot-field"
                >
                  <label
                    htmlFor="name"
                    style={{ display: "block" }}
                    className="caption"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className="caption"
                  />
                  <label
                    htmlFor="email"
                    style={{ display: "block" }}
                    className="caption"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="caption"
                  />
                  <label
                    htmlFor="message"
                    style={{ display: "block" }}
                    className="caption"
                  >
                    Message
                  </label>
                  <Field
                    type="text"
                    component="textarea"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className="caption"
                    rows="8"
                  />
                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !(values.message && values.name && values.email)
                    }
                  >
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ContactPage;
