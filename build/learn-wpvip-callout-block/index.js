/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/learn-wpvip-callout-block/block.json":
/*!**************************************************!*\
  !*** ./src/learn-wpvip-callout-block/block.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"learn-wpvip/callout","version":"0.1.0","title":"Callout Block","category":"design","icon":"marker","description":"Add a color-coded callout to your post.","supports":{"align":true,"spacing":{"margin":["top","bottom"],"padding":true,"blockGap":false},"typography":{"fontSize":true,"lineHeight":true}},"attributes":{"content":{"type":"string","source":"html","selector":".wp-block-learn-wpvip-callout__content","multiline":"p"},"type":{"type":"string","default":"tip","enum":["alert","info","warning","tip","success"]}},"example":{"attributes":{"type":"alert","content":"<p>This is an alert callout.</p>"}},"textdomain":"learn-wpvip","editorScript":"file:./index.js","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/learn-wpvip-callout-block/edit.js":
/*!***********************************************!*\
  !*** ./src/learn-wpvip-callout-block/edit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edit: () => (/* binding */ Edit),
/* harmony export */   typeOptions: () => (/* binding */ typeOptions)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/learn-wpvip-callout-block/icon/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const typeOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tip", "learn-wpvip"),
  value: "tip"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Success", "learn-wpvip"),
  value: "success"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Information", "learn-wpvip"),
  value: "info"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alert", "learn-wpvip"),
  value: "alert"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Warning", "learn-wpvip"),
  value: "warning"
}];

/**
 * Get the human-readable label from the current type value.
 *
 * @param {string} type The type slug.
 * @return {string} The translated human-friendly label.
 */
function getOptionLabel(type) {
  const currentType = typeOptions.find(({
    value
  }) => type === value);
  return currentType.label || "";
}
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    content,
    type
  } = attributes;
  const className = `is-${type}-callout`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      group: "block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarDropdownMenu
      /* translators: %s is the notice type label. */, {
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Type: %s", "learn-wpvip"), getOptionLabel(type)),
        icon: false,
        controls: typeOptions.map(({
          label,
          value
        }) => ({
          title: label,
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: value
          }),
          isActive: value === type,
          onClick: () => setAttributes({
            type: value
          })
        }))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
        className
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "wp-block-learn-wpvip-callout__icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        multiline: "p",
        className: "wp-block-learn-wpvip-callout__content",
        onChange: newContent => setAttributes({
          content: newContent
        }),
        value: content
      })]
    })]
  });
}

/***/ }),

/***/ "./src/learn-wpvip-callout-block/icon/index.js":
/*!*****************************************************!*\
  !*** ./src/learn-wpvip-callout-block/icon/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _library_alert_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library/alert.svg */ "./src/learn-wpvip-callout-block/icon/library/alert.svg");
/* harmony import */ var _library_info_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/info.svg */ "./src/learn-wpvip-callout-block/icon/library/info.svg");
/* harmony import */ var _library_tip_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library/tip.svg */ "./src/learn-wpvip-callout-block/icon/library/tip.svg");
/* harmony import */ var _library_warning_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library/warning.svg */ "./src/learn-wpvip-callout-block/icon/library/warning.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





function Icon({
  type
}) {
  switch (type) {
    case "alert":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_library_alert_svg__WEBPACK_IMPORTED_MODULE_0__.ReactComponent, {});
    case "info":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_library_info_svg__WEBPACK_IMPORTED_MODULE_1__.ReactComponent, {});
    case "warning":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_library_warning_svg__WEBPACK_IMPORTED_MODULE_3__.ReactComponent, {});
    case "tip":
    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_library_tip_svg__WEBPACK_IMPORTED_MODULE_2__.ReactComponent, {});
  }
}

/***/ }),

