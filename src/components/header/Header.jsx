import React from 'react';
import './header.css';
import TextField from '@mui/material/TextField';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
    return (
        <div className='headerDiv'>
            <div className='headerMainDiv'>
                <div className='logoDiv'>
                    <div id='bookstoreText'>
                        <img src='./images/education.png' alt='' className='bookLogo' />
                        <span >BOOKSTORE</span>
                    </div>
                    <div className='searchDiv'>
                        <TextField fullWidth label="search" id="fullWidth" size='small' style={{ width: '100%' }} />
                    </div>
                </div>
                <div className='iconDiv'>
                    <div className='profileIcon'>
                        <PersonOutlineOutlinedIcon size={30} />
                        <span>Profile</span>
                    </div>
                    <div className='profileIcon'>
                        <ShoppingCartOutlinedIcon size={30} />
                        <span>Cart</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header