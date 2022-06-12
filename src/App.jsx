import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/pages/about";
import Home from "./components/pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:taskTitle" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
