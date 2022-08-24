import './App.css';
import Books from './components/books/Books';
import Dashboard from './pages/dashboard/Dashboard';
// import Header from './components/header/Header';
import Login from './pages/loginSignup/Login';
import Signup from './pages/loginSignup/Signup';
import MyCart from './pages/MyCart/MyCart';
import MyWishlist from './pages/myWishlist/MyWishlist';
import OrderSuccess from './pages/orderSuccessful/OrderSuccess';
import QuickView from './pages/quickView/QuickView';
import RouterNav from './router/Router';
// import { AuthProvider } from './components/authRoutes/auth';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
      <div className="App">
        {/* <Login />  */}
        {/* <Signup /> */}
        {/* <Header /> */}
        {/* <Dashboard /> */}
        {/* <Books /> */}
        {/* <QuickView /> */}
        {/* <MyCart /> */}
        {/* <OrderSuccess /> */}
        {/* <MyWishlist /> */}
        <Provider store={store}>
          <RouterNav />
        </Provider>
        
      </div>
  );
}

export default App;