/***/ "./src/learn-wpvip-callout-block/icon/library/alert.svg":
/*!**************************************************************!*\
  !*** ./src/learn-wpvip-callout-block/icon/library/alert.svg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgAlert),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _mask, _path, _path2, _path3;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgAlert = function SvgAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _mask || (_mask = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
    id: "alert_svg__a",
    fill: "#fff"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M20.543 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
  }))), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#E26F56",
    d: "M19.142 12a7.6 7.6 0 0 1-7.6 7.6v2.8c5.744 0 10.4-4.656 10.4-10.4zm-7.6 7.6a7.6 7.6 0 0 1-7.6-7.6h-2.8c0 5.744 4.657 10.4 10.4 10.4zm-7.6-7.6a7.6 7.6 0 0 1 7.6-7.6V1.6C5.8 1.6 1.143 6.256 1.143 12h2.8zm7.6-7.6a7.6 7.6 0 0 1 7.6 7.6h2.8c0-5.744-4.656-10.4-10.4-10.4z",
    mask: "url(#alert_svg__a)"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#E26F56",
    d: "m15.573 15.04-.99.99-7.071-7.07.99-.99z"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#E26F56",
    d: "m14.584 7.97.99.99-7.07 7.07-.99-.99z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PG1hc2sgaWQ9ImEiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0yMC41NDMgMTJhOSA5IDAgMSAxLTE4IDAgOSA5IDAgMCAxIDE4IDB6Ii8+PC9tYXNrPjxwYXRoIGQ9Ik0xOS4xNDIgMTJhNy42IDcuNiAwIDAgMS03LjYgNy42djIuOGM1Ljc0NCAwIDEwLjQtNC42NTYgMTAuNC0xMC40aC0yLjh6bS03LjYgNy42YTcuNiA3LjYgMCAwIDEtNy42LTcuNmgtMi44YzAgNS43NDQgNC42NTcgMTAuNCAxMC40IDEwLjR2LTIuOHptLTcuNi03LjZhNy42IDcuNiAwIDAgMSA3LjYtNy42VjEuNkM1LjggMS42IDEuMTQzIDYuMjU2IDEuMTQzIDEyaDIuOHptNy42LTcuNmE3LjYgNy42IDAgMCAxIDcuNiA3LjZoMi44YzAtNS43NDQtNC42NTYtMTAuNC0xMC40LTEwLjR2Mi44eiIgZmlsbD0iI0UyNkY1NiIgbWFzaz0idXJsKCNhKSIvPjxwYXRoIGZpbGw9IiNFMjZGNTYiIGQ9Ik0xNS41NzMgMTUuMDRsLS45OS45OS03LjA3MS03LjA3Ljk5LS45OXoiLz48cGF0aCBmaWxsPSIjRTI2RjU2IiBkPSJNMTQuNTg0IDcuOTdsLjk5Ljk5LTcuMDcgNy4wNy0uOTktLjk5eiIvPjwvc3ZnPgo=");

/***/ }),

/***/ "./src/learn-wpvip-callout-block/icon/library/info.svg":
/*!*************************************************************!*\
  !*** ./src/learn-wpvip-callout-block/icon/library/info.svg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgInfo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgInfo = function SvgInfo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#3858E9",
    fillRule: "evenodd",
    d: "M19.6 12a7.6 7.6 0 1 1-15.2 0 7.6 7.6 0 0 1 15.2 0m1.4 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9.713-2.226v7.259h1.412V9.774zm.08-1.365a.9.9 0 0 0 .633.245.88.88 0 0 0 .629-.245.8.8 0 0 0 .264-.596.78.78 0 0 0-.264-.595.87.87 0 0 0-.629-.25.9.9 0 0 0-.633.25.8.8 0 0 0-.26.595q0 .345.26.596",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS42IDEyYTcuNiA3LjYgMCAxIDEtMTUuMiAwIDcuNiA3LjYgMCAwIDEgMTUuMiAwem0xLjQgMGE5IDkgMCAxIDEtMTggMCA5IDkgMCAwIDEgMTggMHptLTkuNzEzLTIuMjI2djcuMjU5aDEuNDEyVjkuNzc0aC0xLjQxMnptLjA4LTEuMzY1YS44OTguODk4IDAgMCAwIC42MzMuMjQ1Ljg4Mi44ODIgMCAwIDAgLjYyOS0uMjQ1Ljc5Mi43OTIgMCAwIDAgLjI2NC0uNTk2Ljc4My43ODMgMCAwIDAtLjI2NC0uNTk1Ljg3My44NzMgMCAwIDAtLjYyOS0uMjUuODg5Ljg4OSAwIDAgMC0uNjMzLjI1Ljc5Ljc5IDAgMCAwLS4yNi41OTVjMCAuMjMuMDg3LjQyOS4yNi41OTZ6IiBmaWxsPSIjMzg1OEU5Ii8+PC9zdmc+Cg==");

/***/ }),

