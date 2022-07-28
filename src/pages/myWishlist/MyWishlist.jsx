import React from 'react'
import './myWishlist.css'
import Header from '../../components/header/Header'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function MyWishlist() {
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
                    <div className='detailsWish'>
                        <div className='innerDivWish'>
                            <div className='bookNImg'>
                                <img src='./images/Image12.png' alt='' className='bookImageWish' />
                                <div>
                                    <p className='bookNameView'>bookName</p>
                                    <p className='authorView'>by author</p>
                                    <p className='priceTagView'>Rs.discountPrice</p>
                                    <span className='OriginalPriceView'>(RS.price)</span>
                                </div>
                            </div>
                            <div>
                                <DeleteOutlineIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWishlist