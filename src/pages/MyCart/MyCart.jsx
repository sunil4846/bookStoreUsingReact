import { Radio } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { getCartItem } from '../../services/DataServices'
import BookDetails from './BookDetails'
import CustomerDetails from './CustomerDetails'
import './MyCart.css'
import { useDispatch } from "react-redux";
import { getCartApiDetails, getModules } from '../../redux/actions/module';
import { useSelector } from 'react-redux';
import {connect} from 'react-redux';

function MyCart() {
    const [cartDetails, setCartDetails] = useState([])
    const [placeOrderBtn, setPlaceOrderBtn] = useState(false)
    const [getCartDetails, setGetCartDetails] = useState([])
    const dispatch = useDispatch()
    const placeOrder = () => {
        setPlaceOrderBtn(true)
    }

    const GetCartItem = () => {
        getCartItem().then((response) => {console.log(response); dispatch(getCartApiDetails(response.data.result)); setCartDetails(response.data.result) }).catch((error) => { console.log(error) })
    }
    
    const batchData = useSelector((state) => state.GetCartApiDetails);
    // console.log(state);
    const cartdetailsRedux = batchData.batchDetails
    console.log(cartdetailsRedux);
    // GetCartItem();
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
                                {
                                    cartdetailsRedux&&cartdetailsRedux.map((bookDetails)=><BookDetails bookDetails={bookDetails}/>)
                                }
                                {
                                    placeOrderBtn ? null :
                                        <button className='btnPlace' onClick={placeOrder}>PLACE ORDER</button>
                                }
                            </div>
                        </div>
                        {
                            placeOrderBtn ? <CustomerDetails /> : 
                            <div>
                                <div className='boxExternal'>
                                    <p id='textP'>Address Details</p>
                                </div>
                                <div className='boxExternal'>
                                    <p id='textP'>Order Summary</p>
                                </div>
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

export default connect()(MyCart)
