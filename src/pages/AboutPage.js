import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
function AboutPage(props) {
    
    return(
        <div>
            <Hero title={props.subTitle} /> 

            <Content>
                <p>Hello! My name is Alex, I'm a full stack engineer with with programming experiance in C, C++, Java, Python, and JavaScript aswell as web developement experiance using HTML, CSS, React, Node.js, Express.js, Mongo.db and Bootstrap.</p>

                <p>I am currently a student at Christopher Newport University and pursuing a B.S. in Computer Science and Cyber Security.</p>

                <p>During my time at CNU I have gained a high level of understanding and ability in the areas of: Object Orientated Programming, Front and Back End Web Developement, Routing and Internet Protocols, Algorithmic Complexity and several high level design patterns.</p>
                
                <p> </p>

                <p>In addition to this I am a NASM certified personal trainer and have helped several clients reach their fat loss and muscle gain goals.</p>

                <p>In my spare time I teach chess at Deer Park Elementary school and am the current head of the Newport News Chess Club, I am also a member of my university's Ultimate Frisbee Athletic team.</p>

                




            </Content>
        </div>
    )
}

export default AboutPage;