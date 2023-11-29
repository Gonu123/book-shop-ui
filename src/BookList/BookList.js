import BookCard from './BookCard/BookCard';
import "./BookList.styles.css";
import axios from "axios";
import { useEffect, useState } from 'react';

function BookList() {
    const [bookList,setBookList] = useState([]);
    const [cartList, setCartList] = useState({});

    useEffect(()=>{
        axios
            .get("http://localhost:8080/books")
            .then((response) => {
                setBookList(response?.data?.books)
            })
            .catch((error) => {
                console.log(error)
            });

    },[]);
    
    return (
        <div class="d-flex flex-wrap justify-content-evenly">
            {
                bookList.length>0 ?
                    bookList.map(book => (
                        <div class="bookCard">
                            <BookCard book={book} cartList={cartList} setCartList={setCartList} />
                        </div>
                    ))
                :
                    <p class="mt-2">No Books Available, Please try again after some time.</p>
            }
        </div>
    );
}

export default BookList;
