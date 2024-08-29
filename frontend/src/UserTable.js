import React from "react";
import { useNavigate } from "react-router-dom";

const UserTable = ({ rows }) => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto p-6 max-w-lg bg-white rounded-lg shadow-lg">
      {/* Title and Description */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
          <p className="text-gray-600">Manage your users and their details below.</p>
        </div>
        {/* Add User Button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105"
          onClick={() => navigate("/userform")}
        >
          Add User
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">ID</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>

          <tbody>
            {rows.length > 0 ? (
              rows.map((row) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{row.id}</td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{row.name}</td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700 text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="bg-blue-500 text-white font-semibold py-1 px-4 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105">
                        Update
                      </button>
                      <button className="bg-red-500 text-white font-semibold py-1 px-4 rounded-md shadow-md hover:bg-red-600 hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700 text-center" colSpan="3">
                  No Data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
