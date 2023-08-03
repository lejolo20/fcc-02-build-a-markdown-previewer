import "./App.css";
import { React, useState } from "react";
import Textarea from "./components/Textarea";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Textarea />
      <Footer />
    </div>
  );
}

export default App;
