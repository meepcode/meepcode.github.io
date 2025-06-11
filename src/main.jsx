import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Projects from './projects.jsx';

import './index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="px-4">
        <h1>AJ Bushman</h1>
        <p className="d-flex justify-content-center"><em>My Personal Website</em></p>
        <h2>About Me</h2>
        <p>
            I am a recent graduate from James Madison University with a degree in Computer Science, and minors in Math and Logic & Reasoning. 
            My coursework included a broad spectrum of areas within software, though in particular I unofficially focused on data science, 
            including linear algebra, various computaitonal algorithms for regression and approximation, and machine learning, especially Large Language Models.
            I also have experience with front-end design (particularly on the web) and back-end (databases). 
            Additionaly, my math and philosophy classes gave me strong intuition and tools for solving real-world problems that I hope to utilize to bring value to your company or project.
        </p>


        <h2>Links/Contact</h2>
        <ListGroup as="ul">
            <ListGroup.Item as="li">
                <a href="https://www.linkedin.com/in/ajbushman">LinkedIn</a>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <a href="https://github.com/meepcode">GitHub</a>
            </ListGroup.Item>
        </ListGroup>
        <h2>Projects</h2>
        <Projects />
        <p>
            This page is still a work in progress. Check back soon for more updates.
        </p>
    </div>

  </StrictMode>,
)
