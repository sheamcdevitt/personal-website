import React from "react";

import {
  Footer,
  Blog,
  Portfolio,
  Bookshelf,
  About,
  Header,
} from "./containers";
import { CTA, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
        <About /> <Footer />
      </div>
    </div>
  );
};

export default App;
