import React, { Component } from 'react'

export default class ImageCard extends Component {
    state = {
        imgRef: React.createRef(),
        spans: 0,
    }

    componentDidMount() {
        // console.log(this.state.imgRef.current.clientHeight)
        this.state.imgRef.current.addEventListener('load', this.setSpans);
    }

    // calling set spans because CSS grid-row is spans
    setSpans = () => {
        const height = this.state.imgRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans })
    }

    render() {
        const { id, description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
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
