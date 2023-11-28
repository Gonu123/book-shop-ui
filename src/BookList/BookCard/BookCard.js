import "./BookCard.styles.css";


function BookCard({ book }) {
  return (
    <div class="card">
      <div class="card-body d-flex flex-row d-grid gap-5">
        <div class="d-flex flex-column justify-content-evenly d-grid gap-1 leftColumn">
          <img class="card-img" src="http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg" alt="Card image cap" />
          <a href="#" class="btn btn-primary buyNow">Buy Now</a>
          <a href="#" class="btn btn-primary addToCart">Add to cart</a>
        </div>

        <div class="d-flex flex-column justify-content-evenly d-grid gap-1 rightColumn">
          <h5 class="card-title">{book.name}</h5>
          <p class="card-text">{book.author}</p>
          <p class="card-text">{book.isbn}</p>
          <p class="card-text">{book.price}</p>
          <p class="card-text">{book.booksAvailable}</p>
          <p class="card-text">{book.publicationYear}</p>
          <p class="card-text">{book.description}</p>
          <p class="card-text">{book.rating}</p>
        </div>





      </div>
    </div>
  );
}

export default BookCard;
