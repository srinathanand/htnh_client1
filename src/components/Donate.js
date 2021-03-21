import React, { useState } from "react";
// import PayPal from "./PayPal";
import PayPal1 from "./PayPal1";
import { useForm } from "react-hook-form";

const Donate = () => {
  const [checkout, setCheckout] = useState(false);
  const [value, setValue] = useState(0);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data, r) => {
    console.log("Test Data", data);
    if (data.donation > 0) {
      setValue(data.donation)
      setCheckout(true)
    } else {
      setCheckout(false)
    }

    r.target.reset();
  };

  return (
    <div id="donate">
      <h1>Donate</h1>
      <div className="paypal">
        {checkout ? (
          <PayPal1 value={value}/>
        ) : (
          <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-group col-lg-6">
                <input
                  name="donation"
                  type="number"
                  className="form-control"
                  placeholder="Donation (USD)"
                  ref={register({
                    required: "Please enter your donation in USD",
                    min: { value: 1.00, message: "You must donate atleast $ 1" }
                  })}
                ></input>
                <span className="error-message">
                  {errors.donation && errors.donation.message}
                </span>
              </div>
              <div className="form-group col-lg-6">
              <input className="btn btn-lg btn-primary" type="submit"  />
                {/* <button
                  className="btn btn-danger btn-large btn-lg"
                  onClick={() => setCheckout(true)}
                >
                  Donate
                </button> */}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Donate;