/***/ "./src/learn-wpvip-callout-block/icon/library/tip.svg":
/*!************************************************************!*\
  !*** ./src/learn-wpvip-callout-block/icon/library/tip.svg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgTip),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgTip = function SvgTip(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#008A20",
    fillRule: "evenodd",
    d: "M19.6 12a7.6 7.6 0 1 1-15.2 0 7.6 7.6 0 0 1 15.2 0m1.4 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9.9 1.906v.086h1.297v-.086q.009-.52.117-.875a1.6 1.6 0 0 1 .345-.612 3 3 0 0 1 .626-.498q.407-.244.698-.563.294-.316.453-.72.159-.409.159-.916 0-.739-.35-1.292a2.3 2.3 0 0 0-.97-.866q-.624-.313-1.46-.313-.76 0-1.39.29a2.4 2.4 0 0 0-1.007.857q-.381.562-.413 1.378h1.378q.032-.48.24-.784.21-.309.526-.453.318-.145.667-.145.386 0 .698.163.317.159.508.453.19.296.19.698 0 .336-.127.612-.127.277-.344.49-.218.213-.49.385-.422.254-.72.563-.3.308-.463.806-.159.5-.168 1.342m.045 2.58a.88.88 0 0 0 .64.263.86.86 0 0 0 .453-.123.94.94 0 0 0 .326-.326.86.86 0 0 0 .127-.458.85.85 0 0 0-.272-.635.87.87 0 0 0-.634-.267.87.87 0 0 0-.64.267.86.86 0 0 0-.267.635q0 .377.267.644",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS42IDEyYTcuNiA3LjYgMCAxIDEtMTUuMiAwIDcuNiA3LjYgMCAwIDEgMTUuMiAwem0xLjQgMGE5IDkgMCAxIDEtMTggMCA5IDkgMCAwIDEgMTggMHptLTkuOSAxLjkwNnYuMDg2aDEuMjk3di0uMDg2Yy4wMDYtLjM0Ny4wNDUtLjYzOS4xMTctLjg3NS4wNzMtLjIzNS4xODgtLjQ0LjM0NS0uNjEyYTMuMDYgMy4wNiAwIDAgMSAuNjI2LS40OThjLjI3Mi0uMTYzLjUwNC0uMzUuNjk4LS41NjMuMTk2LS4yMTEuMzQ3LS40NTEuNDUzLS43Mi4xMDYtLjI3Mi4xNTktLjU3OC4xNTktLjkxNiAwLS40OTMtLjExNy0uOTIzLS4zNS0xLjI5MmEyLjMxMiAyLjMxMiAwIDAgMC0uOTctLjg2NmMtLjQxNi0uMjA5LS45MDMtLjMxMy0xLjQ2LS4zMTMtLjUwNyAwLS45Ny4wOTctMS4zOS4yOWEyLjQxMiAyLjQxMiAwIDAgMC0xLjAwNy44NTdjLS4yNTQuMzc1LS4zOTIuODM0LS40MTMgMS4zNzhoMS4zNzhjLjAyMS0uMzIuMTAxLS41ODEuMjQtLjc4NC4xNC0uMjA2LjMxNS0uMzU3LjUyNi0uNDUzLjIxMi0uMDk3LjQzNC0uMTQ1LjY2Ny0uMTQ1LjI1NyAwIC40OS4wNTQuNjk4LjE2My4yMTIuMTA2LjM4LjI1Ny41MDguNDUzLjEyNy4xOTcuMTkuNDMuMTkuNjk4IDAgLjIyNC0uMDQyLjQyOC0uMTI3LjYxMi0uMDg0LjE4NS0uMi4zNDgtLjM0NC40OS0uMTQ1LjE0Mi0uMzA5LjI3LS40OS4zODUtLjI4MS4xNy0uNTIxLjM1Ny0uNzIuNTYzLS4yLjIwNS0uMzU0LjQ3NC0uNDYzLjgwNi0uMTA2LjMzMy0uMTYyLjc4LS4xNjggMS4zNDJ6bS4wNDUgMi41OGEuODguODggMCAwIDAgLjY0LjI2M2MuMTY2IDAgLjMxNy0uMDQxLjQ1My0uMTIzYS45MzguOTM4IDAgMCAwIC4zMjYtLjMyNi44NjQuODY0IDAgMCAwIC4xMjctLjQ1OC44NS44NSAwIDAgMC0uMjcyLS42MzUuODY3Ljg2NyAwIDAgMC0uNjM0LS4yNjcuODcyLjg3MiAwIDAgMC0uNjQuMjY3Ljg1OC44NTggMCAwIDAtLjI2Ny42MzVjMCAuMjUxLjA5LjQ2Ni4yNjcuNjQ0eiIgZmlsbD0iIzAwOEEyMCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/learn-wpvip-callout-block/icon/library/warning.svg":
/*!****************************************************************!*\
  !*** ./src/learn-wpvip-callout-block/icon/library/warning.svg ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgWarning),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgWarning = function SvgWarning(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#B7B35B",
    fillRule: "evenodd",
    d: "M19.6 12a7.6 7.6 0 1 1-15.2 0 7.6 7.6 0 0 1 15.2 0m1.4 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-8.321 2.093.128-7.177h-1.619l.128 7.177zm-1.377 2.705a.96.96 0 0 0 .698.286.93.93 0 0 0 .487-.133 1.02 1.02 0 0 0 .497-.851.95.95 0 0 0-.295-.689.94.94 0 0 0-.689-.29.95.95 0 0 0-.698.29.91.91 0 0 0-.286.689.94.94 0 0 0 .286.698",
    clipRule: "evenodd"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS42IDEyYTcuNiA3LjYgMCAxIDEtMTUuMiAwIDcuNiA3LjYgMCAwIDEgMTUuMiAwem0xLjQgMGE5IDkgMCAxIDEtMTggMCA5IDkgMCAwIDEgMTggMHptLTguMzIxIDIuMDkzbC4xMjgtNy4xNzdoLTEuNjE5bC4xMjggNy4xNzdoMS4zNjN6bS0xLjM3NyAyLjcwNWEuOTYuOTYgMCAwIDAgLjY5OC4yODYuOTMuOTMgMCAwIDAgLjQ4Ny0uMTMzIDEuMDE3IDEuMDE3IDAgMCAwIC40OTctLjg1MS45NDguOTQ4IDAgMCAwLS4yOTUtLjY4OS45NC45NCAwIDAgMC0uNjg5LS4yOS45NTIuOTUyIDAgMCAwLS42OTguMjkuOTE0LjkxNCAwIDAgMC0uMjg2LjY4OS45MzUuOTM1IDAgMCAwIC4yODYuNjk4eiIgZmlsbD0iI0I3QjM1QiIvPjwvc3ZnPgo=");

/***/ }),

