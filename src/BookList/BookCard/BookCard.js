import "./BookCard.styles.css";
import { Button } from "react-bootstrap";

const BookCard = ({ book, cartList, setCartList }) => {
  
  const onPlusClick = () => {
    const currentValue = parseInt(document.getElementById(`inputNumber_` + book.isbn).value);
    let newCartList = {
      ...cartList,
    }
    newCartList[book.isbn] = currentValue + 1
    setCartList(newCartList);
    document.getElementById(`inputNumber_` + book.isbn).value = currentValue + 1;
  }

  const onMinusClick = () => {
    const currentValue = parseInt(document.getElementById(`inputNumber_` + book.isbn).value);
    let newCartList = {
      ...cartList,
    }
    if (currentValue > 1) {
      newCartList[book.isbn] = currentValue - 1
      setCartList(newCartList);
      document.getElementById(`inputNumber_` + book.isbn).value = currentValue - 1;
    }
    else {
      delete newCartList[book.isbn]
      setCartList(newCartList);
      document.getElementById(`inputNumber_` + book.isbn).value = 0;
    }
  }

  return (
    <div class="card" style={book.booksAvailable > 0 ? {backgroundColor:"lightgrey"} : {backgroundColor:"white"}}>
      <div class="card-body d-flex flex-row d-grid gap-5">

        <div class="d-flex flex-column justify-content-evenly d-grid gap-1 leftColumn">
          <img class="card-img" src={book.imageUrlM} alt="" />
          <div class="d-flex flex-row addToCart">
            <Button onClick={onMinusClick} class="btn btn-primary" disabled={book.booksAvailable > 0} id="minus">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-minus" viewBox="4 1 16 16">
                <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" />
              </svg>
            </Button>
            <input type="tel" id={`inputNumber_` + book.isbn} class="inputNumber" defaultValue="0" disabled={book.booksAvailable > 0} />
            <Button onClick={onPlusClick} class="btn btn-primary" disabled={book.booksAvailable > 0} id="minus">
              <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-plus" width="30" height="30" fill="currentColor" viewBox="4 1 16 16" >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </Button>
          </div>
        </div>

        <div class="d-flex flex-column justify-content-evenly d-grid gap-1 rightColumn">
          <h5 class="card-title">{book.name}</h5>
          <p class="card-text">Written By {book.author}</p>
          <p class="card-text">₹ {book.price}</p>
        </div>

      </div>
    </div>
  );
}

export default BookCard;
