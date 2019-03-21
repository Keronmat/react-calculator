import React, { Component } from "react";
import Display from "./Display/DisplayComponent";
import Keypad from "./Keypad/KeypadComponent";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInput: "",
      displayResult: null,
      operatorInUse: null
    };
  }

  //enters a digit when click
  /*handleClick = input => {
    //this.handleEqualSign();
    this.setState(
      prevState => {
        return {
          displayInput: prevState.displayInput + input,
          operatorInUse: null
        };
      },
      function() {
        console.log(this.state);
      }
    );
  };*/

  handleClick = value => {
    if (value === "=") {
      this.setState({
        displayInput: this.state.displayResult,
        displayResult: "",
        operatorInUse: null
      });
    } else if (this.state.operatorInUse !== null) {
      let newInput = this.state.displayInput + value;
      let result = eval(newInput);

      this.setState({
        displayInput: newInput,
        displayResult: result
      });
    } else {
      this.setState({
        displayInput: this.state.displayInput + value
      });
    }
  };

  //backspaces one digit at a time
  handleBackSpace = () => {
    const { displayInput } = this.state;

    this.setState({
      displayInput: displayInput.substring(0, displayInput.length - 1) || "0"
    });
  };

  //clears the entire display input field.
  handleClear = () => {
    this.setState({ displayInput: "", displayResult: "" });
  };

  //ensures that only one decimal point is used.
  handleDot = () => {
    const { displayInput } = this.state;
    if (displayInput.indexOf(".") === -1) {
      this.setState({ displayInput: displayInput + "." });
    }
  };

  //toggle Operator

  toggleOperator = newOperator => {
    const { displayInput, operatorInUse } = this.state;
    //const lastOper = displayInput.charAt(displayInput.length - 1);
    const prevOp = operatorInUse;
    const prevDisplay = displayInput;

    if (operatorInUse) {
      if (prevOp === newOperator) {
        return;
      } else {
        let x = prevDisplay.slice(0, -1);
        this.setState(
          () => ({
            operatorInUse: newOperator,
            displayInput: x + newOperator
          }),
          function() {
            console.log(this.state);
          }
        );
      }
    } else {
      this.setState(() => ({
        operatorInUse: newOperator,
        displayInput: displayInput + newOperator
      }));
    }
  };

  //calculate when = is used
  /* handleEqualSign = () => {
    //console.log(this.state.displayInput);
    const { displayInput, operatorInUse, displayResult } = this.state;
    const x = displayInput.slice(0, -1);
    const lastCha = displayInput.charAt(displayInput.length - 1);

    if (lastCha === operatorInUse) {
      this.setState(
        () => ({
          displayResult: eval(displayInput.slice(0, -1))
        }),
        function() {
          console.log(displayResult);
        }
      );
    } else {
      this.setState(
        () => ({
          displayResult: eval(displayInput)
        }),
        function() {
          console.log(displayResult);
        }
      );
    }
  };*/

  render() {
    return (
      <div className="calculator">
        <Display
          displayInput={this.state.displayInput}
          displayResult={this.state.displayResult}
        />
        <Keypad
          toggleOperator={this.toggleOperator}
          operatorInUse={this.operatorInUse}
          handleClick={this.handleClick}
          handleEqualSign={this.handleEqualSign}
          handleBackSpace={this.handleBackSpace}
          handleClear={this.handleClear}
          handleDot={this.handleDot}
        />
      </div>
    );
  }
}
