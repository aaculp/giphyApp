import React, { Component } from 'react';

export default class Searchbar extends Component {
    state = {
        term: '',
    }

    // handleInput = (e) => {
    //     this.setState({input: e.target.value})
    //     console.log(this.state.input)
    // }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text'
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                        {/* <input type='text' value={this.state.term} onChange={(e) => this.setState({term: e.target.value.toUpperCase()})}/> */}
                        {/* <input type='text' onChange={(event) => console.log(event.target.value)}/> */}
                    </div>
                </form>
            </div>
        )
    }
}