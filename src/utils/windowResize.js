import React, { Component } from 'react';

function windowResize(WrappedComponent) {
  return class extends Component {
    state = {
      width: '',
      height: ''
    };
    updateDimensions = () => {
      const w = typeof window !== 'undefined' ? window : '';
      const d = typeof window !== 'undefined' ? document : '';
      const documentElement = d ? d.documentElement : '';
      const body = d ? d.body || d.getElementsByTagName('body')[0] : '';
      const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
      const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
      this.setState({ width, height });
    };
    componentWillMount() {
      this.updateDimensions();
    }
    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }
    render = () => (
      <WrappedComponent width={this.state.width} height={this.state.height} {...this.props} />
    );
  };
}

export default windowResize;
