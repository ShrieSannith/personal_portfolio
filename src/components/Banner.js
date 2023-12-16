import { useState, useEffect } from "react"
import {Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/images/header-img.svg"
import scroll from 'react-scroll';
import { useRef } from 'react';

export const Banner = () =>{
    const [loopnumber, setloopnumber] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ['a Web Developer', 'an App Developer', 'a Robotics Enthusiast'];
    const [text, settext] = useState('');
    const [delta, setdelta] = useState(300 - Math.random()*100);
    const period = 2000;

    useEffect (() =>{
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => clearInterval(ticker)
    }, [text])

    const tick = () => {
        let i = loopnumber% toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0,text.length+1);
        settext(updatedText);

        if (isDeleting){
            setdelta(Delta => Delta/2)
        }

        if(!isDeleting&&updatedText===fullText){
            setisDeleting(true);
            setdelta(500);
        }
        else if(isDeleting && updatedText===''){
            setisDeleting(false);
            setdelta(300 - Math.random()*100);
            setloopnumber(loopnumber+1);
        }
    }

    
    
    const bottomEl = useRef(null);
      
    const scrollToBottom = () => {
        bottomEl?.current?.scrollIntoView({ behavior: 'smooth' });
    };
      


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md = {6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{'Hi I am Natalie, I am '}<span className="wrap">{text}</span></h1>       
                        <p> 
                            I'm Natalie Grant, a dedicated student delving into the world of computer engineering. I thrive on the intricacies of technology, from dissecting hardware to deciphering complex code. I'm passionate about crafting innovative solutions and pushing the boundaries of what's possible in the digital realm. My journey in computer engineering is fueled by a relentless curiosity and a drive to create impactful advancements in technology.
                        </p>  
                        {/* <button href = '#footer' onClick= {()=> scrollToBottom}>Let's Connect <ArrowRightCircle size={25}/></button>      */}
                    </Col>
                    <Col xs={12} md = {6} xl={5}>
                        <img src={headerImg} alt='Header Img'/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}