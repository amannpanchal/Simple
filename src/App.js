import { ConfigProvider } from "antd";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import MyFooter from "./Components/Footer/MyFooter";


const App = () => {

  const scrollToSection = (id) => {

     const element = document.getElementById(id);
     if (element) {
       element.scrollIntoView({ behavior: "smooth", block: "start" });
     }
   };
  return (
    <div className="App">
      <ConfigProvider>
        <Navbar scrollToSection={scrollToSection} />
        <Home scrollToSection={scrollToSection} />
        <MyFooter />
      </ConfigProvider>
    </div>
  );
};

export default App;
