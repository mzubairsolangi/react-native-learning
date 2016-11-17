import React, { Component } from 'react';
import { Alert, Grid, Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import TemperatureInput from './TemperatureInput';
import './App.css';

class Calculator  extends Component {

   constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {value: '', scale: 'c'};
  }

  handleCelsiusChange(value) {
    this.setState({scale: 'c', value});
  }

  handleFahrenheitChange(value) {
    this.setState({scale: 'f', value});
  }

 render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

    return (
         <form>
            <FormGroup
                controlId="formBasicText">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={6} xsOffset={3}>
                           <TemperatureInput
                                scale="c"
                                value={celsius}
                                onChange={this.handleCelsiusChange} />
                           <TemperatureInput
                                scale="f"
                                value={fahrenheit}
                                onChange={this.handleFahrenheitChange} /> <br/>
                           <BoilingVerdict
                                celsius={parseFloat(celsius)} />
                        </Col>
                    </Row>
                </Grid>
            </FormGroup>
      </form>
    );
  }
}

// Convert celsius into Fahrenheit.
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Convert Fahrenheit into celsius.
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// display alert box based on conditions.
function BoilingVerdict(props) {
   if (props.celsius < 1) {
    return <Alert bsStyle="info">
                The water would freeze.
             </Alert>
  }
  else if (props.celsius >= 100) {
    return <Alert bsStyle="danger">
                The water would boil.
             </Alert>
  }

  return <Alert bsStyle="warning">
                The water would not boil.
         </Alert>
}



export default Calculator ;
