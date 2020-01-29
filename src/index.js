import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

export default class index extends Component {
    render() {
        return (
            <div>
                <App />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)