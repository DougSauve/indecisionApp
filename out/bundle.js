/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/scripts/app.js":
/*!*******************************!*\
  !*** ./public/scripts/app.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar IndecisionApp = function (_React$Component) {\n  _inherits(IndecisionApp, _React$Component);\n\n  function IndecisionApp(props) {\n    _classCallCheck(this, IndecisionApp);\n\n    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));\n\n    _this.handleAddOption = _this.handleAddOption.bind(_this);\n    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);\n    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);\n    _this.handlePick = _this.handlePick.bind(_this);\n    _this.handleAddOption = _this.handleAddOption.bind(_this);\n\n    _this.state = {\n      options: _this.props.options\n    };\n    return _this;\n  }\n\n  _createClass(IndecisionApp, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      console.log('component did mount');\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps, prevState) {\n      console.log('component did update');\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      console.log('component will unmount.');\n    }\n  }, {\n    key: 'handleAddOption',\n    value: function handleAddOption(option) {\n      if (!option) {\n        return 'Please enter an option.';\n      } else if (this.state.options.indexOf(option) > -1) {\n        return 'That option already exists. Please enter a new one!';\n      }\n\n      this.setState(function (prevState) {\n        return { options: prevState.options.concat(option) };\n      });\n    }\n  }, {\n    key: 'handleDeleteOptions',\n    value: function handleDeleteOptions() {\n      this.setState(function () {\n        return { options: [] };\n      });\n    }\n  }, {\n    key: 'handleDeleteOption',\n    value: function handleDeleteOption(optionToRemove) {\n      this.setState(function (prevState) {\n        return {\n          options: prevState.options.filter(function (option) {\n            return option !== optionToRemove;\n          })\n        };\n      });\n    }\n  }, {\n    key: 'handlePick',\n    value: function handlePick() {\n      var optionsArray = this.state.options;\n      var rand = Math.floor(Math.random() * optionsArray.length);\n      alert(optionsArray[rand]);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var title = 'Indecision';\n      var subtitle = 'Poo on you';\n\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(Header, { subtitle: subtitle }),\n        React.createElement(Action, {\n          itemsExist: !!this.state.options.length,\n          handlePick: this.handlePick\n        }),\n        React.createElement(Options, {\n          options: this.state.options,\n          handleDeleteOptions: this.handleDeleteOptions,\n          handleDeleteOption: this.handleDeleteOption\n        }),\n        React.createElement(AddOption, {\n          handleAddOption: this.handleAddOption\n        })\n      );\n    }\n  }]);\n\n  return IndecisionApp;\n}(React.Component);\n\nIndecisionApp.defaultProps = {\n  options: ['hi mom']\n};\n\nvar Header = function Header(props) {\n  return React.createElement(\n    'div',\n    null,\n    React.createElement(\n      'h1',\n      null,\n      props.title\n    ),\n    props.subtitle && React.createElement(\n      'h3',\n      null,\n      props.subtitle\n    )\n  );\n};\n\nHeader.defaultProps = {\n  title: \"Indecision\"\n};\n\nvar Action = function Action(props) {\n  return React.createElement(\n    'div',\n    null,\n    React.createElement(\n      'button',\n      {\n        onClick: props.handlePick,\n        disabled: !props.itemsExist\n      },\n      'What to do?'\n    )\n  );\n};\n\nvar Options = function Options(props) {\n  return React.createElement(\n    'div',\n    null,\n\n    //here, we're modifying(mapping) the contents the the props.options array and returning that, without changing the actual array.\n    props.options.map(function (option) {\n      return React.createElement(Option, {\n        key: option,\n        optionText: option,\n        handleDeleteOption: props.handleDeleteOption\n      });\n    }),\n    React.createElement(\n      'button',\n      { onClick: props.handleDeleteOptions },\n      'Remove all options'\n    )\n  ); //when passing in a function by reference, you lose your this binding, because it recreates the function elsewhere when it calls it. It isn't the same instance of it. That's why you need bind.\n};\n\nvar Option = function Option(props) {\n  return React.createElement(\n    'div',\n    null,\n    React.createElement(\n      'span',\n      null,\n      ' Option: ',\n      props.optionText,\n      ' '\n    ),\n    React.createElement(\n      'button',\n      { onClick: function onClick(e) {\n          props.handleDeleteOption(props.optionText);\n        }\n      },\n      'Remove'\n    )\n  );\n};\n\nvar AddOption = function (_React$Component2) {\n  _inherits(AddOption, _React$Component2);\n\n  function AddOption(props) {\n    _classCallCheck(this, AddOption);\n\n    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));\n\n    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);\n\n    _this2.state = {\n      error: undefined\n    };\n    return _this2;\n  }\n\n  _createClass(AddOption, [{\n    key: 'handleAddOption',\n    value: function handleAddOption(e) {\n      e.preventDefault();\n\n      var option = e.target.elements.option.value.trim();\n\n      var error = this.props.handleAddOption(option);\n\n      this.setState(function () {\n        return { error: error };\n      });\n\n      e.target.elements.option.value = \"\";\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        this.state.error && React.createElement(\n          'p',\n          null,\n          this.state.error\n        ),\n        React.createElement(\n          'form',\n          { onSubmit: this.handleAddOption },\n          React.createElement('input', { type: 'text', name: 'option' }),\n          React.createElement(\n            'button',\n            null,\n            'Add an option, duuuude'\n          )\n        )\n      );\n    }\n  }]);\n\n  return AddOption;\n}(React.Component);\n\nReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));\n\n\n//# sourceURL=webpack:///./public/scripts/app.js?");

/***/ })

/******/ });