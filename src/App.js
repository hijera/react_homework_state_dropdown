import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from "./components/Dropdown";
import DropdownClassBased from "./components/DropdownClassBased";

function App() {
  return (
      <>
      <Dropdown isOpen={true} />
      <DropdownClassBased isOpen={true} />
    </>
  );
}

export default App;
