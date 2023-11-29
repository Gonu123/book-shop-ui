import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUP from "./SignUP/SignUP";
import BookList from "./BookList/BookList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="SignUP" element={<SignUP />} />
        <Route path="/" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
