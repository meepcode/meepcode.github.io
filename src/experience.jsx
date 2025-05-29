import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";

import './index.js'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header />
        <h1>Job Experience</h1>
    </StrictMode>
)