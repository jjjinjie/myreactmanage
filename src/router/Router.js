/*
   Root, Router 配置
*/
import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { Link,BrowserRouter } from 'react-router-dom';
import {Root,Header,Body,Footer} from './../App';
 
// import Test from './../containers/Test';
// import Home from './../containers/Home';
// import Message from './../containers/Message';
 
const RootDocument = () => (
   <BrowserRouter>
      <Route path="/" component={Root}></Route>
       <Route exact path="/header" component={Header}/>
      <Route exact path="/body" component={Body}></Route>
      <Route path="/footer" component={Footer}/>
    
    </BrowserRouter>
);
 
export  {RootDocument as Root}  ;