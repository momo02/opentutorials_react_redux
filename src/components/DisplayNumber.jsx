import React, {Component} from 'react';

/**
 * 프레젠테이션 컴포넌트 (presentational component) 
 * 화면에 엘라먼트를 표시하는 것, 즉 화면을 그리는 것에만 집중.
 * 
 * redux에 종속된 부분을 분리 -> 특정 애플리케이션의 상태에 종속적이지 않도록, 부품으로써 사용될 수 있도록 함. 
*/
export default class DisplayNumber extends Component {
    render() {
        return (
            <div>
                <h1>Display Number</h1>
                <input type="text" value={this.props.number} readOnlys></input>
            </div>
        );
    }
}
