import React from "react";

export default function Footer(){

    let date = new Date();
    date = date.toDateString();
    date = date.split(" ");
    const year = date[date.length-1];

    return (
        <footer>
            <div className="images">
                <img src="/images/facebook.svg" alt="f"></img>
                <img src="/images/twitter.svg" alt="t"></img>
                <img src="/images/instagram.svg" alt="i"></img>
                <img src="/images/youtube.svg" alt="y"></img>
            </div>
            <p className="footer-text">&#169;Copyrights {year}, All rights reserverd</p>
        </footer>
    )
}