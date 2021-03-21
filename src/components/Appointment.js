import React from "react";
import JotformEmbed from "react-jotform-embed";

const Appointment = () => {
  return (
    <div id="appointment">
      <h1>Book Appointment</h1>
      <button className="btn btn-large">
        <JotformEmbed src="https://form.jotform.com/201773971719162" />
      </button>
    </div>
  );
};

export default Appointment;
