import React, { useState, useEffect } from "react";
import sanityClient from "../sanityClient";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'event']{
            title,
            when,
            remarks,
        }`
      )
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(events);

  const tableHeader = (
    <thead>
      <tr>
        <th>Special Event</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
  );

  const tableData = events.map((d, i) => {
    let dt = new Date(d.when);
    let ts = dt.toLocaleDateString();
    let tm = dt.toLocaleTimeString();
    return (
      <tr key={i}>
        <td>{d.title}</td>
        <td>{ts}</td>
        <td>{tm}</td>
      </tr>
    );
  });

  return (
    <div id="events">
      <h1>Events</h1>
      <table className="table table-striped">
        {tableHeader}
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default Events;