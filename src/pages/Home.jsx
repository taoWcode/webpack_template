/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-08-24 00:23:48
 * @version $Id$
 */
import React,{Component} from 'react';
import 'style/home.scss';
import 'style/count.scss';

export default class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="home">
                <h1 className="h-txt">This is Home Page</h1>

            </div>
        )
    }
}




