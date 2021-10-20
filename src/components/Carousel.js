import React, { Component } from 'react';
import medium from '../assests/images/medium.png';
import twitter from '../assests/images/twitter.png';
import telegram from '../assests/images/telegram.png';
import Card from '../components/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'RIP USD Medium',
                    subTitle: 'Medium page for information about our venture',
                    imgSrc: medium,
                    link: 'https://medium.com/@VCDAO',
                    selected: false
                },
                {
                    id: 1,
                    title: 'RIP USD Twitter',
                    subTitle: 'Link to RIP USD twitter account',
                    imgSrc: twitter,
                    link: 'https://twitter.com/VC_DAO',
                    selected: false
                },
                {
                    id: 2,
                    title: 'RIP USD Public Telegram Link',
                    subTitle: 'RIP USD public telegram',
                    imgSrc: telegram,
                    link: 'https://t.me/vc_dao',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Personal Training',
                    subTitle: 'Freelance personal training, NASM Certified //dummy link, will link to service request form',
                    imgSrc: telegram,
                    link: 'https://t.me/vc_dao',
                    selected: false
                },
            ]
        }
    }
    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        window.open(
            items[id].link,
            '_blank' // <- This is what makes it open in a new window.
          );

        // items[id].selected = items[id].selected ? false : true;

        // items.forEach(item => {
        //     if(item.id!== id){
        //         item.selected = false;
        //     }
        // });
        // this.setState({
        //     items
        // });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render () {
        return(
            
            <Container fluid={true}>
                
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;