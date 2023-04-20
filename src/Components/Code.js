import React from 'react'
import Editor from './Editor'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../Context/dataprovide';

const Container = styled(Box)`
background-color: #060606;
display: flex;
`
export default function Code() {

  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor title="HTML" icon="/" color="#FF3C41" language='xml' value={html} onChange={setHtml} />
      <Editor title="CSS" icon="*" color="#0EBEFF" value={css} onChange={setCss} language='css' />
      <Editor title="JS" icon="()" color="#FCD000" value={js} onChange={setJs} language='js' />
    </Container>
  )
}
