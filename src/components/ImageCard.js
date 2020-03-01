import React, { Component } from 'react'

export default class ImageCard extends Component {
    state = {
        imgRef: React.createRef()
    }

    componentDidMount() {
        console.log(this.state.imgRef.current.clientHeight)
    }

    render() {
        const { id, description, urls } = this.props.image;
        return (
            <div>
                <img
                    ref={this.state.imgRef}
                    id={id}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}
