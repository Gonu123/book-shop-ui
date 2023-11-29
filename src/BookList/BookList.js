import BookCard from './BookCard/BookCard';
import "./BookList.styles.css";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";

const BookList = () => {
    const [bookList, setBookList] = useState([]);
    const [cartList, setCartList] = useState({});

    const onCheckOutClick = () => {
        console.log("Check Out")
    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/books")
            .then((response) => {
                setBookList(response?.data?.books)
            })
            .catch((error) => {
                console.log(error)
            });

    }, []);

    return (
        <>
            {
                bookList.length > 0 ?
                    <>
                        <div class="d-flex justify-content-between">
                            <p class="h1" id="header">Book Shop</p>
                            <Button onClick={onCheckOutClick} class="btn btn-primary" id="checkOut">Check Out</Button>
                        </div>
                        <div class="d-flex flex-wrap justify-content-evenly">
                            {
                                bookList.map(book => (
                                    <div class="bookCard">
                                        <BookCard book={book} cartList={cartList} setCartList={setCartList} />
                                    </div>
                                ))
                            }
                        </div>
                    </>


                    :
                    <p class="mt-2">No Books Available, Please try again after some time.</p>
            }
        </>

    );

}

export default BookList;
