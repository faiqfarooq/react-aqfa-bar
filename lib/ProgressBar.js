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
  var InitilValue = _ref.InitilValue,
    TotalValue = _ref.TotalValue,
    Cap = _ref.Cap,
    initialText = _ref.initialText,
    totalText = _ref.totalText,
    InitiSymbol = _ref.InitiSymbol,
    FinalSymbol = _ref.FinalSymbol,
    hideInitial = _ref.hideInitial,
    hideTotal = _ref.hideTotal,
    ContainerStyle = _ref.ContainerStyle,
    BarStyle = _ref.BarStyle,
    BarBgStyle = _ref.BarBgStyle,
    textStyle = _ref.textStyle,
    valueStyle = _ref.valueStyle,
    leftCap = _ref.leftCap,
    rightCap = _ref.rightCap;
  var _useState = (0, _react.useState)({
      Total: 100,
      Raised: 10
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var SoftCap = (leftCap ? leftCap : 20) * (values === null || values === void 0 ? void 0 : values.Total) / 100;
  var hardCap = (rightCap ? rightCap : 80) * (values === null || values === void 0 ? void 0 : values.Total) / 100;
  console.log("SoftCap", SoftCap, leftCap);
  (0, _react.useEffect)(function () {
    if ((values === null || values === void 0 ? void 0 : values.Total) >= (values === null || values === void 0 ? void 0 : values.Raised)) {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        Raised: Number(InitilValue || 10),
        Total: Number(TotalValue || 100)
      }));
    }
  }, [InitilValue, TotalValue]);
  var progressBarWidth = "".concat((values === null || values === void 0 ? void 0 : values.Raised) / (values === null || values === void 0 ? void 0 : values.Total) * 100, "%");
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (values === null || values === void 0 ? void 0 : values.Total) >= (values === null || values === void 0 ? void 0 : values.Raised) ? /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      minWidth: "280px",
      width: "100%",
      padding: "16px",
      backgroundColor: "#F2F5F9",
      borderRadius: "8px"
    }, ContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, initialText && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    style: _objectSpread({
      color: "#1E1E1E"
    }, textStyle)
  }, initialText), !hideInitial && /*#__PURE__*/_react["default"].createElement("h3", {
    style: _objectSpread({
      fontWeight: "500",
      color: "#000"
    }, valueStyle)
  }, values === null || values === void 0 ? void 0 : values.Raised, " ", InitiSymbol && InitiSymbol)), totalText && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    style: _objectSpread({
      color: "#1E1E1E",
      textAlign: "right"
    }, textStyle)
  }, totalText), !hideTotal && /*#__PURE__*/_react["default"].createElement("h3", {
    style: _objectSpread({
      fontWeight: "500",
      color: "#000"
    }, valueStyle)
  }, values === null || values === void 0 ? void 0 : values.Total, " ", FinalSymbol && FinalSymbol))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative",
      minHeight: Cap === true ? "80px" : "auto"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      width: "100%",
      background: Cap ? "linear-gradient(to right, #fff 0%, #fff ".concat(rightCap, "%, rgba(69, 76, 84, 0.30) ").concat(rightCap, "%, rgba(69, 76, 84, 0.30) 100%)") : "#fff",
      borderRadius: "32px",
      zIndex: 100
    }, BarBgStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      display: "flex",
      alignItems: "center",
      height: "7.9px",
      marginBottom: "5px",
      backgroundColor: "#013EB7",
      width: progressBarWidth,
      color: "white",
      borderRadius: "32px"
    }, BarStyle)
  })), Cap === true && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "absolute",
      top: "9.9%",
      left: leftCap ? "".concat(leftCap, "%") : "20%",
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
      top: "14px"
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "#1E1E1E",
      fontSize: "16px",
      whiteSpace: "nowrap"
    }
  }, "Soft Cap", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: "block"
    }
  }, SoftCap)))), Cap === true && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "absolute",
      top: "9.9%",
      left: rightCap ? "".concat(rightCap, "%") : "80%",
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
      top: "14px"
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "#1E1E1E",
      fontSize: "16px",
      whiteSpace: "nowrap"
    }
  }, "Hard Cap", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: "block"
    }
  }, hardCap)))))) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      minWidth: "280px",
      backgroundColor: "#fff",
      padding: "12px 12px",
      margin: "6px",
      borderRadius: "8px"
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "black"
    }
  }, "Total Value should not be greater than inital value.")));
};