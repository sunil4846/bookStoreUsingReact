import axios from 'axios';

// user signup api
export const signUp = (loginObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration", loginObj);
    return response;
}

// user login api
export const login = (signUpObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login", signUpObj);
    return response;
}