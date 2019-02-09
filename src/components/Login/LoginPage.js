import React from 'react';
import Login from '../nav/nav';
//import {PostData} from '../../services/PostData';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import './LoginPage.css';
import * as FontAwesome from 'react-icons/fa';
import axios from 'axios';

const API_PATH = 'http://localhost:3000/chatbot/LoginPage/api/contact/action.php';
export default class LoginPage extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
    username:'',
    email:'',
    password:'',
    mailSent:false,
    error:null
  }
  this.login = this.login.bind(this);
  this.onChange = this.onChange.bind(this);
}
login(e){
  /*PostData('login', this.state).then((result) => {
    let responseJSON = result;
    console.log(responseJSON);
  })*/
  console.log(this.state);
  e.preventDefault();
  axios({
    method: 'post',
    url: `${API_PATH}`,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
}
onChange(e){
 this.setState({[e.target.name]: e.target.value});
}
  render() {
    return (
      <div>
      <Login />
      <div className="center">
      <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
       
     <div className="panel panel-warning">
     <div className="panel-heading">
     <br/>
    
         <Row><Col sm="12" md={{ size: 6, offset: 3 }}><h3><FontAwesome.FaUser size={25} />&nbsp;Login</h3></Col></Row>
          <h5>Hi! Good to see you here!</h5>
          <br/>
          <br/>
          </div>
          <div className="panel-body">
          
          <Form action="/action.php">
        <FormGroup>
          <Label for="examplename">UserName</Label>
          <Input type="text" name="username" id="examplename" onChange={this.onChange} placeholder="Type your name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="text" name="email" id="exampleEmail" onChange={this.onChange} placeholder="Type your email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" onChange={this.onChange} placeholder="Type your password" />
        </FormGroup>
       
        <Button onClick = {this.login}>Submit</Button>
      </Form>

    </div>
    </div>
      </Col>
      </Row>
  </div>
  <div>
    {
      this.state.mailSent && 
      <div className="success">We are Friends, you can share anything with me.</div>
    }
      {this.state.error  &&
                  <div className="error">Sorry we had some problems.</div>
                }
    </div>
      </div>

    );
  }
}