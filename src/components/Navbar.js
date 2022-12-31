import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
        <Link to="/">
            <img src='https://media.istockphoto.com/vectors/biceps-flex-arm-vector-icon-vector-id589965284?k=6&m=589965284&s=170667a&w=0&h=BdnMK-YafpY2uLXb7t2vNClPX2oOF-r79GOUDgS4TwE=' alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px', border: '5px solid red', borderRadius: '50%' }} />
        </Link>
        <Stack
            direction="row"
            gap="40px"
            fontFamily="Alegreya"
            fontSize="24px"
            alignItems="flex-end"
        >
            <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
            {/* <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a> */}
        </Stack>
    </Stack>
);

export default Navbar;