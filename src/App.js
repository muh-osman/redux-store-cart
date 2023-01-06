import { Routes, Route } from "react-router-dom";
import NavApp from "./componesnts/NavApp";
import Home from "./page/Home";
import Cart from "./page/Cart";

function App() {
  return (
    <>
      <NavApp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
