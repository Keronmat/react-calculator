import React, { Component } from "react";
import Main from "./MainComponent";
import History from "./HistoryComponent";
import Help from "./HelpComponent";
import Settings from "./SettingsComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundaryComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInput: "",
      displayResult: "",
      operatorInUse: null,
      sideOperators: null,
      sideDrawerOpen: false,
      deg: false,
      inverse: false,
      theme: "original",
      history: []
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
  }

  handleTheme = event => {
    this.setState({ theme: event.target.value }, function() {
      console.log(this.state.theme);
    });
  };

  // logic for binding keypresses with buttons
  handleKey = event => {
    let numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let { key } = event;

    if (key === "Enter") key = this.calculate(this.state.displayInput);

    if (numArr.includes(key)) {
      event.preventDefault();
      this.handleClick(key);
    } else if (key === ".") {
      event.preventDefault();
      this.handleDot();
    } else if (key === "Backspace") {
      event.preventDefault();
      this.handleBackSpace();
    } else if (key === "Clear") {
      event.preventDefault();
      this.handleClear();
    } else if (["*", "/", "+", "-"].includes(key)) {
      event.preventDefault();
      //this.handleClick(key);
      this.toggleOperator(key);
      this.calculate(this.state.displayInput);
    } else if (["^", "(", ")", "%"].includes(key)) {
      event.preventDefault();
      this.handleSideDrawerKeys(key);
    }
  };
  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKey);
  }

  calculate = input => {
    if (input !== "") {
      try {
        // eslint-disable-next-line
        let result = eval(input);

        if (isNaN(result)) {
          return;
        } else {
          this.setState(
            {
              displayResult: result.toString()
            },
            function() {
              console.log(this.state.history);
            }
          );
        }
      } catch (e) {
        this.setState({
          displayResult: `Bad Expression`
        });
      }
    }
  };

  handleClick = value => {
    if (value === "=") {
      let result = this.calculate(this.state.displayResult);
      this.setState({
        displayInput: this.state.displayResult,
        displayResult: result,
        operatorInUse: null,
        sideOperators: null
      });
      this.addToHistory(this.state.displayInput, this.state.displayResult);
    } else if (this.state.operatorInUse !== null) {
      let newInput = this.state.displayInput + value;
      let replace = newInput
        .replace(/x/g, "*")
        .replace(/÷/g, "/")
        .replace(/%/g, "/100")
        .replace(/e/g, "Math.E")
        .replace(/π/g, "Math.PI")
        .replace(/sin\(/g, "Math.sin(")
        .replace(/cos\(/g, "Math.cos(")
        .replace(/tan\(/g, "Math.tan(")
        .replace(/log\(/g, "Math.log10(")
        .replace(/ln\(/g, "Math.log(")
        .replace(/sin⁻¹\(/g, "Math.asin(")
        .replace(/cos⁻¹\(/g, "Math.acos(")
        .replace(/tan⁻¹\(/g, "Math.atan(");

      // eslint-disable-next-line

      this.calculate(replace);

      this.setState({
        displayInput: newInput,
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
        : "";
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
    } /* else if (sideOperators) {
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
        } */ else {
      this.setState(() => ({
        operatorInUse: newOperator,
        displayInput: displayInput + newOperator
      }));
    }
  };

  /* toggleSideOperator = newOperator => {
        const { displayInput, sideOperators } = this.state;
        //const lastOper = displayInput.charAt(displayInput.length - 1);
        const prevOp = sideOperators;
        const prevDisplay = displayInput;
    
        if (sideOperators) {
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
            sideOperators: newOperator,
            displayInput: displayInput + newOperator
          }));
        }
      };*/
  handleSideFunctions = value => {
    let newInput = this.state.displayInput + value;
    let x = newInput.slice(4);
    let i = newInput.slice(6);

    if (this.state.sideOperators === "sin(") {
      let result = this.state.deg ? Math.sin((x * Math.PI) / 180) : Math.sin(x);
      this.calculate(result);
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "sin⁻¹(") {
      let result = this.state.deg
        ? Math.asin((i * Math.PI) / 180)
        : Math.asin(i);
      this.calculate(result);
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "cos(") {
      let result = this.state.deg ? Math.cos((x * Math.PI) / 180) : Math.cos(x);
      this.calculate(result);
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "cos⁻¹(") {
      let result = this.state.deg
        ? Math.acos((i * Math.PI) / 180)
        : Math.acos(i);
      this.calculate(result);
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "tan(") {
      let result = this.state.deg ? Math.tan((x * Math.PI) / 180) : Math.tan(x);
      this.calculate(result);
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "tan⁻¹(") {
      let result = this.state.deg
        ? Math.atan((i * Math.PI) / 180)
        : Math.atan(i);
      this.calculate(result);
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "log(") {
      let result = Math.log10(x);
      this.calculate(result);
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "exp(") {
      let result = Math.exp(x);
      this.calculate(result);
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "ln(") {
      let y = newInput.slice(3);
      let result = Math.log10(y);
      this.calculate(result);
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "!") {
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "e") {
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "(") {
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === ")") {
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "π") {
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "^") {
      let base = newInput.slice(0, newInput.indexOf("^"));
      let exponent = newInput.slice(newInput.indexOf("^") + 1);
      let display = newInput + value;
      let result = `Math.pow(${base}, ${exponent})`;
      this.calculate(result);
      this.setState({
        displayInput: display
      });
    } else if (this.state.sideOperators === "10^") {
      let exponent = newInput.slice(newInput.indexOf("^") + 1);
      let display = newInput + value;
      let result = `Math.pow(${10}, ${exponent})`;
      this.calculate(result);

      this.setState({
        displayInput: display
      });
    } else if (this.state.sideOperators === "√") {
      let y = newInput.slice(1);
      let result = Math.sqrt(y);
      this.calculate(result);
      this.setState({
        displayInput: newInput
      });
    } else if (this.state.sideOperators === "²") {
      let result = Math.pow(newInput, 2);
      this.calculate(result);
      this.setState({
        displayInput: newInput
      });
    }
  };

  handleSideDrawerKeys = oper => {
    const newInput = this.state.displayInput;

    let result;
    let display;
    // let newOp;

    switch (oper) {
      case "sin(":
        if (newInput) {
          display = `${oper}${newInput}`;
          result = this.state.deg
            ? Math.sin((newInput * Math.PI) / 180)
            : Math.sin(newInput);
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "sin⁻¹(":
        if (newInput) {
          display = `${oper}${newInput}`;
          result = this.state.deg
            ? Math.asin((newInput * Math.PI) / 180)
            : Math.asin(newInput);
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.calculate(result);
        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        break;
      case "cos(":
        if (newInput) {
          display = `${oper}${newInput}`;
          result = this.state.deg
            ? Math.cos((newInput * Math.PI) / 180)
            : Math.cos(newInput);
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "cos⁻¹(":
        if (newInput) {
          display = `${oper}${newInput}`;
          result = this.state.deg
            ? Math.acos((newInput * Math.PI) / 180)
            : Math.acos(newInput);
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "tan(":
        if (newInput) {
          display = `${oper}${newInput}`;
          result = this.state.deg
            ? Math.tan((newInput * Math.PI) / 180)
            : Math.tan(newInput);
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "tan⁻¹(":
        if (newInput) {
          display = `${oper}${newInput}`;
          result = this.state.deg
            ? Math.atan((newInput * Math.PI) / 180)
            : Math.atan(newInput);
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "log(":
        if (newInput) {
          display = `${oper}${newInput}`;
          result = Math.log10(newInput);
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        this.calculate(result);
        break;

      case "exp(":
        if (newInput) {
          display = `${oper}${newInput}`;
          result = Math.exp(newInput);
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "ln(":
        if (newInput) {
          display = `${oper}${newInput}`;
          result = Math.log(newInput);
        } else if (this.state.displayResult !== undefined) {
          display = `${oper}${newInput}`;
          result = "";
        }
        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "e":
        display = newInput + oper;
        result = Math.E;

        this.setState({
          displayInput: display,
          displayResult: result,
          sideOperators: oper
        });
        this.calculate(result);
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
        result = Math.PI;
        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "^":
        let base = newInput.slice(0, newInput.indexOf("^"));
        let exponent = newInput.slice(newInput.indexOf("^") + 1);
        display = newInput + oper;
        result = Math.pow(base, exponent);

        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "10^":
        if (newInput) {
          display = `${oper}${newInput}`;
          result = Math.pow(10, newInput);
        } else {
          display = `${oper}${newInput}`;
          result = "";
        }

        this.setState({
          displayInput: display,
          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "²":
        if (newInput) {
          display = `${newInput}${oper}`;
          result = Math.pow(newInput, 2);
        } else {
          display = `${newInput}${oper}`;
          result = "";
        }

        this.setState({
          displayInput: display,

          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "√":
        if (newInput) {
          display = `${oper}${newInput}`;
          result = Math.sqrt(newInput);
        } else {
          display = `${oper}${newInput}`;
          result = "";
        }

        this.setState({
          displayInput: display,

          sideOperators: oper
        });
        this.calculate(result);
        break;
      case "%":
        const currentValue = parseFloat(newInput);

        if (currentValue === 0 || newInput === "") return;

        // const fixedDigits = newInput.replace(/^-?\d*\.?/, "");
        const newValue = parseFloat(newInput) / 100;

        this.setState({
          displayInput: (newInput + oper).toString(),
          // displayResult: String(newValue.toFixed(fixedDigits.length + 2)),
          sideOperators: oper
        });
        this.calculate(newValue);
        break;
      case "!":
        if (newInput) {
          let num = newInput.slice(0);
          display = newInput + oper;
          result = this.factorial(num);
        } else {
          display = newInput + oper;
        }
        this.setState({
          displayInput: display,

          sideOperators: oper
        });
        this.calculate(result);
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
    this.setState({ deg: !this.state.deg });
  };

  toggleInverse = () => {
    this.setState({ inverse: !this.state.inverse });
  };
  //  adds expression and result to history state
  addToHistory = (new_exp, result) => {
    this.setState(
      {
        history: [...this.state.history, { exp: new_exp, result: result }]
      },
      function() {
        console.log(this.state);
      }
    );
  };
  toggleSideDrawer = () => {
    this.setState(
      { sideDrawerOpen: !this.state.sideDrawerOpen },
      console.log(this.state)
    );
  };
  render() {
    return (
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={300}>
          <Switch>
            <Route
              exact
              path="/main"
              component={() => (
                <ErrorBoundary>
                  <Main
                    displayInput={this.state.displayInput}
                    displayResult={this.state.displayResult}
                    deg={this.state.deg}
                    history={this.state.history}
                    toggleOperator={this.toggleOperator}
                    operatorInUse={this.operatorInUse}
                    handleClick={this.handleClick}
                    handleBackSpace={this.handleBackSpace}
                    handleClear={this.handleClear}
                    handleDot={this.handleDot}
                    handleSideDrawerKeys={this.handleSideDrawerKeys}
                    handleRadorDeg={this.handleRadorDeg}
                    inverse={this.state.inverse}
                    toggleInverse={this.toggleInverse}
                    sideDrawerOpen={this.state.sideDrawerOpen}
                    toggleSideDrawer={this.toggleSideDrawer}
                    theme={this.state.theme}
                  />
                </ErrorBoundary>
              )}
            />

            <Route
              path="/history"
              component={() => (
                <ErrorBoundary>
                  <History
                    history={this.state.history}
                    theme={this.state.theme}
                  />
                </ErrorBoundary>
              )}
            />
            <Route
              path="/help"
              component={() => (
                <ErrorBoundary>
                  <Help theme={this.state.theme} />
                </ErrorBoundary>
              )}
            />

            <Route
              path="/settings"
              component={() => (
                <ErrorBoundary>
                  <Settings
                    theme={this.state.theme}
                    handleTheme={this.handleTheme}
                  />
                </ErrorBoundary>
              )}
            />
            <Redirect to="/main" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
