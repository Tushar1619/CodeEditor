import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import logo from '../images/logo.ico'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
export default function Header() {

    const Head = styled(AppBar)`
        background: #060606;
        height: 14vh;
    `

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Head position="static">
                    <Toolbar>
                       <img className="rounded-circle mt-3" src={logo} alt='' style={{width:"40px"}}/>
                    </Toolbar>
            <hr />
                </Head>
                
            </Box>
        </>
    )
}
