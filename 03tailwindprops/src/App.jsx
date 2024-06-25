import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let newArr = [1, 2, 3];
  let newObj = {
    fullName: "Rishabh Trivedi",
    age: 23,
  };
  return (
    <>
      <h1 className="bg-green-600 text-black p-4 rounded-xl mb-5">
        Tailwind Check
      </h1>

      <Card userName='Rishabh' btnText='Profile'/>
      <Card userName='Alex'/>
      <Card />
    </>
  );
}

export default App;
