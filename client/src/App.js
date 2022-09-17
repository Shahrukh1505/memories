import React from "react";
import {Container} from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import {GoogleOAuthProvider} from '@react-oauth/google';

const App = () =>{
    
    return (
      <GoogleOAuthProvider clientId= {process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_API_TOKEN}>
        <BrowserRouter>
     <Container maxWidth='lg'>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/auth" exact component={Auth}></Route>
      </Switch>
     
    </Container>
    </BrowserRouter>
    </GoogleOAuthProvider>
   )
}

export default App;