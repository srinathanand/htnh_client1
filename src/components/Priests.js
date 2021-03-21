import React, { useState, useEffect } from "react";
import sanityClient from "../sanityClient";

const Priests = () => {
  const [priests, setPriests] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'priest']{
                name,
                contact,
                remarks,
            }`
      )
      .then((data) => setPriests(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(priests);

  const priestData = priests.map((d, i) => {
    return (

      <div class="card">
      <div class="card-body">
          <h4>{d.name}</h4>
          <p>{d.contact}</p>
          <p>{d.remarks}</p>
      </div>
    </div>
    );
  });

  return (
    <div id="priests">
      <h1>Priests</h1>
      
      {priestData}
    </div>
  );
};

export default Priests;
