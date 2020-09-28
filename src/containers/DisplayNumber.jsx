import DisplayNumber from '../components/DisplayNumber';
import {connect} from 'react-redux'
/**
 * connect()를 수행하면 리턴 값이 함수. 그 리턴 함수를 다시 수행하여 만들어진 컴포넌트 리턴.  
 * 여기서 리턴되는 이 컴포넌트는 기존에 우리가 수동으로 만들었던 DisplayNumber의 Wrapping 컴포넌트와 같은 역할의 컴포넌트.  
 * 
 * cf) https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e -> connect 함수 내부가 어떻게 구현되어있는지 확인해볼 수 있다.
 */

// redux에서 store의 값이 변경 될 때마다 아래 함수를 호출. 호출될 때 redux store의 state값을 인자로 받는다 
function mapReduxStateToReactProps(state){ // Redux의 store state를 React의 props로 mapping(연결)해주는 함수
    return { 
        //DisplayNumber로 전달할 props명 : 전달할 값  
        number : state.number
    }
}
function mapReduxDispatchToReactProps(){ // Redux의 Dispatch를 React의 props로 mapping(연결)해주는 함수
    return {}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);

/* 
import React, { Component } from 'react';
import store from '../store';


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
        return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
    }
} 
*/