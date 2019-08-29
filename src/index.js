/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-08-24 00:20:57
 * @version $Id$
 */
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter} from 'react-router-dom';
import Router from 'router/index';

/*处理本地服务器局部更新*/
renderWithHotReload(Router);

if(module.hot){ //热跟新操作

    module.hot.accept("router/index.js",()=>{
        const Router = require('router/index.js').default;
        renderWithHotReload(Router)
    })
}

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <AppContainer>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </AppContainer>
        )
    }
}

function renderWithHotReload(Router){
    ReactDom.render(<AppContainer>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </AppContainer>,document.getElementById('root'))
}

$(function(){
    console.log("在下哈哈，在测试JQ");
    console.log("在测试全局变量："+process.env.NODE_ENV);
})

