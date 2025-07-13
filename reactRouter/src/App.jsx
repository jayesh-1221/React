import { useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <h1>Header</h1>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
