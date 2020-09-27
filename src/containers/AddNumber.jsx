import AddNumber from "../components/AddNumber";
import React, { Component } from "react";
import store from '../store'


/**
 * 컨테이너 컴포넌트 (container component)
 * 애플리케이션과 종속되는 작업을 처리. ex) redux와의 통신  
 */
export default class extends Component{
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({type:'INCREMENT', size:size})
        }.bind(this)}></AddNumber>
    }
}