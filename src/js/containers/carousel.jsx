import React, {Component} from 'react';

function Carousel(WrappedComponent, slides, activeSlideCount=1) {
  return class extends Component {
    state = {
      activeIndex: 0,
    }

    _handlePreviousButtonClick = event => {
      const {activeIndex} = this.state;

      event.preventDefault();
      this.setState({
        activeIndex: activeIndex > 0 ? activeIndex - 1 : activeIndex,
      })
    }

    _handleNextButtonClick = event => {
      const {activeIndex} = this.state;

      event.preventDefault();
      this.setState({
        activeIndex: activeIndex < slides.length - activeSlideCount ? activeIndex + 1 : activeIndex,
      })
    }

    render() {
      const {activeIndex} = this.state;

      return (
        <WrappedComponent
          slides={slides}
          activeIndex={activeIndex}
          onPreviousButtonClick={this._handlePreviousButtonClick}
          onNextButtonClick={this._handleNextButtonClick}
          data={this.state.data}
          {...this.props}
        />
      );
    }
  };
};


export default Carousel;
