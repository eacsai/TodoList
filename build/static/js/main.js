"use strict";
(window["webpackChunktodoList"] = window["webpackChunktodoList"] || []).push([["main"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmmirror.com+react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modern-js/runtime/router */ "./node_modules/.pnpm/registry.npmmirror.com+react-router@5.3.3_react@17.0.2/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _pages_todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/todoList */ "./src/pages/todoList/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/registry.npmmirror.com+react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/wqw/Documents/js/todoList/src/App.tsx";
// 第三方

 // import { Provider } from 'react-redux';
// 工具类
// import store from './store';
// 组件
// import AppHeader from 'components/App-header';



/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_c = function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_3__.Switch, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
      exact: true,
      path: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: "page loading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 29
        }, this),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_pages_todoList__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "%default%$memo");
__webpack_require__.$Refresh$.register(_c2, "%default%");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/hooks/useSize.ts":
/*!******************************!*\
  !*** ./src/hooks/useSize.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useSize; }
/* harmony export */ });
/* harmony import */ var _Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmmirror.com+react@17.0.2/node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js");



var _s = __webpack_require__.$Refresh$.signature();


function useSize() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }),
      _useState2 = (0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  var onResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return size;
}

_s(useSize, "v8yhlsJpgaoCj9M7/OUOHJUrMLk=");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/todo/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/todo/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmmirror.com+react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/.pnpm/registry.npmmirror.com+react-icons@4.4.0_react@17.0.2/node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/pages/todo/style.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/registry.npmmirror.com+react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js");



var _jsxFileName = "/Users/wqw/Documents/js/todoList/src/pages/todo/index.tsx",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();






var Todo = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = _s(function (props) {
  _s();

  var todo = props.todo,
      remove = props.remove,
      update = props.update,
      finish = props.finish;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todo.task),
      _useState4 = (0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      task = _useState4[0],
      setTask = _useState4[1];

  var handleClick = function handleClick(e) {
    remove(e.currentTarget.id);
  };

  var toggleFrom = function toggleFrom() {
    setIsEditing(!isEditing);
  };

  var handleUpdate = function handleUpdate(e) {
    e.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };

  var handleChange = function handleChange(e) {
    setTask(e.target.value);
  };

  var toggleCompleted = function toggleCompleted(e) {
    finish(e.target.id);
  };

  var result;

  if (isEditing) {
    result = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.TodoWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
        className: "Todo-edit-form",
        onSubmit: handleUpdate,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          onChange: handleChange,
          value: task,
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          children: "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this);
  } else {
    result = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.TodoWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
        id: todo.id,
        onClick: toggleCompleted,
        className: todo.completed ? 'Todo-task completed' : 'Todo-task',
        children: todo.task
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "Todo-buttons",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          onClick: toggleFrom,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillEdit, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          onClick: handleClick,
          id: todo.id,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillRest, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this);
  }

  return result;
}, "u3f0/AZYtTpZfTYgRlCjoEIiYjQ=")), "u3f0/AZYtTpZfTYgRlCjoEIiYjQ=");

_c2 = Todo;
/* harmony default export */ __webpack_exports__["default"] = (Todo);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Todo$memo");
__webpack_require__.$Refresh$.register(_c2, "Todo");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/todo/style.ts":
/*!*********************************!*\
  !*** ./src/pages/todo/style.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoWrapper": function() { return /* binding */ TodoWrapper; }
/* harmony export */ });
/* harmony import */ var _Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _modern_js_runtime_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modern-js/runtime/styled */ "./node_modules/.pnpm/registry.npmmirror.com+@modern-js+runtime@1.3.4_dccc44159aab2d15be0b73def9353315/node_modules/@modern-js/runtime/dist/js/treeshaking/exports/styled.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js");



var _templateObject;


