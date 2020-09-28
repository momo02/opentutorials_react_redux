import React, { Component } from 'react';
import DisplayNumber from '../components/DisplayNumber';
import store from '../store';

/**
 * 컨테이너 컴포넌트 (container component)
 * 애플리케이션과 종속되는 작업을 처리. ex) redux와의 통신  
 */
export default class extends Component {
    state = {number:store.getState().number}

    constructor(props){
        super(props); //필수
        //store의 값이 변경되었다는 것을 통보받기위해 store를 구독(subscribe). store의 데이터 값이 변경되었을 때 호출 
        //통보 받았을 때 해당 컴포넌트의 state의 값을 변경해주면 render 메소드가 다시 호출되어 화면을 다시 그린다. 
        store.subscribe(function(){ 
            this.setState({number : store.getState().number});
        }.bind(this));
    }

    render(){
        return <DisplayNumber number={this.state.number}></DisplayNumber>
    }
}