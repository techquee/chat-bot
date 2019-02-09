import React from 'react';
import {Link} from 'react-router-dom';
import * as GoIconPack from 'react-icons/go'
import './nav.css';
import * as FontAwesome from 'react-icons/fa';
import * as FontMd from 'react-icons/md';
import Editor from '../editor';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Row, Input, Label, FormGroup,
  Container,
  Modal, ModalHeader, ModalBody, ModalFooter,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Tooltip,
  DropdownItem } from 'reactstrap';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
   
    this.toggleNested = this.toggleNested.bind(this);
    this.toggle = this.toggle.bind(this);
    this.tooltip = this.tooltip.bind(this);
    this.state = {
      modal: false,
      size:'lg',
      centered:true,
      nestedModal: false,
      tooltipOpen: false
    };
  }
  toggle() {
    this.setState({  
      modal: !this.state.modal,
    });
  }
  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  tooltip(){
    this.setState({
    tooltipOpen:!this.state.tooltipOpen
  });
}
  render() {
    return (
    
        <Navbar color="aliceblue" expand="md">
          <NavbarBrand href="/"><FontAwesome.FaAndroid size={30}/>&nbsp; <b><i>ChatBot - I am your buddy.</i></b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <Button color="link" id="TooltipExample"><Link to="/LoginPage">Login&nbsp;</Link></Button>
            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.tooltip}>
            I am Bot.
            </Tooltip>
             &nbsp;&nbsp;
              </NavItem>
              <NavItem>
              <Button color="danger" onClick={this.toggle}>Program me&nbsp;<GoIconPack.GoTools size={26}/></Button>
              <Modal isOpen={this.state.modal} size={this.state.size} centered={this.state.centered} toggle={this.toggle} className={this.props.className}>
             <ModalHeader toggle={this.toggle}>Build Me &nbsp;  &nbsp;  &nbsp; <FontMd.MdAdd size={25} /></ModalHeader>
             <ModalBody>
             <Container>
               {/*I am editor portion.*/}
             <Editor />
            </Container>
            </ModalBody>
            <ModalFooter>
             <Row>
                  <Button outline color="info">Undo &nbsp; <FontMd.MdLoop size={25} /></Button>&nbsp;
                  <Button outline color="info" onClick={this.toggleNested}>Render &nbsp; <FontMd.MdCode size={25} /></Button>&nbsp;
                  <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                  <ModalHeader toggle={this.toggle}> Easy Add </ModalHeader>
                <Container> <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Get synonyms function
              </Label>
          {/* Description of function */}
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Get anonymns function
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Get meanings
              </Label>
            </FormGroup>
            </Container>
           
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Insert</Button>{' '}
              </ModalFooter>
            </Modal>
                  <Button outline color="info">Console &nbsp; <FontAwesome.FaColumns size={20} /></Button>&nbsp;
                  <Button outline color="success" onClick={this.toggle}>Run &nbsp; <FontAwesome.FaFastForward  size={20} /></Button>&nbsp;
            </Row>
          </ModalFooter>
          </Modal>
        </NavItem>   &nbsp; &nbsp;
         <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Profile
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/TechLog">
                    TechLog
                    </Link>
                  </DropdownItem>
                  
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar> 
    );
  }
}
