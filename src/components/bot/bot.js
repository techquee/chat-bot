import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gif from './giphy.gif';
import { connect } from 'react-redux';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import './bot.css'

import { postMessage } from '../../actions/postMessage';

class Bot extends Component {
  constructor(props){
    super(props);
    this.state = {
      message:''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onClick(e){
    e.preventDefault();
    const message = {
      message: this.state.message
    }
    this.props.postMessage(message);
    this.setState({message:''});
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.message) {
      this.props.message.unshift(nextProps.message);
    }
  }

  render() {
    return (
    <div className="row">
      <div className="col-sm-6">
      <div className="Rectangle">
     {this.props.message} 
      </div>
      <br/>
      <div className="Rectangle-3">
      <InputGroup>
      <Input name="message" placeholder="Talk to the Bot .." onChange={this.onChange} value={this.state.message} />
      <InputGroupAddon addonType="append">
          <Button onClick={this.onClick} color="secondary">Get Response</Button>
        </InputGroupAddon>
      </InputGroup>
      </div>    
      </div>   
      <div className="col-sm-6">
      <img src={gif} alt="gif" />
      </div>
      </div>

  
    );
  }
}

Bot.propTypes = {
  postMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  postMessage:state.message.item
});

export default connect(mapStateToProps,{postMessage})(Bot);
