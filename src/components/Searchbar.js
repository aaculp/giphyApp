import React, { Component } from 'react';

export default class Searchbar extends Component {
    state = {
        input: ''
    }

    // handleInput = (e) => {
    //     this.setState({input: e.target.value})
    //     console.log(this.state.input)
    // }
    
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.input)
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' value={this.state.input} onChange={(e) => this.setState({input: e.target.value})}/>
                        {/* <input type='text' value={this.state.input} onChange={(e) => this.setState({input: e.target.value.toUpperCase()})}/> */}
                        {/* <input type='text' onChange={(event) => console.log(event.target.value)}/> */}
                    </div>
                </form>
            </div>
        )
    }
}
