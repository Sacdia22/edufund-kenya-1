import React, { useEffect, useState } from "react";

const HODDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        HOD Dashboard
      </h1>

      <div className="bg-white shadow rounded-lg p-6">

        <h2 className="text-xl font-semibold mb-4">
          Student Applications
        </h2>

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3">Student</th>
              <th className="p-3">Institution</th>
              <th className="p-3">Course</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Reason</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>

            {applications.map((app) => (

              <tr key={app.id} className="border-b">

                <td className="p-3">{app.student_name}</td>

                <td className="p-3">{app.institution}</td>

                <td className="p-3">{app.course}</td>

                <td className="p-3">
                  KSh {app.amount_requested}
                </td>

                <td className="p-3">{app.reason}</td>

                <td className="p-3">{app.hod_status}</td>

                <td className="p-3">

                  <button className="bg-green-600 text-white px-3 py-1 rounded mr-2">
                    Approve
                  </button>

                  <button className="bg-red-600 text-white px-3 py-1 rounded">
                    Reject
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default HODDashboard;