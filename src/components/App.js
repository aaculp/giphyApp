import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar';

export default class App extends Component {
    onSearchSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos?', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID KK_TY13-B2AIZ6_ywa-6cg8TmteMfKET2qxTO5VC2Fc'
            }
        }).then((response) => {
            console.log(response)
        })
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <Searchbar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}