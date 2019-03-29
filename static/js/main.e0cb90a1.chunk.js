(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.d(t,"a",function(){return _});var n=a(10),r=a(11),l=a(13),s=a(12),o=a(14),c=a(0),i=a.n(c),_=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={hasError:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.hasError?i.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(c.Component)},30:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Calculator});var C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(37),C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12),C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_MainComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(36),_HistoryComponent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(33),_HelpComponent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(34),_SettingsComponent__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(35),react_router_dom__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(5),_ErrorBoundaryComponent__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(15),react_transition_group__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(20),react_transition_group__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_13__),Calculator=function(_Component){function Calculator(props){var _this;return Object(C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Calculator),_this=Object(C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator).call(this,props)),_this.handleTheme=function(e){_this.setState({theme:e.target.value},function(){console.log(this.state.theme)})},_this.handleKey=function(e){var t=e.key;"Enter"===t&&(t=_this.calculate(_this.state.displayInput)),["0","1","2","3","4","5","6","7","8","9"].includes(t)?(e.preventDefault(),_this.handleClick(t)):"."===t?(e.preventDefault(),_this.handleDot()):"Backspace"===t?(e.preventDefault(),_this.handleBackSpace()):"Clear"===t?(e.preventDefault(),_this.handleClear()):["*","/","+","-"].includes(t)?(e.preventDefault(),_this.toggleOperator(t),_this.calculate(_this.state.displayInput)):["^","(",")","%"].includes(t)&&(e.preventDefault(),_this.handleSideDrawerKeys(t))},_this.calculate=function(input){if(""!==input)try{var result=eval(input);if(isNaN(result))return;_this.setState({displayResult:result.toString()},function(){console.log(this.state.history)})}catch(e){_this.setState({displayResult:"Bad Expression"})}},_this.handleClick=function(e){if("="===e){var t=_this.calculate(_this.state.displayResult);_this.setState({displayInput:_this.state.displayResult,displayResult:t,operatorInUse:null,sideOperators:null}),_this.addToHistory(_this.state.displayInput,_this.state.displayResult)}else if(null!==_this.state.operatorInUse){var a=_this.state.displayInput+e,n=a.replace(/x/g,"*").replace(/\xf7/g,"/").replace(/%/g,"/100").replace(/e/g,"Math.E").replace(/\u03c0/g,"Math.PI").replace(/sin\(/g,"Math.sin(").replace(/cos\(/g,"Math.cos(").replace(/tan\(/g,"Math.tan(").replace(/log\(/g,"Math.log10(").replace(/ln\(/g,"Math.log(").replace(/sin\u207b\xb9\(/g,"Math.asin(").replace(/cos\u207b\xb9\(/g,"Math.acos(").replace(/tan\u207b\xb9\(/g,"Math.atan(");_this.calculate(n),_this.setState({displayInput:a,operatorInUse:null})}else null!==_this.state.sideOperators?_this.handleSideFunctions(e):_this.setState({displayInput:_this.state.displayInput+e})},_this.handleBackSpace=function(){var e=_this.state.displayInput,t=e>0?e.substring(0,e.length-1):"";_this.setState({displayInput:t})},_this.handleClear=function(){_this.setState({displayInput:"",displayResult:"",sideOperators:null,operatorInUse:null})},_this.handleDot=function(){var e=_this.state.displayInput;-1===e.indexOf(".")&&_this.setState({displayInput:e+"."})},_this.toggleOperator=function(e){var t=_this.state,a=t.displayInput,n=t.operatorInUse;if(n){if(n===e)return;var r=a.slice(0,-1);_this.setState(function(){return{operatorInUse:e,displayInput:r+e}},function(){console.log(this.state)})}else _this.setState(function(){return{operatorInUse:e,displayInput:a+e}})},_this.handleSideFunctions=function(e){var t=_this.state.displayInput+e,a=t.slice(4),n=t.slice(6);if("sin("===_this.state.sideOperators){var r=_this.state.deg?Math.sin(a*Math.PI/180):Math.sin(a);_this.calculate(r),_this.setState({displayInput:t})}else if("sin\u207b\xb9("===_this.state.sideOperators){var l=_this.state.deg?Math.asin(n*Math.PI/180):Math.asin(n);_this.calculate(l),_this.setState({displayInput:t})}else if("cos("===_this.state.sideOperators){var s=_this.state.deg?Math.cos(a*Math.PI/180):Math.cos(a);_this.calculate(s),_this.setState({displayInput:t})}else if("cos\u207b\xb9("===_this.state.sideOperators){var o=_this.state.deg?Math.acos(n*Math.PI/180):Math.acos(n);_this.calculate(o),_this.setState({displayInput:t})}else if("tan("===_this.state.sideOperators){var c=_this.state.deg?Math.tan(a*Math.PI/180):Math.tan(a);_this.calculate(c),_this.setState({displayInput:t})}else if("tan\u207b\xb9("===_this.state.sideOperators){var i=_this.state.deg?Math.atan(n*Math.PI/180):Math.atan(n);_this.calculate(i),_this.setState({displayInput:t})}else if("log("===_this.state.sideOperators){var _=Math.log10(a);_this.calculate(_),_this.setState({displayInput:t})}else if("exp("===_this.state.sideOperators){var u=Math.exp(a);_this.calculate(u),_this.setState({displayInput:t})}else if("ln("===_this.state.sideOperators){var d=t.slice(3),h=Math.log10(d);_this.calculate(h),_this.setState({displayInput:t})}else if("!"===_this.state.sideOperators)_this.setState({displayInput:t});else if("e"===_this.state.sideOperators)_this.setState({displayInput:t});else if("("===_this.state.sideOperators)_this.setState({displayInput:t});else if(")"===_this.state.sideOperators)_this.setState({displayInput:t});else if("\u03c0"===_this.state.sideOperators)_this.setState({displayInput:t});else if("^"===_this.state.sideOperators){var p=t.slice(0,t.indexOf("^")),m=t.slice(t.indexOf("^")+1),E=t+e,g="Math.pow(".concat(p,", ").concat(m,")");_this.calculate(g),_this.setState({displayInput:E})}else if("10^"===_this.state.sideOperators){var v=t.slice(t.indexOf("^")+1),y=t+e,O="Math.pow(".concat(10,", ",v,")");_this.calculate(O),_this.setState({displayInput:y})}else if("\u221a"===_this.state.sideOperators){var D=t.slice(1),f=Math.sqrt(D);_this.calculate(f),_this.setState({displayInput:t})}else if("\xb2"===_this.state.sideOperators){var C=Math.pow(t,2);_this.calculate(C),_this.setState({displayInput:t})}},_this.handleSideDrawerKeys=function(e){var t,a,n=_this.state.displayInput;switch(e){case"sin(":n?(a="".concat(e).concat(n),t=_this.state.deg?Math.sin(n*Math.PI/180):Math.sin(n)):void 0!==_this.state.displayResult&&(a="".concat(e).concat(n),t=""),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"sin\u207b\xb9(":n?(a="".concat(e).concat(n),t=_this.state.deg?Math.asin(n*Math.PI/180):Math.asin(n)):void 0!==_this.state.displayResult&&(a="".concat(e).concat(n),t=""),_this.calculate(t),_this.setState({displayInput:a,sideOperators:e});break;case"cos(":n?(a="".concat(e).concat(n),t=_this.state.deg?Math.cos(n*Math.PI/180):Math.cos(n)):void 0!==_this.state.displayResult&&(a="".concat(e).concat(n),t=""),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"cos\u207b\xb9(":n?(a="".concat(e).concat(n),t=_this.state.deg?Math.acos(n*Math.PI/180):Math.acos(n)):void 0!==_this.state.displayResult&&(a="".concat(e).concat(n),t=""),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"tan(":n?(a="".concat(e).concat(n),t=_this.state.deg?Math.tan(n*Math.PI/180):Math.tan(n)):void 0!==_this.state.displayResult&&(a="".concat(e).concat(n),t=""),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"tan\u207b\xb9(":n?(a="".concat(e).concat(n),t=_this.state.deg?Math.atan(n*Math.PI/180):Math.atan(n)):void 0!==_this.state.displayResult&&(a="".concat(e).concat(n),t=""),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"log(":n?(a="".concat(e).concat(n),t=Math.log10(n)):void 0!==_this.state.displayResult&&(a="".concat(e).concat(n),t=""),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"exp(":n?(a="".concat(e).concat(n),t=Math.exp(n)):void 0!==_this.state.displayResult&&(a="".concat(e).concat(n),t=""),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"ln(":n?(a="".concat(e).concat(n),t=Math.log(n)):void 0!==_this.state.displayResult&&(a="".concat(e).concat(n),t=""),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"e":a=n+e,t=Math.E,_this.setState({displayInput:a,displayResult:t,sideOperators:e}),_this.calculate(t);break;case"(":case")":_this.setState({displayInput:n+e,sideOperators:e});break;case"\u03c0":a=n+e,t=Math.PI,_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"^":var r=n.slice(0,n.indexOf("^")),l=n.slice(n.indexOf("^")+1);a=n+e,t=Math.pow(r,l),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"10^":n?(a="".concat(e).concat(n),t=Math.pow(10,n)):(a="".concat(e).concat(n),t=""),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"\xb2":n?(a="".concat(n).concat(e),t=Math.pow(n,2)):(a="".concat(n).concat(e),t=""),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"\u221a":n?(a="".concat(e).concat(n),t=Math.sqrt(n)):(a="".concat(e).concat(n),t=""),_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;case"%":if(0===parseFloat(n)||""===n)return;var s=parseFloat(n)/100;_this.setState({displayInput:(n+e).toString(),sideOperators:e}),_this.calculate(s);break;case"!":if(n){var o=n.slice(0);a=n+e,t=_this.factorial(o)}else a=n+e;_this.setState({displayInput:a,sideOperators:e}),_this.calculate(t);break;default:_this.setState({displayInput:n?n+e:e,sideOperators:e,displayResult:null})}},_this.factorial=function(e){if(0===e)return 1;for(var t=1,a=1;a<e;a++)t*=a+1;return t},_this.handleRadorDeg=function(){_this.setState({deg:!_this.state.deg})},_this.toggleInverse=function(){_this.setState({inverse:!_this.state.inverse})},_this.addToHistory=function(e,t){_this.setState({history:[].concat(Object(C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(_this.state.history),[{exp:e,result:t}])},function(){console.log(this.state)})},_this.toggleSideDrawer=function(){_this.setState({sideDrawerOpen:!_this.state.sideDrawerOpen},console.log(_this.state))},_this.state={displayInput:"",displayResult:"",operatorInUse:null,sideOperators:null,sideDrawerOpen:!1,deg:!1,inverse:!1,theme:"original",history:[]},_this}return Object(C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator,_Component),Object(C_Users_Keron_Documents_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKey)}},{key:"componentWillUnmount",value:function(){document.addEventListener("keydown",this.handleKey)}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_13__.TransitionGroup,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_13__.CSSTransition,{classNames:"page",timeout:300},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.d,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.b,{exact:!0,path:"/main",component:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ErrorBoundaryComponent__WEBPACK_IMPORTED_MODULE_12__.a,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_MainComponent__WEBPACK_IMPORTED_MODULE_7__.a,{displayInput:e.state.displayInput,displayResult:e.state.displayResult,deg:e.state.deg,history:e.state.history,toggleOperator:e.toggleOperator,operatorInUse:e.operatorInUse,handleClick:e.handleClick,handleBackSpace:e.handleBackSpace,handleClear:e.handleClear,handleDot:e.handleDot,handleSideDrawerKeys:e.handleSideDrawerKeys,handleRadorDeg:e.handleRadorDeg,inverse:e.state.inverse,toggleInverse:e.toggleInverse,sideDrawerOpen:e.state.sideDrawerOpen,toggleSideDrawer:e.toggleSideDrawer,theme:e.state.theme}))}}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.b,{path:"/history",component:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ErrorBoundaryComponent__WEBPACK_IMPORTED_MODULE_12__.a,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_HistoryComponent__WEBPACK_IMPORTED_MODULE_8__.a,{history:e.state.history,theme:e.state.theme}))}}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.b,{path:"/help",component:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ErrorBoundaryComponent__WEBPACK_IMPORTED_MODULE_12__.a,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_HelpComponent__WEBPACK_IMPORTED_MODULE_9__.a,{theme:e.state.theme}))}}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.b,{path:"/settings",component:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ErrorBoundaryComponent__WEBPACK_IMPORTED_MODULE_12__.a,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SettingsComponent__WEBPACK_IMPORTED_MODULE_10__.a,{theme:e.state.theme,handleTheme:e.handleTheme}))}}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.a,{to:"/main"}))))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_6__.Component)},33:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n),l=a(4),s=a(3),o=a(6),c=a(17);function i(e){var t=e.history.map(function(e,t){return r.a.createElement("div",{key:t,className:"historyVal"},r.a.createElement("div",{className:"historyExp"},e.exp," "),r.a.createElement("div",{className:"historyResults"}," ",e.result))});return r.a.createElement(c.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"calculator"},r.a.createElement("div",{style:"google-theme"===e.theme?{backgroundColor:"var(--gBlue)",color:"var(--gaWhite)"}:"android"===e.theme?{backgroundColor:"var(--aGreen",color:"var(--gaWhite)"}:null,className:"top-pane"},r.a.createElement("div",{className:"backButton"},r.a.createElement(l.b,{to:"/main"},r.a.createElement(o.a,{icon:s.a,color:"var(--mainWhite)"}))),r.a.createElement("div",{className:"title"},"History")),r.a.createElement("div",{className:"historySec"},t))))}},34:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n),l=a(4),s=a(3),o=a(6),c=a(17);function i(e){return r.a.createElement(c.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"calculator"},r.a.createElement("div",{style:"google-theme"===e.theme?{backgroundColor:"var(--gBlue)",color:"var(--gaWhite)"}:"android"===e.theme?{backgroundColor:"var(--aGreen",color:"var(--gaWhite)"}:null,className:"top-pane"},r.a.createElement("div",{className:"backButton"},r.a.createElement(l.b,{to:"/main"},r.a.createElement(o.a,{icon:s.a,color:"var(--mainWhite)"}))),r.a.createElement("div",{className:"title"},"Help")),r.a.createElement("div",{className:"helpSec"},r.a.createElement("ul",null,r.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),r.a.createElement("li",null,"Aenean eget sem quis augue mattis cursus eu ac quam."),r.a.createElement("li",null,"Integer sit amet sapien non ipsum imperdiet lobortis."),r.a.createElement("li",null,"Nunc ac quam at neque pellentesque euismod."),r.a.createElement("li",null,"Mauris vel tortor varius, porta nunc id, iaculis enim."),r.a.createElement("li",null,"Mauris finibus ipsum at pharetra faucibus."))))))}},35:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n),l=a(4),s=a(3),o=a(6),c=a(17);function i(e){return r.a.createElement(c.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"calculator"},r.a.createElement("div",{style:"google-theme"===e.theme?{backgroundColor:"var(--gBlue)",color:"var(--gaWhite)"}:"android"===e.theme?{backgroundColor:"var(--aGreen",color:"var(--gaWhite)"}:null,className:"top-pane"},r.a.createElement("div",{className:"backButton"},r.a.createElement(l.b,{to:"/main"},r.a.createElement(o.a,{icon:s.a,color:"var(--mainWhite)"}))),r.a.createElement("div",{className:"title"},"Settings")),r.a.createElement("div",{className:"setting-sec"},r.a.createElement("label",null,"Select your favourite Theme:",r.a.createElement("select",{readOnly:!0,name:"themelist",value:e.theme,onChange:function(t){return e.handleTheme(t)}},r.a.createElement("option",{value:"original"},"Original"),r.a.createElement("option",{value:"google-theme"},"Google Theme"),r.a.createElement("option",{value:"android"},"Android"))),r.a.createElement("div",null)))))}},36:function(e,t,a){"use strict";var n=a(0),r=a.n(n);function l(e){var t="google-theme"===e.theme||"android"===e.theme?"var(--gBlack)":null,a="google-theme"===e.theme?"var(--gBlue)":"android"===e.theme?"var(--gBlack)":null;return r.a.createElement("input",{style:{color:t,caretColor:a},className:"input-display",value:e.displayInput})}function s(e){var t="google-theme"===e.theme?"var(--gaWhite)":"android"===e.theme?"var(--gBlack)":null,a="google-theme"===e.theme?"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000":null;return r.a.createElement("input",{style:{color:t,textShadow:a},className:"answer-display",value:e.displayResult,readOnly:!0})}var o=a(10),c=a(11),i=a(13),_=a(12),u=a(14),d=a(3),h=a(6),p=a(4),m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(_.a)(t).call(this,e))).handleClick=function(){a.state.showDropDown?document.removeEventListener("click",a.handleOutsideClick,!1):document.addEventListener("click",a.handleOutsideClick,!1),a.setState(function(e){return{showDropDown:!e.showDropDown}})},a.handleOutsideClick=function(e){a.node.contains(e.target)||a.handleClick()},a.state={showDropDown:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t="google-theme"===this.props.theme||"android"===this.props.theme?"var(--gBlack)":"var(--mdBlue)",a="google-theme"===this.props.theme||"android"===this.props.theme?"var(--altGrey)":"var(--mdBlue)",n="google-theme"===this.props.theme?"var(--gaWhite)":"android"===this.props.theme?"var(--gBlack)":null,l="google-theme"===this.props.theme?"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000":null,s="google-theme"===this.props.theme||"android"===this.props.theme?"var(--gaWhite)":null,o={textDecoration:"none",color:t};return r.a.createElement("div",null,r.a.createElement("div",{ref:function(t){e.node=t},className:"menu-icon",onClick:this.handleClick},r.a.createElement(h.a,{icon:d.e,color:a})),r.a.createElement("div",{className:"dropdown-content",style:{display:this.state.showDropDown?"block":"none",backgroundColor:s}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{style:o,to:"/history"},"History")),r.a.createElement("li",null,r.a.createElement(p.b,{style:o,to:"/settings"},"Settings")),r.a.createElement("li",null,r.a.createElement(p.b,{style:o,to:"/help"},"Help")))),r.a.createElement("div",{style:{color:n,textShadow:l},className:"rad-deg"},r.a.createElement("p",null,this.props.deg?"DEG":"RAD")))}}]),t}(n.Component);function E(e){var t="google-theme"===e.theme||"android"===e.theme?"var(--gaWhite)":null;return r.a.createElement("div",{style:{backgroundColor:t},className:"calculator-display col-sm-12 "},r.a.createElement(m,{deg:e.deg,theme:e.theme}),r.a.createElement(l,{displayInput:e.displayInput,theme:e.theme}),r.a.createElement(s,{displayResult:e.displayResult,theme:e.theme}))}function g(e){var t="google-theme"===e.theme?"ripple-google":"android"===e.theme?"ripple-android":"ripple-numpad",a="google-theme"===e.theme?"var(--gBlue)":"android"===e.theme?"var(--aGreen)":null,n="google-theme"===e.theme?"var(--gaWhite)":"android"===e.theme?"var(--gBlack)":null,l="google-theme"===e.theme?"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000":"android"===e.theme?"-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,1px 1px 0 #fff":null,s=e.inverse?"rgba(0, 0, 0, 0.2)":null,o=e.inverse?600:null;return r.a.createElement("div",{className:"extra-operators",style:{right:e.sideDrawerOpen?"0px":"-189px",backgroundColor:a}},r.a.createElement("button",{className:"drag-sym",onClick:e.toggleSideDrawer},r.a.createElement(h.a,{icon:e.sideDrawerOpen?d.d:d.c,color:n})),r.a.createElement("button",{className:t,style:{color:n,textShadow:l,backgroundColor:s,borderRadius:e.inverse?5:null},onClick:function(){return e.toggleInverse()}},"INV"),r.a.createElement("button",{className:t,style:{color:n,textShadow:l},onClick:function(){return e.handleRadorDeg()}},e.deg?"RAD":"DEG"),r.a.createElement("button",{className:t,style:{color:n,textShadow:l},value:"%",onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},"%"),r.a.createElement("button",{className:t,style:{color:n,textShadow:l,fontWeight:o},value:e.inverse?"sin\u207b\xb9(":"sin(",onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},e.inverse?"sin\u207b\xb9":"sin"),r.a.createElement("button",{className:t,style:{color:n,textShadow:l,fontWeight:o},value:e.inverse?"cos\u207b\xb9(":"cos(",onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},e.inverse?"cos\u207b\xb9":"cos"),r.a.createElement("button",{className:t,style:{color:n,textShadow:l,fontWeight:o},value:e.inverse?"tan\u207b\xb9(":"tan(",onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},e.inverse?"tan\u207b\xb9":"tan"),r.a.createElement("button",{value:e.inverse?"exp(":"ln(",className:t,style:{color:n,textShadow:l,fontWeight:o},onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},e.inverse?"e\u02e3":"ln"),r.a.createElement("button",{value:e.inverse?"10^":"log(",className:t,style:{color:n,textShadow:l,fontWeight:o},onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},e.inverse?"10\u02e3":"log"),r.a.createElement("button",{value:"!",className:t,style:{color:n,textShadow:l},onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},"!"),r.a.createElement("button",{value:"\u03c0",className:t,style:{color:n,textShadow:l},onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},"\u03c0"),r.a.createElement("button",{value:"e",className:t,style:{color:n,textShadow:l},onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},"e"),r.a.createElement("button",{value:"^",className:t,style:{color:n,textShadow:l},onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},"\u2303"),r.a.createElement("button",{value:"(",className:t,style:{color:n,textShadow:l},onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},"\u207d"),r.a.createElement("button",{value:")",className:t,style:{color:n,textShadow:l},onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},"\u207e"),r.a.createElement("button",{value:e.inverse?"\xb2":"\u221a",className:t,style:{color:n,textShadow:l},onClick:function(t){return e.handleSideDrawerKeys(t.target.value)}},e.inverse?r.a.createElement(r.a.Fragment,null,"\xd7\xb2"):r.a.createElement(r.a.Fragment,null,"\u221a")))}var v=function(e){var t="google-theme"===e.theme?"ripple-google":"android"===e.theme?"ripple-android":"ripple-numpad",a="google-theme"===e.theme?{color:"var(--gBlue)"}:"android"===e.theme?{color:"var(--aGreen)"}:{color:"var(--orange)"},n="google-theme"===e.theme?"var(--gBlack)":"android"===e.theme?"var(--gaWhite)":null,l="android"===e.theme?"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000":null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{style:{color:n,textShadow:l},name:"C",className:t,onClick:function(){return e.handleClear()}},"C"),r.a.createElement("button",{style:a,className:t,onClick:function(){return e.handleBackSpace()}},r.a.createElement(h.a,{icon:d.b})),r.a.createElement("button",{style:{color:n,textShadow:l},name:"x",className:t,onClick:function(t){return e.toggleOperator(t.currentTarget.name)}},"\xd7"),r.a.createElement("button",{style:{color:n,textShadow:l},name:"\xf7",className:t,onClick:function(t){return e.toggleOperator(t.currentTarget.name)}},"\xf7"),r.a.createElement("button",{style:{color:n,textShadow:l},name:"-",className:t,onClick:function(t){return e.toggleOperator(t.currentTarget.name)}},"\u2212"),r.a.createElement("button",{style:{color:n,textShadow:l},name:"+",className:t,onClick:function(t){return e.toggleOperator(t.currentTarget.name)}},"+"))},y=function(e){var t="google-theme"===e.theme?"ripple-google":"android"===e.theme?"ripple-android":"ripple-numpad",a="google-theme"===e.theme?"var(--gBlack)":"android"===e.theme?"var(--gaWhite)":null,n="android"===e.theme?"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000":null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{style:{color:a,textShadow:n},className:t,value:0,onClick:function(t){return e.handleClick(0)}},"0"),r.a.createElement("button",{style:{color:a,textShadow:n},className:t,onClick:function(){return e.handleDot()}},"."),r.a.createElement("button",{style:{color:a,textShadow:n},className:t,onClick:function(){return e.handleClick("=")}},"="),r.a.createElement("button",{style:{color:a,textShadow:n},className:t,value:1,onClick:function(t){return e.handleClick(1)}},"1"),r.a.createElement("button",{style:{color:a,textShadow:n},className:t,value:2,onClick:function(t){return e.handleClick(2)}},"2"),r.a.createElement("button",{style:{color:a,textShadow:n},className:t,value:3,onClick:function(t){return e.handleClick(3)}},"3"),r.a.createElement("button",{style:{color:a,textShadow:n},className:t,value:4,onClick:function(t){return e.handleClick(4)}},"4"),r.a.createElement("button",{style:{color:a,textShadow:n},className:t,name:5,onClick:function(t){return e.handleClick(5)}},"5"),r.a.createElement("button",{style:{color:a,textShadow:n},className:t,value:6,onClick:function(t){return e.handleClick(6)}},"6"),r.a.createElement("button",{style:{color:a,textShadow:n},className:t,value:7,onClick:function(t){return e.handleClick(7)}},"7"),r.a.createElement("button",{style:{color:a,textShadow:n},className:t,value:8,onClick:function(t){return e.handleClick(8)}},"8"),r.a.createElement("button",{style:{color:a,textShadow:n},className:t,value:9,onClick:function(t){return e.handleClick(9)}},"9"))};function O(e){var t="google-theme"===e.theme?"1px solid #D1D4D6":null,a="google-theme"===e.theme?"var(--gltGrey)":"android"===e.theme?"var(--adkgrey)":null,n="google-theme"===e.theme?"var(--gltGrey)":"android"===e.theme?"var(--altGrey)":null;return r.a.createElement("div",{className:"calculator-keypad col-sm-12"},r.a.createElement("div",{className:"pad row"},r.a.createElement("div",{style:{backgroundColor:a,borderRight:t},className:"number-pad col-8"},r.a.createElement(y,{handleClick:e.handleClick,handleEqualSign:e.handleEqualSign,handleDot:e.handleDot,theme:e.theme})),r.a.createElement("div",{style:{backgroundColor:n},className:"operators col-3"},r.a.createElement(v,{handleClick:e.handleClick,handleBackSpace:e.handleBackSpace,handleClear:e.handleClear,toggleOperator:e.toggleOperator,operatorInUse:e.operatorInUse,theme:e.theme})),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{handleClick:e.handleClick,handleSideDrawerKeys:e.handleSideDrawerKeys,handleRadorDeg:e.handleRadorDeg,deg:e.deg,inverse:e.inverse,toggleInverse:e.toggleInverse,sideDrawerOpen:e.sideDrawerOpen,toggleSideDrawer:e.toggleSideDrawer,theme:e.theme}))))}function D(e){return r.a.createElement("div",{className:"calculator"},r.a.createElement(E,{displayInput:e.displayInput,displayResult:e.displayResult,deg:e.deg,theme:e.theme}),r.a.createElement(O,{toggleOperator:e.toggleOperator,operatorInUse:e.operatorInUse,handleClick:e.handleClick,handleBackSpace:e.handleBackSpace,handleClear:e.handleClear,handleDot:e.handleDot,handleSideDrawerKeys:e.handleSideDrawerKeys,handleRadorDeg:e.handleRadorDeg,deg:e.deg,inverse:e.inverse,toggleInverse:e.toggleInverse,sideDrawerOpen:e.sideDrawerOpen,toggleSideDrawer:e.toggleSideDrawer,theme:e.theme}))}a.d(t,"a",function(){return D})},38:function(e,t,a){e.exports=a(64)},44:function(e,t,a){},45:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),o=(a(43),a(44),a(10)),c=a(11),i=a(13),_=a(12),u=a(14),d=(a(45),a(15)),h=a(4),p=a(30),m=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.e0cb90a1.chunk.js.map