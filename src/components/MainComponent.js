import React, { Component } from "react";
import Display from "./Display/DisplayComponent";
import Keypad from "./Keypad/KeypadComponent";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInput: "",
      displayResult: "",
      operatorInUse: null,
      sideOperators: null,
      isRadoRdeg: false
    };
  }

  calculate = input => {
    if (input === undefined || input === null) return;
    // eslint-disable-next-line
    return eval(input);
  };

  handleClick = value => {
    //this.handleSideDrawerKeys(value);
    this.toggleOperator();
    if (value === "=") {
      this.setState({
        displayInput: this.state.displayResult,
        displayResult: "",
        operatorInUse: null,
        sideOperators: null
      });
    } else if (this.state.operatorInUse !== null) {
      let newInput = this.state.displayInput + value;
      let replace = newInput.replace(/x/g, "*").replace(/÷/g, "/");
      // eslint-disable-next-line
      let result = this.calculate(replace);

      this.setState({
        displayInput: newInput,
        displayResult: result
      });
    } else if (this.state.sideOperators !== null) {
      this.handleSideFunctions(value);
    } else {
      this.setState({
        displayInput: this.state.displayInput + value
      });
    }
    console.log(this.state.sideOperators);
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
    const { displayInput, operatorInUse, sideOperators } = this.state;
    //const lastOper = displayInput.charAt(displayInput.length - 1);
    const prevOp = operatorInUse;
    const prevSideOp = sideOperators;
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
    } else if (sideOperators) {
      if (prevSideOp === sideOperators) {
        return;
      } else {
        let x = prevDisplay.slice(0, -1);
        this.setState(
          () => ({
            sideOperators: newOperator,
            displayInput: x + newOperator
          }),
          function() {
            console.log(this.state);
          }
        );
      }
    } else {
      this.setState(
        () => ({
          operatorInUse: newOperator,
          displayInput: displayInput + newOperator
        }),
        function() {
          console.log(operatorInUse);
        }
      );
    }
  };
  handleSideFunctions = value => {
    let newInput = this.state.displayInput + value;
    let index = newInput.indexOf(this.state.sideOperators);
    let x = newInput.slice(4);

    if (this.state.sideOperators === "sin(") {
      let result = this.calculate(Math.sin(x));
      this.setState(
        { displayInput: newInput, displayResult: result },
        function() {
          console.log(x, result, index, newInput);
        }
      );
    } else if (this.state.sideOperators === "cos(") {
      let result = this.calculate(Math.cos(x));
      this.setState(
        { displayInput: newInput, displayResult: result },
        function() {
          console.log(x, result, index, newInput, this.state.sideOperators);
        }
      );
    } else if (this.state.sideOperators === "tan(") {
      let result = this.calculate(Math.tan(x));
      this.setState(
        { displayInput: newInput, displayResult: result },
        function() {
          console.log(x, result, index, newInput);
        }
      );
    } else if (this.state.sideOperators === "log(") {
      let result = this.calculate(Math.log(x));
      this.setState(
        { displayInput: newInput, displayResult: result },
        function() {
          console.log(x, result, index, newInput);
        }
      );
    }
  };
  handleSideDrawerKeys = oper => {
    const newInput = this.state.displayInput;
    const errorText = <p style={{ color: "red" }}>"Syntax Error"</p>;

    let result;
    let display;
    let newOp;

    switch (oper) {
      case "sin(":
        if (newInput >= 1) {
          display = `${oper}${newInput})`;
          result = this.calculate(Math.sin(newInput));
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = this.calculate(Math.sin(this.state.displayResult));
        }
        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        break;
      case "cos(":
        if (newInput >= 1) {
          display = `${oper}${newInput})`;
          result = this.calculate(Math.cos(newInput));
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = this.calculate(Math.cos(this.state.displayResult));
        }
        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        break;
      case "tan(":
        if (newInput >= 1) {
          display = `${oper}${newInput})`;
          result = this.calculate(Math.tan(newInput));
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = this.calculate(Math.tan(this.state.displayResult));
        }
        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        break;
      case "log(":
        if (newInput >= 1) {
          display = `${oper}${newInput})`;
          result = this.calculate(Math.log(newInput));
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = this.calculate(Math.log(this.state.displayResult));
        }
        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        break;
      case "(":
        //console.log(oper, newInput, replace, result);
        this.setState({
          displayInput: newInput + oper,
          sideOperators: oper
        });
        break;
      case ")":
        //console.log(oper, newInput, replace, result);
        this.setState({
          displayInput: newInput + oper,
          sideOperators: oper
        });
        break;
      case "π":
        this.setState(
          {
            displayInput: newInput
              ? newInput + "3.141592653589793"
              : "3.141592653589793",
            sideOperators: oper
          },
          function() {
            console.log(newInput > 1);
          }
        );
        break;
      case "%":
        const currentValue = parseFloat(newInput);

        if (currentValue === 0 || newInput === "") return;

        const fixedDigits = newInput.replace(/^-?\d*\.?/, "");
        const newValue = parseFloat(newInput) / 100;

        this.setState({
          displayInput: (newInput + oper).toString(),
          displayResult: String(newValue.toFixed(fixedDigits.length + 2))
        });

        break;
      default:
        this.setState({
          displayInput: newInput ? newInput + oper : oper,
          sideOperators: oper,
          displayResult: null
        });
    }
  };
  handleRadorDeg = () => {
    this.setState({ isRadoRdeg: !this.state.isRadoRdeg });
    console.log(this.state.isRadoRdeg);
  };

  render() {
    return (
      <div className="calculator">
        <Display
          displayInput={this.state.displayInput}
          displayResult={this.state.displayResult}
          isRadoRdeg={this.state.isRadoRdeg}
        />
        <Keypad
          toggleOperator={this.toggleOperator}
          operatorInUse={this.operatorInUse}
          handleClick={this.handleClick}
          handleEqualSign={this.handleEqualSign}
          handleBackSpace={this.handleBackSpace}
          handleClear={this.handleClear}
          handleDot={this.handleDot}
          handleSideDrawerKeys={this.handleSideDrawerKeys}
          handleSideOperators={this.handleSideOperators}
          handleRadorDeg={this.handleRadorDeg}
          isRadoRdeg={this.state.isRadoRdeg}
        />
      </div>
    );
  }
}
const factorial = num => {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};
