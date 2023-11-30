import "./Header.styles.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = ({ isBookAvailable, cartList }) => {

  const onCheckOutClick = () => {
    console.log("Check Out", cartList)
  }

  return (
    <>
      {isBookAvailable ? (
        <div class="d-flex justify-content-between ml-10">
          <p class="h1" id="header">
            Book Shop
          </p>
          
            <Link to="Login">
              <Button class="btn  btn-secondary" id="checkOut">
                Login
              </Button>
            </Link>
            <Link to="SignUp">
              <Button class="btn  btn-secondary" id="checkOut">
                SignUp
              </Button>
            </Link>
          <Button
            onClick={onCheckOutClick}
            class="btn btn-primary"
            id="checkOut"
            disabled={Object.keys(cartList).length === 0}
          >
            Check Out
          </Button>
          </div>)
       : (
        <div class="d-flex flex-column justify-content-center">
          <p class="h1" id="header">
            Book Shop
          </p>
          <p class="mt-2" id="noBookText">
            No Books Available, Please try again after some time.
          </p>
        </div>
      )}
    </>
  );
}

export default Header;
