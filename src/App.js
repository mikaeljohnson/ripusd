
import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import dotenv from 'dotenv';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'RIP USD',
      headerLinks: [
        { title: 'Home', path: '/'}
        // { title: 'About Me', path: '/about'},
        // { title: 'Portfolio', path: '/portfolio'},
        // { title: 'Contact Me', path: '/contact'}
      ],
      home: {
        title: 'RIP USD',
        subTitle: 'Something grand is happening here soon...',
        text: 'Coin collecting meets NFTs'
      }
      // ,
      // about: {
      //   title: 'About Me',
      //   subTitle: 'About Me',
      //   text: 'text'
      // },
      // contact: {
      //   title: 'Contact Me',
      //   subTitle: 'Subtitle',
      //   text: 'text'
      // },
      // portfolio: {
      //   title: 'Title',
      //   subTitle: 'Subtitle',
      //   text: 'text'
      // }


    }
  }
  
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <NavbarBrand>RIP USD</NavbarBrand>
            <NavbarToggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              {/* <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About Me</Link>
                <Link className="nav-link" to="/contact">Contact Me</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </Nav> */}
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}/>
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />}/>
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />}/>
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} text={this.state.portfolio.text} />}/>
          <Footer />
        </Container>
      </Router>
    );
    }
}

export default App;
