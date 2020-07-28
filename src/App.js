import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Button } from 'reactstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/HomePage';
import NewEntry from './pages/NewEntry';
import Footer from './components/Footer';

import bearded_dragon from "./assets/bearded_dragon-smile.jpg";
import mario3 from "./assets/SMB3Wallpaper.jpg";
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

class App extends React.Component {

  state = {
    items: {},
    title: 'eList',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'My Profile', path: '/profile'},
        {title: 'About eList', path: '/about'}
      ],
      home: {
        title: 'Welcome to eList!',
        subTitle: 'Highly Recommended.',
        text: 'Find your next favorite thing'
      },
      profile: {
        title: 'About Me',
        subTitle: 'Young Software Engineer Based in New York City',
        text: 'Check out my projects below!',
      },
      about: {
        title: 'About Me',
        subTitle: 'Young Software Engineer Based in New York City',
        text: 'Check out my projects below!',
      }
  }

  getEntry() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({items: data});
      });
  }

  constructor(props) {
    super(props);
    this.getEntry();
  }

  render(){

    var testItems = [{
      imgSrc: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
      title: "Item One (1)",
      subTitle: "this is the first item",
      link: "hello"
    },
    {
      imgSrc: mario3,
      title: "Item Two (2)",
      subTitle: "this is the second item",
      link: "hello"
    }]

    // useEffect(() => {
    //   getEntry();
    // }, []);
    
    function createEntry() {
      let title = prompt('Enter entry title');
      let medium = prompt('Enter entry medium');
      let description = prompt('Enter entry description');
      let image_url = prompt('Enter image url');
      fetch('http://localhost:3001/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title, medium, description, image_url}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          //this.getEntry();
        });
    }
    function deleteEntry() {
      let id = prompt('Enter entry id');
      fetch(`http://localhost:3001/entries/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          this.getEntry();
        });
    }
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>eList</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/login">Log In</Link>
                <Link className="nav-link" to="/signup">Sign Up</Link>
                <Link className="nav-link" to="/newentry">New Entry</Link>
                <Link className="nav-link" to="/profile">My Profile</Link>
                <Link className="nav-link" to="/about">About eList</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} items={this.state.items}/>} />
          <Route path="/newentry" exact render={() => <NewEntry />} />
          <Route path="/login" exact render={() => <LogInPage />} />
          <Route path="/signup" exact render={() => <SignUpPage />} />


          <Footer />

        </Container>
      </Router>
    );
  }
}
export default App;
