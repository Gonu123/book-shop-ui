import axios from "axios";
import { useEffect, useState } from "react";
import "./ViewOrder.styles.css";
//import { useLocation } from "react-router-dom";


const ViewOrder = () => {
    const [orders, setOrders] = useState([]);
    //const location = useLocation();
    //const access_token = location.state?.accessToken;
    //console.log(access_token);

    useEffect(() => {

        axios.get("http://localhost:8080/orders", {
            headers: {
                'accessToken': "access_token"
            }
        }).then((response) => {
            setOrders(response?.data?.orders);
        }).catch((error) => {
            console.log(error)
        });


    }, []);

    return (
        <>
            <p class="h1" id="viewOrderTitle">
                View your order
            </p>
            {
                orders.length > 0 ?
                    orders.map((order) => (
                        <div id="order">
                            <div id="orderDetails">
                                <h5 class="card-text">Order Id: {order.orderId}</h5>
                                <p class="card-text">Address: {order.address}</p>
                                <p class="card-text">Mode Of Payment: {order.modeOfPayment}</p>
                                <p class="card-text">Order Date: {order.orderDate}</p>
                                <p class="card-text">Total Price: ₹{order.totalPrice !== null ? order.totalPrice : 0}</p>
                            </div>
                            {
                                order.items.map((item) => (
                                    <div id="book">
                                        <div class="d-flex flex-column mb-2" >
                                            <div class="card">
                                                <div class="card-body d-flex flex-row d-grid gap-5">

                                                    <div class="d-flex flex-column justify-content-evenly">
                                                        <img class="card-img" id="bookImg" src={item.imageURL} alt="" />
                                                    </div>

                                                    <div class="d-flex flex-column justify-content-evenly">
                                                        <h5 class="card-title">Name: {item.name}</h5>
                                                        <p class="card-text">Author: {item.subText}</p>
                                                        <p class="card-text">Quantity: {item.quantity}</p>
                                                        <p class="card-text">Price: ₹{item.price!==null ? item.price : 0}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                    :
                    <p class="mt-2" id="noOrderText">
                        No order placed yet, Please place order to see your orders.
                    </p>
            }
        </>
    );
}

export default ViewOrder;