import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Selection_Page from "./pages/Selection_Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selection" element={<Selection_Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
