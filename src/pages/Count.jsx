/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-08-24 00:23:30
 * @version $Id$
 */
import React,{Component} from 'react';

export default class Count extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    handleClick(){
        this.setState({
            count:++this.state.count
        })
    }
    render(){
        return (
            <div>
                aadd当前count值{this.state.count}<br/>
                <button 
                    style = {{border:'1px dashed blue'}}
                    onClick={()=>{this.handleClick()}}
                >增加1</button>
            </div>
            )
    }
}

