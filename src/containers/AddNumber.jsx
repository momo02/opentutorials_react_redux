import AddNumber from "../components/AddNumber";
import { connect } from 'react-redux'

 // Redux의 Dispatch를 React 컴포넌트의 props로 mapping(연결)해주는 함수
 // 첫번째 인자로 store.dispatch 함수가 전달된다.
function mapReduxDispatchToReactProps(dispatch){
    //Wrapping 한 컴포넌트 객체의 props 명 : 전달할 함수
    return { onClick : function(size){
        dispatch({type:'INCREMENT', size:size})
    }}
}

export default connect(null,mapReduxDispatchToReactProps)(AddNumber);

/*
import React, { Component } from "react";
import store from '../store'

export default class extends Component{
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({type:'INCREMENT', size:size})
        }.bind(this)}></AddNumber>
    }
} 
*/