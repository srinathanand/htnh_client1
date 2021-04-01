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
        <h4>Sri. BALAKRISHNA SASTRY</h4>
        <p>+1 603 598 4864</p>
        <p>Available in the premises between 7 am EST to noon EST and 5 pm EST to 9 pm EST</p>
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
