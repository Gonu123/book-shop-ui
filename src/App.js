import './App.css';
import BookList from './BookList/BookList';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          BookShop Demo 2
        </p>
        <BookList />
      </header>
    </div>
  );
}

export default App;
