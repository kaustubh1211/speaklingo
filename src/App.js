import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import English from "./component/English/English";
import EnglishLayout from "./component/English/EnglishLayout";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Home" element={<Home />} />
            {/* Routes for English and Elevel components */}

            <Route path="/English/*" element={<EnglishLayout />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
