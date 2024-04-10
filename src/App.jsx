import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "../src/page/Home";
import { Details } from "../src/page/Details";
import { Book } from "../src/page/Book";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="/book/:name" element={<Book />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
