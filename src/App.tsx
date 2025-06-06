import React from "react";
import TravelForm from "./components/TravelForm";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProfileGrid from "./components/ProfileGrid";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route index element={<TravelForm />}></Route>
          <Route path="/detail-guide" element={<ProfileGrid />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
