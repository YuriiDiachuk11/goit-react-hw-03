import { Field, Form, Formik } from "formik";
import { useId } from "react";

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const initialValues = {
    name: "",
    number: "",
  };
  const handleAddContact = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleAddContact}>
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <label htmlFor={numberId}>Number</label>
        <Field type="tel" name="number" id={numberId} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
