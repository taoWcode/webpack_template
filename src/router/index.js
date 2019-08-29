/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-08-24 00:24:12
 * @version $Id$
 */

import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import Home from 'pages/Home.jsx';
import Count from 'pages/Count.jsx';

const PrimaryLayout=()=>(
    <div className="primary-layout">
        <header>
            <Link to="/" >toHome</Link>&nbsp;|&nbsp;
            <Link to="/count">toCount</Link>
        </header>

        <main>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/count" exact  component={Count}/>
            </Switch>
        </main>
    </div>
);

export default PrimaryLayout;