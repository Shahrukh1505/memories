import React,{useState, useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {getPosts} from './actions/posts'
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';
import { Home } from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
const App = () =>{
    
    return (
        <BrowserRouter>
     <Container maxWidth='lg'>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/auth" exact component={Auth}></Route>
      </Switch>
      <Home></Home>
    </Container>
    </BrowserRouter>
   )
}

export default App;