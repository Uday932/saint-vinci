import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inscription from "./components/Inscription/Inscription";
import Navbar from "./components/Navbar/Navbar";
import ClassRepartition from "./components/ClassRepartition/ClassRepartition";
import ClotureAnnee from "./components/ClotureAnnee/ClotureAnnee";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main className="p-8 max-w-7xl mx-auto">
          <Routes>
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/classrepartition" element={<ClassRepartition />} />
            <Route path="/clotureannee" element={<ClotureAnnee />} />
            <Route
              path="/"
              element={
                <div className="text-center mt-16">
                  <h2 className="text-3xl font-semibold text-gray-900">
                    Bienvenue sur le portail de Saint-Vinci
                  </h2>
                  <p className="mt-4 text-gray-600 text-lg">
                    Gérez facilement les élèves, les inscriptions et bien plus.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
