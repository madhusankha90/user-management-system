

function App() {

    

    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center">
        <header className="text-center space-y-8 p-8 bg-white shadow-lg rounded-lg">
          <h1 className="font-extrabold text-3xl text-gray-800">Welcome to User Management System</h1>
          <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white bg-blue-500 rounded-lg shadow-2xl group hover:bg-blue-600 transition-transform transform hover:scale-105 active:scale-95">
            <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out bg-blue-700 opacity-50 group-hover:-translate-x-full"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out delay-200 bg-blue-700 group-hover:translate-x-full"></span>
            <span className="relative">Users</span>
          </button>
        </header>
      </div>
    );
  }
  
  export default App;
  