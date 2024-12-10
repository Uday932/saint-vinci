import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inscription from "./components/Inscription";
import Navbar from "./components/Navbar";
import ClassRepartition from "./components/ClassRepartition";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="p-8">
          <Routes>
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/ClassRepartition" element={<ClassRepartition />} />
            <Route path="/" element={<h2>Bienvenue ! Choisissez une section.</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
