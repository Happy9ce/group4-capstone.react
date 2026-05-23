import { useState } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    city: "",
    numbers: "",
    message: "",
    contactmethod: "phone",
    referred: ["friend"],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      contactmethod: value,
    }));
  };

  const handleCheckboxChange = (value) => {
    setFormData((prev) => {
      const currentReferred = [...prev.referred];
      if (currentReferred.includes(value)) {
        return {
          ...prev,
          referred: currentReferred.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          referred: [...currentReferred, value],
        };
      }
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Fullname validation
    if (!formData.fname.trim()) {
      newErrors.fname = "Fullname is required.";
    } else if (formData.fname.trim().length < 3) {
      newErrors.fname = "Fullname must be at least 3 characters.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // City validation
    if (!formData.city) {
      newErrors.city = "Please choose your city.";
    }

    // Phone number validation
    const phoneRegex = /^\d{11}$/;
    if (!formData.numbers) {
      newErrors.numbers = "Phone number is required.";
    } else if (!phoneRegex.test(formData.numbers)) {
      newErrors.numbers = "Phone number must be exactly 11 digits.";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Server error. Please try again later.");
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      alert("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fname: "",
      email: "",
      city: "",
      numbers: "",
      message: "",
      contactmethod: "phone",
      referred: ["friend"],
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="planet-form" className="planet-form-section">
      <div className="form-text">
        <h2>Have Questions About Planetary Science?</h2>
        <p>
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed? <br /> Reach out and we'll get back to
          you.
        </p>
      </div>

      {isSubmitted ? (
        <div className="form-success-container">
          <div className="success-icon-wrapper">
            <svg className="success-svg" viewBox="0 0 52 52">
              <circle
                className="success-circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="success-check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          <h3>Message Sent Successfully!</h3>
          <p className="success-greeting">
            Thank you, <strong>{formData.fname}</strong>!
          </p>
          <p className="success-details">
            We have received your message regarding planetary science. Our team
            will contact you shortly via{" "}
            <strong>{formData.contactmethod}</strong> at
            {formData.contactmethod === "email"
              ? ` ${formData.email}`
              : ` ${formData.numbers}`}
            .
          </p>
          <button className="reset-button" onClick={handleReset}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-container">
            <div className={`form-field ${errors.fname ? "has-error" : ""}`}>
              <label htmlFor="fname">
                Fullname<span>*</span>
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Happiness Ogbonnaya"
                maxLength="20"
                value={formData.fname}
                onChange={handleInputChange}
                required
              />
              {errors.fname && (
                <span className="field-error-msg">{errors.fname}</span>
              )}
            </div>

            <div className={`form-field ${errors.email ? "has-error" : ""}`}>
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="happiness@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && (
                <span className="field-error-msg">{errors.email}</span>
              )}
            </div>

            {/* <div className={`form-field ${errors.city ? "has-error" : ""}`}>
              <label htmlFor="city">City:</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled hidden>
                  Choose your city
                </option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="portharcourt">Port Harcourt</option>
                <option value="kano">Kano</option>
                <option value="ibadan">Ibadan</option>
                <option value="enugu">Enugu</option>
                <option value="calabar">Calabar</option>
                <option value="onitsha">Onitsha</option>
                <option value="kogi">Kogi</option>
                <option value="jos">Jos</option>
              </select>
              {errors.city && (
                <span className="field-error-msg">{errors.city}</span>
              )}
            </div> */}

            <div className={`form-field ${errors.numbers ? "has-error" : ""}`}>
              <label htmlFor="numbers">
                Phone Number<span>*</span>
              </label>
              <input
                type="tel"
                id="numbers"
                name="numbers"
                placeholder="Please enter a valid phone number"
                maxLength="11"
                value={formData.numbers}
                onChange={handleInputChange}
                required
              />
              {errors.numbers && (
                <span className="field-error-msg">{errors.numbers}</span>
              )}
            </div>

            <div className={`form-field ${errors.message ? "has-error" : ""}`}>
              <label htmlFor="message">
                Message<span>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                cols="50"
                maxLength="100"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <div className="char-counter">
                <small>
                  {100 - formData.message.length} characters remaining
                </small>
              </div>
              {errors.message && (
                <span className="field-error-msg">{errors.message}</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit >"}
          </button>
        </form>
      )}
    </section>
  );
};

export default FormSection;
