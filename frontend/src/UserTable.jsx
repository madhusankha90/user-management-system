import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const UserTable = () => {
  const { users, updateUser, deleteUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [editingUser, setEditingUser] = useState(null);

  const handleUpdateClick = (user) => {
    setEditingUser(user);
    navigate('/userform', { state: { user, isEdit: true } });
  };

  const handleDeleteClick = (id) => {
    deleteUser(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 flex items-center justify-center p-8">
      <div className="container mx-auto p-8 bg-white shadow-2xl rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">User Management</h2>
        <p className="text-center text-gray-600 mb-8">
          Manage all the users in your account including their details and actions.
        </p>
        <div className="flex justify-end mb-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition-transform transform hover:scale-105" onClick={() => navigate('/userform')}>
            Add User
          </button>
        </div>
        <div className="overflow-x-auto">
          <div className="max-h-96 overflow-y-scroll">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-800">{user.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">{user.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
                    <td className="px-6 py-4 text-sm flex space-x-2">
                      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition-transform transform hover:scale-105" onClick={() => handleUpdateClick(user)}>
                        Update
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-transform transform hover:scale-105" onClick={() => handleDeleteClick(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
