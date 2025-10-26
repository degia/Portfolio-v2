import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Your routes and components go here */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
