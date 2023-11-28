import './App.css';
import BookList from './BookList/BookList';
import "bootstrap/dist/css/bootstrap.min.css";
import SignUP from './SignUP/SignUP';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BookList /> */}
        <SignUP/>
      </header>
    </div>
  );
}

export default App;
