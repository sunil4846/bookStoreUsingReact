import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './dashboard.css'
import { getBooks } from '../../services/DataServices';
import Books from '../../components/books/Books';
import QuickView from '../quickView/QuickView';

function Dashboard() {
    const[bookDetails,setBookDetails] = React.useState([])
    const[bookView, setBookView] = React.useState([])
    const[bookRender, setBookRender] = React.useState(false)

    const books = (book) => {
        setBookRender(true);
        setBookView(book)
    }

    const GetBooks = () =>{
        getBooks().then((response) => { console.log(response); setBookDetails(response.data.result.slice(0,10))}).catch((error) => { console.log(error) })
    }
    React.useEffect(() => {
        GetBooks();
    }, []);
    console.log(bookDetails)
    return (
        <div className='dashboard'>
            <div>
                <Header />
            </div>
            <div className='dashboardDiv'>
                <div className='bookText'>
                    <div id='idBookText'>
                        <h4>BOOKS</h4>
                        <span>(128items)</span>
                    </div>
                    <select><option>Sort By Reference</option></select>
                </div>
                <div className='displayBooks'>
                    {
                        bookRender?<QuickView bookView={bookView} /> : bookDetails.map((book)=><Books book={book} books={books}/>)
                    }
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard