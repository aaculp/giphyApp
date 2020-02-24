import React, { Component } from 'react';

import Searchbar from './Searchbar';
import Unsplashed from '../api/Unsplashed';

export default class App extends Component {
    state = {
        images: [],
    }


    // onSearchSubmit = (term) => {
    //     axios.get('https://api.unsplash.com/search/photos?', {
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID KK_TY13-B2AIZ6_ywa-6cg8TmteMfKET2qxTO5VC2Fc'
    //         }
    //     }).then((response) => {
    //         console.log(response.data.results)
    //         this.setState({ images: response.data.results})
    //     })
    // }

    // this is async and await
     onSearchSubmit = async (term) => {
        const response = await Unsplashed.get('search/photos', {
            params: { query: term }
        })
        this.setState({ images: response.data.results})
        console.log(response.data.results)
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <Searchbar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images.
            </div>
        )
    }
}