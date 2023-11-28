import "./BookCard.styles.css";


function BookCard({ book }) {
  return (
    <div class="card">
      <div class="card-body d-flex flex-row d-grid gap-5">
        <div class="d-flex flex-column justify-content-evenly d-grid gap-1 leftColumn">
          <img class="card-img" src="http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg" alt="Card image cap" />
          <a href="#" class="btn btn-primary buyNow">Buy Now</a>
          <div class="d-flex flex-row addToCart">
            <a href="#" class="btn btn-primary minus">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-minus" viewBox="4 1 16 16">
                <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
              </svg>
            </a>
            <input type="text" class="form-control inputNumber" />
            <a href="#" class="btn btn-primary plus">
              <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-plus" width="30" height="30" fill="currentColor" viewBox="4 1 16 16" >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </a>
          </div>
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
