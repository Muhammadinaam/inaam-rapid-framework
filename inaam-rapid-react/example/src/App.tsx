import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home/Home';
import Categories from './Pages/Categories/Categories';
import Category from './Pages/Categories/Category';

import 'inaam-rapid-react/dist/index.css'

const App = () => {
  // return <Form />

  return <BrowserRouter>
    <Navbar bg="light" variant="light">
      <div className="container">
      <Nav>
        <Nav.Link as={Link} to="/">
          <b>
            Examples
          </b>
        </Nav.Link>
        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
        <Nav.Link href="/Taxes">Taxes</Nav.Link>
        <Nav.Link href="/products">Products</Nav.Link>
      </Nav>
      </div>
    </Navbar>
    <div className="container pt-5">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/categories' component={Categories} />
        <Route exact path='/categories/create' component={Category} />
      </Switch>
    </div>
  </BrowserRouter>
}

export default App