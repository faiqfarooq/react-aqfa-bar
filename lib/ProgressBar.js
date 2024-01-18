"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = void 0;
var react_1 = __importStar(require("react"));
var ProgressBar = function (_a) {
    var _b, _c, _d;
    var value = _a.value, totalValue = _a.totalValue, initialText = _a.initialText, totalText = _a.totalText, initialSymbol = _a.initialSymbol, finalSymbol = _a.finalSymbol, hideInitial = _a.hideInitial, hideTotal = _a.hideTotal, containerStyle = _a.containerStyle, barStyle = _a.barStyle, barBgStyle = _a.barBgStyle, textStyle = _a.textStyle, valueStyle = _a.valueStyle, leftCap = _a.leftCap, rightCap = _a.rightCap, leftCapText = _a.leftCapText, rightCapText = _a.rightCapText;
    var _e = (0, react_1.useState)({ Total: 100, Raised: 10 }), values = _e[0], setValues = _e[1];
    var SoftCap = ((leftCap ? leftCap : 20) * (values === null || values === void 0 ? void 0 : values.Total)) / 100;
    var hardCap = ((rightCap ? rightCap : 80) * (values === null || values === void 0 ? void 0 : values.Total)) / 100;
    (0, react_1.useEffect)(function () {
        if ((values === null || values === void 0 ? void 0 : values.Total) >= (values === null || values === void 0 ? void 0 : values.Raised)) {
            setValues(__assign(__assign({}, values), { Raised: Number(value || 10), Total: Number(totalValue || 100) }));
        }
    }, [value, totalValue]);
    var progressBarWidth = "".concat(((values === null || values === void 0 ? void 0 : values.Raised) / (values === null || values === void 0 ? void 0 : values.Total)) * 100, "%");
    return (react_1.default.createElement(react_1.default.Fragment, null, (values === null || values === void 0 ? void 0 : values.Total) >= (values === null || values === void 0 ? void 0 : values.Raised) ? (react_1.default.createElement("div", { style: __assign({ minWidth: "280px", width: "100%", padding: "16px", backgroundColor: "#F2F5F9", borderRadius: "8px" }, containerStyle) },
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
            } },
            initialText && (react_1.default.createElement("div", null,
                react_1.default.createElement("p", { style: __assign({ color: "#1E1E1E" }, textStyle) }, initialText),
                !hideInitial && (react_1.default.createElement("h3", { style: __assign({ fontWeight: "500", color: "#000" }, valueStyle) }, values === null || values === void 0 ? void 0 :
                    values.Raised,
                    " ",
                    initialSymbol && initialSymbol)))),
            totalText && (react_1.default.createElement("div", null,
                react_1.default.createElement("p", { style: __assign({ color: "#1E1E1E", textAlign: "right" }, textStyle) }, totalText),
                !hideTotal && (react_1.default.createElement("h3", { style: __assign({ fontWeight: "500", color: "#000" }, valueStyle) }, values === null || values === void 0 ? void 0 :
                    values.Total,
                    " ",
                    finalSymbol && finalSymbol))))),
        react_1.default.createElement("div", { style: {
                position: "relative",
                minHeight: (((_b = rightCapText === null || rightCapText === void 0 ? void 0 : rightCapText.length) !== null && _b !== void 0 ? _b : 0) || ((_c = leftCapText === null || leftCapText === void 0 ? void 0 : leftCapText.length) !== null && _c !== void 0 ? _c : 0)) >
                    0 ===
                    true
                    ? "80px"
                    : "auto",
            } },
            react_1.default.createElement("div", { style: __assign({ width: "100%", background: ((_d = rightCapText === null || rightCapText === void 0 ? void 0 : rightCapText.length) !== null && _d !== void 0 ? _d : 0 > 0)
                        ? "linear-gradient(to right, #fff 0%, #fff ".concat(rightCap ? rightCap : 80, "%, rgba(69, 76, 84, 0.30) ").concat(rightCap ? rightCap : 80, "%, rgba(69, 76, 84, 0.30) 100%)")
                        : "#fff", borderRadius: "32px", zIndex: 100 }, barBgStyle) },
                react_1.default.createElement("div", { style: __assign({ display: "flex", alignItems: "center", height: "7.9px", marginBottom: "5px", backgroundColor: "#013EB7", width: progressBarWidth, color: "white", borderRadius: "32px" }, barStyle) })),
            leftCapText && (react_1.default.createElement("div", { style: {
                    position: "absolute",
                    top: "9.9%",
                    left: leftCap ? "".concat(leftCap, "%") : "20%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                } },
                react_1.default.createElement("div", { style: {
                        width: "2px",
                        height: "18px",
                        backgroundColor: "rgba(69, 76, 84, 0.30)",
                        marginBottom: "2px",
                    } }),
                react_1.default.createElement("div", { style: { position: "absolute", top: "14px" } },
                    react_1.default.createElement("p", { style: {
                            color: "#1E1E1E",
                            fontSize: "16px",
                            whiteSpace: "nowrap",
                        } },
                        leftCapText,
                        react_1.default.createElement("span", { style: { display: "block" } }, SoftCap))))),
            rightCapText && (react_1.default.createElement("div", { style: {
                    position: "absolute",
                    top: "9.9%",
                    left: rightCap ? "".concat(rightCap, "%") : "80%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                } },
                react_1.default.createElement("div", { style: {
                        width: "2px",
                        height: "18px",
                        backgroundColor: "rgba(69, 76, 84, 0.30)",
                        marginBottom: "2px",
                    } }),
                react_1.default.createElement("div", { style: { position: "absolute", top: "14px" } },
                    react_1.default.createElement("p", { style: {
                            color: "#1E1E1E",
                            fontSize: "16px",
                            whiteSpace: "nowrap",
                        } },
                        rightCapText,
                        react_1.default.createElement("span", { style: { display: "block" } }, hardCap)))))))) : (react_1.default.createElement("div", { style: {
            minWidth: "280px",
            backgroundColor: "#fff",
            padding: "12px 12px",
            margin: "6px",
            borderRadius: "8px",
        } },
        react_1.default.createElement("p", { style: { color: "black" } }, "Total Value should not be greater than inital value.")))));
};
exports.ProgressBar = ProgressBar;
