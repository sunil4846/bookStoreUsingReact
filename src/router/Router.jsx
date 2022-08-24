import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import React from 'react'
import Login from '../pages/loginSignup/Login';
import MyCart from '../pages/MyCart/MyCart';
import Dashboard from '../pages/dashboard/Dashboard'
import MyWishlist from '../pages/myWishlist/MyWishlist';
import OrderSuccess from '../pages/orderSuccessful/OrderSuccess';
import QuickView from '../pages/quickView/QuickView';
// import Protected from './Protected';
function RouterNav() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/MyCart" element={<MyCart />} />
                    <Route path= "/Dashboard" element= {<Dashboard/>}/>
                    <Route path="/MyWishlist" element={<MyWishlist />} />
                    <Route path="/OrderSuccess" element={<OrderSuccess />} />
                    <Route path="/QuickView" element={<QuickView />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouterNav