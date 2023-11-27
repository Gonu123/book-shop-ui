import React, { useEffect, useState } from 'react';
import BookCard from './BookCard/BookCard';


const BookList = () => {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        // axios.get("baseURL").then((response) => {
        //     setPost(response.data);
        //   });
        setBookList([
            {
                "name": "Test"
            }
        ]);
    });

    return (
        <>
            {
                bookList.forEach((book) => {
                    <BookCard book={book} />
                })
            }
        </>
    )
}




export default BookList;
