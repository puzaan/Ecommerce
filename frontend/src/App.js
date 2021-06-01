import React from "react";

import Header from "./components/Headers.js";
import Footer from "./components/Footers.js";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen.js"

const App = () => {
  return (
    <>
      <Header/>
      <main className= 'py-4'> 
        <Container>
        <HomeScreen />
        </Container>
      </main>

      <Footer/>
      </>
    
  );
};

export default App;
