import React, { useState } from "react";

import Layout from "../components/Layout";
import Button from "../components/Button";

// Styles
import {
  page,
  formField,
  form as formStyle,
  submit,
} from "../styles/ContactMe.module.scss";

const ContactMe = () => {
  const initialForm = {
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [formGoing, setFormGoing] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Pageclip = window.Pageclip;
    setFormGoing(true);
    Pageclip.send(
      "39YmqXtGDcdVgNIEIhgDQLw5Y9w1PPrh",
      "contact-me",
      formData,
      () => {
        setFormData(initialForm);
        setFormGoing(false);
        setFormSent(true);
        setTimeout(() => {
          setFormSent(false);
        }, 2000);
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout title="Contact Me">
      <Button to="/" text="Back To Home" />
      <div className={page}>
        <h2>Contact Me</h2>
        <hr width="100%" />
        <form onSubmit={handleSubmit} className={formStyle}>
          <div className={formField}>
            <label htmlFor="email">Your Email: </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className={formField}>
            <label htmlFor="message">Your Message: </label>
            <textarea
              id="message"
              name="message"
              type="text"
              onChange={handleChange}
              value={formData.message}
              minLength={6}
              required
            />
          </div>
          <div>
            <button disabled={formGoing} type="submit" className={submit}>
              Send
            </button>
          </div>
          {formSent && <div style={{ margin: "0.5rem 0" }}>Message Sent!</div>}
        </form>
      </div>
    </Layout>
  );
};

export default ContactMe;
