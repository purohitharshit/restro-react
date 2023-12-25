import logo from "./logo.svg";
import "./App.css";
import Layout from "./component/Layout/Layout";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
