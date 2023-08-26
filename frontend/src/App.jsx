import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./post/login";
import Navbar from "./nav";
import Registration from "./post/registration";
import Treatment from "./post/treatment";
import Newpatient from "./post/newpatient";
import Allpatients from "./get/allpatients";
import Firstname from "./get/getbyfirstname";
import Secondname from "./get/getbysecondname";
import Idnumber from "./get/getpatientbyidnumber";
import Phonenumber from "./get/getphonenumber";
import { AuthProvider } from "./authorization";

function App() {
  return (
    <div>
      <AuthProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
         <Route   path="/navigation" element={<Navbar/>} />
         <Route   path="/registration" element={<Registration/>} />
         <Route   path="/treatment" element={<Treatment/>} />
         <Route   path="/patient" element={<Newpatient/>} />
         <Route   path="/allpatients" element={<Allpatients/>} />
         <Route   path="/firstname" element={<Firstname/>} />
         <Route   path="/secondname" element={<Secondname/>} />
         <Route   path="/idnumber" element={<Idnumber/>} />
         <Route   path="/phonenumber" element={<Phonenumber/>} />

        </Routes>
      </BrowserRouter>









      </AuthProvider>
    </div>
  );
}

export default App;
