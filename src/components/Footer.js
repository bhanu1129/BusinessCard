import React from "react"
import github from "../images/github.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"

export default function Footer(){
    return(
        <footer className="text-center">
            <a href="https://github.com/bhanu1129"><img src={github} /></a>
            <a href="https://www.instagram.com/bhanu_bansal11/"><img src={instagram} /></a>
            <a href="https://twitter.com/bhanu1129"><img src={twitter} /></a>
        </footer>
    )
}