import React from 'react';
import PropTypes from 'prop-types';
import {
  BookCard,
} from './BookCard.style';


const BookCard = ({ book }) => {
  

  return (
    <BookCard testID="book-card" >
      <Text>{book.name}</Text>
    </BookCard>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
  }).isRequired,
};

export default BookCard;
