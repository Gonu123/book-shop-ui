import "./BuyBook.styles.css";
import { Button } from "react-bootstrap";


const BuyBook = () => {

    const cartList = {
        "0195153448": {
            "name": "Classical Mythology",
            "price": 256.22242641102025,
            "count": 2,
        },
        "0195153449": {
            "name": "Test 2",
            "price": 356.22242641102025,
            "count": 3,
        },
        "0195153450": {
            "name": "Test 3",
            "price": 100.22242641102025,
            "count": 1,
        },
    }
    let totalPrice = 0;

    const calculateTotalPrice = () => {
        Object.keys(cartList).forEach((isbn) => (
            totalPrice += parseFloat(cartList[isbn].count) * parseFloat(cartList[isbn].price)
        ))
    }

    const onBuyNowClick = () => {
        console.log("Clicked Buy Now")
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
                        <div class="mb-3" id="address">
                            <h5>Address</h5>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                        <Button onClick={onBuyNowClick} class="btn btn-primary" id="buyNow">Buy Now</Button>
                    </>
                    : <></>

            }
        </>
    )
}

export default BuyBook;