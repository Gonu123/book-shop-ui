import axios from "axios";
import { useEffect, useState } from "react";
import "./ViewOrder.styles.css";

const ViewOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8080/orders", {
            headers: {
                'accessToken': 'eyJraWQiOiJkZWZhdWx0IiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImF1ZCI6ImRlZmF1bHQiLCJuYmYiOjE3MDE0MTIxNTEsImF6cCI6ImJvb2tzaG9wIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDkwL2RlZmF1bHQiLCJleHAiOjE3MDE0MTU3NTEsImlhdCI6MTcwMTQxMjE1MSwibm9uY2UiOiI1Njc4IiwianRpIjoiN2NjZWY4MzUtMjQ0NC00NDgyLTg1ZGMtMjA0MzgyY2RlMTFjIiwidGlkIjoiZGVmYXVsdCJ9.HFbPD4McK4Mt1oYVaovDRFfVgFOrTY-niXcwFIehQ5-hMMMWogP6fjdu0j_Cv71BB9BjqDZ3qNV5cgQs719a8OK4FcXTZEMwREEEBC718i994wiyB7-Pu9zwG1qNgoa0I3FLF6i48343jW-RfCAlZzdhFeO6-SwM7AQeCQinMOIlYJWdv2XYy2xT_VZX7SN8Ajy9LovoAUqSpR1G0rl4CtoQ5bPCjky1s-rOt1dUtdf174BVpZb02YHaNBgY4_i_hAEGtRmkKYoX9MLcI2pB6-KFt5KIa2-o3nbCdoys1-qPkm6V2VMuuwYJOCwC1fuuylRjyk7Opl46_uc3P61bZA'
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
                                <p class="card-text">Total Price: ₹{order.totalPrice ? order.totalPrice !== null : 0}</p>
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
                                                        <p class="card-text">Price: ₹{item.price ? item.price !== null : 0}</p>
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