import React from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2'
// import codemirror  from 'codemirror/lib/codemirror';
// import CodeMirror from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import '../App.css'
import { useState } from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const Head = styled(Box)`
background: #1d1e22;
padding: 9px 12px;
display: flex
`
const MainHead = styled(Box)`
display: flex;
justify-content: space-between;
background: #060606;
color: #AAAEBC;
font-weight: 500;
`

const Container = styled(Box)`
flex-grow: 1;
flex-basic: 0;
display: flex;
flex-direction: column;
padding: 0 8px 8px;
`
export default function Editor({ title, icon, color, language, value, onChange }) {

    const [full,setFull] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    const handleOnClick = ()=>{
        setFull(!full);
    }


    return (
        <Container style={(full)?null:{flexGrow:"0"}}>

            <MainHead style={{ color: "white" }}>
                <Head>
                    <Box component="span" style={{ background: color,  borderRadius: "5px",
                            marginRight: "5px", height: "25px", width: "25px", display: "flex", placeContent: "center",  color: '#000', paddingBottom: "27px" }}>
                        {icon}
                    </Box>
                    {title}
                </Head>
    {   (full)?<CloseFullscreenIcon onClick={handleOnClick}  fontSize='small' style={{alignSelf:"center"}}/>:<OpenInFullIcon onClick={handleOnClick} fontSize='small' style={{alignSelf:"center"}}/>
}
            </MainHead>

            <ControlledEditor

                onBeforeChange={handleChange}
                className='controlled-editor'
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: { language },
                    lineNumbers: true
                }}


            />

        </Container>
    )
}
