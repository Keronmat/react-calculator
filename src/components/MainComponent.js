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
      deg: false,
      inv: false
    };
  }

  calculate = input => {
    // if (input === undefined || input === null) return;
    console.log(input);
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
        operatorInUse: null
      });
    } else if (this.state.operatorInUse !== null) {
      let newInput = this.state.displayInput + value;
      let replace = newInput
        .replace(/x/g, "*")
        .replace(/÷/g, "/")
        .replace(/e/g, "Math.E")
        .replace(/π/g, "Math.PI");
      // eslint-disable-next-line
      let result = this.calculate(replace);

      this.setState({
        displayInput: newInput,
        displayResult: result,
        operatorInUse: null
      });
    } else if (this.state.sideOperators !== null) {
      this.handleSideFunctions(value);
    } else {
      this.setState({
        displayInput: this.state.displayInput + value
      });
    }
  };

  //backspaces one digit at a time
  handleBackSpace = () => {
    const { displayInput } = this.state;
    const display =
      displayInput > 0
        ? displayInput.substring(0, displayInput.length - 1)
        : null;
    this.setState({
      displayInput: display
    });
  };

  //clears the entire display input field.
  handleClear = () => {
    this.setState({
      displayInput: "",
      displayResult: "",
      sideOperators: null,
      operatorInUse: null
    });
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
    } else {
      this.setState(() => ({
        operatorInUse: newOperator,
        displayInput: displayInput + newOperator
      }));
    }
  };
  handleSideFunctions = value => {
    let newInput = this.state.displayInput + value;

    let x = newInput.slice(4);

    if (this.state.sideOperators === "sin(") {
      let result = this.state.deg
        ? this.calculate(Math.sin((x * Math.PI) / 180))
        : this.calculate(Math.sin(x));
      this.setState({
        displayInput: newInput,
        displayResult: result,
        sideOperators: null
      });
    } else if (this.state.sideOperators === "cos(") {
      let result = this.state.deg
        ? this.calculate(Math.cos((x * Math.PI) / 180))
        : this.calculate(Math.cos(x));
      this.setState({
        displayInput: newInput,
        displayResult: result,
        sideOperators: null
      });
    } else if (this.state.sideOperators === "tan(") {
      let result = this.state.deg
        ? this.calculate(Math.tan((x * Math.PI) / 180))
        : this.calculate(Math.tan(x));
      this.setState({
        displayInput: newInput,
        displayResult: result,
        sideOperators: null
      });
    } else if (this.state.sideOperators === "log(") {
      let result = this.calculate(Math.log10(x));
      this.setState({
        displayInput: newInput,
        displayResult: result,
        sideOperators: null
      });
    } else if (this.state.sideOperators === "ln(") {
      let y = newInput.slice(3);
      let result = this.calculate(Math.log(y));
      this.setState({
        displayInput: newInput,
        displayResult: result,
        sideOperators: null
      });
    } else if (this.state.sideOperators === "!") {
      this.setState({
        displayInput: newInput,
        sideOperators: null
      });
    } else if (this.state.sideOperators === "e") {
      this.setState({
        displayInput: newInput,
        sideOperators: null
      });
    } else if (this.state.sideOperators === "π") {
      this.setState({
        displayInput: newInput,
        sideOperators: null
      });
    } else if (this.state.sideOperators === "^") {
      let base = newInput.slice(0, newInput.indexOf("^"));
      let exponent = newInput.slice(newInput.indexOf("^") + 1);
      let display = newInput + value;
      let result = this.calculate(`Math.pow(${base}, ${exponent})`);
      console.log(newInput);
      this.setState(
        {
          displayInput: display,
          displayResult: result,
          sideOperators: null
        },
        function() {
          console.log(base, exponent, this.state.sideOperators);
        }
      );
    } else if (this.state.sideOperators === "√") {
      let y = newInput.slice(1);
      let result = this.calculate(Math.sqrt(y));
      this.setState(
        {
          displayInput: newInput,
          displayResult: result,
          sideOperators: null
        },
        function() {
          console.log();
        }
      );
    }
  };
  handleSideDrawerKeys = oper => {
    const newInput = this.state.displayInput;
    //const errorText = <p style={{ color: "red" }}>"Syntax Error"</p>;

    let result;
    let display;
    // let newOp;

    switch (oper) {
      case "sin(":
        if (newInput >= 1) {
          display = `${oper}${newInput}`;
          result = this.state.deg
            ? this.calculate(Math.sin((newInput * Math.PI) / 180))
            : this.calculate(Math.sin(newInput));
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        break;
      case "cos(":
        if (newInput >= 1) {
          display = `${oper}${newInput}`;
          result = this.state.deg
            ? this.calculate(Math.cos((newInput * Math.PI) / 180))
            : this.calculate(Math.cos(newInput));
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        break;
      case "tan(":
        if (newInput >= 1) {
          display = `${oper}${newInput}`;
          result = this.state.deg
            ? this.calculate(Math.tan((newInput * Math.PI) / 180))
            : this.calculate(Math.tan(newInput));
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        break;
      case "log(":
        if (newInput >= 1) {
          display = `${oper}${newInput}`;
          result = this.calculate(Math.log10(newInput));
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        break;
      case "ln(":
        if (newInput >= 1) {
          display = `${oper}${newInput}`;
          result = this.calculate(Math.log(newInput));
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        break;
      case "e":
        display = newInput + oper;
        result = this.calculate(Math.E);

        this.setState(
          {
            displayInput: display,
            displayResult: result,
            sideOperators: oper
          },
          function() {
            console.log(result);
          }
        );
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
        display = newInput + oper;
        result = this.calculate(Math.PI);
        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        break;
      case "^":
        let base = newInput.slice(0, newInput.indexOf("^"));
        let exponent = newInput.slice(newInput.indexOf("^") + 1);
        display = newInput + oper;
        result = this.calculate(Math.pow(base, exponent));

        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        break;
      case "√":
        if (newInput >= 1) {
          display = `${oper}${newInput}`;
          result = this.calculate(Math.sqrt(newInput));
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }

        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });

        break;
      case "%":
        const currentValue = parseFloat(newInput);

        if (currentValue === 0 || newInput === "") return;

        const fixedDigits = newInput.replace(/^-?\d*\.?/, "");
        const newValue = parseFloat(newInput) / 100;

        this.setState({
          displayInput: (newInput + oper).toString(),
          displayResult: String(newValue.toFixed(fixedDigits.length + 2)),
          sideOperators: oper
        });

        break;
      case "!":
        if (newInput !== "") {
          let num = newInput.slice(0);
          display = newInput + oper;
          result = this.factorial(num);
        } else {
          display = newInput + oper;
        }
        this.setState(
          {
            displayInput: display,
            displayResult: result,
            sideOperators: oper
          },
          function() {
            console.log(newInput.slice(0));
          }
        );
        break;
      default:
        this.setState({
          displayInput: newInput ? newInput + oper : oper,
          sideOperators: oper,
          displayResult: null
        });
    }
  };

  factorial = n => {
    if (n === 0) return 1;
    let f = 1;
    for (let i = 1; i < n; i++) {
      f = f * (i + 1);
    }
    return f;
  };

  handleRadorDeg = () => {
    this.setState({ deg: !this.state.deg }, function() {
      console.log(this.state.deg);
    });
  };

  handleInv = () => {
    this.setState({ inv: !this.state.inv }, function() {
      console.log(this.state.inv);
    });
  };

  render() {
    return (
      <div className="calculator">
        <Display
          displayInput={this.state.displayInput}
          displayResult={this.state.displayResult}
          deg={this.state.deg}
        />
        <Keypad
          toggleOperator={this.toggleOperator}
          operatorInUse={this.operatorInUse}
          handleClick={this.handleClick}
          handleBackSpace={this.handleBackSpace}
          handleClear={this.handleClear}
          handleDot={this.handleDot}
          handleSideDrawerKeys={this.handleSideDrawerKeys}
          handleRadorDeg={this.handleRadorDeg}
          deg={this.state.deg}
          inv={this.state.inv}
          handleInv={this.state.handleInv}
        />
      </div>
    );
  }
}
