import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {
  Card,
} from './BookCard.style';


const BookCard = ({ book }) => {


  return (
    <Card testID="book-card" >
      <Text>{book.name}</Text>
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
  }).isRequired,
};

export default BookCard;
