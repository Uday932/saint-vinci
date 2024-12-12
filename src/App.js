import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Inscription from "./components/Inscription/Inscription";
import Navbar from "./components/Navbar/Navbar";
import ClassRepartition from "./components/ClassRepartition/ClassRepartition";
import ClotureAnnee from "./components/ClotureAnnee/ClotureAnnee";
import Login from "./components/Login/Login";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {isLoggedIn && <Navbar />}
        <main className="p-8 max-w-7xl mx-auto">
          <Routes>
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path="/inscription"
              element={
                isLoggedIn ? (
                  <Inscription />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/classrepartition"
              element={
                isLoggedIn ? (
                  <ClassRepartition />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/clotureannee"
              element={
                isLoggedIn ? (
                  <ClotureAnnee />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <div className="text-center mt-16">
                    <h2 className="text-3xl font-semibold text-gray-900">
                      Bienvenue sur le portail de Saint-Vinci
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                      Gérez facilement les élèves, les inscriptions et bien plus.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                      {[
                        { title: "Inscription", desc: "Ajoutez de nouveaux élèves.", link: "/inscription" },
                        { title: "Répartition des Classes", desc: "Consultez la liste des élèves par classe.", link: "/classrepartition" },
                        { title: "Clôture de l'Année", desc: "Clôturez l'année scolaire.", link: "/clotureannee" },
                      ].map((card, index) => (
                        <div key={index} className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition-transform transform hover:scale-105">
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{card.title}</h3>
                          <p className="text-gray-600 mb-6">{card.desc}</p>
                          <a href={card.link} className="text-blue-600 font-bold hover:underline">Accéder</a>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;