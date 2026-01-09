import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./features/auth/pages/Signin";
import Internships from "./features/internship/pages/Internships";
import HeaderLayout from "./components/layout/HeaderLayout";
import NewInternship from "./features/placement/pages/NewInternships"
const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route element={<HeaderLayout />}>
          <Route path="/internships" element={<Internships />} />
          <Route path="/new-internship" element={<NewInternship/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default routes;
