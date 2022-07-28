import React from 'react'
import './books.css'

function Books(props) {
  // console.log(book);
  const listenToBook = (data) => {
    props.books(data);
  }
  return (
    <div className='booksCard' onClick={()=>listenToBook(props.book)}>
      <div className='booksImg'>
        <img src='./images/Image1.png' alt='' className='bookImage' />  
      </div>   
      <div className='booksDetails'>
        <p className='bookName'>{props.book.bookName}</p>
        <p>{props.book.author}</p>
        <div>
          <button className='ratingBtn'>4.5*</button>
          <span>({props.book.quantity})</span>
        </div>
        <div className='priceDiv'>
          <p className='priceTag'>Rs.{props.book.discountPrice}</p>
          <span className='OriginalPrice'>(RS.{props.book.price})</span>
        </div>
      </div>
    </div>
  )
}

export default Books