import React from "react";
import Header from "./commonents/header/Header";
import Banner from "./commonents/home/Banner";
import Footer from "./commonents/footer/Footer";

function App() {
  return (
    <div className=" font-bodyFont overflow-x-hidden overflow-y-hidden">
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
