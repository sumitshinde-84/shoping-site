import { useState } from "react";
import "./style/addressForm.css";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    country: "",
    company: "",
    appartment: "",
    postalCode: "",
    city: ""
  });
  const [errors, setErrors] = useState("");

  const InputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let errors = "";

    if (!formData.phone) {
      errors += "Phone is required. ";
    }

    if (!formData.country) {
      errors += "Country is required. ";
    }

    if (!formData.company) {
      errors += "Company is required. ";
    }

    if (!formData.appartment) {
      errors += "Apartment is required. ";
    }

    if (!formData.postalCode) {
      errors += "Postal Code is required. ";
    }

    if (!formData.city) {
      errors += "City is required. ";
    }

    return errors.trim();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors === "") {
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="addressform">
      <h1>ronex</h1>
      <form onSubmit={submitHandler} form action="">
        <h2>Contact</h2>
        <p className="input-para">
          <label htmlFor="phone" className="address-lable">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={InputHandler}
            value={formData.phone}
            className={errors && errors.includes("Phone") ? "error" : ""}
          />
          {errors && errors.includes("Phone") && (
            <span className="error-message">{errors}</span>
          )}
        </p>

        <h2>Delivery address</h2>
        <p className="input-para">
          <label className="address-lable">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            onChange={InputHandler}
            value={formData.country}
            className={errors && errors.includes("Country") ? "error" : ""}
          />
          {errors && errors.includes("Country") && (
            <span className="error-message">{errors}</span>
          )}
        </p>

        <p className="input-para">
          <label className="address-lable">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            onChange={InputHandler}
            value={formData.company}
            className={errors && errors.includes("Company") ? "error" : ""}
          />
          {errors && errors.includes("Company") && (
            <span className="error-message">{errors}</span>
          )}
        </p>

        <p className="input-para">
          <label className="address-lable">Apartment</label>
          <input
            type="text"
            id="appartment"
            name="appartment"
            onChange={InputHandler}
            value={formData.appartment}
            className={errors && errors.includes("Apartment") ? "error" : ""}
          />
          {errors && errors.includes("Apartment") && (
            <span className="error-message">{errors}</span>
          )}
        </p>

        <p className="postal-city">
          <p className="input-para">
            <label className="address-lable">Postal Code</label>
            <input
              type="tel"
              id="postal-code"
              name="postalCode"
              onChange={InputHandler}
              value={formData.postalCode}
              className={
                errors && errors.includes("Postal Code") ? "error" : ""
              }
            />
            {errors && errors.includes("Postal Code") && (
              <span className="error-message">{errors}</span>
            )}
          </p>
          <p className="input-para">
            <label className="address-lable">City</label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={InputHandler}
              value={formData.city}
              className={errors && errors.includes("City") ? "error" : ""}
            />
            {errors && errors.includes("City") && (
              <span className="error-message">{errors}</span>
            )}
          </p>
        </p>
        <button type="submit">Proceed to Shipping</button>
      </form>
    </div>
  );
};

export default AddressForm;
