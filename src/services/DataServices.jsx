import axios from 'axios';

const headerConfig = {
    headers: {
        'x-access-token': localStorage.getItem('token')
    }
}

//get book api
export const getBooks = () => {
    let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",headerConfig);
    return response;
}

//add to cart api
export const addToBagApi = (addBagObj) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${addBagObj}`,null,headerConfig);
    return response;
}

//get my cart item api
export const getCartItem = () => {
    let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items",headerConfig);
    return response;
}

//add to wishlist api
export const addToWishlistApi = (addWishlistObj) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${addWishlistObj}`,null,headerConfig);
    return response;
}

//get my wishlist item api
export const getWishlistItem = () => {
    let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items",headerConfig);
    return response;
}

//update api
export const updateApi = (data) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${data.id}`,data,headerConfig);
    return response;
}

//delete api
export const deleteApi = (deleteObj) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${deleteObj}`,headerConfig);
    return response;
}

//update api customer details
export const updateCustomerApi = (data) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`,data,headerConfig);
    return response;
}

//order summary api
export const orderSummaryApi = (orderObj) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`,orderObj,headerConfig);
    return response;
}