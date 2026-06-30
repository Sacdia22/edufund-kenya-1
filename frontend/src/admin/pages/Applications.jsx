import React, { useEffect, useState } from "react";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.log(err));
  }, []);

  const handleApprove = (id) => {
    alert("Approve application ID: " + id);
  };

  const handleReject = (id) => {
    alert("Reject application ID: " + id);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">
        Student Applications
      </h2>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Student</th>
              <th className="p-3">Institution</th>
              <th className="p-3">Course</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Reason</th>
              <th className="p-3">HOD</th>
              <th className="p-3">Chief</th>
              <th className="p-3">Final</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center p-5">
                  No applications found
                </td>
              </tr>
            ) : (
              applications.map((app) => (
                <tr key={app.id} className="border-b">
                  <td className="p-3">{app.student_name}</td>
                  <td className="p-3">{app.institution}</td>
                  <td className="p-3">{app.course}</td>
                  <td className="p-3">
                    Ksh {app.amount_requested}
                  </td>
                  <td className="p-3">{app.reason}</td>

                  <td className="p-3">{app.hod_status}</td>

                  <td className="p-3">{app.chief_status}</td>

                  <td className="p-3">{app.final_status}</td>

                  <td className="p-3">
                    <button
                      onClick={() => handleApprove(app.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(app.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;