/***/ "./src/learn-wpvip-callout-block/index.js":
/*!************************************************!*\
  !*** ./src/learn-wpvip-callout-block/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/learn-wpvip-callout-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/learn-wpvip-callout-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/learn-wpvip-callout-block/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/learn-wpvip-callout-block/style.scss");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.Edit,
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  variations: _edit__WEBPACK_IMPORTED_MODULE_2__.typeOptions.map(({
    value,
    label
  }) => ({
    name: value,
    /* translators: %s is the notice type. */
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Callout: %s", "learn-wpvip"), label),
    isActive: (blockAttributes, variationAttributes) => blockAttributes.type === variationAttributes.type,
    scope: ["transform"],
    attributes: {
      type: value
    }
  }))
});

/***/ }),

/***/ "./src/learn-wpvip-callout-block/save.js":
/*!***********************************************!*\
  !*** ./src/learn-wpvip-callout-block/save.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


function save({
  attributes
}) {
  const {
    content,
    type
  } = attributes;
  const className = `is-${type}-callout`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      className
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "wp-block-learn-wpvip-callout__icon"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "wp-block-learn-wpvip-callout__content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        multiline: "p",
        value: content
      })
    })]
  });
}

/***/ }),

/***/ "./src/learn-wpvip-callout-block/style.scss":
/*!**************************************************!*\
  !*** ./src/learn-wpvip-callout-block/style.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"learn-wpvip-callout-block/index": 0,
/******/ 			"learn-wpvip-callout-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunklearn_wpvip_callout_block"] = globalThis["webpackChunklearn_wpvip_callout_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["learn-wpvip-callout-block/style-index"], () => (__webpack_require__("./src/learn-wpvip-callout-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map