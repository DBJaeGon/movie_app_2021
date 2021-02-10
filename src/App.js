import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation"; 
import Detail from "./components/Detail"
import Home from "./routes/Home";
import Ahout from "./routes/About";
import "./App.css"

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={ true } component={ Home } />
            <Route path="/about" component={ Ahout } />
            <Route path="/movie/:id" component={ Detail }/>
        </HashRouter>
    );
}

export default App; 