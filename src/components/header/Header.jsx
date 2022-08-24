import React, { useState } from 'react';
import './header.css';
import TextField from '@mui/material/TextField';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

function Header({setState}) {

    const navigate = useNavigate();
    const myCart = () => {
        navigate('/MyCart')
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const listentoprofile = () => {
        navigate('/MyWishlist')
    }

    const goToDashBoard = () => {
        navigate('/Dashboard')
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    // HANDLE LOGOUT EVENT
    const logout = (e) => {
        e.preventDefault();
        console.log('Logout');

        // CLEAR DATA FROM STORAGE
        localStorage.clear();
        sessionStorage.clear();

        navigate("/");
    }

    return (
        <div>
            <div className='headerDiv'>
                <div className='headerMainDiv'>
                    <div className='logoDiv'>
                        <div id='bookstoreText' onClick={goToDashBoard}>
                            <img src='./images/education.png' alt='' className='bookLogo' />
                            <span >BOOKSTORE</span>
                        </div>
                        <div className='searchDiv' onChange={(event)=>setState(event.target.value)}>
                            <TextField fullWidth label="search" id="fullWidth" size='small' style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className='iconDiv'>
                        <div className='profileIcon' onClick={handleClick}>
                            <PersonOutlineOutlinedIcon size={30} />
                            <span>Profile</span>
                            <Popper id={id} open={open} anchorEl={anchorEl}>
                                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                    <p onClick={listentoprofile}>My Wishlist</p>
                                    <p onClick={logout}>Log Out</p>
                                </Box>
                            </Popper>
                        </div>
                        <div className='profileIcon' onClick={myCart}>
                            <ShoppingCartOutlinedIcon size={30} />
                            <span>Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header