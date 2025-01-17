import React, { useState } from "react";
import styles from "./Form.module.less";

const initialFormState = {
  name: "",
  password: "",
};

export const Form = () => {
  const [formValues, setFormValues] = useState(initialFormState);

  const handleFormChange = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
    console.log(formValues);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted successfully!");
    setFormValues(initialFormState);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        value={formValues.name}
        onChange={(e) => handleFormChange("name", e.target.value)}
        type="text"
        data-testid="nameinput"
        name="name"
        placeholder="Your Name"
        required
      />
      <input
        value={formValues.password}
        onChange={(e) => handleFormChange("password", e.target.value)}
        type="password"
        name="password"
        placeholder="Your Password"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
