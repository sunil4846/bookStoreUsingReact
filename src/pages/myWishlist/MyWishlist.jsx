import React, { useEffect, useState } from 'react'
import './myWishlist.css'
import Header from '../../components/header/Header'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getWishlistItem} from '../../services/DataServices';
import Footer from '../../components/footer/Footer';

function MyWishlist() {
    const [getWishlistDetails, setGetWishlistDetails] = useState([])
    const [wishlistId, setWishlistId] = useState([])
    const showWishlistItem = () => {
        getWishlistItem().then((response) => {
            console.log(response);
            setGetWishlistDetails(response.data.result)
            // // let someId = 
            // let filterWishlist = [];
            // filterWishlist = response.data.result.filter((wishList) => {
            //     if (wishList.product_id._id === props.bookDetails.product_id._id ) {
            //         setWishlistId(wishList._id)
            //         // setQuantityAdd(wishList.quantityToBuy) 
            //         return wishList;
            //     }
            // })
            // setGetWishlistDetails(filterWishlist);
            // console.log("some",getWishlistDetails)
        }).catch((error) => { console.log(error) })
    }
    // console.log(bookDetails);
    
    useEffect(()=>{
        showWishlistItem();
    },[])
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='myWishlist'>
                <div className='myWishlistDiv'>
                    <div id='idBookTextwish'>
                        <h4 style={{ color: '#DBDBDB' }}>Home/</h4>
                        <h4>My WishList</h4>
                    </div>
                    <div className='textWishlist'>
                        <h4>My WishList(02)</h4>
                    </div>
                    {
                        getWishlistDetails.map((wish)=>
                    <div className='detailsWish'>
                    
                        <div className='innerDivWish'>
                            <div className='bookNImg'>
                                <img src='./images/Image12.png' alt='' className='bookImageWish' />
                                <div style={{marginLeft:"25px"}}>
                                    <p className='bookNameView'>{wish.product_id.bookName}</p>
                                    <p className='authorView'>by {wish.product_id.author}</p>
                                    <p className='priceTagView'>Rs.{wish.product_id.discountPrice}</p>
                                    <span className='OriginalPriceView'>(RS.{wish.product_id.price})</span>
                                </div>
                            </div>
                            <div>
                                <DeleteOutlineIcon />
                            </div>
                        </div>
                       
                    </div>
                    )
                    }
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default MyWishlist