import "./Header.styles.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Header = ({ isBookAvailable, cartList }) => {

  const navigate = useNavigate();

  const onCheckOutClick = () => {
    navigate("/BuyBook", { state: { cartList } })
  }

  const onLoginClick = () => {
    navigate("/Login")
  }

  const onSignUpClick = () => {
    navigate("/SignUP")
  }


  return (
    <>
      {isBookAvailable ? (
        <div class="d-flex justify-content-between ml-10">
          <p class="h1" id="header">
            Book Shop
          </p>
          <Button class="btn btn-primary" id="login" onClick={onLoginClick}>
            Log in
          </Button>
          <Button class="btn btn-primary" id="signup" onClick={onSignUpClick}>
            Sign Up
          </Button>
          <Button class="btn btn-primary" id="checkOut" onClick={onCheckOutClick} disabled={Object.keys(cartList).length === 0}>
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
