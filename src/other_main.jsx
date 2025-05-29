import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

import './index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    <Container fluid className="d-flex flex-column my-auto min-vh-100 justify-content-center align-items-center">
      <h1>AJ Bushman</h1>
      <ListGroup variant='flush'>
        <ListGroup.Item action href="/about/">About</ListGroup.Item>
        <ListGroup.Item action href="/projects/">Projects</ListGroup.Item>
        <ListGroup.Item action href="/coursework/">Coursework</ListGroup.Item>
        <ListGroup.Item action href="/experience/">Job Experience</ListGroup.Item>
      </ListGroup>
    </Container>
  </StrictMode>,
)
