import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class CreateSuscriber extends Component {
  state = {
    Nickname: "",
    pin: 0,
    email: "",
  };

  cambiarInput = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case "Nickname":
        this.setState({ Nickname: e.target.value });
        break;

      case "pin":
        this.setState({ pin: e.target.value });
        break;

      case "email":
        this.setState({ email: e.target.value });
        break;

      default:
        break;
    }
  };

  manejarSubmit = () => {
    const jsonSend = this.state;
    const URL = "https://api-gt.herokuapp.com/api/v1/Subscribers";
    axios
      .post(URL, jsonSend)
      .then((res) => alert("Suscripción creada"))
      .catch((err) => alert(`Error al crear suscripción`));
  };

  render() {
    return (
      <React.Fragment>
        <div className="row d-flex justify-content-between " style={{ backgroundColor: '#ebe1f2'}}>
          <div className="col-6">
            <img
              src="https://raw.githubusercontent.com/Gus657/Imagenes/master/Responder.jpg"
              width="110%"
              height="100%"
            ></img>
          </div>
          <div className="col-6"  style={{ backgroundColor: '#FFFFFF', "border-radius":'5px'}}>
            <div className="mt-4 mr-4 mb-4 " >
              <h3>Suscripción</h3>

              <Form>
                <FormGroup>
                  <Label>Nickname</Label>
                  <Input
                    value={this.state.Nickname}
                    onChange={this.cambiarInput}
                    type="text"
                    name="Nickname"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>pin</Label>
                  <Input
                    value={this.state.pin}
                    onChange={this.cambiarInput}
                    type="number"
                    name="pin"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    value={this.state.email}
                    onChange={this.cambiarInput}
                    type="string"
                    name="email"
                  />
                </FormGroup>
                <Button color="success" onClick={this.manejarSubmit}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateSuscriber;
