import React, { useEffect, useState } from 'react'
import { getCartItem, orderSummaryApi } from '../../services/DataServices';
import { useNavigate } from "react-router-dom";

function OrderSummary() {
    const navigate = useNavigate();
    // console.log("first",props.bookDetails)
    const [cartMain, setCartMain] = useState([]);
    const orderFun = () => {
        const orders = [];
        for (let i = 0; i < cartMain.length; i++) {
            orders.push({
                "product_id": cartMain[i].product_id._id,
                "product_name": cartMain[i].product_id.bookName,
                "product_quantity": cartMain[i].product_id.quantity,
                "product_price": cartMain[i].product_id.discountPrice,
            })
        }
        console.log(orders);
        orderSummaryApi(orders).then((response) => { console.log(response); navigate('/OrderSuccess') }).catch((error) => { console.log(error) })
    }
    console.log(cartMain)

    useEffect(() => {
        getCartItem().then((response) => {console.log(response); setCartMain(response.data.result); }).catch((error) => { console.log(error); });
    },[])
    return (
        <div> 
            <div className='orderSummary'>
                <div className='orderSummaryDiv'>
                    <div className='customerText'>
                        <h4>Order Summary</h4>
                    </div>
                    {cartMain.map((cart)=> (
                        <div className='bookNImg'>
                            <img src='./images/Image12.png' alt='' className='bookImageCart' />
                            <div style={{marginLeft:"20px"}}>
                                <p className='bookNameView'>{cart.product_id.bookName}</p>
                                <p className='authorView'>by {cart.product_id.author}</p>
                                <p className='priceTagView'>Rs.{cart.product_id.discountPrice}</p>
                                <span className='OriginalPriceView'>(RS.{cart.product_id.price})</span>
                            </div>
                        </div>
                    ))
                    }
                    <div>
                        <button className='btnCheckOut' onClick={orderFun}>CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary