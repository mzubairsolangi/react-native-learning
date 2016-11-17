import React, { Component } from 'react';
import { Alert, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const scale = this.props.scale;
        return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <FormControl
                type="number"
                value={value}
                placeholder="Enter value"
                onChange={this.handleChange} /><br/>
        </fieldset>
        );
    }
}

export default TemperatureInput;