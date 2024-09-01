import React, { useState } from 'react'
import axios from 'axios';

const UserUpdate = ({getUsers}) => {


    

  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
  <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
    
    <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Update User</h2>
    
    
    <form>
      
      <div class="mb-4">
        <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Name:</label>
        <input
          type="text"
          id="name"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter new user name"
        />
      </div>

    
      <button
        type="button"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md transition duration-200 ease-in-out"
      >
        Update User
      </button>
    </form>
  </div>
</div>

  )
}

export default UserUpdate;