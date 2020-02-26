import React, { Component } from 'react'

export default class ImageCard extends Component {
    render() {
        const { id, description, urls } = this.props.image;
        return (
            <div>
                <img
                    id={id}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}
