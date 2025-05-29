import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";

import './index.js'
import ListGroup from "react-bootstrap/ListGroup";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header />
        <h1>Projects</h1>
        <h2>GitHub</h2>
        <p>The following projects have code that is readily available on my GitHub. 
            Some of them were team projects so I did not contribute to the whole project.
        </p>
        <ListGroup as="ul" variant="flush">
            <ListGroup.Item as="li">
                <a href="https://github.com/meepcode/LLM-Encoding"><strong>LLM Encoding</strong></a>
                <p>
                    Machine learning model for embeddings written in Python using Keras and Tensorflow and trained on the HuggingFace Wikipedia dataset. 
                    It was trained using the same method as GLoVe.
                </p>
            </ListGroup.Item>
            {/* <ListGroup.Item as="ul">
                <a href="https://github.com/meepcode/Transformer-LLM"><strong>LLM Transformer</strong></a>
                <p>
                    WIP transformer-based LLM written using Rust (for the tokenizer), PyTorch and Tensorflow.
                    While it is not yet
                </p>
            </ListGroup.Item> */}
            <ListGroup.Item as="ul">
                <a href="https://github.com/meepcode/Hotel-Database"><strong>Hotel Database</strong></a>
                <p>
                    Mock SQL-based database written with a front-end in Python.
                    Created to be able to manage the database for a fictional hotel chain including:
                </p>
                <ul>
                    <li>Reserving rooms</li>
                    <li>Check-in/Check-out</li>
                    <li>Employee Data</li>
                    <li>Managing cleaning schedule of rooms</li>
                    <li>Additional charges on customer bill</li>
                </ul>
            </ListGroup.Item>
            <ListGroup.Item as="ul">
                <a href="https://github.com/meepcode/meepcode.github.io"><strong>Personal Website</strong></a>
                <p>
                    My personal website (the one that you are on currently!) hosted using GitHub Pages. 
                    Written by hand using React and Bootstrap.
                </p>
            </ListGroup.Item>
            <ListGroup.Item as="ul">
                <a href="https://github.com/meepcode/wardrobe-whiz"><strong>Wardrobe Whiz</strong></a>
                <p>
                    Mock website capable of CRUD (Create, Read, Update, Delete) and asyncronous API calls to shopping websites for creating outfits.
                    Written in HTML, CSS, and JS with Bootstrap and passes accessibility checks.
                </p>
            </ListGroup.Item>
            <ListGroup.Item as="ul">
                <a href="https://github.com/meepcode/spreadterm"><strong>SpreadTerm</strong></a>
                <p>
                    TUI-based spreadsheet application written in Rust and ncurses.
                    Capable of:
                </p>
                <ul>
                    <li>Processing numerical expressions</li>
                    <li>Processing boolean expressions</li>
                    <li>Referencing the values within other cells</li>
                    <li>Holding text within cells</li>
                </ul>
            </ListGroup.Item>
            <ListGroup.Item as="ul">
                <a href="https://github.com/meepcode/rimplex"><strong>Rimplex</strong></a>
                <p>
                    Java Swing-based calculator capable of processing and handling complex numbers. Written using  Other features include:
                </p>
                <ul>
                    <li>Printing results to a printer</li>
                    <li>Help pages</li>
                    <li>Changing languages</li>
                </ul>
            </ListGroup.Item>
        </ListGroup>

        <h2>Code Samples Available</h2>        
        <p>
            The following are projects completed for classes, so I cannot put all the code online. 
            Code samples are available upon request.
        </p>
    </StrictMode>
)