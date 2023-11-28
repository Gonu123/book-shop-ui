import "./BookCard.styles.css";


function BookCard({ book }) {
  return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{book.name}</h5>
          <p class="card-text">{book.desc}</p>
        </div>
      </div>
  );
}

export default BookCard;
