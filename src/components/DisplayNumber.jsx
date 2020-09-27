import React, {Component} from 'react';
import store from '../store';

export default class DisplayNumber extends Component {
    state = {number:store.getState().number}
    
    constructor(props){
        super(props); //필수
        //store의 값이 변경되었다는 것을 통보받기위해 store를 구독(subscribe). store의 데이터 값이 변경되었을 때 호출 
        //통보 받았을 때 해당 컴포넌트의 state의 값을 변경해주면 render 메소드가 다시 호출되어 화면을 다시 그린다. 
        store.subscribe(function(){ 
            this.setState({number : store.getState().number});
        }.bind(this));
    }

    render() {
        return (
            <div>
                <h1>Display Number</h1>
                <input type="text" value={this.state.number} readOnlys></input>
            </div>
        );
    }
}
