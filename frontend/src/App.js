import './App.css';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import MainDashboardPage from './screens/MainDashboardPage';
import i18next from 'i18next'
import { useEffect, useState } from 'react';
import ForgotPassword from './screens/ForgotPassword';

function App() {

  const onchange = (e) => {
    i18next.changeLanguage(e.target.value)
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage onchange={onchange} i18next={i18next} />}/>
          <Route path="/register" element={<RegisterPage onchange={onchange} i18next={i18next}/>}/>
          <Route path="/forgotPassword" element={<ForgotPassword onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard' element={<MainDashboardPage onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/userboard' element={<MainDashboardPage selectedLink='dashboard/userboard' onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/menu' element={<MainDashboardPage selectedLink='dashboard/menu' onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/choureyOne' element={<MainDashboardPage selectedLink='dashboard/choureyOne' onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/choureyTwo' element={<MainDashboardPage selectedLink='dashboard/choureyTwo' onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/disaster' element={<MainDashboardPage selectedLink='dashboard/disaster' onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/safetyDeclaration' element={<MainDashboardPage selectedLink='dashboard/safetyDeclaration' onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/report' element={<MainDashboardPage selectedLink='dashboard/report' onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/print' element={<MainDashboardPage selectedLink='dashboard/print' onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/subAdmin' element={<MainDashboardPage selectedLink='dashboard/subAdmin' onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/profile' element={<MainDashboardPage selectedLink='dashboard/profile' onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/changePassword' element={<MainDashboardPage selectedLink='dashboard/changePassword' onchange={onchange} i18next={i18next}/>}/>
          <Route path='/dashboard/siteDetail' element={<MainDashboardPage selectedLink='dashboard/siteDetail' onchange={onchange} i18next={i18next}/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
