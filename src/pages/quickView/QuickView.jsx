import React, { useEffect, useState } from 'react'
import './quickView.css'
import Header from '../../components/header/Header'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { addToBagApi, addToWishlistApi, getCartItem } from '../../services/DataServices';
import MyCart from '../MyCart/MyCart';

function QuickView(props) {
    const [getCartDetails,setGetCartDetails] = useState([])    
    const addToBag = () => {
        // setBookObj(prevState=>({...prevState,_id:props.bookView._id}));
        console.log(props.bookView._id);
        let data = props.bookView._id;
        addToBagApi(data).then((response) => { console.log(response); }).catch((error) => { console.log(error) })
    }

    const addToWishlist = () => {
        let data = props.bookView._id;
        addToWishlistApi(data).then((response) => { console.log(response); }).catch((error) => { console.log(error) })    
    }

    const GetCartItem = () =>{
        getCartItem().then((response) => { console.log(response); setGetCartDetails(response.data.result)}).catch((error) => { console.log(error) })
    }

    useEffect(()=>{
        
    })

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
                            <button id='bagBtn' onClick={addToBag}>ADD TO BAG</button>
                            <button id='wishlistBtn' onClick={addToWishlist}>WISHLIST</button>
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