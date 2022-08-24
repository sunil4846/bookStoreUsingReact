import React, { useEffect, useState } from 'react'
import './quickView.css'
import Header from '../../components/header/Header'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { addToBagApi, addToWishlistApi, getCartItem, getWishlistItem,updateApi } from '../../services/DataServices';
import MyCart from '../MyCart/MyCart';

function QuickView(props) {
    const [getCartDetails, setGetCartDetails] = useState([])
    const [cartId, setCartId] = useState([])
    const [getWishlistDetails, setGetWishlistDetails] = useState([])
    const [wishlistId, setWishlistId] = useState([])
    const [quantityAdd, setQuantityAdd] = useState([])
    const addToBag = () => {
        let data = props.bookView._id;
        addToBagApi(data).then((response) => { console.log(response); }).catch((error) => { console.log(error) })
    }

    const addToWishlist = () => {
        let data = props.bookView._id;
        addToWishlistApi(data).then((response) => { console.log(response); }).catch((error) => { console.log(error) })
    }

    const GetWishlistItem = () => {
        getWishlistItem().then((response)=>{
            console.log(response);
            setWishlistId(response.data.result);
        }).catch((error)=>{
            console.log(error);    
        })
    }

    const GetCartItem = () => {
        getCartItem().then((response) => {
            console.log(response);
            let filter = [];
            filter = response.data.result.filter((cart) => {
                if (cart.product_id._id === props.bookView._id) {
                    setCartId(cart._id)
                    setQuantityAdd(cart.quantityToBuy) 
                    return cart;
                }
            })
            setGetCartDetails(filter)
        }).catch((error) => { console.log(error) })
    }

    // const GetWishlistItem = () => {
    //     getWishlistItem().then((response) => {
    //         console.log(response);
    //         let filterWishlist = [];
    //         filterWishlist = response.data.result.filter((wishList) => {
    //             if (wishList.product_id._id === props.bookView._id) {
    //                 setWishlistId(wishList._id)
    //                 // setQuantityAdd(wishList.quantityToBuy) 
    //                 return wishList;
    //             }
    //         })
    //         setGetWishlistDetails(filterWishlist)
    //     }).catch((error) => { console.log(error) })
    // }

    const increment = () =>{
        let cartIdInc = {
            id:cartId,
            quantityToBuy: quantityAdd + 1
        } 
        console.log(cartIdInc);
        updateApi(cartIdInc).then((response)=>{console.log(response);
            GetCartItem()   
        } ).catch((error)=> console.log(error))
    }

    const decrement = () => {
        let cartIdInc = {
            id:cartId,
            quantityToBuy: quantityAdd - 1
        } 
        console.log(cartIdInc);
        updateApi(cartIdInc).then((response)=>{console.log(response);
            GetCartItem() 
        } ).catch((error)=> console.log(error))    
    }

    useEffect(() => {
        GetCartItem();
        // GetWishlistItem();
        // increment();
        // decrement();
    }, [])

    useEffect(()=>{
        GetWishlistItem();
    },[])

    return (
        <div className='view'>
            {/* <div>
                <Header />
            </div> */}
            <div className='quickViewDiv'>
                <div id='idBookTextView'>
                    <h4>Home/</h4>
                    <span>Book(01)</span>
                </div>
                <div className='viewRow'>
                    <div className='imgViewC'>
                        <img src='./images/Image12.png' alt='' className='bookImageView' />
                        <img src='./images/Image46.png' alt='' className='bookImageView' />
                    </div>
                    <div className='bookImgDiv'>
                        <div className='largeImgDiv'>
                            <img src='./images/Image22.png' alt='' className='largeBookImage' />
                        </div>
                        <div className='btnView'>
                            {
                                (cartId.length === 0) ?

                                    <button id='bagBtn' onClick={addToBag}>ADD TO BAG</button> :
                                    <div className='btnPM'>
                                        <div id='btnSign' onClick={decrement}>-</div>
                                        <div id='btnNo'>{quantityAdd}</div>
                                        <div id='btnSign' onClick={increment}>+</div>
                                        {/* <h4>Remove</h4> */}
                                    </div>
                            }
                            {
                                (wishlistId.length === 0) ?
                                <button id='wishlistBtn' onClick={addToWishlist}>❤ WISHLIST</button> : 
                                <button>❤</button>
                            }
                            {/* <button id='wishlistBtn' onClick={addToWishlist}>WISHLIST</button> */}
                        </div>
                    </div>
                    <div className='detailsView'>
                        <p className='bookNameView'>{props.bookView.bookName}</p>
                        <p className='authorView'>by {props.bookView.author}</p>
                        <div>
                            <button className='ratingBtnView'>4.5*</button>
                            <span>({props.bookView.quantity})</span>
                        </div>
                        <div className='priceDivView'>
                            <p className='priceTagView'>Rs.{props.bookView.discountPrice}</p>
                            <span className='OriginalPriceView'>(RS.{props.bookView.price})</span>
                        </div>
                        <hr style={{ width: "100%", marginTop: "15px" }} />
                        <div>
                            <p>{props.bookView.description}</p>
                        </div>
                        <hr style={{ width: "100%", marginTop: "15px" }} />
                        <p style={{ fontWeight: '500' }}>Customer Feedback</p>
                        <div className='overallRating'>
                            <p style={{ marginLeft: '5px', color: '#0A0102' }}>Overall Rating</p>
                            <div style={{ marginLeft: '5px', color: '#707070' }}>
                                <StarOutlineOutlinedIcon />
                                <StarOutlineOutlinedIcon />
                                <StarOutlineOutlinedIcon />
                                <StarOutlineOutlinedIcon />
                                <StarOutlineOutlinedIcon />
                            </div>
                            <textarea className='textAreaInput' placeholder='write your Feedback'></textarea>
                            <button className='btnSubmitFeed'>Submit</button>
                        </div>
                        <div className='feedBack'>
                            <div className='feedbackName'>
                                <div >name</div>
                                <p>name</p>
                            </div>
                            <div style={{ marginLeft: '5px', color: '#707070' }}>
                                <StarOutlineOutlinedIcon />
                                <StarOutlineOutlinedIcon />
                                <StarOutlineOutlinedIcon />
                                <StarOutlineOutlinedIcon />
                                <StarOutlineOutlinedIcon />
                            </div>
                            <p>feedBack</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default QuickView