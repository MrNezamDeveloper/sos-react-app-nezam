import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import ResponsiveAppBar from "./components/Header";
import Home from "./components/Home";
import TodoList from "./components/Todo";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles" element={<Articles />}>
            {/* <Route path=":teamId" element={<Team />} /> */} 
          </Route>
          <Route path="todo-list" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
