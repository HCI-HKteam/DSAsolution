import React from "react";
import MobileAppSimulator from "./components/MobileSimulator";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GroupPage from "./components/GroupPage/Group";
import HomePage from "./components/HomePage/Home";
import SearchPage from "./components/SearchPage/Search";

function App() {
  
    return (
      <Router>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        {/* Passa le rotte come children */}
        <MobileAppSimulator>
          <Routes>
            {/* HomePage route */}
            <Route index element={<HomePage />} />
            {/* GroupPage route with dynamic group name */}
            <Route path='/search' element={<SearchPage />}/>
            <Route path='/software-engineering' element={<GroupPage />} />
          </Routes>
        </MobileAppSimulator>
      </div>
    </Router>
  );
  }
export default App;
