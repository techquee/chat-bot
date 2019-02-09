import React from 'react';
import Login from '../nav/nav';
import { Card, CardText, CardBody,
  CardTitle, CardDeck, CardSubtitle, Button } from 'reactstrap';
import './TechLog.css';


export default class TechLog extends React.Component {
  render() {
    return (
      <div>
        <Login/>
        <div class="padding">
        <CardDeck>
       <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <br/>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </CardDeck>
     <br/>
     </div>

     </div>

    );
  }
}