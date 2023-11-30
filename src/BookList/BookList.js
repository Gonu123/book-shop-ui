import BookCard from "./BookCard/BookCard";
import "./BookList.styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
const BookList = () => {
  const [bookList, setBookList] = useState([]);
  const [cartList, setCartList] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/books")
      .then((response) => {
        setBookList(response?.data?.books);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <>
      <Header isBookAvailable={bookList.length > 0} cartList={cartList} />
      {bookList.length > 0 ? (
        <>
          {bookList.length > 0 ? (
            <div>
              <div class="d-flex flex-wrap justify-content-evenly">
                {bookList.map((book) => (
                  <div class="bookCard">
                    <BookCard
                      book={book}
                      cartList={cartList}
                      setCartList={setCartList}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : <></>
      }
    </>
  );
}

export default BookList;
