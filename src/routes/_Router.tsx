import { Routes, Route } from "react-router-dom";
import App from "../App";
import { Nav } from "../components/Nav";
import { About } from "./About";
import { Blog } from "./Blog";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
