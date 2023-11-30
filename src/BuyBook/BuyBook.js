import "./BuyBook.styles.css";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom"


const BuyBook = () => {
    const location = useLocation();
    const cartList = location.state?.cartList

    let totalPrice = 0;

    const calculateTotalPrice = () => {
        Object.keys(cartList).forEach((isbn) => (
            totalPrice += parseFloat(cartList[isbn].count) * parseFloat(cartList[isbn].price)
        ))
        totalPrice = totalPrice.toFixed(2);
    }

    const onBuyNowClick = () => {
        if(document.getElementById("address").value===""){
            alert("Please add address to continue purchase")
        }
        else{
            console.log("Clicked Buy Now")
        }
      }

    return (
        <>
            {calculateTotalPrice()}
            {

                Object.keys(cartList).length > 0 ?
                    <>
                        <h2 id="title">Buy Book</h2>
                        <div class="d-flex flex-column d-grid gap-3" id="cartList">
                            {
                                Object.keys(cartList).map((isbn) => (
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <h5 class="card-title">{cartList[isbn].name}</h5>
                                                <p class="card-text">{cartList[isbn].count} x {cartList[isbn].price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <h3 id="totalPrice">Total Price  =  ₹ {totalPrice}</h3>
                        <div class="mb-3" id="addressBox">
                            <h5>Address</h5>
                            <textarea class="form-control" rows="3" id="address"></textarea>
                        </div>
                        <Button onClick={onBuyNowClick} class="btn btn-primary" id="buyNow">Buy Now</Button>
                    </>
                    : <></>

            }
        </>
    )
}

export default BuyBook;