import BookCard from './BookCard/BookCard';

function BookList(book) {
    const bookList = [{
        "name": "Test"
    }];

    return (
        <BookCard book={bookList[0]} />
    );
  }

export default BookList;
