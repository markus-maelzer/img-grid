import React, { Component, createRef } from 'react';

export default class ImageCard extends Component {
  imageRef = createRef();
  state = { spans: 0 };

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    console.log(spans);
    this.setState({ spans });
  }
  render() {
    const { alt_description, urls } = this.props.image;
    const { spans } = this.state;
    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img

          ref={this.imageRef}
          src={urls.regular}
          alt={alt_description}
        />
      </div>
    );
  }
}
