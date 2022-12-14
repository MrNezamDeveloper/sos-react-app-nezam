import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./layouts/Article";
import ResponsiveAppBar from "./components/Header";
import Home from "./layouts/Home";
import TodoList from "./layouts/Todo";
import NotFound from "./layouts/notfound";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles">
            <Route path=":articleId" element={<Article />} />
          </Route>
          <Route path="todo-list" element={<TodoList />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