var TodoWrapper = _modern_js_runtime_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = (0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  margin: 0 -3rem 4px;\n  padding: 1.1rem 3rem;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  .Todo-task {\n    position: relative;\n    transition: opacity 0.4s linear;\n  }\n\n  .Todo-task.completed {\n    opacity: 0.6;\n  }\n\n  .Todo-task.completed:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: -0.5rem;\n    display: block;\n    width: 0%;\n    height: 2px;\n    background: #fff;\n    animation: strikeitem 0.5s ease-out 0s forwards;\n  }\n\n  @keyframes strikeitem {\n    to {\n      width: calc(100% + 1rem);\n    }\n  }\n\n  .Todo-buttons {\n    flex-shrink: 0;\n    padding-left: 0.7em;\n  }\n\n  .Todo-buttons button {\n    border: none;\n    font-size: 1em;\n    margin: 0.4em;\n    background: none;\n    -webkit-appearance: none;\n    cursor: pointer;\n    color: #fff;\n  }\n\n  .Todo-edit-form {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .Todo-edit-form label {\n    min-width: 100%;\n    margin-bottom: 0.5rem;\n    font-size: 1.3rem;\n  }\n\n  .Todo-edit-form input {\n    flex-grow: 1;\n    border: none;\n    background: #f7f1f1;\n    padding: 0 1.5em;\n    font-size: initial;\n  }\n\n  .Todo-edit-form button {\n    padding: 0 1.3rem;\n    border: none;\n    background: #ff6666;\n    color: white;\n    text-transform: uppercase;\n    font-weight: bold;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    margin-left: 5px;\n    cursor: pointer;\n    transform: background 0.2s ease-out;\n  }\n\n  .Todo-edit-form button:hover {\n    background: #ff5e5e;\n  }\n\n  .Todo-edit-form input,\n  .Todo-edit-form button {\n    font-family: 'Quicksand', sans-serif;\n    height: 3rem;\n  }\n"])));

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/todoForm/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/todoForm/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmmirror.com+react@17.0.2/node_modules/react/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/.pnpm/registry.npmmirror.com+uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/pages/todoForm/style.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/registry.npmmirror.com+react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js");





var _jsxFileName = "/Users/wqw/Documents/js/todoList/src/pages/todoForm/index.tsx",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();






var TodoForm = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = _s(function (props) {
  _s();

  var createTodo = props.createTodo;

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(function (state, newState) {
    return (0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), newState);
  }, {
    task: ''
  }),
      _useReducer2 = (0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useReducer, 2),
      userInput = _useReducer2[0],
      setUserInput = _useReducer2[1];

  var handleChange = function handleChange(e) {
    setUserInput((0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var newTodo = {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      task: userInput.task,
      completed: false
    };
    createTodo(newTodo);
    setUserInput({
      task: ''
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.TodoFormWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
      className: "NewTodoForm",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        htmlFor: "task",
        children: "New todo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        value: userInput.task,
        onChange: handleChange,
        id: "task",
        type: "text",
        name: "task",
        placeholder: "New Todo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        children: "Add Todo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
}, "0tepKhIKLXR4ekUqzVyrYW6/MoM=")), "0tepKhIKLXR4ekUqzVyrYW6/MoM=");

_c2 = TodoForm;
/* harmony default export */ __webpack_exports__["default"] = (TodoForm);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "TodoForm$memo");
__webpack_require__.$Refresh$.register(_c2, "TodoForm");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/todoForm/style.ts":
/*!*************************************!*\
  !*** ./src/pages/todoForm/style.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoFormWrapper": function() { return /* binding */ TodoFormWrapper; }
/* harmony export */ });
/* harmony import */ var _Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _modern_js_runtime_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modern-js/runtime/styled */ "./node_modules/.pnpm/registry.npmmirror.com+@modern-js+runtime@1.3.4_dccc44159aab2d15be0b73def9353315/node_modules/@modern-js/runtime/dist/js/treeshaking/exports/styled.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js");



var _templateObject;


var TodoFormWrapper = _modern_js_runtime_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = (0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .NewTodoForm {\n    margin-top: 3rem;\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .NewTodoForm label {\n    min-width: 100%;\n    margin-bottom: 0.5rem;\n    font-size: 1.3rem;\n  }\n\n  .NewTodoForm input {\n    flex-grow: 1;\n    border: none;\n    background: #f7f1f1;\n    padding: 0 1.5em;\n    font-size: initial;\n  }\n\n  .NewTodoForm button {\n    padding: 0 1.3rem;\n    border: none;\n    background: #ff6666;\n    color: white;\n    text-transform: uppercase;\n    font-weight: bold;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    margin-left: 5px;\n    cursor: pointer;\n    transform: background 0.2s ease-out;\n  }\n\n  .NewTodoForm button:hover {\n    background: #ff5e5e;\n  }\n\n  .NewTodoForm input,\n  .NewTodoForm button {\n    font-family: 'Quicksand', sans-serif;\n    height: 3rem;\n  }\n"])));

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/todoList/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/todoList/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmmirror.com+react@17.0.2/node_modules/react/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/.pnpm/registry.npmmirror.com+uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo */ "./src/pages/todo/index.tsx");
/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todoForm */ "./src/pages/todoForm/index.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/pages/todoList/style.ts");
/* harmony import */ var _hooks_useSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useSize */ "./src/hooks/useSize.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/registry.npmmirror.com+react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js");





var _jsxFileName = "/Users/wqw/Documents/js/todoList/src/pages/todoList/index.tsx",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();









