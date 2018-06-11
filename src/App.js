import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Title from "./components/Title";
import Game from "./components/Game";
import Footer from "./components/Footer";

const App = () => (
  <div className="App">
    <Header />
    <Main>
      <Title />
      <Game />
    </Main>
    <Footer />
  </div>
)

export default App;

// SO, I put whatever needed information in the image as props along with an onClick to trigger the logic (the functionality, the function)

//  'props' are properties taken from the parent component... ?