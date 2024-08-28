import React,{useState} from "react";

const UserForm = (props) => {

  const [id, setId] = useState();
  const [name, setName] = useState();

  const handleId = (event) => {
      setId(event.target.value);
  }
  const handleName = (event) =>{
    setName(event.target.value);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Form Container */}
      <div className="p-6 w-full max-w-sm bg-white rounded-lg shadow-lg">
        {/* Form Title and Description */}
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Add New User</h2>
          <p className="text-gray-600 text-sm">Fill in the details below to add a new user to the system.</p>
        </div>

        {/* Form to Add User */}
        <form className="flex flex-col space-y-4">
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
