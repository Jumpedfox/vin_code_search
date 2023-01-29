import { FC } from "react";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import VariablesPage from "./components/variablesPage/variablesPage";
import CholsenVariablePage from "./components/chosenVariablePage/chosenVariableSection";
import HomePage from "./components/homePage/homepage";
import "./App.css"

const App: FC = () => {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>Loading...</>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/variables"
          element={
            <Suspense fallback={<>Loading...</>}>
              <VariablesPage />
            </Suspense>
          }
        />
        <Route
          path="/variables/:id"
          element={
            <Suspense fallback={<>Loading...</>}>
              <CholsenVariablePage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
