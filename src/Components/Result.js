import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/dataprovide'
import { useState,useEffect } from 'react';
export default function Result() {
    const {html,css,js} = useContext(DataContext);
    const[code,setCode] = useState('');
    const srcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
`

    useEffect(() => {
        const timeOut = setTimeout(()=>{
            setCode(srcCode);
        },1000)
        return ()=> clearTimeout(timeOut);
    }, [html,css,js])
    
  
  return (
    <div>
        <iframe srcDoc={code} title="output" frameborder="0" sandbox='allow-scripts' width="100%" height="100%"/>
    </div>
  )
}
