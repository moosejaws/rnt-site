import React from "react";

export default function Home() {
    return (
      <div id="home">
      <div class="container">
        <div class="griditem1">
          <h1>robyn n<br></br>thompson</h1>
                <p id="bold">Consultant / Coach / Producer</p>
                <p>I am the <span>spark</span> that can get your idea,
                your goal, your pivot, your new project or new team organized and into action.</p>
          
                <a href="#contact"><button id="email-me">Contact me</button></a>

        </div>
        <div class="griditem2"> 
          <img  id ="spark" src={require('../images/spark2.png')} /></div>
        </div>
      </div>
    )
}