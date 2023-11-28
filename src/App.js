import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from './BookList/BookList';
import Header from './Header/Header';
import SignUP from './SignUP/SignUP';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <BookList />
        {/* <BookList /> */}
        <SignUP/>
      </header>
    </div>
  );
}

export default App;
