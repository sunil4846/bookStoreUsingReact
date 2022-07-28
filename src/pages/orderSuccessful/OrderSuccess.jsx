import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './orderSuccess.css'

function OrderSuccess() {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='orderSuccess'>
            <img src='./images/placeOrder.png' alt=''/>
            <p>hurray!!! your order is confirmed</p>
            <p>the order id is #123456 save the order id for</p>
            <p>further communication</p>
            <div className='headerTextOrder'>
                <span>Email Us</span>
                <span>Contact Us</span>
                <span>Address</span>
            </div>
            <div className='detailsOrder'>
                <div id='emailOrder'>
                    <span>admin@bookstore.com</span>
                </div>
                <div id='contactOrder'>
                    <span>+91 9876543210</span>
                </div>
                <div id='addressOrder'>
                    <p>42,14th main,15th cross sector 4 opp to BDA <br/> Banglore 560034</p>
                </div>
            </div>
            <div>
                <button className='btnCS'>Continue Shopping</button>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default OrderSuccess