import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleId = (event) => {
    setId(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const addUser = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const payload = {
      id: id,
      name: name,
    };

    axios.post('http://localhost:5000/api/createuser', payload)
      .then(() => {
        // Handle success, e.g., show a success message or reset form fields
        setId(''); // Clear the ID field
        setName(''); // Clear the Name field
        navigate('/user')
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 w-full max-w-sm bg-white rounded-lg shadow-lg">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Add New User</h2>
          <p className="text-gray-600 text-sm">Fill in the details below to add a new user to the system.</p>
        </div>

        <form className="flex flex-col space-y-4" onSubmit={addUser}>
          <input
            value={id}
            onChange={handleId}
            type="text"
            placeholder="Enter ID"
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={name}
            onChange={handleName}
            type="text"
            placeholder="Enter Name"
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
