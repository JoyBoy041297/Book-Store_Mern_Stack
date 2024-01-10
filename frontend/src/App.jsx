import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/boks/details/:id" element={<ShowBook />} />
      <Route path="/boks/edit/:id" element={<EditBook />} />
      <Route path="/boks/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
