import React, { useEffect, useState } from "react";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/applications")
      .then(res => res.json())
      .then(data => setApplications(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Applications</h2>

      {applications.map(app => (
        <div key={app.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><b>Name:</b> {app.student_name}</p>
          <p><b>Institution:</b> {app.institution}</p>
          <p><b>Course:</b> {app.course}</p>
          <p><b>Amount:</b> {app.amount_requested}</p>
          <p><b>Reason:</b> {app.reason}</p>
        </div>
      ))}
    </div>
  );
};

export default MyApplications;

