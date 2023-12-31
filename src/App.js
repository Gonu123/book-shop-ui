import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUP from "./SignUP/SignUP";
import BookList from "./BookList/BookList";
import BuyBook from "./BuyBook/BuyBook"
import ViewOrder from "./ViewOrder/ViewOrder";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/SignUP" element={<SignUP />} />
        <Route path="/" element={<BookList />} />
        <Route path="/BuyBook" element={<BuyBook />} />
        <Route path="/ViewOrder" element={<ViewOrder />} />
      </Routes>
    </div>
  );
}

export default App;
