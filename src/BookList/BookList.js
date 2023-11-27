import React, { useEffect, useState } from 'react';
import axios from "axios";


const BookList = () => {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        // axios.get("baseURL").then((response) => {
        //     setPost(response.data);
        //   });
        setBookList([
            {
                "name":"Test"
            }
        ]);
    });

    return (
        <>
            <For each="book" of={bookList}>
                <BookCard book={book} />
            </For>

        </>
    )
}




export default BookList;