var TodoList = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = _s(function () {
  _s();

  var _useSize = (0,_hooks_useSize__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      height = _useSize.height,
      width = _useSize.width;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([{
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
    task: 'task 1',
    completed: false
  }, {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
    task: 'task 2',
    completed: true
  }]),
      _useState2 = (0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      todos = _useState2[0],
      setTodos = _useState2[1];

  var todosRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(todos);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var getTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(getTodos);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    todosRef.current = todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  var create = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (newTodo) {
    setTodos([].concat((0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todosRef.current), [newTodo]));
  }, []);
  var remove = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (id) {
    setTodos(todosRef.current.filter(function (todo) {
      return todo.id !== id;
    }));
  }, []);
  var update = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (id, updtedTask) {
    var updatedTodos = todosRef.current.map(function (todo) {
      if (todo.id === id) {
        return (0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, todo), {}, {
          task: updtedTask
        });
      }

      return todo;
    });
    setTodos(updatedTodos);
  }, []);
  var finish = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (id) {
    var updatedTodos = todosRef.current.map(function (todo) {
      if (todo.id === id) {
        return (0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, todo), {}, {
          completed: !todo.completed
        });
      }

      return todo;
    });
    setTodos(updatedTodos);
  }, []);
  var todosList = todos.map(function (todo) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_todo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      finish: finish,
      update: update,
      remove: remove,
      todo: todo
    }, todo.id, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    style: {
      background: "url(\"https://w.wallhaven.cc/full/l3/wallhaven-l3xk6q.jpg\")",
      width: "".concat(width, "px"),
      minHeight: "".concat(height, "px"),
      backgroundSize: 'cover',
      overflow: 'hidden',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      margin: '-8px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.TodoListWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
        children: ["Todo List ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
          children: "A simple React Todo List App"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("ul", {
        children: todosList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_todoForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        createTodo: create
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, _this);
}, "iaJLHiPDhOHhRIej86Y2/UVntRg=", false, function () {
  return [_hooks_useSize__WEBPACK_IMPORTED_MODULE_7__["default"]];
})), "iaJLHiPDhOHhRIej86Y2/UVntRg=", false, function () {
  return [_hooks_useSize__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c2 = TodoList;
/* harmony default export */ __webpack_exports__["default"] = (TodoList);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "TodoList$memo");
__webpack_require__.$Refresh$.register(_c2, "TodoList");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/todoList/style.ts":
/*!*************************************!*\
  !*** ./src/pages/todoList/style.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoListWrapper": function() { return /* binding */ TodoListWrapper; }
/* harmony export */ });
/* harmony import */ var _Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/.pnpm/registry.npmmirror.com+@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _modern_js_runtime_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modern-js/runtime/styled */ "./node_modules/.pnpm/registry.npmmirror.com+@modern-js+runtime@1.3.4_dccc44159aab2d15be0b73def9353315/node_modules/@modern-js/runtime/dist/js/treeshaking/exports/styled.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/registry.npmmirror.com+react-refresh@0.12.0/node_modules/react-refresh/runtime.js");



var _templateObject;


var TodoListWrapper = _modern_js_runtime_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = (0,_Users_wqw_Documents_js_todoList_node_modules_pnpm_registry_npmmirror_com_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 4rem auto;\n  padding: 2rem 3rem 3rem;\n  max-width: 500px;\n  background: #b194948c;\n  color: #fff;\n  box-shadow: -20px -20px 0px 0px rgba(100, 100, 100, 0.1);\n  ul {\n    margin-top: 2.6rem;\n    list-style: none;\n  }\n  h1 {\n    font-weight: normal;\n    font-size: 2.6rem;\n    letter-spacing: 0.05em;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n  }\n  h1 span {\n    display: block;\n    font-size: 0.8rem;\n    margin-bottom: 0.7rem;\n    margin-left: 3px;\n    margin-top: 0.2rem;\n  }\n"])));

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_registry_npmmirror_com_modern-js_hmr-client_1_2_8_node_modules_mode-e9c041"], function() { return __webpack_exec__("./node_modules/.pnpm/registry.npmmirror.com+@pmmmwh+react-refresh-webpack-plugin@0.5.7_645a6e79162167fda80e21cc093763a7/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"), __webpack_exec__("./node_modules/.pnpm/registry.npmmirror.com+@modern-js+hmr-client@1.2.8/node_modules/@modern-js/hmr-client/dist/js/node/index.js?&host=192.168.31.69&path=/_modern_js_hmr_ws&port=8080"), __webpack_exec__("./node_modules/.pnpm/registry.npmmirror.com+@modern-js+webpack@1.11.4_typescript@4.7.4/node_modules/@modern-js/webpack/dist/runtime/core-js-entry.js"), __webpack_exec__("./node_modules/.modern-js/main/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map