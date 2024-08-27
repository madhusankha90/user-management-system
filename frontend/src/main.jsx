import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserForm from './UserForm.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Users from './Users.jsx'
import UserTable from './UserTable.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/usertable' element={<UserTable/>}/>
      <Route path='/userform' element={<UserForm/>}/>

    </Routes>
  </BrowserRouter>
)
