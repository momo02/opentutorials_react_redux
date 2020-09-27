import {createStore} from 'redux'


export default createStore(function(state,action){
    if(state === undefined){
        return {number:0}
    }
    if(action.type === 'INCREMENT'){
        //기존의 state를 복제하고 뒤에 추가되는 number 프로퍼티 값만 변경.
        return {...state, number:state.number + action.size}
    }
    return state;  
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //redux devtools 활성화 
)