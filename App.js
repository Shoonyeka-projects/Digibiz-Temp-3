import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import LinkText from './pages/LinkText';
import LongLinkText from './pages/LongLinkText';
import SampleText from './pages/SampleText';
import Gallery from './pages/Gallery';

export default function App() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL + "/login"}`} component={Login} />
                <Route exact path={`${process.env.PUBLIC_URL + "/register"}`} component={Register} />
                <Route exact path={`${process.env.PUBLIC_URL + "/linktext"}`} component={LinkText} />
                <Route exact path={`${process.env.PUBLIC_URL + "/longlinktext"}`} component={LongLinkText} />
                <Route exact path={`${process.env.PUBLIC_URL + "/sampletext"}`} component={SampleText} />
                <Route exact path={`${process.env.PUBLIC_URL + "/gallery"}`} component={Gallery} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}