import "./Header.styles.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
const Header = ({ isBookAvailable, cartList }) => {
  const [userName, setUserName] = useState("");
  const [loginVisible, setLoginVisible] = useState(true);

  const navigate = useNavigate();

  const onCheckOutClick = () => {
    navigate("/BuyBook", { state: { cartList } })
  }
  useEffect( () => {
    const url = new URL(window.location.href);
    console.log(url);
    const code = url.searchParams.get("code");
    console.log(url, code);
    if (code) {
      const data = {
        code: code,
        grant_type: "authorization_code",
        scope: "openid role",
        redirect_uri: "http://localhost:3000",
        client_id: "bookshop",
      };

      var formBody = [];
      for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }

      formBody = formBody.join("&");
      fetch("http://localhost:8090/default/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          origin: "http://localhost:3000",
        },
        body: formBody,
      })
        .then((response) => {
          return response.json();
        })
        .then( (responseJson) => {
          Validation(responseJson.access_token);
        });
    }
  }, []);
  const Validation = async (accessToken) => {
    const headers = {
      accessToken: accessToken, // Modify or add headers as needed
    };
    const url = "http://localhost:8080/idp/user";
    await axios
      .get(url, { headers })
      .then((response) => {
        alert("Welcome " + response.data.name);
        setUserName(response.data.name);
        setLoginVisible(false);
      })
      .catch((err) => {
        alert(err.response.data.errCode);
        // console.log("error",err);
      });
  };

  // const onLoginClick = () => {
  //   navigate("http://localhost:8090/default/authorize?client_id=debugger&scope=openid+role&response_type=code&response_mode=query&state=1234&nonce=5678&redirect_uri=http%3A%2F%2Flocalhost%3A3000");
  // }

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
          {loginVisible ? (
            <Link to="http://localhost:8090/default/authorize?client_id=debugger&scope=openid+role&response_type=code&response_mode=query&state=1234&nonce=5678&redirect_uri=http%3A%2F%2Flocalhost%3A3000">
              <Button class="btn btn-primary" id="login">
                Login
              </Button>
            </Link>
          ) : (
            <h2>{userName}</h2>
          )}
          <Button class="btn btn-primary" id="signup" onClick={onSignUpClick}>
            Sign Up
          </Button>
          <Button
            class="btn btn-primary"
            id="checkOut"
            disabled={Object.keys(cartList).length === 0}
            onClick={onCheckOutClick}
          >
            Check Out
          </Button>
        </div>
      ) : (
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
};

export default Header;
