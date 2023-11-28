import BookCard from './BookCard/BookCard';
import "./BookList.styles.css";

function BookList() {
    const bookList = [
        {
            "name": "Test 1",
            "desc": "This is the description of test 1"
        },
        {
            "name": "Test 2",
            "desc": "This is the description of test 2"
        },
        {
            "name": "Test 3",
            "desc": "This is the description of test 3"
        },
        {
            "name": "Test 4",
            "desc": "This is the description of test 4"
        },
        {
            "name": "Test 5",
            "desc": "This is the description of test 5"
        }

    ];

    return (
        <div class="bookCardParent">
            {bookList.map(book => (
                <div class="bookCard">
                    <BookCard book={book} />
                </div>
            ))}
        </div>
    );
}

export default BookList;
