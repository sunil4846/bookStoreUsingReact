import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './dashboard.css'
import { getBooks } from '../../services/DataServices';
import Books from '../../components/books/Books';
import QuickView from '../quickView/QuickView';
import Pagination from '@mui/material/Pagination';

function Dashboard() {
    const[bookDetails,setBookDetails] = useState([])
    const[bookView, setBookView] = useState({})
    const[bookRender, setBookRender] = useState(false)
    // const[bookDescription,setBookDescription] = useState(true)
    const [page,setPage] = useState(1)
    const nextPage = (e,value) => {
        // console.log(value);
        setPage(value)
    }
    const [recordsPerPage,setRecordsPerPage] = useState(8);
    const indexOfLastRecord = page * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    
    const books = (book) => {
        setBookRender(true);
        setBookView(book)
    }

    // search books
    const searchBook = (value) => {
        const filteredItem = bookDetails.filter((book)=>
            book.bookName.toLowerCase().search(value) !== -1
        )
        setBookDetails(filteredItem) 

        if(value.trim() === ""){
            GetBooks();
        }
    }

    const GetBooks = () =>{
        getBooks().then((response) => { console.log(response); setBookDetails(response.data.result)}).catch((error) => { console.log(error) })
    }
    React.useEffect(() => {
        GetBooks();
    }, []);
    console.log(bookDetails)
    return (
        <div className='dashboard'>
            <div>
                <Header setState={searchBook}/>
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
                        bookRender?<QuickView bookView={bookView} /> : bookDetails.slice(indexOfFirstRecord,indexOfLastRecord).map((book)=><Books book={book} books={books}/>)
                    }
                </div>
            </div>
            <div className='pagination'><Pagination count={4} onChange={nextPage} page={page} /></div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard