import React from "react"
import emailIcon from "../images/email.png"
import linkedIn from "../images/linkedin.png"

export default function Main(){
    return(
        <main>
        
            <h2 className="title text-center">Bhanu Bansal</h2>
            <p className="description text-center">Full Stack Developer</p>
            <p className="greetings text-center">Hello there!</p>
            
            <a href="mailto:bhanubansal913@gmail.com" className="email button"><img src={emailIcon} />Email</a>
            
            <a href="https://www.linkedin.com/in/bhanu-bansal-aaaa5b212/" className="linkedin button"><img src={linkedIn} />LinkedIn</a>
            
            <div className="info">
            <h3 className="about">About</h3>
                <p>I am a full stack developer with a particular interest in making things simple. I am passionate about coding and always looking for new things to learn. I am open to experience new challenges.</p>
                
            <h3 className="about">Interests</h3>
                <p className="end">Food Expert. I love music and gaming. </p>
            </div>
            
        </main>
    )
}