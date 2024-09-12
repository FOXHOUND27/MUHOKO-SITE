import { Technology, Home, About, Contact, Departments, Studio } from "./Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="departments" element={<Departments />} />
        <Route path="technology" element={<Technology />} />
        <Route path="studio" element={<Studio />} />
      </Routes>
    </>
  );
}

export default App;
