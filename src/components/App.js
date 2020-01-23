import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Nav />
      <br></br>
      <Header />
      <br></br>
      <MainContent />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
