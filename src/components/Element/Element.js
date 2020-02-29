import React from 'react';
import PropTypes from 'prop-types';
import './element.scss';

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'white',
      visibility: true
    };
  }

  static propTypes = {
    background: PropTypes.string,
    visibility: PropTypes.bool
  }

  setBackground() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

    this.setState({background: bgColor});
  }

  render(props) {

    return (
      <div className='element' style={this.state.visibility ? {display: 'flex'} : {display: 'none'}}>
        {this.props.clickable ? <div className='element-clickable' style={{backgroundColor: this.state.background}} onClick={() => this.setBackground()}>CLICK ME</div> : <div className='element-nonclickable'></div>}

        <div className='element-close' onClick={() => this.setState({visibility: false})}>X</div>
      </div>
    );
  }
}

export default Element;
