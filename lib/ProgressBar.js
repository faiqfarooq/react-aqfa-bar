"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProgressBar = exports.ProgressBar = function ProgressBar(_ref) {
  var RaisedValue = _ref.RaisedValue,
    TotalValue = _ref.TotalValue,
    Cap = _ref.Cap,
    width = _ref.width;
  var _useState = (0, _react.useState)({
      Total: 100,
      Raised: 10
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var SoftCap = 20 * (values === null || values === void 0 ? void 0 : values.Total) / 100;
  var hardCap = 80 * (values === null || values === void 0 ? void 0 : values.Total) / 100;
  (0, _react.useEffect)(function () {
    if ((values === null || values === void 0 ? void 0 : values.Total) >= (values === null || values === void 0 ? void 0 : values.Raised)) {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        Raised: Number(RaisedValue),
        Total: Number(TotalValue)
      }));
    }
  }, [RaisedValue, TotalValue]);
  var progressBarWidth = "".concat((values === null || values === void 0 ? void 0 : values.Raised) / (values === null || values === void 0 ? void 0 : values.Total) * 100, "%");
  var CustomWidth = width === "xs" ? "320px" : width === "sm" ? "600px" : width === "md" ? "800px" : "100%";
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      minWidth: "300px",
      width: CustomWidth
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: "16px",
      backgroundColor: "#F2F5F9",
      borderRadius: "8px",
      marginTop: "12px"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "#1E1E1E"
    }
  }, "Raised"), /*#__PURE__*/_react["default"].createElement("h1", {
    style: {
      fontWeight: "500"
    }
  }, values === null || values === void 0 ? void 0 : values.Raised, " BRC")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "#1E1E1E",
      textAlign: "right"
    }
  }, "Total"), /*#__PURE__*/_react["default"].createElement("h1", {
    style: {
      fontWeight: "500"
    }
  }, values === null || values === void 0 ? void 0 : values.Total, " BRC"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative",
      minHeight: "80px"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "100%",
      background: "linear-gradient(to right, #fff 0%, #fff 80%, rgba(69, 76, 84, 0.30) 80%, rgba(69, 76, 84, 0.30) 100%)",
      borderRadius: "32px",
      zIndex: 100
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: "7.9px",
      marginBottom: "5px",
      backgroundColor: "#013EB7",
      width: progressBarWidth,
      color: "white",
      borderRadius: "32px"
    }
  })), Cap === true && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "absolute",
      top: "9.9%",
      left: "20%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "2px",
      height: "18px",
      backgroundColor: "rgba(69, 76, 84, 0.30)",
      marginBottom: "2px"
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "absolute",
      top: "18px"
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "#1E1E1E"
    }
  }, "Soft Cap"), /*#__PURE__*/_react["default"].createElement("h1", null, SoftCap))), Cap === true && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "absolute",
      top: "9.9%",
      right: "20%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "2px",
      height: "18px",
      backgroundColor: "rgba(69, 76, 84, 0.30)",
      marginBottom: "2px"
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "absolute",
      top: "18px"
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "#1E1E1E"
    }
  }, "Hard Cap"), /*#__PURE__*/_react["default"].createElement("h1", null, hardCap))))));
};