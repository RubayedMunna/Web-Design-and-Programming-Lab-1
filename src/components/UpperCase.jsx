import React, { useState } from "react";

function TextConverter() {
    const [text, setText] = useState("");

    const handleConvertClick = () => {
        setText(text.toUpperCase());
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const charCount = text.length;
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    return (

        <div className="container mt-5">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#form-control">
                    Navbar
                </a>
                <a className="navbar-brand" href="#">Home</a>
            </nav> */}


            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <textarea
                className="form-control"
                rows="10"
                placeholder="Enter text..."
                onChange={handleTextChange}
                value={text}
            ></textarea>
            <button className="btn btn-primary mt-3" onClick={handleConvertClick}>
                Convert to Upper Case
            </button>
            <div className="mt-3">
                <p>Character Count: {charCount}</p>
                <p>Word Count: {wordCount}</p>
            </div>
        </div>
    );
};

export default TextConverter;
