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
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${addWishlistObj}`,null,headerConfig);
    return response;
}
