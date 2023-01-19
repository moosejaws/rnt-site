
import React from "react"


export default function Navbar() {



    return (

        <div>
            <nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand" href="/"><img id="logo" src={require("../images/RobynLogo1.png")}/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-item nav-link" href="#home">Home <span class="sr-only">Home</span></a>
                        <a class="nav-item nav-link" href="#about" activeClass="active" smooth spy to="about">About</a>
                        <a class="nav-item nav-link" href="#services">Services</a>
                        <a class="nav-item nav-link" href="#contact">Contact</a>
                </div>
                </div>
            </nav>
        </div>
      

    )
}