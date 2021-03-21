import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Footer = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, r) => {
    console.log("Test Data", data);
    sendEmail(
      serviceId,
      templateId,
      {
        from_name: data.name,
        from_phone: data.phone,
        from_email: data.email,
        subject: "Subscription",
        message_html: "Please add me to Temple subscription list",
      },
      userId
    );
    r.target.reset();
  };

  const serviceId = "service_i8j7drm";
  const templateId = "template_hv4n5hl";
  const userId = "user_LsBhBKlaFcAN0ii9CnyUv";

  const sendEmail = (serviceId, templateId, variables, userId) => {
    emailjs
      .send(serviceId, templateId, variables, userId)
      .then(() => {
        setSuccessMessage("Form sent successfully..");
      })
      .catch((err) => console.log("Something went wront with email sending.."));
  };

  return (
    <div id="footer">
      <div className="subscription">
        <div className="container m-3 col-lg-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {/* <div className="form-group col-lg-6"> */}
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
                ref={register({
                  required: "Please enter your name",
                  maxLength: {
                    value: 20,
                    message: "Please enter a name fewer than 20 characters",
                  },
                })}
              ></input>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>

              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                ref={register({
                  required: "Please enter your email",
                  pattern: {
                    value: /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/,
                    message: "invalid email",
                  },
                })}
              ></input>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>

              <input
                name="phone"
                type="phone"
                className="form-control"
                placeholder="Phone"
                ref={register({
                  required: "Please enter your phone",
                })}
              ></input>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              <div className="col text-center">
                {/* <input className="btn btn-sm btn-secondary" type="submit" /> */}
                <button className="btn btn-sm btn-secondary">Subscribe</button>
              </div>
              {/* </div> */}
            </div>
          </form>
        </div>
      </div>
      <div className="address col-lg-6">
        <p>525 Broad St Nashua, NH 03063 </p>
        <p>Phone: 1-603-598-4864 </p>
        <p>Copyright &copy; Hindu Temple of New Hampshire</p>
        <div>Designed by Partha Sastry. Contact xxx@gmail.com</div>
      </div>
      
    </div>
  );
};

export default Footer;
