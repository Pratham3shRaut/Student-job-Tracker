import React from "react";
import "./App.css";
import { ApplicationProvider } from "./context/ApplicationContext";
import Navbar from "./components/Navbar";
import AddApplication from "./components/AddApplication";
import FilterControls from "./components/FilterControls";
import ApplicationList from "./components/ApplicationList";

function App() {
  return (
    <ApplicationProvider>
      <Navbar />
      <AddApplication />
      <FilterControls />
      <ApplicationList />
    </ApplicationProvider>
  );
}

export default App;
