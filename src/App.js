import React from "react";
import Navbar from "./component/Navbar";
import "./css/App.css";
import BlogDetail from "./screens/BlogDetail";
import BlogList from "./screens/BlogList";
import CreateBlog from "./screens/CreateBlog";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={BlogList} />
      <Route path="/create" exact component={CreateBlog} />
      <Route path="/detail/:id" exact component={BlogDetail} />
    </BrowserRouter>
  );
}

export default App;
