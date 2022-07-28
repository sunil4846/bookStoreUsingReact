import { Radio } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { getCartItem } from '../../services/DataServices'
import './MyCart.css'

function MyCart() {
    const [cartDetails, setCartDetails] = useState([])
    const [placeOrderBtn, setPlaceOrderBtn] = useState(false)
    const [continueBtn, setContinueBtn] = useState(false)
    const [orderBtn, setOrderBtn] = useState(false)
    
    const placeOrder = () => {
        setPlaceOrderBtn(true)
    }

    const showContinue = () => {
        setContinueBtn(true)
    }

    const GetCartItem = () =>{
        getCartItem().then((response) => { console.log(response); setCartDetails(response.data.result)}).catch((error) => { console.log(error) })
    }
    console.log(cartDetails.product_id);
    React.useEffect(() => {
        GetCartItem();
    }, []);
    return (
        <>
            <div>
                <div>
                    <Header />
                </div>
                <div className='myCartDiv'>
                    <div className='myCart'>
                        <div id='idBookTextCart'>
                            <h4>Home/</h4>
                            <span>My Cart</span>
                        </div>
                        <div className='myCartBook'>
                            <div className='bookBox'>
                                <div className='myCartText'>
                                    <h4>My Cart(1)</h4>
                                    <select><option>Use current location</option></select>
                                </div>
                                <div className='bookNImg'>
                                    <img src='./images/Image12.png' alt='' className='bookImageCart' />
                                    <div>
                                    {/* {
                                        cartDetails.map((bookData)=>(
                                            
                                        ))
                                    } */}
                                        <p className='bookNameView'>{cartDetails.product_id.bookName}</p>
                                        <p className='authorView'>by {cartDetails.product_id.author}</p>
                                        <p className='priceTagView'>Rs.{cartDetails.product_id.discountPrice}</p>
                                        <span className='OriginalPriceView'>(RS.{cartDetails.product_id.price})</span>
                                        <div className='btnPM'>
                                            <div id='btnSign'>-</div>
                                            <div id='btnNo'>1</div>
                                            <div id='btnSign'>+</div>
                                            <h4>Remove</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                {
                                    placeOrderBtn ? null :
                                
                                    <button className='btnPlace' onClick={placeOrder}>PLACE ORDER</button>
                                }
                                </div>
                            </div>
                        </div>
                        {placeOrderBtn ?
                            <div className='customerDetails'>
                                <div className='customerDiv'>
                                    <div className='customerText'>
                                        <h4>Customer Details</h4>
                                        <button className='btnAdd'>Add New Address</button>
                                    </div>
                                    <div className='inputBoxNM'>
                                        <div className='inputName'>
                                            <label>Full Name</label>
                                            <input type='text' id='inputBoxName' />
                                        </div>
                                        <div className='inputMNumber'>
                                            <label>Mobile Number</label>
                                            <input type='text' id='inputBoxMNo' />
                                        </div>
                                    </div>
                                    <div className='textAreaDiv'>
                                        <label>Address</label>
                                        <textarea id='textArea'></textarea>
                                    </div>
                                    <div className='inputBoxCityS'>
                                        <div className='inputCity'>
                                            <label>City/town</label>
                                            <input type='text' id='inputBoxCity' />
                                        </div>
                                        <div className='inputState'>
                                            <label>State</label>
                                            <input type='text' id='inputBoxState' />
                                        </div>
                                    </div>
                                    <div className='typeRadio'>
                                        <label>Type</label>
                                        <div className='selectRadio'>
                                            <Radio name='radio' /><span>Home</span>
                                            <Radio name='radio' /><span>Work</span>
                                            <Radio name='radio' /><span>Other</span>
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            continueBtn ? null :
                                            <button className='btnContinue' onClick={showContinue}>Continue</button>
                                        }
                                    </div>
                                </div>
                            </div> :
                            <div className='boxExternal'>
                                <p id='textP'>Address Details</p>
                            </div>
                        }

                        {/* order summary start here */}
                        {continueBtn ?
                            <div className='orderSummary'>
                                <div className='orderSummaryDiv'>
                                    <div className='customerText'>
                                        <h4>Order Summary</h4>
                                    </div>
                                    <div className='bookNImg'>
                                        <img src='./images/Image12.png' alt='' className='bookImageCart' />
                                        <div>
                                            <p className='bookNameView'>bookName</p>
                                            <p className='authorView'>by author</p>
                                            <p className='priceTagView'>Rs.discountPrice</p>
                                            <span className='OriginalPriceView'>(RS.price)</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='btnCheckOut'>CheckOut</button>
                                    </div>
                                </div>
                            </div> :
                            <div className='boxExternal'>
                                <p id='textP'>Order Summary</p>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default MyCart