import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';

class Donation extends Component {
  state = { 
    suscriber: this.props.suscriber, 
    amount: this.props.amount, 
    message: this.props.message, 
  }


  render() { 
    return ( 
      <Card className="mt-3" style={{ backgroundColor: '#32CD32' }}>
        <CardBody>
          <CardTitle style={{ color: 'white' }}>{ this.state.suscriber }</CardTitle>
          <CardText style={{ color: 'white' }}>
            {`Donación: ${this.state.amount} - Mensaje: ${this.state.message}`}
          </CardText>
        </CardBody>
      </Card>
     );
  }
}
 
export default Donation;