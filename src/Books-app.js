import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar';
import SearchBooks from './components/SearchBooks';

export default function BooksApp() {
    return (
        <>  
            <Navbar />
            <br/>
            <div className='container'>
                <SearchBooks />
            </div>
        </>
    )
}
