import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import BookList from './BookList/BookList';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <BookList />
      </header>
    </div>
  );
}

export default App;
