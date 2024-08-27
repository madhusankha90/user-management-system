import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import UserForm from './UserForm.jsx';
import Users from './Users.jsx';
import UserTable from './UserTable.jsx';
import { UserProvider } from './UserContext'; // Import UserProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider> {/* Wrap routes with UserProvider */}
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/usertable' element={<UserTable />} />
          <Route path='/userform' element={<UserForm />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
